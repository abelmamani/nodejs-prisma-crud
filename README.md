# 🛠️ Node.js + Prisma + MySQL – Simple Product CRUD
A simple CRUD API using Express, Prisma ORM, and MySQL to manage products.

## 📦 Product Schema
```ts
model Product {
  id          Int     @id @default(autoincrement())
  name        String
  description String?
  stock       Int     @default(0)
  price       Float
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## ⚙️ Technologies Used
* Express.js – Web framework for Node.js
* Prisma – Type-safe ORM for database access
* MySQL – Relational database

## 🔧 Environment Setup
Create a .env file in the root directory and add your MySQL database connection string:

```bash
DATABASE_URL="mysql://<username>:<password>@localhost:3306/<database>"
```

## 🚀 Getting Started

### 1. Install dependencies:
```bash
npm install
```
## 2. Generate Prisma client and push schema to database
```bash
npx prisma migrate dev --name init
```

### 3. Start the development server:
```bash
npm run dev
```

## 📖 API Endpoints

| Method | Endpoint        | Description          |
| ------ | --------------- | -------------------- |
| GET    | `/products`     | Get all products     |
| GET    | `/products/:id` | Get product by ID    |
| POST   | `/products`     | Create new product   |
| PUT    | `/products/:id` | Update product by ID |
| DELETE | `/products/:id` | Delete product by ID |
