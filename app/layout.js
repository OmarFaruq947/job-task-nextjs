"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>{children}<ToastContainer /></body> 
      </html>
    </Provider>
  );
}
