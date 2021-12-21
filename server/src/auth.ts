import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication';
import { LocalStrategy } from '@feathersjs/authentication-local';

const auth = (app: any) => {
    const authentication = new AuthenticationService(app);
  
    authentication.register('jwt', new JWTStrategy());
    authentication.register('local', new LocalStrategy());
  
    app.use('/authentication', authentication);
};

export default auth;