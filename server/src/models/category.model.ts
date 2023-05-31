import { Schema, model } from "mongoose";
export interface CategoryI {
  name: string;
}
const categoriesSchema = new Schema<CategoryI>({
  name: {
    type: String,
    required: true,
  },
});
const Category = model("category", categoriesSchema);
export default Category;
