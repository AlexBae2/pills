import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {SubscriptionSchema} from "./notifications.schema";
import {NotificationsController} from "./notifications.controller";
import {NotificationsService} from "./notifications.service";
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Subscription', schema: SubscriptionSchema }]),
  ],
  providers: [NotificationsService],
  controllers: [NotificationsController],
})
export class NotificationsModule {}
