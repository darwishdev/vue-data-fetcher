
import useDataFetcherList from './useDataFetcherList';
import { rolesListResponse } from '../api/ApiMock'
import { describe, expect, it } from 'vitest'
import { withSetup } from '@/utils/utils';
import apiClient from '../api/ApiMock';
import type { RolesListResponse, RolesListRequest } from '@/api/ApiTypes'
import { flushPromises } from "@vue/test-utils";

describe('useDataFetcherList', () => {
    it('fetches data and updates reactive variables', async () => {
        const [results, app] = withSetup(() => useDataFetcherList<RolesListRequest, RolesListResponse>(apiClient.rolesList, {} as RolesListRequest));
        await flushPromises();
        expect(results.loading.value).toBe(true);
        expect(results.responseData.value).toBeNull();
        expect(results.error.value).toBeNull();
        await new Promise((resolve) => setTimeout(resolve, 1000));
        expect(results.loading.value).toBe(false);
        expect(results.responseData.value).toStrictEqual(rolesListResponse);
        expect(results.error.value).toBeNull();
        app.unmount();
    });
});
