import {defineStore} from 'pinia'
import {createToast} from 'mosha-vue-toastify';
import SERVER from "@/server";

export const useStore = defineStore('TarsimStore', {
    state: () => ({
        addressList:[]
    }),
    actions: {
        // For early data fetching maybe we can call the getAddress API in the store, so we can access the data in advanced so the client does not experience delay in application
        fetchAddress(){
            SERVER.getAddress()
                .then((res)=>{
                    this.addressList = res.data
                })
                .catch((err)=>{
                    console.log(err)
                })
        },
        showToast(message, type) {
            createToast(message, {
                type: type,
                timeout: 5000,
                position: 'top-right',
                transition: 'slide',
                swipeClose: true,
                showIcon: true,
            });
        }
    },
    persist: true,
})
