import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import {PillsService} from "../pills/pills.service";

@Injectable()
export class TasksService {
    constructor(private readonly pillsService: PillsService) {}

    @Cron('*/10 * * * * *')
    handleCron() {
        this.pillsService.checkALlPills();
    }
}
