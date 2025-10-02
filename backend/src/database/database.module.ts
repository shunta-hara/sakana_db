import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USER || 'user',
      password: process.env.DB_PASSWORD || 'pass',
      database: process.env.DB_DATABASE || 'sakana_db',
      autoLoadEntities: true,
      synchronize: true, // 本番はfalse推奨
      timezone: '+09:00',
    }),
  ],
})
export class DatabaseModule {}
