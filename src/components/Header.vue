<template>
  <nav class="d-flex justify-content-between container-fluid bg-white px-5 align-items-center py-2">
    <div class="logo d-flex justify-content-center align-items-center">
      <figure>
        <img alt="" src="@/assets/images/logo.png">
      </figure>
    </div>
    <ul class="d-flex m-0 fs-7">
      <li class="me-4">
        <router-link :to="{name:'Main'}">
          ثبت آدرس
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'Address'}">
          مشاهده آدرس ها
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>


<style lang="scss" scoped>
ul li{
  color: var(--color-1)
}
.router-link-active, .router-link-exact-active {
  color: var(--color-2) ;
}

.router-active {
  color: var(--color-2);
}
@media screen and (min-width: 768px){
  .fs-7{
    font-size: 16px;
  }
}
</style>