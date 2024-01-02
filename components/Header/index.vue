<template>
  <div>
    <NuxtLink v-for="route in routes" :to="route.path">{{
      route.name
    }}</NuxtLink>
  </div>
</template>

<script setup>
const routes = ref([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Profile", path: "/profile" },
]);
</script>

<style lang="scss" scoped></style>
