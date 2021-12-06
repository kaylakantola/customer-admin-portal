import React from 'react'
import { GridOverlay, DataGrid } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';

// const rows = [
//     {id: 1, fullName: 'Greta Thunberg', email: 'gretat@future.com', vehicleType: 'sailboat', vehicleName: 'Fridays For Future', vehicleLength: 32},
//     {id: 2, fullName: 'Greta Zhunberg', email: 'gretaz@future.com', vehicleType: 'yacht', vehicleName: 'Fridays For Future', vehicleLength: 52},
//     {id: 3, fullName: 'Greta Ahunberg', email: 'gretaa@future.com', vehicleType: 'catamaran', vehicleName: 'Fridays For Future', vehicleLength: 10},
//     {id: 4, fullName: 'Greta Bhunberg', email: 'gretab@future.com', vehicleType: 'sunfish', vehicleName: 'Fridays For Future', vehicleLength: 5},
//
// ];

const columns = [
    {field: 'fullName', headerName: 'Full Name', flex: 1},
    {field: 'email', headerName: 'Email', flex: 1},
    {field: 'vehicleType', headerName: 'Vehicle Type', flex: 1},
    {field: 'vehicleName', headerName: 'Vehicle Name', flex: 1},
    {field: 'vehicleLength', headerName: 'Vehicle Length (feet)', flex: .5},
];


function CustomLoadingOverlay() {
    return (
        <GridOverlay>
            <div style={{ position: 'absolute', top: 0, width: '100%' }}>
                <LinearProgress />
            </div>
        </GridOverlay>
    );
}



export default function CustomerGrid({customers, customersLoading}) {
    return (
            <div style={{display: 'flex', height: '100%'}}>
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
