import { Taskstatus } from "../task.model";

export class GetTasksFilterDto {
    status: Taskstatus;
    search: string;
}