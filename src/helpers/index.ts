import crypto from 'crypto';

const SECRET = 'REST-API'; // Replace 'YOUR_SECRET_KEY' with your actual secret key

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};
