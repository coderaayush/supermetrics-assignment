import { postsData } from "../common/postsData";
import { filterPostByWeekNumber } from "../utils/filters";
import { config } from "../config";
import { IPost, IPostsUsers } from "../interfaces/posts";
import { IStats, IStatsPerMonth } from "../interfaces/stats";

export function populateStatsForPostsData() {
    
    //Populate posts by month
    let months = config.filterMonths;
    let postsPerMonth = [];
    for (let month of months) {
        let { startDate, endDate, name } = month;
        let thisMonthData = postsData.filter(x => x.created_time >= startDate && x.created_time <= endDate);
        postsPerMonth.push({name, data: thisMonthData});
    }

    let weeksData = filterPostByWeekNumber(postsData);
    let statsPerMonth: IStatsPerMonth[] = [];

    for (let monthStat of postsPerMonth) {
        let uniqueUsersData: IPostsUsers = {};
        let averageCount = 0;
        let longestPostCount = 0;
        let longestPost: IPost;

        for (let stat of monthStat.data) {
            if (stat.character_count > longestPostCount) {
                longestPostCount = stat.character_count;
                longestPost = stat;
            }

            averageCount = averageCount + stat.character_count;

            let postCountByUser = 1;
            if (uniqueUsersData && uniqueUsersData[stat.from_id]) {
                postCountByUser = ++uniqueUsersData[stat.from_id]
            }

            uniqueUsersData[stat.from_id] = postCountByUser;
        }

        let numberOfUsersThisMonth = Object.keys(uniqueUsersData).length;
        let totalPostsThisMonth = Object.values(uniqueUsersData).reduce((a, b) => a + b);
        let statOutputThisMonth:IStatsPerMonth = {
            month: monthStat.name,
            average_character_length_of_posts: parseFloat((averageCount/monthStat.data.length).toFixed(1)),
            longest_post_by_character: longestPost,
            average_number_of_posts_per_user_this_month: parseFloat((totalPostsThisMonth/numberOfUsersThisMonth).toFixed(1))     
        };
        statsPerMonth.push(statOutputThisMonth);
    }

    const outputStats:IStats = {
        per_month_data: statsPerMonth,
        weeks_data: weeksData
    }

    return outputStats;
}