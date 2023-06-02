import { Schema, model } from "mongoose";
// import joi from "joi"; 

export interface ProductI {
  title: string;
  description: string;
  image: string;
  price: number;
  category: Schema.Types.ObjectId;
}
const productsSchema = new Schema<ProductI>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
  },
});
const Product = model("product", productsSchema);
export default Product;
