<template>
  <div class="container-fluid p-0 border main-content d-flex align-content-between flex-wrap">
    <div class="container p-4 w-100">
      <div class="row">
        <div class="col-12">
          آدرس‌ها و مشخصات
        </div>
      </div>
      <div v-for="(item,index) in addressList" v-if="!loading" :key="item.id"
           class="row bg-white p-3 rounded-3 border mb-4 d-none d-md-flex">
        <div class="col-4 d-flex flex-wrap justify-content-start align-content-between mb-5">
          <span class="w-100 text-body-tertiary mb-3">نام</span>
          <span>{{ item.first_name }}</span>
        </div>
        <div class="col-4 d-flex flex-wrap justify-content-start align-content-between mb-5">
          <span class="w-100 text-body-tertiary mb-3">نام خانوادگی</span>
          <span>{{ item.last_name }}</span>
        </div>
        <div class="col-4 d-flex flex-wrap justify-content-start align-content-between mb-5">
          <span class="w-100 text-body-tertiary mb-3">شماره تلفن همراه</span>
          <span>{{ item.coordinate_mobile }}</span>
        </div>
        <div class="col-4 d-flex flex-wrap justify-content-start align-content-between mb-5">
          <span class="w-100 text-body-tertiary mb-3">شماره تلفن ثابت</span>
          <span>{{ item.coordinate_phone_number || '--' }}</span>
        </div>
        <div class="col-4 d-flex flex-wrap justify-content-start align-content-between mb-5">
          <span class="w-100 text-body-tertiary mb-3">جنسیت</span>
          <span>{{ item.gender }}</span>
        </div>
        <div class="col-4 d-flex flex-wrap justify-content-start align-content-between mb-5">
          <span class="w-100 text-body-tertiary mb-3">آدرس</span>
          <span>{{ item.address }}</span>
        </div>
      </div>
      <div v-for="(item,index) in addressList" v-if="!loading" :key="item.id"
           class="row bg-white p-3 rounded-3 border mb-4 d-flex d-md-none">
        <div class="col-12 d-flex justify-content-between mb-2">
          <span class="text-body-tertiary">نام و نام خانوادگی</span>
          <span>{{item.first_name}} {{item.last_name}}</span>
        </div>
        <div class="col-12 d-flex justify-content-between mb-2">
          <span class="text-body-tertiary">جنسیت</span>
          <span>{{item.gender || '-'}}</span>
        </div>
        <div class="col-12 d-flex justify-content-between mb-2">
          <span class="text-body-tertiary">شماره تلفن همراه</span>
          <span>{{item.coordinate_mobile || '-'}}</span>
        </div>
        <div class="col-12 d-flex justify-content-between mb-2">
          <span class="text-body-tertiary">شماره تلفن ثابت</span>
          <span>{{item.coordinate_phone_number || '-'}}</span>
        </div>
        <div class="col-12 d-flex flex-wrap pt-2 border-top">
          <span class="text-body-tertiary w-100 mb-2">آدرس</span>
          <span>{{item.address}}</span>
        </div>
      </div>
      <div v-for="n in 3" v-if="loading" class="row">
        <div class="placeholder-glow h-100 my-3 ">
          <div class="placeholder col-12 p-5 rounded-3">
            <br>
            <br>
            <br>
            <br>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SERVER from '@/server'

export default {
  data() {
    return {
      addressList: [],
      loading: false,
    }
  },
  mounted() {
    this.fetchAddress();
  },
  methods: {
    fetchAddress() {
      this.loading = true
      SERVER.getAddress()
          .then((res) => {
            //Due to large data and lack of divide data by chunk size and page number
            //data fetching might take too long
            this.addressList = res.data
            this.loading = false
          })
          .catch((err) => {
            this.loading = false
            console.log(err)
          })
    }
  }
}
</script>


<style lang="scss" scoped>

</style>