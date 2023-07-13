# Vue Data Fetcher

Vue Data Fetcher is a convenient package that simplifies the process of fetching data from API calls in Vue.js projects. It efficiently handles the loading state, errors, and response data, making your development process smoother and more streamlined.

## Installation

execute the command :
```
npm install vue-data-fetcher
``` 
Alternatively, if you have the `formkit-builder` package already installed, `vue-data-fetcher` will be automatically included in your `node_modules` folder, eliminating the need for a separate installation.

## Features

Vue Data Fetcher consists of two main functions:

1. `useDataFetcherList`: This function is used to list data from a feature endpoint API, which is particularly useful in listing features.

2. `useDataFetcherFind`: This function fetches data of a specific user, which is mainly used in update and view pages.

## Usage

Both `useDataFetcherFind` and `useDataFetcherList` accept two arguments:

## Function Parameters

1. `fetchFunction`: This is the API function that fetches the data. It is used to either list or update features, depending on the function in use.

2. `req`: This argument represents the request used in the fetch function. For instance, in `useDataFetcherFind`, the `userId` can be used as `reqProp` to fetch data for a specific user.

## Return Values

The variables returned by `useDataFetcherFind` and `useDataFetcherList` are dynamic, using Vue's `ref` to provide a reactive reference. This ensures real-time representation of the fetching state. 

The `loading` variable, for instance, is initially set to `true`, signifying the start of the fetch operation. Once the API function returns a response, `loading` automatically updates to `false`. This dynamic nature of the variables allows for seamless handling of various states in a reactive manner, enhancing the responsiveness and user experience of your application.

The `useDataFetcherFind` and `useDataFetcherList` functions return four key items:

1. `loading`: This boolean variable indicates the loading state, i.e., the time taken to fetch data .. it determine if the data is fetched or not yet. It can be used to manage the loading state in your application.

2. `error`: This string variable returns the error response from the fetch function, if any.

3. `responseData`: This variable holds the response returned from the fetch function after the loading state, provided there are no errors. The type of `responseData` matches the response type of the fetch function.

4. `fetchData`: This function can be invoked to call the fetch function again.

With Vue Data Fetcher, handling loading states, errors, and response data becomes a breeze, making your Vue.js development process more efficient and enjoyable.

**Here's an example of how to import and use the useDataFetcherFind composable:**

```
<script setup>
import apiClient from '../../../../common/api/ApiClient';
import { CategoryFindRequest,CategoryFindResponse } from '@buf/ahmeddarwish_mln-api.bufbuild_es/rms/v1/menu/product_definitions_pb'
import {useDataFetcherList} from 'vue-data-fetcher'
const { responseData, loading, error,fetchData } = useDataFetcherList<CategoryFindRequest,CategoryFindResponse>(apiClient.categoryFind, {categoryId : CategoryId} as CategoryFindRequest);
</script>
<template>
    <div class="grid" v-if="loading">
        <app-card-loading class="col " v-for="i in 3" :key="i" />
    </div>
    <div v-else-if="error">
        <div class="error text-center">
            <logo-error class=" mt-4" />
            <h2 class="text-3xl"> {{ $t("list_error") }}</h2>
            <i class="pi pi-refresh text-3xl mt-4 cursor-pointer" @click="fetchData"></i>
        </div>
    </div>
    <div v-else>
        {{responseData}}
    </div>
</template>

```

**Here's an example of how to import and use the useDataFetcherList composable:**
```
<script setup>
import apiClient from '../../../../common/api/ApiClient';
import { CategoriesListRequest , CategoriesListResponse  } from '@buf/ahmeddarwish_mln-api.bufbuild_es/rms/v1/menu/product_definitions_pb'
import {useDataFetcherList} from 'vue-data-fetcher'
const { responseData, loading, error, fetchData } = useDataFetcherList<CategoriesListRequest,CategoriesListResponse>(apiClient.categoriesList , {} as CategoriesListRequest);
</script>
<template>
    <div class="grid" v-if="loading">
        <app-card-loading class="col " v-for="i in 3" :key="i" />
    </div>
    <div v-else-if="error">
        <div class="error text-center">
            <logo-error class=" mt-4" />
            <h2 class="text-3xl"> {{ $t("list_error") }}</h2>
            <i class="pi pi-refresh text-3xl mt-4 cursor-pointer" @click="fetchData"></i>
        </div>
    </div>
    <div v-else>
        {{responseData}}
    </div>
</template>

```


## Conclusion

Vue Data Fetcher encapsulates complex logic into reusable composable functions, making it a powerful tool for Vue.js developers. Whether you're listing data or fetching specific user data, Vue Data Fetcher has got you covered.