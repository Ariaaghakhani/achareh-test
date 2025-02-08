<template>
  <div class="height d-flex justify-content-between flex-wrap flex-grow-1">
    <Header class="w-100"/>
    <Main class="w-100"/>
  </div>
</template>

<script>
import Main from "@/components/Main.vue";
import Header from "@/components/Header.vue";
export default {
  components:{
    Header,
    Main
  }
}
</script>


<style lang="scss" scoped>
.height{
  height: 100dvh;
}
</style>