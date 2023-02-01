import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private productsArr: Product[] = [];

  addNewProduct(title: string, description: string, price: number) {
    const newProduct = new Product(
      Math.random().toString(),
      title,
      description,
      price,
    );
    this.productsArr.push(newProduct);
    return [...this.productsArr]; //Should only return a copy
  }

  getAllProducts() {
    return [...this.productsArr]; //Should only return a copy
  }

  getSingleProduct(productId: string) {
    const product = this.findProduct(productId)[0];
    return { ...product };
  }

  updateProduct(
    productId: string,
    title: string,
    description: string,
    price: number,
  ) {
    const [product, index] = this.findProduct(productId);
    const updatedProduct = { ...product };

    if (title) {
      updatedProduct.title = title;
    }
    if (description) {
      updatedProduct.description = description;
    }
    if (price) {
      updatedProduct.price = price;
    }

    this.productsArr[index] = updatedProduct;
    return [...this.productsArr];
  }

  deleteProduct(productId: string) {
    this.productsArr = this.productsArr.filter(
      (product) => product.id !== productId,
    );
    return [...this.productsArr];
  }

  private findProduct(productId: string): [Product, number] {
    const product = this.productsArr.find(
      (product) => product.id === productId,
    );
    const productIndex = this.productsArr.findIndex(
      (product) => product.id === productId,
    );
    if (!product) {
      throw new NotFoundException('Could not find product');
    }

    return [product, productIndex];
  }
}
