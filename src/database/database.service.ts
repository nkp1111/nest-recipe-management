import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import * as mongoose from 'mongoose';

@Injectable()
export class DatabaseService {
  constructor(
    @Inject('DatabaseConnection') private readonly mongoDb: typeof mongoose,
  ) {}

  isConnected(): boolean {
    return this.mongoDb.connection.readyState === 1;
  }

  getConnection() {
    const mongoConnected = this.isConnected();
    if (!mongoConnected) {
      throw new InternalServerErrorException('Database not connected');
    }
    return this.mongoDb;
  }
}
