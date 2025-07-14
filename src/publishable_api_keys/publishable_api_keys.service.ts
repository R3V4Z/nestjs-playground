import { Injectable } from '@nestjs/common';
import { CreatePublishableApiKeyDto } from './dto/create-publishable_api_key.dto';
import { UpdatePublishableApiKeyDto } from './dto/update-publishable_api_key.dto';

@Injectable()
export class PublishableApiKeysService {
  create(createPublishableApiKeyDto: CreatePublishableApiKeyDto) {
    return 'This action adds a new publishableApiKey';
  }

  findAll() {
    return `This action returns all publishableApiKeys`;
  }

  findOne(id: number) {
    return `This action returns a #${id} publishableApiKey`;
  }

  update(id: number, updatePublishableApiKeyDto: UpdatePublishableApiKeyDto) {
    return `This action updates a #${id} publishableApiKey`;
  }

  remove(id: number) {
    return `This action removes a #${id} publishableApiKey`;
  }
}
