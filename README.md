# Unstable Unicorns
A reimplementation of the card game unstable unicorns -- I don't own the rights to the game and this is not affiliated with the game in any way.

## Project Setup
### Installing npm
Install `npm`:
```bash
brew install npm        # macOS
sudo apt install npm    # debian/ubuntu
sudo pacman -S npm      # arch
```

For Windows instructions defer to google.
It's probably a better idea to install `npm` through `nvm` though not necessary.

### Installing yarn
```bash
npm i -g yarn
```

### Installing Dependencies
```bash
git clone git@github.com:cookies-xor-cream/unstable-unicorns.git # clone the repo
```

In two separate terminals:
```bash
cd server
yarn
```

```bash
cd client
npm install
```

## Running The Project
In two separate terminals:
```bash
cd server
yarn dev
```

```bash
cd client
npm run start
```

## Contributing
1. Make an issue on the `Issues` tab of the Github repo
2. Make a branch or a fork of the repo (from `staging`)
3. Make your necessary changes
4. Open a pull request with your changes
5. Add a reviewer to your pull request
    - Apply the requested changes until it passes review
6. Merge your pull request into the development branch (staging)

## Project Structure
This part is unfinished -- message me if you want more details
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
