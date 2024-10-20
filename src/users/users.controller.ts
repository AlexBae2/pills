import {
    Controller,
    Post,
    Body,
    Get,
    Param,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Post()
    async createOneUser(
        @Body('userId') userId: string,
    ) {
        const generatedId = await this.usersService.createOneUser(userId);
        return {id: generatedId};
    }
}
