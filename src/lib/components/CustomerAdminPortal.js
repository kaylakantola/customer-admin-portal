import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import CustomerGrid from "./CustomerGrid";
import UploadDropzone from "./UploadDropZone";
import parseCustomerData from '../utils/parse-customer-data'

const CustomerAdminPortal = () => {
    const [customers, setCustomers] = useState([])
    const [customersLoading, setCustomersLoading] = useState(false)
    return (
        <div style={{width: '100%'}}>
            <Stack spacing={2}>
                <UploadDropzone
                    setCustomers={setCustomers}
                    setCustomersLoading={setCustomersLoading}
                    parseCustomerData={parseCustomerData}
                />
                <CustomerGrid
                    customers={customers}
                    customersLoading={customersLoading}
                />
            </Stack>
        </div>
    )
}

export default CustomerAdminPortal;
