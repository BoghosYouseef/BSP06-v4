<template>
  <div class="home">
    <LoginNavigationButton />
    <RegNavButton />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginNavigationButton from "../components/LoginNavButton.vue"
import RegNavButton from "../components/RegNavButton.vue"
export default {
  name: "Home",
  components: {
    LoginNavigationButton,
    RegNavButton,
  },
};

</script>
   <!--  <RegisterationNavigationButton /> -->
   
<!--import RegisterationNavigationButton from "../components/RegNavButton.vue"-->
// RegisterationNavigationButton,