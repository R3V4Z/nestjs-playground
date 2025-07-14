import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PublishableApiKeysModule } from 'src/publishable_api_keys/publishable_api_keys.module';

@Module({
  imports: [PublishableApiKeysModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
