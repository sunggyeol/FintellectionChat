"use client";

import { ChatWindow } from "../app/components/ChatWindow";
import { ToastContainer } from "react-toastify";

import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <ToastContainer />
      <ChatWindow
        apiBaseUrl={
          process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8080"
        }
        titleText="Fintellection Chat"
        placeholder="Your personal AI financial analyst"
      ></ChatWindow>
    </ChakraProvider>
  );
}
