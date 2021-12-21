import { Service, MemoryServiceOptions } from 'feathers-memory';
import { Application } from '../../declarations';

interface Message {
    id: number;
    text: string;
}

interface Move {
    // Data for making a move goes here
}

interface GameState {
    // Data for game state goes here
}

// A messages service that allows to create new
// and return all existing messages
class Games extends Service {
    messages: Message[] = [];
    state: GameState = {};

    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(options: Partial<MemoryServiceOptions>, app: Application) {
        super(options);
    }

    async find () {
        // Just return all our messages
        return this.messages;
    }

    async create (data: any) {
        // The new message is the data text with a unique identifier added
        // using the messages length since it changes whenever we add one
        const message: Message = {
            id: this.messages.length,
            text: data.text
        };

        // Add new message to the list
        this.messages.push(message);
        console.log(data)

        return message;
    }

    async setup(app: any, data: any) {
        // The new message is the data text with a unique identifier added
        // using the messages length since it changes whenever we add one
        console.log("testing backend");
    }
}

export default Games;
