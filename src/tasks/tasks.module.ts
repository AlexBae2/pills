import { Module } from '@nestjs/common';
import {PillsService} from "../pills/pills.service";
import {TasksService} from "./tasks.service";

@Module({})
export class TasksModule {
    providers: [TasksService, PillsService]
}
