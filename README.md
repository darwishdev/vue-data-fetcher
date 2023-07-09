# Vue Data Fetcher

Vue Data Fetcher is a collection of composable functions that provide utility functionalities for common tasks in Vue.js projects. This package is designed to simplify and streamline the development process by encapsulating complex logic into reusable composable functions.

## Installation

You can install the Vue Data Fetcher package via npm:

```shell
npm install vue-data-fetcher
```

## Usage

To use the Vue Data Fetcher package in your Vue.js project, you can import the individual composable functions as needed.

### Here's an example of how to import and use the `useDataFetcherList` composable:

```vue
<script setup lang="ts">
import apiClient from '@/api/ApiMock'
import type { RolesListResponse, RolesListRequest } from '@/api/ApiTypes'
import { useDataFetcherList } from 'vue-data-fetcher'
const { responseData, loading, error } = useDataFetcherList<RolesListRequest, RolesListResponse>(
  apiClient.rolesList,
  {} as RolesListRequest
)
</script>
<template>
  <h2 class="loading" v-if="loading">loading</h2>
  <h2 v-else-if="error">
    {{ error }}
  </h2>
  <h2 class="response" v-else>{{ JSON.stringify(responseData) }}</h2>
</template>
```

### Here's an example of how to import and use the `useDataFetcherFind` composable:

```vue
<script setup lang="ts">
import apiClient from '@/api/ApiMock'
import type { RoleFindRequest, RoleFindResponse } from '../api/ApiTypes'
import { useDataFetcherFind } from 'vue-data-fetcher'

const { responseData, loading, error } = useDataFetcherFind<RoleFindRequest, RoleFindResponse>(
  apiClient.roleFind,
  'roleId'
)
</script>
<template>
  <h2 class="loading" v-if="loading">loading</h2>
  <h2 v-else-if="error">
    {{ error }}
  </h2>
  <h2 class="response" v-else>{{ JSON.stringify(responseData) }}</h2>
</template>
```
