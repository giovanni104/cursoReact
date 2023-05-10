import Image from "next/image"
import { useState, FC, useEffect, useContext } from 'react';
import { Divider, IconButton, Link, Typography } from '@mui/material';
import { getData, postData } from '@/utils/consumeservices';
import { UserContext } from './LoginForm';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/router';

type SelAccountForm = {

    handlerCloseModal: () => void,


}
export interface TypeAccounts {
    personas: { id: number, name: string, numberaccount: string; }[],
    empresas: { id: number, name: string, numberaccount: string; }[],
}

export const SelAccountForm: FC<SelAccountForm> = ({ handlerCloseModal }) => {
    const router = useRouter();
    const [accounts, setAccounts] = useState({} as TypeAccounts)
    const [isLoading, setIsLoading] = useState(true);
    const { username } = useContext(UserContext);
    useEffect(() => {
        const getAccounts = async () => {
            //fetch to service get user acconts
            const body = {
                username
            }
            setIsLoading(true);
            const response = await getData('login/accounts/', body);
            const data = response.data as TypeAccounts;
            setAccounts(data);
            setIsLoading(false);
        }
        getAccounts();
    }, [username])
    const handlerSelectedAccount = () => {
        router.push('/Menu')
    }
    // async function getAccounts () {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image src={'/image/logobdvcolor.svg'} alt="Img login" width={0} height={0} style={{
                    width: '50%',
                    height: 'auto',
                }}></Image>

                <IconButton onClick={handlerCloseModal} aria-label="delete" sx={{
                    // marginRight: '1%'

                }}>
                    <Image src={'/image/icons/cancelar.svg'} alt="Img login" width={0} height={0} style={{
                        width: '100%',
                        height: '100%',
                    }} />
                </IconButton>


            </div>

            <Divider sx={{ width: '100%', my: 1.2 }} />
            {isLoading ? <CircularProgress /> : <>
                <Typography variant="h2" component="h2" style={{ color: '#494949', fontWeight: 500, textAlign: 'center' }} >
                    Elige cómo deseas ingresar
                </Typography >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start'
                }}>

                    {
                        accounts.personas != null &&
                        (<Typography variant="h1" component="h2" mt={2} mb={1} style={{ color: '#494949', fontWeight: 500, textAlign: 'center' }} >
                            Personas
                        </Typography >)
                    }

                    {
                        (accounts !== null && accounts.personas && accounts.personas.length > 0) && (

                            accounts.personas.map((account) => (


                                <Link
                                    key={account.id}
                                    component="button"
                                    variant="body2"
                                    onClick={handlerSelectedAccount}
                                >
                                    <Typography key={account.id} variant="h3" component="h2" style={{ color: '#494949', fontWeight: 500, textAlign: 'center' }}>
                                        {account.name}
                                    </Typography>
                                </Link>


                            ))

                        )
                    }
                    {
                        accounts.empresas != null &&
                        (<Typography variant="h1" component="h2" mt={2} mb={1} style={{ color: '#494949', fontWeight: 500, textAlign: 'center' }} >
                            Empresas
                        </Typography >)
                    }

                    {
                        (accounts !== null && accounts.personas && accounts.personas.length > 0) && (

                            accounts.empresas.map((account) => (
                                <Link
                                    key={account.id}
                                    component="button"
                                    variant="body2"
                                    onClick={handlerSelectedAccount}
                                >
                                    <Typography key={account.id} variant="h3" component="h2" style={{ color: '#494949', fontWeight: 500, textAlign: 'center' }}>
                                        {`${account.numberaccount} - ${account.name}`}
                                    </Typography>
                                </Link>
                            ))

                        )
                    }
                </div>
            </>
            }
        </>
    )
}
