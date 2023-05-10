import { Layout } from '@/components/layout/Layout';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Suspense } from 'react';
// @ts-ignore  
const TransferReact = dynamic(() => import('remote2/TransferReact'), {
    ssr: false,
  });

const TransferReactPage :NextPage = () => { 
    const router = useRouter()
    return (
        <>
        <Layout title='Home - HDRM PYT'>
            <Link href="/">
            GO TO INDEX         
            </Link>

            <Link href="" onClick={() => router.back()}>
            GO TO Back        
            </Link>
            <Suspense fallback={'loading...'}>
                <TransferReact />       
            </Suspense>
        </Layout>
        </>
    )
}

export default TransferReactPage;
