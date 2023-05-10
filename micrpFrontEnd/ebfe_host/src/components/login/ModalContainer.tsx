import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState, FC, useContext } from 'react';
import { PasswordForm } from './PasswordForm';
import { AuthTKForm } from './AuthTKForm';
import { SelAccountForm } from './SelAccountForm';
import { UserContext } from './LoginForm';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: '35%',
    bgcolor: 'white',
    border: '1px solid #000',
    boxShadow: 10,
    borderRadius: '8px',
    p: 4,
    height: 'auto',
    '@media (max-width: 600px)': {
        width: '80%'
    },
    '@media (min-width: 601px) and (max-width: 960px)': {
        width: '60%'
    },
    '@media (min-width: 961px)': {
        width: '45%'
    },
}


const stylebottommodal = {
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

}

type ButtonModalContainerType = {
    viewModal: (status: boolean) => void,
}

export const ModalContainer: FC<ButtonModalContainerType> = ({ viewModal }) => {

    const { username, rememberuser } = useContext(UserContext);
    const [view, setView] = useState(1);
    const [open, setOpen] = useState(true);
    function handlerPassword(status: boolean = true) {
        status && setView(2);
    }
    function handlerToken(status: boolean) {
        status && setView(3);
    }
    const handleClose = () => {
        setView(1);
        setOpen(false);
        viewModal(false);
    };

    if (username && username.trim().length >= 4) {
        if (rememberuser) {
            localStorage.setItem('rememberuser', username);
        } else {
            localStorage.removeItem('rememberuser');
        }
    }

    function selectView(view: number) {
        switch (view) {
            case 1:
                return (<PasswordForm handleCloseModal={handleClose} handlerValidatedPassword={handlerPassword} />)
            case 2:
                return (<AuthTKForm handleCloseModal={handleClose} handlerValidatedAuthTK={handlerToken} />)
            case 3:
                return (<SelAccountForm handlerCloseModal={handleClose} />)
            default:
                return (<PasswordForm handleCloseModal={handleClose} handlerValidatedPassword={handlerPassword} />)
        }
    }

    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {selectView(view)}
                </Box>
            </Modal>
        </div>
    );
}