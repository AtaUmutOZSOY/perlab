import { Research } from "./research";

export interface Project extends Research {
    projectManagerFullName:string,
    deadLine:Date,
    startDate:Date,
}
