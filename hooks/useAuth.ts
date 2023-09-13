import axios from 'axios';
import { deleteCookie } from 'cookies-next';
import { useContext } from 'react';
import { AuthenticationContext } from '@/context/AuthContext';
import { toast } from 'react-hot-toast';

export default function useAuth() {
    const { setAuthState } = useContext(AuthenticationContext);

    // Sign In
    async function signin({
            email,
            password,
        }: {
            email: string;
            password: string;
        },
        handleClose: () => void) {
        setAuthState({
            data: null,
            error: null,
            loading: true
        });   
        
        try {
            const response = await axios.post(
                'http://localhost:3000/api/auth/signin',
                { email, password }
            );

            setAuthState({
                data: response.data,
                error: null,
                loading: false
            });

            handleClose();
            toast.success(`You're successfully logged in.`);
        } 
        catch (error: any) {
            setAuthState({
                data: null,
                error: error.response.data.errorMessage,
                loading: false
            });

            toast.error(`Error: ${error.response.data.errorMessage}`);
        }
    }

    // Sign Up
    async function signup({
            email,
            password,
            firstName,
            lastName,
            city,
            phone
        }: {
            email: string;
            password: string;
            firstName: string;
            lastName: string;
            city: string;
            phone: string;
        },
        handleClose: () => void) {
        setAuthState({
            data: null,
            error: null,
            loading: true,
        });
        
        try {
            const response = await axios.post(
                'http://localhost:3000/api/auth/signup',
                { 
                    email,
                    password,
                    firstName,
                    lastName,
                    city,
                    phone
                }
            );

            setAuthState({
                data: response.data,
                error: null,
                loading: false
            });

            handleClose();
            toast.success(`Your account was successfully created. Logging you in now.`);
        } 
        catch (error: any) {
            setAuthState({
                data: null,
                error: error.response.data.errorMessage,
                loading: false,
            });

            toast.error(`Error: ${error.response.data.errorMessage}`);
        }
    }
    
    // Sign Out
    function signout() {
        deleteCookie('jwt');

        setAuthState({
            data: null,
            error: null,
            loading: false
        });
    }

    return {
        signin,
        signup,
        signout
    };
}