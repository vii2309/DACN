import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseConfigs } from "@/utils/firebase";

const SocialLogin: React.FC = () => {
    const handleGoogleLogin = () => {
        const auth = getAuth(firebaseConfigs);
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((response: Object) => {
                console.log(response);
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };

    return (
        <Box sx={{ mb: 2 }}>
            <Typography sx={{
                fontSize: 13,
                color: 'grey.700',
                textAlign: 'center',
                position: 'relative',
                mb: 3,
                '&:before': {
                    content: '" "',
                    width: '100px',
                    height: '1px',
                    position: 'absolute',
                    top: '10px',
                    left: 0,
                    bgcolor: '#f1f1f1'
                },
                '&:after': {
                    content: '" "',
                    width: '100px',
                    height: '1px',
                    position: 'absolute',
                    top: '10px',
                    right: 0,
                    bgcolor: '#f1f1f1'
                }
            }}>or login with</Typography>
            <Button
                fullWidth
                component="span"
                onClick={() => handleGoogleLogin()}
                sx={{ bgcolor: 'grey.100' }}>
                <Image src="/google.svg" alt="Google Logo" width={16} height={16} />
                <Typography
                    sx={{
                        ml: 1,
                        color: "#00001F",
                        fontSize: 14,
                        fontWeight: 'bold',
                        textTransform: 'capitalize'
                    }}>
                    Continue With Google
                </Typography>
            </Button>
        </Box>
    )
};

export default SocialLogin;