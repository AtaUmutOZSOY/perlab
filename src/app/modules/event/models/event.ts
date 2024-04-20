import { NewsFeed } from "../../announcement/models/news-feed";

export interface Event extends NewsFeed{
    eventTime:Date
}