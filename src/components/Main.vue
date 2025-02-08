<template>
  <div class="container-fluid p-0 border main-content d-flex align-content-between flex-wrap bg-body-tertiary" v-if="step===1">
    <div class="container p-4 w-100">
      <div class="row p-3">
        <div class="col-12">
          ثبت آدرس
        </div>
      </div>
      <div class="row bg-white p-3 rounded-3 border">
        <div class="col-12 fw-bold mb-3">
          لطفا مشخصات و آدرس خود را وارد کنید
        </div>
        <form id="addressForm" class="mb-3" @submit.prevent="submitForm">
          <div class="row">
            <!--  //////////////////////////////////////////////////-->
            <!--  This is the normal invalidity check I write,-->
            <!--  since the design is different and is not compatible with the desired codes,-->
            <!--  I had to use JS validation-->
            <!--  -->
            <!--  <div class="form-floating mb-3">-->
            <!--    <input type="text" class="form-control" required minlength="11" maxlength="11"-->
            <!--           v-model="mobileNumber"-->
            <!--           oninvalid="this.setCustomValidity('نام کاربری را وارد نمایید')"-->
            <!--           oninput="setCustomValidity('')">-->
            <!--    <label class="form-label">شماره موبایل</label>-->
            <!--  </div>-->
            <!--  -->
            <!--  //////////////////////////////////////////////////-->
            <div class="col-12 col-lg-4 position-relative mb-4 mb-lg-0 pb-4">
              <label for="name" class="fs-7">نام</label>
              <input id="name" v-model="name" class="form-control mt-2" minlength="3" name="name"
                     placeholder=""
                     type="text"
                     @focus="nameFocus=true"
                     @input="nameInput($event)"
              >
              <p v-show="nameInvalid" class="position-absolute text-danger text-sm fs-8 mt-1">نام باید دارای ۳ کاراکتر
                باشد</p>
              <span :class="{'visible':nameFocus&&name}" class="btn rounded-circle" type="button" @click="name=''">
                <i class="fal fa-times"></i>
              </span>
            </div>
            <div class="col-12 col-lg-4 position-relative mb-4 mb-lg-0 pb-4">
              <label for="lastName" class="fs-7">نام خانوادگی</label>
              <input id="lastName" v-model="lastName" class="form-control mt-2" name="lastName" placeholder=""
                     type="text"
                     @focus="lastNameFocus=true"
                     @input="lastNameInput($event)"
              >
              <p v-show="lastNameInvalid" class="position-absolute text-danger text-sm fs-8 mt-1">نام خانوادگی باید
                دارای ۳ کاراکتر باشد</p>
              <span :class="{'visible':lastNameFocus&&lastName}" class="btn rounded-circle" type="button"
                      @click="lastName=''">
                <i class="fal fa-times"></i>
              </span>
            </div>

            <div class="col-12 col-lg-4 position-relative mb-4 mb-lg-0 pb-4">
              <label for="mobile" class="fs-7">شماره تلفن همراه</label>
              <input id="mobile" v-model="mobile" class="form-control mt-2 text-start" name="mobile" placeholder=""
                     type="tel"
                     @focus="mobileFocus=true"
                     @input="mobileInput($event)"
                     @keypress="isNumber($event)"
                     dir="rtl"
                     maxlength="11"
                     minlength="11"
              >
              <p v-show="mobileInvalid" class="position-absolute text-danger text-sm fs-8 mt-1">
                شماره وارد شده صحیح نمی‌باشد
              </p>
              <span :class="{'visible':mobileFocus&&mobile}" class="btn rounded-circle" type="button"
                      @click="mobile=''">
                <i class="fal fa-times"></i>
              </span>
            </div>

            <div class="col-12 col-lg-4 position-relative mb-4 mb-lg-0 pb-4">
              <label for="phone" class="d-flex fs-7 justify-content-between align-items-center">
                <span>
                  شماره تلفن ثابت
                  <span class="fs-8 opacity-75">(اختیاری)</span>
                </span>
                <span class="fs-9 opacity-50">* با پیش شماره</span>
              </label>
              <input id="phone" v-model="phone" class="form-control mt-2 text-start" name="phone" placeholder=""
                     type="tel"
                     @focus="phoneFocus=true"
                     @input="phoneInput($event)"
                     @keypress="isNumber($event)"
                     dir="rtl"
                     maxlength="11"
                     minlength="11"
              >
              <p v-show="phoneInvalid" class="position-absolute text-danger text-sm fs-8 mt-1">
                شماره وارد شده صحیح نمی‌باشد
              </p>
              <span :class="{'visible':phoneFocus&&phone}" class="btn rounded-circle" type="button"
                      @click="phone=''">
                <i class="fal fa-times"></i>
              </span>
            </div>

            <div class="col-12 col-lg-8 position-relative mb-4 mb-lg-0 pb-4">
              <label for="address" class="d-flex  justify-content-between align-items-center">
                آدرس
              </label>
              <input id="address" v-model="address" class="form-control mt-2 text-start" name="address" placeholder=""
                     type="text"
                     @focus="addressFocus=true"
                     @input="addressInput($event)"
                     dir="rtl"
              >
              <p v-show="addressInvalid" class="position-absolute text-danger text-sm fs-8 mt-1">
                آدرس باید حداقل ۳ کاراکتر باشد
              </p>
              <span :class="{'visible':addressFocus&&address}" class="btn rounded-circle" type="button"
                      @click="address=''">
                <i class="fal fa-times"></i>
              </span>
            </div>
            <div class="col-12 col-lg-4 d-flex mb-4 mb-lg-0 pb-4 justify-content-between">
              <span>
                جنسیت
              </span>
              <div class="d-flex">
                <div class="form-check">
                  <label for="female" class="form-check-label">زن</label>
                  <input type="radio" id="female" class="form-check-input" value="زن" v-model="gender">
                </div>
                <div class="form-check ms-4">
                  <label for="male" class="form-check-label">مرد</label>
                  <input type="radio" id="male" class="form-check-input" value="آفا" v-model="gender">
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="w-100 bg-white m-0 p-5 d-flex justify-content-center align-items-center border">
      <button class="btn btn-primary px-5" form="addressForm" type="submit">ثبت و ادامه</button>
    </div>
  </div>
  <div class="container-fluid p-0 border main-content d-flex align-content-between flex-wrap bg-body-tertiary" v-if="step===2">
    <div class="container-fluid container-md p-md-4 w-100">
      <div class="row p-md-3 px-3 py-1">
        <div class="col-12">
          <button class="btn" @click="step=1">
            <i class="fas fa-chevron-right"></i>
          </button>
          ثبت آدرس
        </div>
      </div>
      <div class="row bg-white p-3 rounded-3 border">
        <div class="col-12 fw-bold mb-3">
          موقعیت مورد نظر خود را روی نقشه مشخص کنید
        </div>
        <Map :latLng="latLng" @update:latLng="updateLatLng"/>
      </div>
    </div>
    <div class="w-100 bg-white m-0 p-5 d-flex justify-content-center align-items-center border" style="max-height: 80px">
      <button class="btn btn-primary px-5 d-flex align-items-center"
              :disabled="latLng.length===0 || loading"
              @click="saveAddress">
        <div v-if="loading" class="spinner-border text-light spinner-border-sm my-1"></div>
        <div v-else>        ثبت و ادامه</div>
      </button>
    </div>
  </div>
  <div class="container-fluid p-0 border main-content d-flex align-items-center flex-wrap bg-body-tertiary" v-if="step===3">
    <div class="container p-4 w-100">
      <div class="row align-content-center">
        <div class="col-12 d-flex justify-content-center">
          <i class="fal fa-check-circle mx-auto text-body-tertiary h2"></i>
        </div>
        <div class="col-12 d-flex justify-content-center my-3">
          اطلاعات با موفقیت ثبت شد
        </div>
        <div class="col-12 d-flex justify-content-center">
          <button class="btn btn-outline-primary" @click="routeToAddress()">بازگشت و مشاهده اطلاعات</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "@/components/Map.vue";
import SERVER from '@/server'
import {useStore} from "@/pinia/store";

export default {
  components: {Map},
  data() {
    return {
      step:1,
      name: '',
      nameFocus: false,
      nameInvalid: false,
      lastName: '',
      lastNameFocus: false,
      lastNameInvalid: false,
      mobile: '',
      mobileFocus: false,
      mobileInvalid: false,
      phone: '',
      phoneFocus: false,
      phoneInvalid: false,
      address: '',
      addressFocus: false,
      addressInvalid: false,
      gender:'آقا',
      latLng: [],
      loading:false,
    }
  },
  setup(){
    const store = useStore()
    return {store}
  },
  methods: {
    nameInput(e) {
      if (this.name.length >= 3) {
        e.target.classList.remove('border-danger');
        this.nameInvalid = false
      }
    },
    lastNameInput(e) {
      if (this.lastName.length >= 3) {
        e.target.classList.remove('border-danger');
        this.lastNameInvalid = false
      }
    },
    mobileInput(e) {
      const regex = /^09\d{9}$/;
      if (regex.test(this.mobile)) {
        e.target.classList.remove('border-danger');
        this.mobileInvalid = false
      }
    },
    phoneInput(e) {
      const regex = /^0\d{10}$/;
      if (regex.test(this.phone)) {
        e.target.classList.remove('border-danger');
        this.phoneInvalid = false
      }
    },
    addressInput(e) {
      if (this.address.length >= 3) {
        e.target.classList.remove('border-danger');
        this.addressInvalid = false
      }
    },
    isNumber(evt) {
      let charCode = evt.which || evt.keyCode;

      // Allow English (0-9), Persian (۰-۹), and Arabic (٠-٩) digits
      if (
          (charCode >= 48 && charCode <= 57) ||    // English digits (0-9)
          (charCode >= 1776 && charCode <= 1785) || // Persian digits (۰-۹)
          (charCode >= 1632 && charCode <= 1641)    // Arabic digits (٠-٩)
      ) {
        return true;
      }

      evt.preventDefault();
      return false;
    },
    submitForm() {
      const name = document.getElementById('name')
      const lastName = document.getElementById('lastName')
      const mobile = document.getElementById('mobile')
      const phone = document.getElementById('phone')
      if (this.name.length>=3) {
        this.nameInvalid = false
        name.classList.remove('border-danger')
      } else {
        name.classList.add('border-danger')
        this.nameInvalid = true
      }
      if (this.lastName.length>=3) {
        this.lastNameInvalid = false
        lastName.classList.remove('border-danger')
      } else {
        lastName.classList.add('border-danger')
        this.lastNameInvalid = true
      }
      if(/^09\d{9}$/.test(this.mobile)){
        this.mobileInvalid = false;
        mobile.classList.remove('border-danger')
      } else {
        mobile.classList.add('border-danger')
        this.mobileInvalid = true
      }
      if(this.phone){
        if(/^0\d{10}$/.test(this.phone)){
          this.phoneInvalid = false;
          phone.classList.remove('border-danger')
        } else {
          phone.classList.add('border-danger')
          this.phoneInvalid = true
        }
      }
      if (this.address.length>=3) {
        this.addressInvalid = false
        name.classList.remove('border-danger')
      } else {
        name.classList.add('border-danger')
        this.addressInvalid = true
      }
      if(this.name && this.lastName && this.mobile && this.address){
        if(this.nameInvalid===false && this.lastNameInvalid===false && this.mobileInvalid===false && this.phoneInvalid===false && this.addressInvalid===false){
          this.step=2
        }
      }
    },
    updateLatLng(newLatLng) {
      this.latLng = newLatLng; // Update the latLng data property with the new values
      console.log('Updated LatLng:', this.latLng);
    },
    saveAddress(){
      if(this.step === 2) {
        this.loading = true
        SERVER.submitAddress(this.name, this.lastName, this.mobile, this.phone, this.address, 1, this.latLng[0], this.latLng[1], this.gender)
            .then((res) => {
              this.loading = false
              this.step=3
            })
            .catch((err) => {
              this.loading = false
              this.store.showToast('خطا در برقراری ارتباط با سرور', 'danger')
              console.log(err)
            })
      }
    },
    routeToAddress(){
      this.$router.push({name:'Address'})
    }
  }
}
</script>


<style lang="scss" scoped>
.form-control ~ span {
  position: absolute;
  background: var(--color-4);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  color: #ffffff;
  padding: 1px;
  bottom: calc(1.5rem + 23px);
  left: 12px;
  transform: translate(50%, 50%);
  opacity: 0;
  visibility: hidden;

  svg {
    width: 100%;
    height: 100%;

  }
}

.visible {
  opacity: 1 !important;
  visibility: visible !important;
}
.main-content{
  height: 100%;
  max-height: calc(100dvh - 71px);
  overflow-y: auto;
  background: var(--bg-body-tertiary);
}
.form-check-input:checked{
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='%2300BFA5'/></svg>");
  background-color: #ffffff;
  border-color: var(--color-1);
}

.form-check-input:focus{
 outline: none;
  box-shadow: none;
}
</style>