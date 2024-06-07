import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SubModule } from './sub/sub.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, SubModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
