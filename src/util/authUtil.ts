import { verifyToken, signAccessToken, signRefreshToken } from "./jwt";

export class AuthUtility {
  private readonly _accessSecret = process.env.ACCESS_TOKEN || "Amal";
  private readonly _refreshSecret = process.env.REFRESH_TOKEN || "Amal";

  verifyAccessToken(token: string): { id: string; role: string } {
    try {
      const decoded = verifyToken(token, this._accessSecret);
      return { id: decoded.clientId, role: decoded.role };
    } catch (error) {
      throw new Error("Invalid access token");
    }
  }

  verifyRefreshToken(token: string): { id: string; role: string } {
    try {
      const decoded = verifyToken(token, this._refreshSecret);
      return { id: decoded.clientId, role: decoded.role };
    } catch (error) {
      throw new Error("Invalid refresh token");
    }
  }

  generateTokens(userId: string, role: string): { accessToken: string; refreshToken: string } {
    const payload = { id: userId, role };

    const accessToken = signAccessToken(payload, this._accessSecret);
    const refreshToken = signRefreshToken(payload, this._refreshSecret);

    return { accessToken, refreshToken };
  }
}
