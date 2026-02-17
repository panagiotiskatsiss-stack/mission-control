import { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isOnLoginPage = request.nextUrl.pathname.startsWith("/login");

      if (isOnLoginPage) {
        return !isLoggedIn;
      }

      return isLoggedIn;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const password = process.env.MISSION_CONTROL_PASSWORD;

        if (!password) {
          console.error("MISSION_CONTROL_PASSWORD not set");
          return null;
        }

        if (credentials?.password === password) {
          return {
            id: "1",
            name: "Mission Control User",
            email: "user@mission-control.local",
          };
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
