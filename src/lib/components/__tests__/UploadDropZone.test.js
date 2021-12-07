import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import UploadDropzone from '../UploadDropzone'

test('UploadDropzone renders', async () => {
    const mockSetCustomersFn = jest.fn()
    const mockSetCustomersLoadingFn = jest.fn()
    const mockParseCustomerData = jest.fn()
    render(<UploadDropzone
        setCustomers={mockSetCustomersFn}
        setCustomersLoading={mockSetCustomersLoadingFn}
        parseCustomerData={mockParseCustomerData}
    />)
    expect(screen.getByText("Drag and drop a file to upload some happy campers!")).toBeVisible()
})


