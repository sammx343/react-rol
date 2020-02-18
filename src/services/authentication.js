import axios from 'axios';
import {env} from '../env';

const signUp = async function(params, callback){
    const response = await axios.post(
        env.appUrl,
        { 
            'key' : env.cloudScripts.signUp,
            params
        },
        { headers: 
            { 
                'Content-Type': 'application/json',
                'app-key' : env.appKey,
                'authorization': env.authorization
            } 
        }
    );
    callback(response.data);
}

const signIn = async function(params, callback){
    const response = await axios.post(
        env.appUrl,
        { 
            'key' : env.cloudScripts.signIn,
            params
        },
        { headers: 
            { 
                'Content-Type': 'application/json',
                'app-key' : env.appKey,
                'authorization': env.authorization
            } 
        }
    );
    callback(response.data);
}

export {signUp, signIn};