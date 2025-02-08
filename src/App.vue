<template>
  <router-view/>
</template>
<script>
import axios from "axios";
import router from "@/router";
import {useStore} from "@/pinia/store";

export default {
  data() {
    return {
    }
  },
  setup(){
    const store = useStore()
    return {store}
  },
  created() {
    axios.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      console.log(error.response.status);
      if (error.response.status === 401) {
        router.push('/')
      }
      return Promise.reject(error)
    })
    // For early data fetching maybe we can call the getAddress API in the store,
    // so we can access the data in advanced so the client does not experience delay in application
    // this.store.fetchAddress()
  },
}
</script>
<style lang="scss">
@import "@/assets/sass/main.scss";

</style>