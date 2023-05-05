import useSWR, { SWRConfiguration } from 'swr';
import { IItem } from '../interfaces';


 const fetcher = (...args: [key: string]) => fetch(...args).then(res => res.json());

//export const useMenuItem = (url: string, config: SWRConfiguration = {} ) => {
    export const useMenuItem = (url: string, config: SWRConfiguration = {} ) => {

    // const { data, error } = useSWR<IProduct[]>(`/api${ url }`, fetcher, config );
    console.log("useMenuItem ",`/api${ url }`);
    const { data, error } = useSWR<IItem[]>(`/api${ url }`, fetcher,config );
    console.log("useMenuItem data", data, error);
    return {
        items: data || [],
        isLoading: !error && !data,
        isError: error
    }

}