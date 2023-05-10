import axios from 'axios'
import { useState, useEffect } from 'react';

const localApi = axios.create({
    baseURL: '/api/'
})

export const getData = async (url: string, dataRequest?: any) => {

    const response = await localApi.get(url, dataRequest)
    return response;
}

export const postData = async (url: string, dataRequest?: any) => {

    const response = await localApi.post(url, dataRequest);
    return response;
}