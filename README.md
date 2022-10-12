# 블록 탐색기 (Block explorer)
  
<div align=center>
  <h1>
    🔨 Tech Stack
  </h1>
  <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=black">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/ReduxSaga-999999?style=for-the-badge&logo=redux%20saga&logoColor=white">
  
</div>

#### Project nickname : Gyul Scan 🍊
#### Project execution period : 2022.07.04 ~ 22.07.11

## Description

블록 체인 탐색기는 API와 블록 체인 노드를 사용하여 블록 체인에서 다양한 데이터를 가져온 다음 데이터베이스를 사용하여 검색된 데이터를 정렬하고 검색 가능한 형식으로 사용자에게 데이터를 제공한다. 사용자는 블록 체인 탐색기를 사용해 최근에 채굴 된 블록 또는 블록 체인에서 최근에 수행 된 트랜잭션에 대한 데이터를 검색하고 탐색 할 수 있다.

<img width="90%" src="https://user-images.githubusercontent.com/99451642/195080360-a7b3f4a4-4dd2-40fe-b725-5c5b41abe1f7.gif"/>

## Step 1

```
cd back
npm install

cd front
npm install
```

Or

```
cd back
npm i

cd front
npm i
```

## Step 2 

```
cd back
```

```
.env
```

```
vi .env
```

```
DB_HOST = 127.0.0.1
DB_USER = 'your_mysql_id'
DB_PASSWORD = 'your_mysql_id'
DB_DATABASE = 'your_database_name'

```

Or

back 디렉토리 안에 .env 파일을 생성해 준 뒤

```
DB_HOST = 127.0.0.1
DB_USER = 'your_mysql_id'
DB_PASSWORD = 'your_mysql_id'
DB_DATABASE = 'your_database_name'

```
를 입력 후 저장해준다.


**DB스키마 파일 위치: back/DB/DB.sql

## Step 3

locahost:8545 포트로 프라이빗 네트워크를 연결한다.
간단히 truffle 테스트 네트워크를 사용해도 된다.

## Step 4

```
cd front
```

```
npm run start
```

다른 터미널 Open

```
cd front
```

```
npm run start
```
