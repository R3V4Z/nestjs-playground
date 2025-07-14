import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PublishableApiKeysService } from './publishable_api_keys.service';
import { CreatePublishableApiKeyDto } from './dto/create-publishable_api_key.dto';
import { UpdatePublishableApiKeyDto } from './dto/update-publishable_api_key.dto';

@Controller('publishable-api-keys')
export class PublishableApiKeysController {
  constructor(private readonly publishableApiKeysService: PublishableApiKeysService) {}

  @Post()
  create(@Body() createPublishableApiKeyDto: CreatePublishableApiKeyDto) {
    return this.publishableApiKeysService.create(createPublishableApiKeyDto);
  }

  @Get()
  findAll() {
    return this.publishableApiKeysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publishableApiKeysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePublishableApiKeyDto: UpdatePublishableApiKeyDto) {
    return this.publishableApiKeysService.update(+id, updatePublishableApiKeyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publishableApiKeysService.remove(+id);
  }
}
