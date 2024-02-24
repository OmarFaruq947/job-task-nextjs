"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Provider>
  );
}
