//import { CustomerAdminPortal } from 'customer-admin-portal-kaylakantola';
import { CustomerAdminPortal } from './lib';
import TopAppBar from './TopAppBar'

function App() {
  return (
    <div>
        <TopAppBar name={"Outdoor.sy"}/>
        <CustomerAdminPortal />
    </div>
  );
}

export default App;
