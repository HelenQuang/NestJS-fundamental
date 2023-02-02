import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private productsArr: Product[] = [];

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async addNewProduct(title: string, description: string, price: number) {
    const newProduct = new this.productModel({ title, description, price });
    await newProduct.save();
    return newProduct;
  }

  async getAllProducts() {
    const products = await this.productModel.find();
    return products;
  }

  async getSingleProduct(productId: string) {
    const product = await this.productModel.findById(productId);
    if (!product) {
      throw new NotFoundException('Could not find any product!');
    }
    return product;
  }

  async updateProduct(
    productId: string,
    title: string,
    description: string,
    price: number,
  ) {
    const product = await this.productModel.findByIdAndUpdate(productId, {
      title,
      description,
      price,
    });
    if (!product) {
      throw new NotFoundException('Could not find any product!');
    }
    return product;
  }

  async deleteProduct(productId: string) {
    await this.productModel.findByIdAndDelete(productId);
    return;
  }
}
