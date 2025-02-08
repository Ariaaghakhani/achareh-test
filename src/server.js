import axios from 'axios'

const API_URL = 'https://stage.achareh.ir';
// const API_URL = 'https://back.fastlease.ir';


export default {
    getAddress(){
        return axios({
            method:'get',
            url:`${API_URL}/api/karfarmas/address`,
            headers:{
                "Authorization":"Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4",
            },
            retries:5,
        })
    },
    submitAddress(first_name, last_name,coordinate_mobile,coordinate_phone_number,address,region,lat,lng,gender) {
        return axios({
            method: 'post',
            url: `${API_URL}/api/karfarmas/address`,
            headers:{
                "Authorization":"Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4",
            },
            data: {
                first_name: first_name,
                last_name: last_name,
                coordinate_mobile: coordinate_mobile,
                coordinate_phone_number: coordinate_phone_number,
                address: address,
                region: region,
                lat: lat,
                lng: lng,
                gender: gender,
            },
            retries: 5,
        });

    },
}
