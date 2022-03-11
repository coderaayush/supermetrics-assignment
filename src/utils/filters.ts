import { config } from "../config";
import { IStatsPerWeek } from "../interfaces/stats";

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function filterPostByWeekNumber(posts) {
    let startDate = config.filterMonths.find(x => x.name === 'September').startDate;
    let endDate = config.filterMonths.find(x => x.name === 'March').endDate;
    let filterByWeek = [];
    let weekNumber = 1;
    while(startDate <= endDate) {
        let weekEndDate = addDays(startDate, 7);
        let weekData:IStatsPerWeek = {
            week: weekNumber,
            total_posts: posts.filter(x => x.created_time >= startDate && x.created_time <= weekEndDate).length
        };
        filterByWeek.push(weekData);
        startDate = weekEndDate
        weekNumber++;
    }
    return filterByWeek;
}

export { filterPostByWeekNumber };
