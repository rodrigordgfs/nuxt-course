<template>
  <nav class="flex flex-row gap-2 bg-purple-700 text-white text-2xl p-3">
    <NuxtLink v-for="route in routes" :to="route.path">{{
      route.name
    }}</NuxtLink>
  </nav>
</template>

<script setup>
const routes = ref([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Profile", path: "/profile" },
]);
</script>

<style lang="scss" scoped></style>
