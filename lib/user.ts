import bcrypt from "bcryptjs";

const user = {
  users: [
    {
      name: "john",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("12345"),
      isAdmin: true,
    },
  ],
};

export default user;
