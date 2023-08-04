import { configureStore } from "@reduxjs/toolkit";

import adminProfileSlice from "../features/adminProfileSlice";
import adminPostSlice from "../features/adminPostSlice";

export const store = configureStore({
  reducer: {
    profile: adminProfileSlice,
    post: adminPostSlice,
  },
});
