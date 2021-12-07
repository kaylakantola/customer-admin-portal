import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FileIcon from '@mui/icons-material/Description';
import TrashIcon from '@mui/icons-material/Delete';
import Typography from "@mui/material/Typography";


export default function CustomerFiles({
                                          acceptedCustomerFiles,
                                          rejectedCustomerFiles,
                                          resetPortal
                                      }) {

    const [showReset, setShowReset] = useState(false)

    useEffect(() => {
        const show = acceptedCustomerFiles.length + rejectedCustomerFiles.length > 0
        setShowReset(show)
    }, [acceptedCustomerFiles,
        rejectedCustomerFiles])

    return (
        <Box sx={{width: '100%', bgcolor: 'background.paper'}}>
            <Typography variant="h5" component="div">
                Uploads
            </Typography>
            {showReset &&
                (<List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={resetPortal}>
                            <ListItemIcon>
                                <TrashIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Reset All"/>
                        </ListItemButton>
                    </ListItem>
                </List>)}

            {acceptedCustomerFiles.length > 0 &&
                (
                    <>
                        <Typography variant="h6" component="div">
                            Accepted Files
                        </Typography>
                        <List>
                            {acceptedCustomerFiles.map(acceptedFile => (
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <FileIcon/>
                                        </ListItemIcon>

                                    <ListItemText primary={acceptedFile.name}/>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </>)}

            {rejectedCustomerFiles.length > 0 && (
                <>
                    <Typography variant="h6" component="div">
                        Rejected Files
                    </Typography>
                    <List>
                        {rejectedCustomerFiles.map(rejectedFile => (
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FileIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={rejectedFile.file.name}
                                                  secondary={`Reason: ${rejectedFile.errors[0].message}`}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </>)}
        </Box>
    )
}
