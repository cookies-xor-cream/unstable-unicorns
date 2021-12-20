# Unstable Unicorns
A reimplementation of the card game unstable unicorns -- I don't own the rights to the game and this is not affiliated with the game in any way.

## Running The Project
In two separate terminals:
```bash
cd server
npm run dev
```

```bash
cd client
npm run start
```

## Contributing
1. Make an issue on the `Issues` tab of the Github repo
2. Make a branch or a fork of the repo
3. Make your necessary changes
4. Open a pull request with your changes
5. Add a reviewer to your pull request
    - Apply the requested changes until it passes review
6. Merge your pull request into the development branch (staging)

## Project Structure
```bash
├── client
│   ├── public  # tags in the head go here
│   └── src     # source-code for the client
└── server
    └── src     # source-code for the server
```

## Stack
- Front End:
    - React
    - Typescript
    - SocketIO

- Back End:
    - NodeJS
    - FeathersJS
    - Typescript
    - SocketIO
