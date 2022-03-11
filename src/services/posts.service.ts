import axios from 'axios';
import { config } from './../config';
import { IPostRequestParams } from './../interfaces/posts';
import { registrationToken } from '../common/registrationToken';
import { postsData } from '../common/postsData';

export async function fetchAndUpdatePostsData() {
    try {
        let params: IPostRequestParams = {
            sl_token: registrationToken.sl_token
        };

        for (let i = 1; i <= config.max_pages; i++) {
            params.page = i;
            let postsRequestData = await axios.get(config.posts_endpoint_url, { params });
            postsData.push(...postsRequestData.data?.data?.posts);
        }

        postsData.map(post => {
            post.created_time = new Date(post.created_time);
            post.character_count = post.message.length;
        });
    } catch (e) {
        console.log(e);
        return e;
    }
}
