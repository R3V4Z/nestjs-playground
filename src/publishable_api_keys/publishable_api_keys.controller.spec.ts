import { Test, TestingModule } from '@nestjs/testing';
import { PublishableApiKeysController } from './publishable_api_keys.controller';
import { PublishableApiKeysService } from './publishable_api_keys.service';

describe('PublishableApiKeysController', () => {
  let controller: PublishableApiKeysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublishableApiKeysController],
      providers: [PublishableApiKeysService],
    }).compile();

    controller = module.get<PublishableApiKeysController>(PublishableApiKeysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
