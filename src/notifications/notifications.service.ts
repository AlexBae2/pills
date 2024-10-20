import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as webPush from 'web-push';
import {Subscription} from "./notifications.schema";
import {CreateSubscriptionDto} from "./dto/notifcations.dto";
import * as process from "process";

@Injectable()
export class NotificationsService {

    constructor(
    ) {
        webPush.setVapidDetails(
            'mailto:pirtxxei@gmail.com',
            process.env.VAPID_PUBLIC_KEY,
            process.env.VAPID_PRIVATE_KEY,
        );
    }
    async sendNotification(subscription: Subscription, payload: string) {
        try {
            const b = await webPush.sendNotification(subscription.subscription, payload);
            console.log(b)
        } catch (error) {
            console.error('Error sending notification:', error);
        }
    }
}
