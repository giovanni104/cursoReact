// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  name: string
}
const menuApi = axios.create({
  baseURL: process.env.BACK_PUBLIC_API_URL,
})
menuApi.interceptors.response.use(
  (response) => {
    const MessageId = response.data.messageID
   // set(MessageId, MessageId)
    return response
  },
  (error) => {
    // Handle response errors here
    console.log('menu interceptors rror ')
    return Promise.reject(error)
  }
)
export default async  function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const respuesta = await getMenu('messageId')

  return res.status(200).json(respuesta)
  
}
const getMenu = async (messageId: string) => {
  const response = await menuApi.get('dummy')
  console.log(response.data.responseBody)
  return response.data.responseBody 

}