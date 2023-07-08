<script setup lang="ts">
import apiClient from '@/api/ApiMock';
import type { RolesListResponse, RolesListRequest } from '@/api/ApiTypes'
import useDataFetcherList from '../composables/useDataFetcherList'
const { responseData, loading, error } = useDataFetcherList<RolesListRequest, RolesListResponse>(apiClient.rolesList, {} as RolesListRequest);
</script>
<template>
  <h2 class="loading" v-if="loading">loading</h2>
  <h2 v-else-if="error">
    {{ error }}
  </h2>
  <h2 class="response" v-else>{{ JSON.stringify(responseData) }}</h2>
</template>