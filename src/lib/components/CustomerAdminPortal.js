import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider'
import PortalHeader from './PortalHeader'
import PortalReset from './PortalReset'
import UploadDropzone from "./UploadDropZone";
import CustomerGrid from "./CustomerGrid";
import parseCustomerData from '../utils/parse-customer-data'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Stack} from "@mui/material";

const Item = styled('div')(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary
}));

const mainTheme = createTheme({
    palette: {
        primary: {
            main: "#005825",
        },
    },
});

const PortalLayout = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    flexGrow: 1
}));
const CustomerAdminPortal = ({companyName = "Outdoor.sy"}) => {
    const [customers, setCustomers] = useState([])
    const [customersLoading, setCustomersLoading] = useState(false)

    const resetPortal = () => {
        setCustomers([])
        setCustomersLoading(false)
    }

    return (
        <ThemeProvider theme={mainTheme}>
            <PortalLayout>
                <Stack spacing={1}>
                    <Item>
                        <PortalHeader companyName={companyName}/>
                    </Item>
                    <Divider />
                    <Item>
                        <PortalReset resetPortal={resetPortal} customers={customers}/>
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
