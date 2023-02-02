import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

ConfigModule.forRoot();

@Module({
  imports: [
    //Have to link all modules together
    ProductsModule,
    ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` }),
    MongooseModule.forRoot(
      process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD),
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
