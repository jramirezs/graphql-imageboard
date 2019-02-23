cd backend-server/
npm install
docker-compose -f ./prisma/docker-compose.yml up -d
cp .env.example .env
npm run deploy

cd ../

cd web-server/
npm install