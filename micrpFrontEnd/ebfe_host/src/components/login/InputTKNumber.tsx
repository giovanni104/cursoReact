import React, { FC, useRef } from 'react'
import { TextField, IconButton, InputAdornment } from '@mui/material';
import Image from 'next/image';
import 'animate.css';
type InputTKNumberType = {
    setToken: (token: string) => void,
    isError: boolean,
    setError: (err: boolean) => void
}
const InputTKNumber: FC<InputTKNumberType> = ({ setToken, isError, setError }) => {
    const inputgroup = useRef<HTMLInputElement[]>([])
    const cols: string[] = ["0", "1", "2", "3", "4", "5", "6", "7"];
    function changeFocus(inputs: Element[], target: HTMLInputElement, event: React.KeyboardEvent<HTMLInputElement>, operacion: string) {
        let backInputIndex;
        if (operacion === '-') {
            backInputIndex = inputs.indexOf(target) - 1;
        } else {
            backInputIndex = inputs.indexOf(target) + 1;
        }
        const backInput = inputs[backInputIndex] as HTMLInputElement;
        if (backInput) {
            event.preventDefault();
            backInput.focus();
        }
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const keyCode = event.key;
        const target = event.target as HTMLInputElement;
        // Si la tecla presionada no es un número, no hace nada
        const inputs = Array.from(document.getElementsByClassName('inputSms'));

        if (keyCode === 'Delete' || keyCode === 'Backspace') {

            changeFocus(inputs, target, event, '-');
            target.value = '';
            setValueToken();
            event.preventDefault();
            return;
        }

        if (!/^[0-9]+$/.test(keyCode) && keyCode !== 'Tab') {
            event.preventDefault();
            return;
        }
        changeFocus(inputs, target, event, '+');

        if (keyCode !== 'Tab') {
            console.log(keyCode);

            target.value = keyCode;
            setValueToken();
        }



    }

    const setValueToken = () => {
        let tokenvalue = '';

        inputgroup.current.map(input => input.value ? tokenvalue += input.value : null
        );

        if (tokenvalue.length == inputgroup.current.length) {
            setToken(tokenvalue);
        } else {
            setToken('');
        }
    }
    const handlePaste = (pasteText: string) => {
        setError(false);
        const regex = /^[0-9]+$/; // Expresión regular para validar solo números
        if (regex.test(pasteText) && pasteText.length == 8) { // Validamos el texto con la expresión regular y que su longitud sea 8

            const chars = pasteText.split('');

            for (let i = 0; i < chars.length && i < cols.length; i++) {
                const char = chars[i];
                const textField = document.getElementById(i.toString()) as HTMLInputElement;
                textField.value = char;
            }
            setValueToken();
        }
    }
    const handleClick = async (event: React.MouseEvent) => {
        try {
            const pasteText = await navigator.clipboard.readText();
            handlePaste(pasteText);
            event.preventDefault();
        } catch (error) {
            console.error('Error al leer del portapapeles:', error);
            event.preventDefault();
        }
    };
    const handleFocus = (event: React.FocusEvent) => {
        setError(false)
    }

    return (
        <div style={
            {
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center'
            }
        }>
            <div style={{
                display: 'flex',
                alignItems: 'center',
            }}
            >
                {cols.map((rec, index) => {
                    return (
                        <TextField
                            key={rec}
                            id={rec}
                            variant="outlined"
                            error={isError}
                            className={isError ? 'animate__animated animate__headShake' : ''}

                            sx={{
                                borderRadius: '0px',
                                marginRight: '1%',
                                minWidth: '10px',
                                maxWidth: '50px',

                            }}
                            InputLabelProps={{

                                shrink: true,

                            }
                            }
                            inputProps={

                                {
                                    maxLength: 1,
                                    className: 'inputSms',
                                    ref: (ref: HTMLInputElement) => inputgroup.current[index] = ref,
                                    style: {
                                        height: '1rem',
                                        minWidth: '50%',
                                        borderRadius: '0px',
                                        fontSize: '1.2rem',
                                        textAlign: 'center',
                                    },
                                    sx: {
                                        paddingLeft: '3px',
                                        paddingRight: '3px',

                                    },
                                    inputMode: 'numeric'
                                }
                            }

                            onKeyDown={handleKeyDown}
                            onFocus={handleFocus}
                        />
                    )
                })
                }
                <IconButton onClick={handleClick} aria-label="delete">
                    <Image src={'/image/icons/shape.svg'} alt="Img login" width={0} height={0} style={{
                        width: 'auto',
                        height: '100%',
                    }} />
                </IconButton>
            </div>
        </div>
    )
}

export default InputTKNumber;



