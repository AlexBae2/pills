import {Controller, Get, Post, Body, Param, Delete, Res, HttpStatus} from '@nestjs/common';
import { PillsService } from './pills.service';
import { CreatePillDto } from './dto/create-pill.dto';
import { Pills } from './pills.schema';
import { Response } from 'express';

@Controller('pills')
export class PillsController {
    constructor(private readonly pillsService: PillsService) {}

    @Post()
    async create(@Body() createPillDto: CreatePillDto): Promise<Pills> {
        return this.pillsService.create(createPillDto);
    }

    @Get(':userId')
    async findAllByUserId(@Param('userId') userId: string): Promise<Pills[]> {
        return this.pillsService.findByUserId(userId);
    }

    @Delete(':pillsId')
    async deletePill(@Param('pillsId') pillsId: string,  @Res() res: Response): Promise<void> {
        const isDeleted =  await this.pillsService.deleteById(pillsId);
        if (isDeleted) {
            res.status(HttpStatus.OK).json({ message: 'Pill deleted successfully' });
        } else {
            res.status(HttpStatus.NOT_FOUND).json({ message: 'Pill not found' });
        }
    }
}
