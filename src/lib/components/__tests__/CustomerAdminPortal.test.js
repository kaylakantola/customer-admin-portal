import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import CustomerAdminPortal from '../CustomerAdminPortal'

test('CustomerAdminPortal renders', async () => {
    render(<CustomerAdminPortal />)
    expect(screen.getByText("Drag and drop a file to upload some happy campers!")).toBeVisible()
    expect(screen.getByText("Outdoor.sy Customer Management Portal")).toBeVisible()
    expect(screen.getByRole("grid")).toBeVisible()
    expect(screen.getByText("Reset")).toBeVisible()
})


