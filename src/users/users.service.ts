import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
    async createOneUser(userId: string): Promise<User> {
        const createdUser = new this.userModel({ userId });
        return createdUser.save();
    }
}
