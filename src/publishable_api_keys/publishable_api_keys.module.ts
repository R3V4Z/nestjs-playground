import { Module } from '@nestjs/common';
import { PublishableApiKeysService } from './publishable_api_keys.service';
import { PublishableApiKeysController } from './publishable_api_keys.controller';

@Module({
  controllers: [PublishableApiKeysController],
  providers: [PublishableApiKeysService],
})
export class PublishableApiKeysModule {}
