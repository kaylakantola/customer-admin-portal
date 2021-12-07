import React from 'react';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";


const defaultResetFn = () => console.log("Pass in a reset function here")

export default function PortalReset({
                                        resetButtonDisabled=true,
                                        resetPortal=defaultResetFn
                                     }) {

    return (
        <Box sx={{width: '100%'}}>
            <Button variant="text" onClick={resetPortal} disabled={resetButtonDisabled}>Reset</Button>
        </Box>
    )
}
