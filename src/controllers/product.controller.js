import productService from "../services/product.service.js";

export const getProducts = async (req, res) => {
  const products = await productService.findAll();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productService.findById(id);
  res.json(product);
};

export const createProduct = async (req, res) => {
  const { name, description, stock, price } = req.body;
  const product = await productService.save({
    name,
    description,
    stock,
    price,
  });
  res.json(product);
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, stock, price } = req.body;
  const updatedProduct = await productService.update(id, {
    name,
    description,
    stock,
    price,
  });
  res.json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = productService.deleteById(id);
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
