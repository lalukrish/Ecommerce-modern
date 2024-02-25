import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "./dbConnect";
import UserModel from "./models/userModel";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";

export const config = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          type: "email",
        },
        password: { type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();
        if (credentials === null) {
          console.log("Credentials are null");
          return null;
        }
        const user = await UserModel.findOne({ email: credentials.email });
        console.log("User found:", user);
        if (user) {
          const isMatch = await bcrypt.compare(
            credentials.password as string,
            user.password
          );
          console.log("Password match:", isMatch);
          if (isMatch) {
            return user;
          }
        }
        console.log("Authentication failed");
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/signin",
    newUser: "/register",
    error: "/signin",
  },
  callbacks: {
    authorized({ request, auth }: any) {
      const protectedPaths = [
        /\/shipping/,
        /\/payment/,
        /\/place-order/,
        /\/profile/,
        /\/order\/(.*)/,
        /\/admin/,
      ];
      const { pathname } = request.nextUrl;
      if (protectedPaths.some((p) => p.test(pathname))) return !!auth;
      return true;
    },
    async jwt({ user, trigger, session, token }: any) {
      if (user) {
        token.user = {
          _id: user._id,
          email: user.email,
          name: user.name,
          isAdmin: user.isAdmin,
        };
      }
      if (trigger === "update" && session) {
        token.user = {
          ...token,
          user,
          email: session.user.email,
          name: session.user.name,
        };
      }
      return token;
    },
    session: async ({ session, token }: any) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(config);
