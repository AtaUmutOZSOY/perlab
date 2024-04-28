import { Author } from "./author";

export interface Publication {
    id:string,
    title:string,
    journalName:string,
    authors:Author[],
    publishedYear:Date,
    doi:string,
    issn:string
}
