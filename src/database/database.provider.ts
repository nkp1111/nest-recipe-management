import * as mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';

export const databaseProvider = [
  {
    provide: 'DATABASE_MONGO',
    useFactory: (configService: ConfigService): Promise<typeof mongoose> => {
      return mongoose.connect(configService.get('DATABASE_URL')!);
    },
    inject: [ConfigService],
  },
];
