# dotpika-api
## ローカル起動
```
npm run start:dev
```

## Docker-compose
### ローカル
```
docker-compose --env-file ./env/development.env up
```

## ローカルのマイグレーション
```
npx ts-node node_modules/.bin/typeorm migration:run 
```
