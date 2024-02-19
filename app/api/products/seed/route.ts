import data from "@/lib/data";
import dbConnect from "@/lib/dbConnect";
import ProductModel from "@/lib/models/productModels";
import UserModel from "@/lib/models/userModel";
import user from "@/lib/user";
import { NextRequest, NextResponse } from "next/server";
export const GET = async (request: NextRequest) => {
  const products = data;
  const { users } = user;
  await dbConnect();
  await UserModel.deleteMany();
  await UserModel.insertMany(users);

  await ProductModel.deleteMany();
  await ProductModel.insertMany(products);

  return NextResponse.json({
    message: "seeded successfully",
    users,
    products,
  });
};
