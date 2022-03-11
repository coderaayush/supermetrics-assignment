export interface IPost {
    id: string,
    from_name: string,
    from_id: string,
    message: string,
    created_time: any,
    character_count?: number
}

export interface IPostRequestParams {
    sl_token: string,
    page?: number
}

export interface IPostsUsers {
    [from_id: string]: number
}
