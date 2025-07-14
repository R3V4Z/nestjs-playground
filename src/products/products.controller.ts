import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiKeyGuard } from 'src/guards/apiKey.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(ApiKeyGuard)
  @Get()
  findAll() {
    return this.productsService.findAll();
  }
}
