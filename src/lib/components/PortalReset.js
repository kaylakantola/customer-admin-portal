import React from 'react';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

// Renders the Reset button section of the portal.
// resetButtonDisabled - boolean, optional, defaults to true, represents whether the Reset button is disabled
// resetPortal - function, required, a function that resets the portal to pass to the onClick
export default function PortalReset({resetButtonDisabled = true, resetPortal}) {
    return (
        <Box sx={{width: '100%'}}>
            <Button
                variant="text"
                onClick={resetPortal}
                disabled={resetButtonDisabled}>
                Reset
            </Button>
        </Box>
    )
}
