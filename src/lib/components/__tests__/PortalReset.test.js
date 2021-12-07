import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import PortalReset from '../PortalReset'

test('PortalReset renders with default args', async () => {
    render(<PortalReset/>)
    expect(screen.getByText("Reset")).toBeVisible()
    expect(screen.getByRole('button')).toBeDisabled()
})

test('PortalReset renders with resetButtonDisabled=false and default resetPortal', async () => {
    render(<PortalReset resetButtonDisabled={false}/>)
    expect(screen.getByText("Reset")).toBeVisible()
    expect(screen.getByRole('button')).toBeEnabled()


})
test('PortalReset renders with resetButtonDisabled=false and custom resetPortal fn', async () => {
    const mockResetFn = jest.fn()
    render(<PortalReset resetButtonDisabled={false} resetPortal={mockResetFn}/>)
    expect(screen.getByText("Reset")).toBeVisible()
    expect(screen.getByRole('button')).toBeEnabled()
    fireEvent.click(screen.getByText('Reset'))
    expect(mockResetFn.mock.calls.length).toEqual(1)
})
