// This is the interface for the message data
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
class GameService {
    messages: Message[] = [];
    state: GameState = {};

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

export default GameService;