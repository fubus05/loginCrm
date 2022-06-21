import { Box, Button, Link, Typography, TextField, InputAdornment, InputLabel, Checkbox, FormControlLabel, FormGroup} from '@mui/material';
import ReactLogo2 from '../assets/background/2.svg';
import ReactLogo3 from '../assets/background/3.svg';
import ReactLogo1 from '../assets/background/1.svg';
import Google from '../assets/background/google.svg';
import Facebook from '../assets/background/Facebook.svg'
import Apple from '../assets/background/apple.svg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import Hero from '../assets/background/logoHero.svg'
import { GoogleLogin } from 'react-google-login';
import { useState } from 'react';


export default function UseFormControl() {
    const [isPass, setState] = useState(true)
    return (
      <Box sx={{
          height: '100vh',
          background: 'linear-gradient(131.46deg, #F8FAFB 28.17%, #EDF5FF 94.9%), #F8FAFB;',
          position: 'relative',
      }}>
         <Box component='img' src={ReactLogo3} alt="vv" sx={{
                position: 'absolute',
                right: '0'
            }}/>
         <Box component='img' src={ReactLogo1} alt="vv" sx={{
                position: 'absolute',
                right: 'calc(50% - 124px)',
                top: 'calc(50% - 21px)',
                display: 'none'
            }}/>
        <Box component='img' src={ReactLogo2} alt="vv" sx={{
            position: 'absolute',
            bottom: '0'
            }}/>
        <Box sx={{ 
            position: 'absolute',
            bottom: '0',
            left: '42%'
            
            }}>
                <Box display="inline-flex">
                    <Typography variant='primary'>Do not have account?</Typography>
                    <Typography variant='secondary'>Register</Typography>
                </Box>
            </Box>

        <Box sx={{
            justifyContent: 'center',
            height: '100%'
            }}>
            <Box>
            <Box component='img' src={Hero} sx={{mx:'auto', mb: '40px'}}/>
            <Box sx={{
                background: 'white',
                margin: '0 auto',
                width: '35%',
                height: '80%',
                borderRadius: '16px',
                textAlign: 'center',
                padding: '40px',
            }}>
                <Box sx={{
                    margin: 'auto',
                    width: '80%'
                }}>
                <Typography variant='h3'>Sign In</Typography>
                <Typography variant='p'>Please sign up to your personal account if you want to use all our premium products</Typography>
                </Box>
                <Box>
                    <Box>
                    <InputLabel variant='label' sx={{textAlign: 'left', fontFamily: 'IBM Plex Sans', color: '#121F3E', mt: '32px', mb: '12px'}}>
                        Email
                    </InputLabel>
                    <TextField
                            type='email'
                            placeholder='Enter an email address'
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <EmailIcon/>
                                </InputAdornment>
                            )
                            }}
                            sx={{width: '100%'}}
                            
                        />
                    </Box>
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mt: '20px',
                            mb: '12px'
                        }}>
                            <InputLabel variant='label' sx={{fontFamily: 'IBM Plex Sans', color: '#121F3E'}}>
                                Password
                            </InputLabel>
                            <Link underline='none' variant='a'>Forgot Password?</Link>
                        </Box>
                        <TextField
                            placeholder='Enter a password'
                            type={isPass ? 'text' : 'password'}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <LockIcon/>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment>
                                    <VisibilityIcon onClick={() => setState(prev => !prev)}/>
                                </InputAdornment>
                            )
                            }}
                            variant="outlined"
                            sx={{
                                width: '100%',
                            }}
                        />
                    </Box>      
                </Box>
                <FormGroup>
                    <FormControlLabel control={<Checkbox color="success" sx={{
                        '& .MuiSvgIcon-root': { fontSize: '16px' },}}/>} label="Remember Me" sx={{my: '16px'}}/>
                </FormGroup>
                <Button  sx={{ width: '100%' , background: '#1E86FF', color: 'white', mb: '12px'}}>
                    Log In
                </Button>
                <Typography variant='sep'>OR</Typography>
                <Box sx={{ display: 'block'}}>
                <GoogleLogin
                    clientId={'111'}
                    cookiePolicy={'single_host_origin'}
                    render={renderProps => (
                        <Button sx={{
                            width: '100%',
                            color: '#8D98AF',
                            border: 1,
                            borderColor: '#8D98AF'
                        }} startIcon={<Box component='img' src={Google}/>}>
                            Sign in with Google
                        </Button>
                    )}
                    />
                     <GoogleLogin
                    clientId={'111'}
                    cookiePolicy={'single_host_origin'}
                    render={renderProps => (
                        <Button sx={{
                            width: '100%',
                            color: '#8D98AF',
                            border: 1,
                            borderColor: '#8D98AF',
                            mt: '12px'
                        }} startIcon={<Box component='img' src={Facebook}/>}>
                            Sign in with Facebook
                        </Button>
                    )}
                    />
                     <GoogleLogin
                    clientId={'111'}
                    cookiePolicy={'single_host_origin'}
                    render={renderProps => (
                        <Button sx={{
                            width: '100%',
                            color: '#8D98AF',
                            border: 1,
                            borderColor: '#8D98AF',
                            mt: '12px'
                        }} startIcon={<Box component='img' src={Apple}/>}>
                            Sign in with Apple
                        </Button>
                    )}
                    />
                </Box>
            </Box>
            </Box>
        </Box>

      </Box>
    );
}
