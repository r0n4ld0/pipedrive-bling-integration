# Pipedrive and Bling - Integration API

## Requirements

- [x] Find deals on Pipedrive with won status.

- [x] Create an order on Bling with the deals found.

- [x] Summarize orders created by day and total.

# Getting Started

## Prerequisites
Account must be created on Pipedrive, Bling and MongoDB Atlas platforms.

- [Pipedrive](https://www.pipedrive.com)
- [Bling](https://www.bling.com.br)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### 1. Clone repository
```
git clone https://github.com/r0n4ld0/pipedrive-bling-integration.git
```
### 2. Install NPM packages
```
npm install
```
### 3. Environment variables
```
Copy `.env.example` file to `.env` and fill the variables
```
### 4. How to run
```
npm start
```

## Endpoints
- `POST /import` : Import deals from Pipedrive to create order into Bling
- `GET /summary` : Get daily summary of orders

## Contact
Ronaldo Scheffer - r0n4ld0@gmail.com
