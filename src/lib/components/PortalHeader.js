import React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

// Renders the header of the portal.
// companyName - string, optional, defaults to "Default", name of the company using the portal
export default function PortalHeader({companyName = "Default"}) {
    return (
        <Box sx={{width: '100%'}}>
            <Typography variant="h5" component="div">
                {`${companyName} Customer Management Portal`}
            </Typography>
        </Box>
    )
}
