import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

// export class Product {
//   constructor(
//     Add accessor public to access these arguments outside of this class
//     public id: string,
//     public title: string,
//     public description: string,
//     public price: number,
//   ) {}
// }

export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
}
