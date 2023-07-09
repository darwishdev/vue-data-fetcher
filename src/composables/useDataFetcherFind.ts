import { ref, onBeforeMount } from 'vue';
import type { Ref } from 'vue';
import { useRoute } from 'vue-router';
export default function useDataFetcherFind<Request, Response>(fetchFunction: Function, reqProp: string, mapFunction?: Function): {
    responseData: Ref<Response | null>,
    paramId: number,
    loading: Ref<boolean>,
    error: Ref<string | null>,
    fetchData: () => Promise<void>
} {
    const requestObject: Request = {} as Request
    const responseData: Ref<Response | null> = ref(null)
    const loading: Ref<boolean> = ref(true)
    const error: Ref<string | null> = ref(null)
    const { params } = useRoute()
    const paramId = parseInt(params.id as string)
    const fetchData = async () => {
        loading.value = true
        try {
            const response = await fetchFunction(requestObject)
            if (mapFunction) {
                responseData.value = mapFunction(response)
            } else {
                responseData.value = response
            }
        } catch (err: any) {
            error.value = err.message || 'An error occurred.'
        } finally {
            loading.value = false
        }
    }

    onBeforeMount(() => {
        requestObject[reqProp] = paramId
        fetchData()
    })

    return {
        responseData,
        paramId,
        loading,
        error,
        fetchData
    };
}
