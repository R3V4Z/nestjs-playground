import { Controller, Post, Body, UseGuards, Headers } from '@nestjs/common';
import { PublishableApiKeysService } from './publishable_api_keys.service';
import { CreatePublishableApiKeyDto } from './dto/create-publishable_api_key.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('publishable-api-keys')
export class PublishableApiKeysController {
  constructor(
    private readonly publishableApiKeysService: PublishableApiKeysService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Headers() headers) {
    return this.publishableApiKeysService.create(headers.authorization);
  }
}
