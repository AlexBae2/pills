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
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string,
    ) {
        const generatedId = await this.usersService.createOneUser(
            name,
            email,
            password,
        );
        return {id: generatedId};
    }

    @Get()
    getAllUsers() {
        return this.usersService.getAllUser();
    }
}
