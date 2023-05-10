import InputTKNumber from './InputTKNumber';
import { Typography, Button } from '@mui/material';
import { stylebottommodal } from './PasswordForm';
import { FC, useContext, useState } from 'react';
import { postData } from '@/utils/consumeservices';
import { UserContext } from './LoginForm';
import CircularProgress from '@mui/material/CircularProgress';

type AuthTKFormTypes = {
    handleCloseModal: () => void,
    handlerValidatedAuthTK: (status: boolean) => void,
}
type tokenValidatorType = {
    authtk: boolean
}

export const AuthTKForm: FC<AuthTKFormTypes> = ({ handlerValidatedAuthTK, handleCloseModal }) => {
    const { username } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [token, setToken] = useState('');
    const tokenValidator = async () => {
        console.log('tu token', token);

        if (token.length == 8) {
            const body = {
                username,
                token
            }
            setIsLoading(true);
            const response = await postData('login/authtk/', body);
            const data = response.data as tokenValidatorType;
            setIsLoading(false);
            setIsError(!data.authtk);
            setToken('');
            handlerValidatedAuthTK(data.authtk);
        } else {
            setIsError(true);
        }
    }
    return (
        <>

            {isLoading ? (
                <div style={{
                    textAlign: 'center'
                }}><CircularProgress />
                </div>) :
                <>
                    <Typography variant='h1' sx={{ mb: 1, color: '#0067B1', fontWeight: '500', marginBottom: '2%', textAlign: 'center' }} >
                        Autentícate para continuar
                    </Typography>
                    <Typography variant='h3' sx={{ mt: 2, mb: 1, color: 'black' }} >
                        Ingresa tu clave dinámica <b>ami ven</b>:
                    </Typography>
                    <InputTKNumber setToken={setToken} isError={isError} setError={setIsError} />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-evenly'
                    }}>
                        <Button variant="contained"
                            sx={stylebottommodal}
                            onClick={tokenValidator}
                        >Continuar</Button>
                        <Button variant="outlined"
                            sx={stylebottommodal}
                            style={{
                                backgroundColor: 'white',
                                borderColor: '#0067B1',
                                color: '#0067B1',
                                borderWidth: '2px',
                            }}
                            onClick={handleCloseModal}
                        >Cancelar</Button>
                    </div>
                </>
            }

        </>
    )
}
