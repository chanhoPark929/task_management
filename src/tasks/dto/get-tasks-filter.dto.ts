import { Taskstatus } from "../task-status.enum";
import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class GetTasksFilterDto {
    @IsOptional()
    @IsIn([Taskstatus.OPEN, Taskstatus.IN_PROGRESS, Taskstatus.DONE])
    status: Taskstatus;

    @IsOptional()
    @IsNotEmpty()
    search: string;
}