import { NewsFeedEnums } from "../enums/news-feed-enums";

export interface NewsFeed {
    id:number,
    newsFeedType:NewsFeedEnums,
    isNew:boolean;
    isImportant:boolean;
    title:string,
    description:string,
    link:string,
    createdTime:Date
}
