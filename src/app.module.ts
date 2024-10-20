import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PillsController } from './pills/pills.controller';
import { PillsModule } from './pills/pills.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
        `mongodb://localhost:27017/push-notifications`,
    ),
    PillsModule,
  ],
  controllers: [AppController, PillsController],
  providers: [AppService],
})
export class AppModule {}
