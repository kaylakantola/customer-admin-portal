import React from 'react'
import { GridOverlay, DataGrid } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';

// defines the grid columns
const columns = [
    {field: 'fullName', headerName: 'Full Name', flex: 1},
    {field: 'email', headerName: 'Email', flex: 1},
    {field: 'vehicleType', headerName: 'Vehicle Type', flex: 1},
    {field: 'vehicleName', headerName: 'Vehicle Name', flex: 1},
    {field: 'vehicleLength', headerName: 'Vehicle Length (feet)', flex: .5},
];

// UI to indicate loading
function CustomLoadingOverlay() {
    return (
        <GridOverlay>
            <div style={{ position: 'absolute', top: 0, width: '100%' }}>
                <LinearProgress />
            </div>
        </GridOverlay>
    );
}


// Renders the CustomerGrid section of the portal.
// customers - array, optional, defaults to [], represents "customers" state of parent component
// customersLoading - boolean, optional, defaults to false,  represents "customersLoading" state of parent component

export default function CustomerGrid({customers=[], customersLoading=false}) {
    return (
            <div style={{display: 'flex', height: '100%', width: "100%"}}>
                <div style={{flexGrow: 1}}>
                    <DataGrid
                        rows={customers}
                        columns={columns}
                        autoHeight
                        components={{
                            LoadingOverlay: CustomLoadingOverlay
                        }}
                        loading={customersLoading}
                    />
                </div>
            </div>

    )
}
