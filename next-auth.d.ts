// next-auth.d.ts
import NextAuth, { DefaultSession, DefaultJWT } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string; // Add name property
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    name: string; // Add name property
  }
}
