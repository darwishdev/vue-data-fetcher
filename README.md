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
<template>
  <div>
    <!-- Your template code here -->

    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <!-- Render your fetched data here -->
      {{ responseData }}
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useDataFetcherList } from "vue-data-fetcher";
const { responseData, loading, error, fetchData } = useDataFetcherList(
  fetchDataFunction,
  request
);
</script>
```

### Here's an example of how to import and use the `useDataFetcherFind` composable:

```vue
<template>
  <div>
    <!-- Your template code here -->

    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <!-- Render your fetched data here -->
      {{ responseData }}
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useDataFetcherList } from "vue-data-fetcher";
const { responseData, loading, error, fetchData } = useDataFetcherList(
  fetchDataFunction,
  request
);
</script>
```
