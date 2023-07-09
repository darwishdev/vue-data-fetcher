<script setup lang="ts">
import apiClient from '../api/ApiMock';
import type { RoleFindRequest, RoleFindResponse } from '../api/ApiTypes'
import useDataFetcherFind from '../composables/useDataFetcherFind'
const { responseData, loading, error } = useDataFetcherFind<RoleFindRequest, RoleFindResponse>(apiClient.roleFind, 'roleId');
</script>

<template>
  <h2 class="loading" v-if="loading">loading</h2>
  <h2 v-else-if="error">
    {{ error }}
  </h2>
  <h2 class="response" v-else>{{ JSON.stringify(responseData) }}</h2>
</template>