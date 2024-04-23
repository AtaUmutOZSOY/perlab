import { SafeUrl } from "@angular/platform-browser";
import { GraduateEnums } from "../enums/graduate-enums";

export interface Person {
    id:string,
    firstName:string,
    middleName?:string,
    lastName:string,
    fullName:string,
    graduateTypeEnum:GraduateEnums,
    graduateSchoolName:string,
    researchGateUrl:string,
    linkedInUrl:string,
    orcidUrl:string,
    personImageId:string,
    visualRank:number,
    personImageBase64String:string
}
