import { IsString, IsNumber, Matches, IsDateString } from 'class-validator';

export class CreatePillDto {
    @IsString()
    userId: string

    @IsString()
    name: string;

    @IsNumber()
    quantity: number;

    @Matches(/^\d{2}:\d{2}$/, { message: 'timeOfIntake должен иметь HH:MM format' })
    timeOfIntake: string;

    @IsDateString()
    startDate: string;

    @IsDateString()
    endDate: string;
}
