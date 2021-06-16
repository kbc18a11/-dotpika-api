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
```
docker exec -it db bash

cd sql/table

mysql -u root -p

source 展開したいテーブルのsqlファイル
```
## マイグレーションファイル作成
```
npx ts-node node_modules/.bin/typeorm migration:generate -n ファイル名
```
