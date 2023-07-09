<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <nav>
      <RouterLink to="/roles">Data List</RouterLink> ||
      <RouterLink to="/roles/1">Data Find</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
