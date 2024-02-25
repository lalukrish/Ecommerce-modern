import bcrypt from "bcryptjs";

const user = {
  users: [
    {
      name: "john",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("12345"),
      isAdmin: true,
    },
    {
      name: "john",
      email: "admin1@gmail.com",
      password: bcrypt.hashSync("Test@123"),
      isAdmin: true,
    },
  ],
};

export default user;
