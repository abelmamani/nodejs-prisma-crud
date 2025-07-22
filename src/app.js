import express from "express";
import productRoute from "./routes/product.route.js";

const app = express();

app.use(express.json());
app.use('/api/products', productRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});