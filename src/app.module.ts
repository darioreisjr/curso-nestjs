import { Module } from '@nestjs/common';
import { UserController } from './users/user.controller';
import { ProductController } from './products/product.controller';

@Module({
  imports: [],
  controllers: [UserController, ProductController],
  providers: [],
})
export class AppModule {}
