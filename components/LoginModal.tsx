'use client';
import { useEffect, useState, useContext } from 'react';
import useAuth from '@/hooks/useAuth';
import { AuthenticationContext } from '@/context/AuthContext';
import { Alert, Box, Button, CircularProgress, Modal } from '@mui/material';
import LoginModalInputs from './LoginModalInputs';

const style = {
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: '8px',
    boxShadow: 24,
    left: '50%',
    p: 4,
    pt: 3,
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
};

export default function LoginModal({ isSignedIn }: { isSignedIn: boolean }) {
    const [open, setOpen] = useState(false);
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        password: ''
    });
    const [disabled, setDisabled] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { signin, signup } = useAuth();
    const { loading, data, error } = useContext(AuthenticationContext);

    useEffect(() => {
        if (isSignedIn) {
            if (inputs.password && inputs.email) {
                return setDisabled(false);
            }
        } else {
            if (
                inputs.firstName &&
                inputs.lastName &&
                inputs.email &&
                inputs.password &&
                inputs.city &&
                inputs.phone
            ) {
                return setDisabled(false);
            }
        }

        setDisabled(true);
    }, [inputs]);

    function renderContent(signinContent: string, signupContent: string) {
        return isSignedIn ? signinContent : signupContent;
    }

    function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    function handleClick() {
        if (isSignedIn) {
            signin({ email: inputs.email, password: inputs.password }, handleClose);
        } else {
            signup(inputs, handleClose);
        }
    }

    return (
        <div>
            <button 
                className={`${renderContent(
                'bg-[#3e496a] border-[#3e496a] text-white hover:bg-[#4e5b83] hover:border-[#4e5b83]',
                'border-gray-300'
                )} border p-1 px-4 rounded mr-3 transition-colors duration-300`} 
                onClick={handleOpen}>
                {renderContent('Sign In', 'Sign Up')}
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    {loading ? (
                        <div className="p-2 flex justify-center">
                            <CircularProgress />
                        </div>
                    ) : (
                        <div className="p-2">
                            {error ? (
                                <Alert severity="error" className="mb-4">
                                    {error}
                                </Alert>
                            ) : null}

                            <div className="uppercase font-bold text-center pb-2 border-b mb-2">
                                <div className="text-lg">
                                    {renderContent('Sign In', 'Create Account')}
                                </div>
                            </div>
                            <div className="m-auto">
                                <h2 className="text-xl font-light text-center">
                                    {renderContent(
                                        'Log Into Your Account', 
                                        'Create Your OpenTable Account'
                                    )}
                                </h2>
                                <LoginModalInputs 
                                    inputs={inputs}
                                    handleChangeInput={handleChangeInput}
                                    isSignin={isSignedIn}
                                />
                                <button className="flex items-center justify-center rounded 
                                    bg-[#da3743] hover:bg-[#e1414e] transition-colors 
                                    duration-300 px-9 py-2 text-white w-full mt-2"
                                    disabled={disabled}
                                    onClick={handleClick}>
                                    {renderContent('Sign In', 'Create Account')}
                                </button>
                            </div>
                        </div>
                    )}
                </Box>
            </Modal>
        </div>
    )
}