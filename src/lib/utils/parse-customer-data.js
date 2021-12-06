import * as CSV from 'csv-string';
import { v4 as uuidv4 } from 'uuid';

export default function parseCustomerData({data}) {
    const customerData = CSV.parse(data);
    console.log('parseCustomerData', {customerData})

    const keys = ["firstName", "lastName", "email", "vehicleType", "vehicleName", "vehicleLength"]


    const rows = customerData.map((line) => {
            if (line.length !== keys.length) {
                console.log("BAD DATA!!!", {line})
                return null
            }
            return ({
                id: uuidv4(),
                fullName: `${line[0]} ${line[1]}`,
                email: line[2],
                vehicleType: line[3],
                vehicleName: line[4],
                vehicleLength: line[5]

            })
        }
    )

    const filteredRows = rows.filter(row => row !== null)
    return filteredRows
}
