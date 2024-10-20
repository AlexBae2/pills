import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PillsModule } from './pills/pills.module';
import { NotificationsModule } from './notifications/notifications.module';
import {ConfigModule} from "@nestjs/config";
import { TasksService } from './tasks/tasks.service';
import {ScheduleModule} from "@nestjs/schedule";
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    MongooseModule.forRoot(
        `mongodb://localhost:27017/push-notifications`,
    ),
    PillsModule,
    NotificationsModule,
    ScheduleModule.forRoot(),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
