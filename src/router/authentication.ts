import express, { Router } from 'express';

import { login, register} from '../controllers/authentication';
import { random, authentication } from '../helpers';


export default (router: express.Router) => {
    router.post('/auth/register', register);
    router.post('/auth/login', login);
}
