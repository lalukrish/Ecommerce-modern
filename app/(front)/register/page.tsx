import { Metadata } from "next";
import Form from "./Form";

export const metadata: Metadata = {
  title: "Sign up",
};

export default async function Register() {
  return <Form />;
}
