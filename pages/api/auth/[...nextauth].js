import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const callbacks = {
  jwt: async ({token, user}) => {
    if (user) {
      token.accessToken = user.data.accessToken;
      token.refreshToken = user.data.refreshToken;

      return Promise.resolve(token);
    }
  },
  session: async ({session, token}) => {
    session.accessToken = token.accessToken;
    session.refreshToken = token.refreshToken;

    return Promise.resolve(session);
  },
};

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {label: "Username", type: "text", placeholder: "jsmith"},
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials, req) {
        console.log(credentials, req);
        return JSON.stringify(credentials);
      },
    }),
  ],

  // callbacks,
  // pages: {
  //   signIn: "/authpages/login",
  //   signOut: "/authpages/logout",
  // },
};

export default NextAuth(authOptions);
