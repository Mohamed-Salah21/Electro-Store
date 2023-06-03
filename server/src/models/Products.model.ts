import { Schema, model } from "mongoose";
// import joi from "joi"; 

export interface ProductI {
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
  image: string;
  price: number;
  category: Schema.Types.ObjectId;
}
const productsSchema = new Schema<ProductI>({
  title_en: {
    type: String,
    required: true,
  },
  description_en: {
    type: String,
    required: true,
  },
  title_ar: {
    type: String,
    required: true,
  },
  description_ar: {
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
