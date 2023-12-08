import NextAuth from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
const handler = NextAuth(authOptions);