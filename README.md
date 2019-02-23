# GraphQL Imageboard

My implementation/playground using a full-stack Node + React + GraphQL creating an imageboard (Reddit, 4Chan like).

Tech stack:

- Next.js (SSR React server)
- Styled-components (Styling implementation)
- GraphQL Yoga (Service server layer)
- Prisma (Data server layer) over a Postgres database
- Cloudinary (Cloud service for images hosting and transformation)

## Installation

Project is a monorepo between the backend server (Prisma + GraphQL Yoga) and the frontend server (Next.js).
Default configurations will make the project run right away.

There's also an `install.sh` you can execute to install all dependencies. These are the steps for installing each layer independently:

### Backend

```bash
cd backend-server
npm install

# Initiate Prisma server and Postgres DB
docker-compose -f ./prisma/docker-compose.yml up -d

# Deploy database schema and initial seed
npm run deploy

# Run the server
cp .env.example .env
npm start # or 'npm run dev' for dev mode
```

With these steps, you can go to the GraphQL playground running at <http://localhost:4466/>.

### Frontend

```bash
cd web-server
npm install

# Run the server
npm build # or 'npm run dev' for dev mode
npm start
```

Go to <http://localhost:7000/> for checking the webapp.

## TODOs

My desired list of features or infrastructure topics I would like to try with more time:

### Infrastructure/housekeeping

- [ ] Make it production ready
- [ ] Deploy somewhere (Netlify, Heroku, DO etc.)
- [ ] Use docker for dev installation
- [ ] Testing for frontend components and backend queries and mutations
- [ ] Fully pledged error and not found pages

#### Features

- [ ] Overall more unique styling
- [ ] Theming per board
- [ ] Reply to post capability (model already implemented)
- [ ] Progress spinners and bars for page transition
- [ ] Toast confirmation (?)
