import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";



export default function PortalReset({
                                         customers,
                                         resetPortal
                                     }) {

    const [showReset, setShowReset] = useState(false)

    useEffect(() => {
        const show = customers.length > 0
        setShowReset(show)
    }, [customers])

    return (
        <Box sx={{width: '100%'}}>
            <Button variant="text" onClick={resetPortal} disabled={!showReset}>Reset</Button>
        </Box>
    )
}
