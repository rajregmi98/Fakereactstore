import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { checkUserLogin } from '../../store/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
  const dispatch = useDispatch();
  const isLoading=useSelector(state => state.auth.isLoading);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginData={
      username: data.get('username'),
      password: data.get('password'),
    };
    dispatch(checkUserLogin(loginData));
  };

  

  return (
    <Container component="main" maxWidth="xs">
        <Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p:2,
            border: '1px solid #dbdbdb'
        }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
            <Typography component="h1" variant="h5">
                Signin
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{  mt: 1, }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="username"
                name="username"
                autoComplete="username"
                value="mor_2314"
                autoFocus
                />
                <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value="83r5^_"
                autoComplete="current-password"
                />

                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isLoading}
                >
                {isLoading ? 'Loading...' : 'Sign In'}
                </Button>
            </Box>
        </Box>
    </Container>
  );
}
