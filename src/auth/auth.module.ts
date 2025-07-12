import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from './auth.schema';
import { DatabaseModule } from 'src/database/database.module';

const mongooseModules = MongooseModule.forFeature([
  { name: 'Auth', schema: AuthSchema },
]);

@Module({
  imports: [mongooseModules, DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
