import { NewsFeedEnums } from "../../guest/enums/news-feed-enums";

export interface CreateNewsFeedRequestDto {
    title:string,
    description:string,
    eventTime:Date,
    eventLink:string,
    newsFeedType:NewsFeedEnums
}
