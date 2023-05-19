import '../App.css';
import { Grid, FormControl, OutlinedInput, Box, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


function ChatFooter() {
    return (
        <div className='chat-footer'>
            <Grid container spacing={1} className='chat-footer-grid'>
                <Grid item sm={11} >
                    <Box component="form" noValidate autoComplete="off">
                        <FormControl>
                            <OutlinedInput placeholder="Message" />
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item sm={1} >
                    <IconButton aria-label="send" size="large">
                        <SendIcon fontSize="inherit" className='send-icon' />
                    </IconButton>
                </Grid>
            </Grid>

        </div>
    );
}

export default ChatFooter;
