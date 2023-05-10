import { Button, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from './LoginForm';
import CircularProgress from '@mui/material/CircularProgress';
import { log } from 'console';
import { postData } from '@/utils/consumeservices';
export const stylebottommodal = {
    backgroundColor: '#0067B1',
    textTransform: 'none',
    width: '35%',
    marginTop: '3%',
    marginBottom: '3%',
    fontSize: '1rem'
}
const styleinputpass = {
    // width: '0%',
    fontSize: '1rem',
    m: 1,
    height: '2.5rem',
    width: '90%',

}
type PasswordFormTypes = {
    handleCloseModal: () => void,
    handlerValidatedPassword: (status: boolean) => void,
}

type PassValidation = {
    authcredentials: boolean
}
export const PasswordForm = ({ handleCloseModal, handlerValidatedPassword }: Required<PasswordFormTypes>) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { username } = useContext(UserContext);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handlerAuthPassword = async () => {
        const body = {
            username,
            password
        }
        setIsLoading(true);
        const response = await postData('login/authuser/', body);
        const data = response.data as PassValidation;
        setIsLoading(false);
        handlerValidatedPassword(data.authcredentials);
        setIsError(!data.authcredentials);

    }

    return (
        <div style={{
            textAlign: 'center'
        }}>
            {isLoading ? < CircularProgress /> :
                <>
                    <Typography variant="h1" component="h2" style={{ color: '#0067B1', fontWeight: 500, marginBottom: '2%' }}>
                        Autentícate para continuar
                    </Typography>
                    <FormControl sx={styleinputpass} variant="outlined">

                        <InputLabel sx={{
                            fontSize: '1rem',

                        }}
                            htmlFor="outlined-adornment-password"
                        >
                            Contraseña
                        </InputLabel>

                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        sx={{

                                            fontSize: '1rem',
                                        }}
                                    >
                                        {showPassword ? <VisibilityOff sx={{

                                            fontSize: '1.3rem',
                                        }} /> : <Visibility sx={{

                                            fontSize: '1.3rem',
                                        }} />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            onChange={onChangePassword}
                            value={password}
                            label={'Password'}
                            sx={styleinputpass}
                            style={{

                                width: '100%',
                                position: 'relative'

                            }}
                        />
                    </FormControl>
                    {isError && (<Typography variant="h4" component="h4" style={{ color: 'red', }}>
                        Credenciales incorrectas
                    </Typography>)}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-evenly'
                    }}>

                        <Button variant="contained"
                            sx={stylebottommodal}
                            onClick={handlerAuthPassword}
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
        </div>

    )
}
