import Link from "next/link";
import { Button, Typography, Divider, Checkbox, TextField, FormControl } from '@mui/material';
import { ModalContainer } from "./ModalContainer";
import React, { useEffect, useState } from 'react';

export const UserContext = React.createContext({
    username: '',
    rememberuser: false,
});

const stylebottom = {
    backgroundColor: '#0067B1',
    textTransform: 'none',
    width: '30%',
    marginTop: '3%',
    marginBottom: '3%',
    fontSize: '1rem'
}


export const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [rememberuser, setRememberuser] = useState(false);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const usernamestorage = localStorage.getItem('rememberuser');
        setUsername(usernamestorage ?? '');
        usernamestorage && setRememberuser(true);
    }, [])

    const handlerRecordar = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setRememberuser(target.checked);
    }

    const handlerUserName = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(target.value);
    }
    return (
        <>
            <div>
                <Typography mt={'5%'} variant="h1" style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>
                    Ingresa en nuestra banca en línea
                </Typography>
                <Typography textAlign={'center'} variant="h4" style={{ color: '#7B7B7B' }}>
                    y realiza tus operaciones a cualquier hora
                </Typography>
            </div>
            <FormControl style={{ marginTop: '6%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextField
                    sx={{
                    }}
                    InputLabelProps={{
                        style: {
                            fontSize: '1rem',
                            // paddingLeft: '2%',
                            top: '-7px',
                        }
                    }}
                    id="outlined-basic"
                    label={"Usuario único"}
                    margin="dense"
                    variant="outlined"
                    inputProps={{
                        maxLength: '16',
                    }}
                    InputProps={{
                        style: {
                            fontSize: '1rem',
                            height: "2.5rem",
                        },

                    }}
                    style={{
                        width: '70%',
                    }}
                    onChange={handlerUserName}
                    value={username}
                />
                <div style={{ width: '75%', display: 'flex', justifyContent: 'flex-start' }}>
                    <Checkbox onChange={handlerRecordar} checked={rememberuser}
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 24 } }} />
                    <Typography variant="h3" style={{ color: '#0067B1', paddingTop: '13px', fontWeight: '400' }}>
                        Recordar mi usuario en este equipo
                    </Typography>
                </div>
                <UserContext.Provider value={{ username, rememberuser }}>
                    <Button variant="contained"
                        type='submit'
                        onClick={() => setModal(true)}
                        sx={stylebottom}
                    >Ingresar</Button>
                    {modal && <ModalContainer viewModal={setModal} />}

                </UserContext.Provider>

                <Typography variant="h3" style={{ color: '#0067B1', paddingTop: '13px', fontWeight: '500' }}>
                    ¿Olvidaste tu usuario o clave?
                </Typography>

                <Divider sx={{ width: '60%', my: 1.2 }} />

                <Typography variant="h2" style={{ color: '#494949' }}>
                    Si eres nuevo clienteBDV
                </Typography>

                <Link href="/pagina">
                    <Typography mt={1} mb={3} variant="h2" style={{ color: '#0067B1', textDecoration: 'underline' }}>
                        Regístrate aquí
                    </Typography>
                </Link>
            </FormControl>
        </>
    )
}
