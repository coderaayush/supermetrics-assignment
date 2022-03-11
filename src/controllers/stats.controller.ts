import { setRegistrationToken } from "../services/registration.service";
import { registrationToken } from '../common/registrationToken';
import { populateStatsForPostsData } from "../services/stats.service";
import { fetchAndUpdatePostsData } from "../services/posts.service";
import { postsData } from "../common/postsData";

export async function getStats(req, res) {
    try {
        //reset posts data for new call
        postsData.length = 0;

        //check if token exists
        if (registrationToken.sl_token && registrationToken.sl_token.length > 0) {
            await fetchAndUpdatePostsData();
        } else {
            await setRegistrationToken();
            await fetchAndUpdatePostsData();
        }
        
        const stats = populateStatsForPostsData();
        res.send({msg: 'Status populated successfully', data: stats});
    } catch (e) {
        console.log(e);
        if (e.response?.data?.error?.message === 'Invalid SL Token') {
            await setRegistrationToken();
            await fetchAndUpdatePostsData();
            const stats = populateStatsForPostsData();
            return res.send({msg: 'Status populated successfully', data: stats});
        }
        
        return res.status(500).send({msg: 'Something went wrong, please check application logs'});
    }
}
