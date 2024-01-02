<template>
  <div>
    <p>iPhone {{ name }}</p>
  </div>
</template>

<script setup>
const route = useRoute();

const name = computed(() => {
  return route.params.name.replaceAll("-", " ");
});

useHead({
  title: `Nuxt 3 - iPhone ${name.value}` 
})
</script>

<style></style>
