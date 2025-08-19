import jwt, { Secret } from 'jsonwebtoken';

export const verifyToken = (token: string, secret: Secret): any => {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        throw new Error('Token verification failed');
    }
};

export const signAccessToken = (payload: { id: string; role: string }, secret: Secret): string => {
    return jwt.sign(payload, secret, { expiresIn: '15m' });
};

export const signRefreshToken = (payload: { id: string; role: string }, secret: Secret): string => {
    return jwt.sign(payload, secret, { expiresIn: '7d' });
};