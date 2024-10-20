import { Controller, Post, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subscription } from './notifications.schema';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly notificationsService: NotificationsService,
    @InjectModel('Subscription')
    private readonly subscriptionModel: Model<Subscription>,
  ) {}

  @Post('subscribe')
  async subscribe(@Body() subscription: Subscription) {
    console.log(subscription)
    const existingSubscription = await this.subscriptionModel.findOne({
      endpoint: subscription.subscription.endpoint,
    });

    if (!existingSubscription) {
      const newSubscription = new this.subscriptionModel(subscription);
      await newSubscription.save();
    }

    return { message: 'Subscription saved successfully!' };
  }
}
