import '@testing-library/jest-dom'
import parseCustomerData from '../parse-customer-data'

test('parseCustomerData - no data', async () => {
    const data = ""
    const parsedData = parseCustomerData({data})
    expect(parsedData).toEqual([])
})


test('parseCustomerData - commas', async () => {
    const data = "Greta,Thunberg,greta@future.com,sailboat,Fridays For Future,32’\n" +
        "Xiuhtezcatl,Martinez,martinez@earthguardian.org,campervan,Earth Guardian,28 feet\n" +
        "Mandip,Singh Soin,mandip@ecotourism.net,motorboat,Frozen Trekker,32’\n" +
        "Jimmy,Buffet,jb@sailor.com,sailboat,Margaritaville,40 ft"
    const parsedData = parseCustomerData({data})
    const deIdentifiedData = parsedData.map(({fullName, email, vehicleType, vehicleName, vehicleLength}) => ({fullName, email, vehicleType, vehicleName, vehicleLength}))
    expect(deIdentifiedData).toEqual([
            {
                fullName: 'Greta Thunberg',
                email: 'greta@future.com',
                vehicleType: 'sailboat',
                vehicleName: 'Fridays For Future',
                vehicleLength: 32
            },
            {
                fullName: 'Xiuhtezcatl Martinez',
                email: 'martinez@earthguardian.org',
                vehicleType: 'campervan',
                vehicleName: 'Earth Guardian',
                vehicleLength: 28
            },
            {
                fullName: 'Mandip Singh Soin',
                email: 'mandip@ecotourism.net',
                vehicleType: 'motorboat',
                vehicleName: 'Frozen Trekker',
                vehicleLength: 32
            },
            {
                fullName: 'Jimmy Buffet',
                email: 'jb@sailor.com',
                vehicleType: 'sailboat',
                vehicleName: 'Margaritaville',
                vehicleLength: 40
            }
        ]
    )
})


test('parseCustomerData - pipes', async () => {
    const data = "Ansel|Adams|a@adams.com|motorboat|Rushing Water|24’\n" +
        "Steve|Irwin|steve@crocodiles.com|RV|G’Day For Adventure|32 ft\n" +
        "Isatou|Ceesay|isatou@recycle.com|campervan|Plastic To Purses|20’\n" +
        "Naomi|Uemura|n.uemura@gmail.com|bicycle|Glacier Glider|5 feet"
    const parsedData = parseCustomerData({data})
    const deIdentifiedData = parsedData.map(({fullName, email, vehicleType, vehicleName, vehicleLength}) => ({fullName, email, vehicleType, vehicleName, vehicleLength}))
    expect(deIdentifiedData).toEqual([
            {
                fullName: 'Ansel Adams',
                email: 'a@adams.com',
                vehicleType: 'motorboat',
                vehicleName: 'Rushing Water',
                vehicleLength: 24
            },
            {
                fullName: 'Steve Irwin',
                email: 'steve@crocodiles.com',
                vehicleType: 'RV',
                vehicleName: 'G’Day For Adventure',
                vehicleLength: 32
            },
            {
                fullName: 'Isatou Ceesay',
                email: 'isatou@recycle.com',
                vehicleType: 'campervan',
                vehicleName: 'Plastic To Purses',
                vehicleLength: 20
            },
            {
                fullName: 'Naomi Uemura',
                email: 'n.uemura@gmail.com',
                vehicleType: 'bicycle',
                vehicleName: 'Glacier Glider',
                vehicleLength: 5
            }
        ]
    )
})
