import { Module } from '@nestjs/common';
import { PillsService } from './pills.service';
import {PillsController} from "./pills.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {PillsSchema} from "./pills.schema";
import {NotificationsService} from "../notifications/notifications.service";
import {SubscriptionSchema} from "../notifications/notifications.schema";
import {TasksService} from "../tasks/tasks.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Subscription', schema: SubscriptionSchema }]),
    MongooseModule.forFeature([{ name: 'Pills', schema: PillsSchema }]),
  ],
  controllers: [PillsController],
  providers: [PillsService, NotificationsService, TasksService ]
})
export class PillsModule {}
