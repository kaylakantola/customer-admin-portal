import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import PortalHeader from '../PortalHeader'

test('PortalHeader renders default company name', async () => {
    render(<PortalHeader />)
    const expectedText  = `Default Customer Management Portal`
    expect(screen.getByText(expectedText)).toBeVisible()
})

test('PortalHeader renders given company name', async () => {
    const companyName = "Outdoor.sy"
    render(<PortalHeader companyName={companyName}/>)
    const expectedText  = `${companyName} Customer Management Portal`
    expect(screen.getByText(expectedText)).toBeVisible()
})
