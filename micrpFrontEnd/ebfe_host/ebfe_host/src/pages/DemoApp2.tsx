import { Layout } from '@/components/layout/Layout';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React, { Fragment } from 'react'

// @ts-ignore  
const Demo = dynamic(() => import('app2/Demo'),{
    ssr: false,
  });
 // @ts-ignore   
  const Doggo = dynamic(() => import("app2/Doggo"),{
    ssr: false,
    loading: ({ error }) => {
      if (error) {
        console.log("error cargando DemoApp3",error);
        return <Fragment>Error</Fragment>;
      }
      return <Fragment>Loading</Fragment>;
    }
  });

const DemoApp2:NextPage = () => {
  return (
    <>
    <Layout title='Home - HDRM PYT'>
      <div>DemoApp2</div>
      <div>
            <Demo />
      </div>
    </Layout>
   
    </>
    
  )
}


export default DemoApp2;