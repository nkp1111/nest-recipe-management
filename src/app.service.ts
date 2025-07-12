import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
  constructor(private readonly dbService: DatabaseService) {}

  getHello(): string {
    return 'I am alive!!!';
  }

  checkDb() {
    console.log('checking database connection...');
    const connection = this.dbService.getConnection();
    const dbName = connection.connection.name;
    return dbName;
  }
}
