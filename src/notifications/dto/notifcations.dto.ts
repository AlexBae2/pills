export class CreateSubscriptionDto {
    userId: string;
    subscription: {
        endpoint: string;
        keys: {
            p256dh: string;
            auth: string;
        };
    };
}
