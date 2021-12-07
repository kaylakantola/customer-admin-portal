import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import CustomerGrid from '../CustomerGrid'

test('CustomerGrid renders', async () => {
    render(<CustomerGrid />)
    expect(screen.getByRole("grid")).toBeVisible()
})


