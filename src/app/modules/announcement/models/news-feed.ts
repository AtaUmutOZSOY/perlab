import { NewsFeedTypeEnum } from "../enums/news-feed-type-enums";

export interface NewsFeed {
    newsFeedType:NewsFeedTypeEnum,
    title:string,
    description:string,
    link?:string,
    isNew:boolean,
    isImportant:boolean,
    createdTime:Date
}
