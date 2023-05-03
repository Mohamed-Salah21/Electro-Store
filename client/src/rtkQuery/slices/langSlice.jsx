import { createSlice } from "@reduxjs/toolkit";
const languageSlice = createSlice({
  name: "languageSlice",
  initialState: "en",
  reducers: {
    changeLanguage: (state) => {
      localStorage.lang === "en"
        ? localStorage.setItem("lang", "ar")
        : localStorage.setItem("lang", "en");
      return (state = localStorage.getItem("lang"));
    },
  },
});
export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
