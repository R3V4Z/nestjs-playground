import { Test, TestingModule } from '@nestjs/testing';
import { PublishableApiKeysService } from './publishable_api_keys.service';

describe('PublishableApiKeysService', () => {
  let service: PublishableApiKeysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublishableApiKeysService],
    }).compile();

    service = module.get<PublishableApiKeysService>(PublishableApiKeysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
