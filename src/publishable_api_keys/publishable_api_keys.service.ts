import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PublishableApiKey } from './entities/publishable_api_key.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PublishableApiKeysService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    @InjectRepository(PublishableApiKey)
    private readonly publishableApiKeysRepository: Repository<PublishableApiKey>,
  ) {}
  async create(token: string) {
    const decoded = this.jwtService.decode(token.split(' ')[1]);

    if (!decoded.sub) {
      throw new UnauthorizedException();
    }

    const key = await this.publishableApiKeysRepository.create({
      key: crypto.randomUUID(),
    });

    const user = await this.usersService.findOne({
      where: { id: decoded.sub },
    });

    if (!user) {
      throw new ForbiddenException();
    }

    key.user = user;

    await this.publishableApiKeysRepository.save(key);

    return key;
  }

  async findOne(where: FindOneOptions): Promise<PublishableApiKey | null> {
    const entry = await this.publishableApiKeysRepository.findOne(where);

    return entry;
  }
}
