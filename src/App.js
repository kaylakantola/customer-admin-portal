import { CustomerAdminPortal } from 'customer-admin-portal-kaylakantola';
//import {CustomerAdminPortal} from './lib';
import TopAppBar from './TopAppBar'
import {createTheme, ThemeProvider} from '@mui/material/styles';

const mainTheme = createTheme({
    palette: {
        primary: {
            main: "#005825",
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={mainTheme}>
            <div>
                <TopAppBar name={"KaylaCorp"}/>
                <div style={{height: 20}}/>
                <CustomerAdminPortal companyName={"KaylaCorp"}/>
            </div>
        </ThemeProvider>
    );
}

export default App;
