
import axiosClient from './../config/axios';


export const getFollowers = async( followed ) =>{
    try {
        const resp = await axiosClient.get(`/followers/${ followed }`)
        return resp.data.followers;
    } catch (error) {
        console.log( error );
        return [];
    }
}

export const getFollowing = async( follower ) =>(
    await axiosClient.get(`/following/${ follower }`)
)