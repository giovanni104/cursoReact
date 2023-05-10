import { Layout } from '@/components/layout/Layout';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';

import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import React from 'react'
import { ICart } from '../interfaces'

const URL_CART_LIST= 'https://dummyjson.com/carts';
type Data = {
    carts:ICart[];
    total?:number;
    skip?: number;
    limit?:number;
}

interface DataProps {
    data: Data;
  }
  
const Carts :NextPage<DataProps> = ({data}) => { 
    console.log("data carts",data.carts)
  const rows = data.carts?data.carts: [];
  console.log("rows",rows[0]);
  const columns = [
    { id: 'id', label: 'Name', minWidth: 50 },    
    {
      id: 'total',
      label: 'Total',
      minWidth: 170,
      align: 'right',
      //format: (value) => value.toLocaleString(),
    },
    {
      id: 'discountedTotal',
      label: 'Descuento Total',
      minWidth: 170,
      align: 'right',
      //format: (value) => value.toLocaleString(),
    },
    {
      id: 'userId',
      label: 'Id de Usurio',
      minWidth: 170,
      align: 'right',
      //format: (value) => value.toFixed(2),
    },
  ];
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  return (
    <>
        <Layout title='Carts - List'>
            <div>Carts</div>
            <Paper >
      
            <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
          <TableRow>
              {columns.map((column) => (               
                <TableCell
                  key={column.id}
                  //align={column.align}
                  //style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>                 
                    
                      <TableCell key={row.id} >
                        {row.id}
                      </TableCell>                     
                      <TableCell key={row.total} >
                      {row.total}
                    </TableCell>
                    <TableCell key={row.discountedTotal} >
                        {row.discountedTotal}
                    </TableCell>                 
                    <TableCell key={row.userId} >
                        {row.userId}
                    </TableCell>   
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        //component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
        </Layout>  
    </>
    
  )
}

/*
Carts.getInitialProps = async ({ req }) => {
    
    const  resp  = await fetch(URL_CART_LIST);    
    const data:Data = await resp.json();
    console.log("carts staticProps ",data.carts);

    return {       
             data
    }
  }
*/




export const getStaticProps: GetStaticProps<{data: Data}> = async (ctx) => {
    
    const  resp  = await fetch(URL_CART_LIST);    
    const data:Data = await resp.json();
    console.log("carts staticProps ",data.carts);
    if(!data){
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
    return {
        props: {
             data
        },
        //revalidate: 60 * 60 * 24
    }
}




export default Carts;