import { Socket } from "socket.io";

export interface Tokens {
  accessToken: string;
  refreshToken: string;
  message?: string;
}

export interface DecodedToken {
  clientId: string;
  role: string;
}

export interface AuthenticatedSocket extends Socket {
  decoded?: DecodedToken
}