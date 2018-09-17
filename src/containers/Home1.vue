<template>
  <div>
    <p>i am home1</p>
    <AppHeader></AppHeader>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
  import AppHeader from '../components/Header'
  import Body from '../components/Body'
  import Footer from '../components/Footer'

  export default {
    name: "home",
    components: {
      AppHeader,
      Body,
      Footer
    }
  }
</script>

<style scoped>

</style>
