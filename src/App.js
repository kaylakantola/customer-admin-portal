//import { CustomerAdminPortal } from 'customer-admin-portal-kaylakantola';
import { CustomerAdminPortal } from './lib';
import TopAppBar from './TopAppBar'

function App() {
  return (
    <div>
        <TopAppBar name={"Outdoor.sy"}/>
        <div style={{height: 20}} />
        <CustomerAdminPortal />
    </div>
  );
}

export default App;
