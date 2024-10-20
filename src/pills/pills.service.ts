import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pills } from './pills.schema';
import { CreatePillDto } from './dto/create-pill.dto';
import { NotificationsService } from '../notifications/notifications.service';
import {Subscription} from "../notifications/notifications.schema";

@Injectable()
export class PillsService {
  constructor(
    private readonly notificationsService: NotificationsService,
    @InjectModel('Pills') private pillsModel: Model<Pills>,
    @InjectModel('Subscription')
    private readonly subscriptionModel: Model<Subscription>,
  ) {}

  async create(createPillDto: CreatePillDto): Promise<Pills> {
    const createdPill = new this.pillsModel(createPillDto);
    return createdPill.save();
  }

  async findByUserId(userId: string): Promise<Pills[]> {
    return this.pillsModel.find({ userId }).exec();
  }

  async deleteById(id: string): Promise<boolean> {
    const result = await this.pillsModel.deleteOne({ _id: id }).exec();
    return result.deletedCount > 0;
  }

    async checkPills() {
        const now = new Date();
        const pills = await this.pillsModel.find({
            startDate: { $lte: now.toISOString() },
            endDate: { $gte: now.toISOString() },
        }).exec();

        for (const pill of pills) {
            const currentTime = `${now.getHours()}:${now.getMinutes()}`;
            console.log(currentTime, pill.timeOfIntake)
            if (currentTime === pill.timeOfIntake) {
                const payload = JSON.stringify({
                    title: `Время принимать ${pill.name}`,
                    body: `Принимите ${pill.quantity} ${pill.name}.`,
                });
                console.log(payload)

                const subscriptions = await this.subscriptionModel.find({ userId: pill.userId }).exec();
                for (const subscription of subscriptions) {
                    await this.notificationsService.sendNotification(subscription, payload);
                }
            }
        }
    }
    async checkALlPills(){
        const payload = JSON.stringify({
            title: `Время принимать`,
            body: `Принимите.`,
        });
        console.log(payload)
        const subscriptions = await this.subscriptionModel.find().exec();
        for (const subscription of subscriptions) {
            console.log(subscription)
            await this.notificationsService.sendNotification(subscription, payload);
        }
    }
}
