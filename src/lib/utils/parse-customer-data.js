import * as CSV from 'csv-string';
import { v4 as uuidv4 } from 'uuid';

export default function parseCustomerData({data}) {
    // parse file
    const customerData = CSV.parse(data);

    // defines expected keys
    const keys = ["firstName", "lastName", "email", "vehicleType", "vehicleName", "vehicleLength"]

    // builds array of objects suitable for the CustomerGrid component to use
    const dataRows = customerData.map((row) => {
            if (row.length !== keys.length) {
                // indicates the row length doesn't match the header length,
                // so it should be skipped.
                return null
            }
            return ({
                id: uuidv4(),
                fullName: `${row[0]} ${row[1]}`,
                email: row[2],
                vehicleType: row[3],
                vehicleName: row[4],
                vehicleLength: parseInt(row[5])
            })
        }
    )

    // remove null items from array
    const rows = dataRows.filter(row => row !== null)

    // return array
    return rows
}
