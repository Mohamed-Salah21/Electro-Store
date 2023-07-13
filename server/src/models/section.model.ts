import { model, Schema } from "mongoose";
import { sectionI } from "../interfaces/sections.interface";

const sectionSchema = new Schema<sectionI>({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  sectionType: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});
export const Section = model("section", sectionSchema);
