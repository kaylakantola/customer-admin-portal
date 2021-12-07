import React, {useEffect, useState} from 'react';
import {Stack} from "@mui/material";
import Divider from '@mui/material/Divider'
import {ThemeProvider} from '@mui/material/styles';
import {Item, PortalLayout, mainTheme} from './styles'
import PortalHeader from './PortalHeader'
import PortalReset from './PortalReset'
import UploadDropzone from "./UploadDropZone";
import CustomerGrid from "./CustomerGrid";
import parseCustomerData from '../utils/parse-customer-data'

const CustomerAdminPortal = ({companyName = "Outdoor.sy"}) => {
    // set initial state
    const [customers, setCustomers] = useState([])
    const [customersLoading, setCustomersLoading] = useState(false)
    const [resetButtonDisabled, setResetButtonDisabled] = useState(true)

    // when there are customers loaded, enable the "reset" button
    useEffect(() => {
        const disabled = customers.length < 1
        setResetButtonDisabled(disabled)
    }, [customers])

    // a function to reset component to initial state
    const resetPortal = () => {
        setCustomers([])
        setCustomersLoading(false)
        setResetButtonDisabled(true)
    }

    return (
        <ThemeProvider theme={mainTheme}>
            <PortalLayout>
                <Stack spacing={1}>
                    <Item>
                        <PortalHeader companyName={companyName}/>
                    </Item>
                    <Divider/>
                    <Item>
                        <PortalReset resetPortal={resetPortal} resetButtonDisabled={resetButtonDisabled}/>
                    </Item>
                    <Item>
                        <UploadDropzone
                            customers={customers}
                            setCustomers={setCustomers}
                            setCustomersLoading={setCustomersLoading}
                            parseCustomerData={parseCustomerData}
                        />
                    </Item>
                    <Item>
                        <CustomerGrid
                            customers={customers}
                            customersLoading={customersLoading}
                        />
                    </Item>
                </Stack>
            </PortalLayout>
        </ThemeProvider>
    )
}

export default CustomerAdminPortal;
