import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { PublishableApiKeysService } from '../publishable_api_keys/publishable_api_keys.service';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(
    private readonly publishableApiKeyService: PublishableApiKeysService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const key = request.headers['x-api-key'];

    const match = await this.publishableApiKeyService.findOne({
      where: { key },
    });

    if (!match || !key) return false;

    return true;
  }
}
