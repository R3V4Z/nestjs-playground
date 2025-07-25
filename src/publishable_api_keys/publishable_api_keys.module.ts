import { Module } from '@nestjs/common';
import { PublishableApiKeysService } from './publishable_api_keys.service';
import { PublishableApiKeysController } from './publishable_api_keys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublishableApiKey } from './entities/publishable_api_key.entity';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PublishableApiKey]),
    JwtModule,
    UsersModule,
  ],
  controllers: [PublishableApiKeysController],
  providers: [PublishableApiKeysService],
  exports: [PublishableApiKeysService],
})
export class PublishableApiKeysModule {}
