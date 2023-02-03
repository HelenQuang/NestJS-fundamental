import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
    //private means this argument is automatically stored in an equally named property, readonly means never replace this argument with a new value
  }

  @Post()
  addNewProduct(
    //@Body() to look up in the body parse in request (req.body)
    @Body('title') productTitle: string,
    @Body('description') productDescription: string,
    @Body('price') productPrice: number,
  ) {
    return this.productsService.addNewProduct(
      productTitle,
      productDescription,
      productPrice,
    );
  }

  @Get()
  getAllProducts(
    @Query('title') productTitle: string,
    @Query('price') productPrice: number,
  ) {
    return this.productsService.getAllProducts(productTitle, productPrice);
  }

  @Get(':id')
  getSingleProduct(@Param('id') productId: string) {
    return this.productsService.getSingleProduct(productId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') productId: string,
    @Body('title') productTitle: string,
    @Body('description') productDescription: string,
    @Body('price') productPrice: number,
  ) {
    return this.productsService.updateProduct(
      productId,
      productTitle,
      productDescription,
      productPrice,
    );
  }

  @Delete(':id')
  deleteProduct(@Param('id') productId: string) {
    return this.productsService.deleteProduct(productId);
  }
}
