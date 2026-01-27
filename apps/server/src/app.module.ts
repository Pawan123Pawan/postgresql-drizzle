import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { auth } from './auth/auth';
import { AuthModule } from '@thallesp/nestjs-better-auth';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, AuthModule.forRoot({ auth })],
  controllers: [],
  providers: [],
})
export class AppModule {}
