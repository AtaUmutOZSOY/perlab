import { GraduateEnums } from "../../guest/enums/graduate-enums";

export interface CreateNewPersonRequestDto {
    firstName:string,
    middleName?:string,
    lastName:string,
    graduateTypeEnum:GraduateEnums,
    graduateSchoolName:string,
    researchGateUrl:string,
    linkedInUrl:string,
    orcidUrl:string,
    visualRank:number,
    base64String: string;
}
