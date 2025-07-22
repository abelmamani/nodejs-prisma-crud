import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const productService = {
    findAll: async () => {
        const products = await prisma.product.findMany();
        return products;
    },
    findById: async (id) => {
        const product = await prisma.product.findUnique({where: { id: Number(id) }});
        return product;
    },
    save: async (product) => {
        const savedProduct = await prisma.product.create({data: product});
        return savedProduct;
    },
    update: async (id, product) => {
        const updatedProduct = await prisma.product.update({where: { id: Number(id) }, data: product});
        return updatedProduct;
    },

    deleteById: async (id) => {
        const deletedProduct = await prisma.product.delete({where: { id: Number(id) }});
        return deletedProduct;
    }
};

export default productService;