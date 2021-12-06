import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CustomerGrid from "./CustomerGrid";
import CustomerFiles from './CustomerFiles'
import UploadDropzone from "./UploadDropZone";
import parseCustomerData from '../utils/parse-customer-data'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const CustomerAdminPortal = () => {
    const [customers, setCustomers] = useState([])
    const [customersLoading, setCustomersLoading] = useState(false)
    const [acceptedCustomerFiles, setAcceptedCustomerFiles] = useState([])
    const [rejectedCustomerFiles, setRejectedCustomerFiles] = useState([])

    const resetPortal = () => {
        setCustomers([])
        setCustomersLoading(false)
        setAcceptedCustomerFiles([])
        setRejectedCustomerFiles([])
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Item>
                        <UploadDropzone
                            customers={customers}
                            setCustomers={setCustomers}
                            setCustomersLoading={setCustomersLoading}
                            parseCustomerData={parseCustomerData}
                            acceptedCustomerFiles={acceptedCustomerFiles}
                            setAcceptedCustomerFiles={setAcceptedCustomerFiles}
                            rejectedCustomerFiles={rejectedCustomerFiles}
                            setRejectedCustomerFiles={setRejectedCustomerFiles}
                        />
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <CustomerFiles
                            acceptedCustomerFiles={acceptedCustomerFiles}
                            rejectedCustomerFiles={rejectedCustomerFiles}
                            resetPortal={resetPortal}
                        />
                    </Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>
                        <CustomerGrid
                            customers={customers}
                            customersLoading={customersLoading}
                        />
                    </Item>
                </Grid>

            </Grid>
        </Box>
    )
}

export default CustomerAdminPortal;
