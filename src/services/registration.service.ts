import axios from 'axios';
import { config } from './../config';
import { IRegistrationRequestBody } from './../interfaces/registration';
import { registrationToken } from '../common/registrationToken';

export async function setRegistrationToken() {
    try {
        let registrationInput: IRegistrationRequestBody = config;
        
        let registrationData = await axios({
            method: 'post',
            url: config.registration_endpoint_url,
            headers: { 
                'Content-Type': 'application/json'
            },
            data: registrationInput
        });
        
        registrationToken.sl_token = registrationData.data.data.sl_token;

        return registrationData.data.sl_token;
    } catch (e) {
        console.log(e);
        return false;
    }
}