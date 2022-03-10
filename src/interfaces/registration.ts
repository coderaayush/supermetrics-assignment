export interface IRegistrationRequestBody {
    client_id: string,
    email: string,
    name: string
};

export interface IRegistrationToken {
    sl_token: string
}