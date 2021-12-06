import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import CustomerGrid from "./CustomerGrid";
import UploadDropzone from "./UploadDropZone";

const CustomerAdminPortal = () => {
    const [customers, setCustomers] = useState([])
    return (
        <div style={{width: '100%'}}>
        <Stack spacing={2} mt={2}>
            <UploadDropzone setCustomers={setCustomers}/>
            <CustomerGrid customers={customers}/>
        </Stack>
        </div>
    )
}

export default CustomerAdminPortal;
