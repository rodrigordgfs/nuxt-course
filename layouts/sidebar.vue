<template>
  <main class="user-layout">
    <article class="sidebar">
      <p>Dashboard</p>
      <p>Dashboard</p>
    </article>

    <section>
      <slot />
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.user-layout {
    display: flex ;
}
</style>
