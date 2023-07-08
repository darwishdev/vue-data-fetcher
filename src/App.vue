<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Data List</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
