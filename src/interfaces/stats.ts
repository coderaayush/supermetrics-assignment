import { IPost } from './posts';

export interface IStats {
    per_month_data: IStatsPerMonth[],
    weeks_data: IStatsPerWeek[] 
}

export interface IStatsPerMonth {
    month: string,
    average_character_length_of_posts: number,
    longest_post_by_character: IPost,
    average_number_of_posts_per_user_this_month: number
}

export interface IStatsPerWeek {
    total_posts: number,
    week:number
}
