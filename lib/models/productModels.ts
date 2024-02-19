import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String },

    category: { type: String },

    image: { type: String },

    price: { type: Number, required: true },

    brand: { type: String },
    rating: { type: Number },
    numOfReviews: { type: Number },
    countInStock: { type: Number },
    description: { type: String },
    isFeatured: { type: Boolean, default: false },
    banner: { type: String },
  },
  {
    timestamps: true,
  }
);

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default ProductModel;

export type Product = {
  _id?: string;
  name: string;
  slug: string;
  image: string;
  banner?: string;
  price: number;
  brand: string;
  description: string;
  category: string;
  rating: number;
  numOfReviews: number;
  countInStock: number;
  isFeatured: boolean;
  colors?: [];
  sizes?: [];
};
