import { Module } from '@nestjs/common';
import { PillsService } from './pills.service';

@Module({
  providers: [PillsService]
})
export class PillsModule {}
