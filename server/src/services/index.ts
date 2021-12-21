import { Application } from '../declarations';
import usersService from './users/users.service';
import gamesService from './games/games.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
    app.configure(usersService);
    app.configure(gamesService);
}
