import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { Taskstatus } from "../task.model";

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses = [
        Taskstatus.OPEN,
        Taskstatus.IN_PROGRESS,
        Taskstatus.DONE
    ];
    
    transform(value: any) {
        value = value.toUpperCase();

        if(!this.isStatusValid(value)) {
            throw new BadRequestException(`"${value}" is an invalid status`);
        }
        return value;
    }

    private isStatusValid(status: any) {
        const idx = this.allowedStatuses.indexOf(status);
        return idx !== -1;
    }
}