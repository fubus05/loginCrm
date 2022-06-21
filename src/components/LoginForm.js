import { Box, Button, Link, Typography, TextField, InputAdornment, InputLabel, Checkbox, FormControlLabel, FormGroup} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { GoogleLogin } from 'react-google-login';

export default function LoginForm () {
    return(
        <Box sx={{
            background: 'white',
            margin: '0 auto',
            width: '35%',
            height: '80%',
            borderRadius: '16px',
            textAlign: 'center',
            padding: '40px'
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
                        type='email'
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <LockIcon/>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="start">
                            <VisibilityIcon/>
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
                <FormControlLabel control={<Checkbox color="success" sx={{
                    '& .MuiSvgIcon-root': { fontSize: '16px' },}}/>} label="Remember Me" sx={{my: '16px'}}/>
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

                    }}/>
                )}
                />
            </Box>
        </Box>
    )
}