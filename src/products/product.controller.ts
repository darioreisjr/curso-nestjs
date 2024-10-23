import { Controller, Get } from '@nestjs/common';

@Controller()
export class ProductController {
  @Get('/create')
  helloUser() {
    return 'criar produto!';
  }
}
