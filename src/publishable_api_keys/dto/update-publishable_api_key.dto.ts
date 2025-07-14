import { PartialType } from '@nestjs/mapped-types';
import { CreatePublishableApiKeyDto } from './create-publishable_api_key.dto';

export class UpdatePublishableApiKeyDto extends PartialType(CreatePublishableApiKeyDto) {}
