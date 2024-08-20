import { Box, Container,Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import {Google as GoogleIcon,Facebook as FacebookIcon}from '@mui/icons-material';
function App(){
    return(
        <>
          <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Typography variant="h4" gutterBottom>
        ******
      </Typography>
      <Typography gutterBottom>Continue with</Typography>

      <Box my={3} width="100%">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<GoogleIcon />}
          sx={{
            mb: 2,
            backgroundColor: '#4285F4',
            '&:hover': { backgroundColor: '#357AE8' },
          }}
        >
          Continue with Google
        </Button>

        <Typography align="center" sx={{ my: 1 }}>
          or
        </Typography>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<FacebookIcon />}
          sx={{
            backgroundColor: '#4267B2',
            '&:hover': { backgroundColor: '#365899' },
          }}
        >
          Continue with Facebook
        </Button>
      </Box>
    </Container>
        </>
            
    );
    
}
export default App;
