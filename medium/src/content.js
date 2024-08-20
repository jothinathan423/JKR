import { Box, Typography } from "@mui/material";


export const Content = () => {
    return (
        <>
            <Box className='row'>
                <Box sx={{ }} className='col-6'>
                    

                        <Box  className='col-6'>
                            <Typography>Jothinathan WEB Developer</Typography>
                            <Typography variant="h4">This is my Self uruttu</Typography>
                            <Typography>My name is jothinathan.I be the best person.I am intelligent fellow.</Typography>
                        </Box>
                        <Box className='col-6 '>
                            <img src="/ComfyUI_00002_.jpg" alt="Profile" style={{ width: '100%', borderRadius: '50%' }} />
                        </Box>


                </Box>
                <Box sx={{ backgroundColor: '#F6F6F6' }} className='col-6' >jothinathan</Box>
                
                
            </Box>
        
        </>
    );
}