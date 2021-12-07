import React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

export default function PortalHeader({companyName = "Default"}) {
    return (
        <Box sx={{width: '100%'}}>
            <Typography variant="h5" component="div">
                {`${companyName} Customer Management Portal`}
            </Typography>
        </Box>
    )
}
