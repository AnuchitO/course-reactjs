import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BookingForm from './BookingForm'

describe('BookingForm', () => {
  it('renders Retrieve Your Booking heading', () => {
    render(<BookingForm />)
    expect(screen.getByText('Retrieve Your Booking')).toBeInTheDocument()
  })

  it('renders Last Name input', () => {
    render(<BookingForm />)
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
  })

  it('renders Booking reference (PNR) input', () => {
    render(<BookingForm />)
    expect(screen.getByLabelText(/booking reference/i)).toBeInTheDocument()
  })

  it('renders Retrieve Booking button', () => {
    render(<BookingForm />)
    expect(screen.getByRole('button', { name: /retrieve booking/i })).toBeInTheDocument()
  })

  it('renders tip text', () => {
    render(<BookingForm />)
    expect(screen.getByText(/online check-in opens 24 hours before departure/i)).toBeInTheDocument()
  })

  it('allows user to type last name', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    const input = screen.getByLabelText(/last name/i)
    await user.type(input, 'Smith')
    expect(input).toHaveValue('Smith')
  })

  it('allows user to type booking reference', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    const input = screen.getByLabelText(/booking reference/i)
    await user.type(input, 'ABC123')
    expect(input).toHaveValue('ABC123')
  })

  it('disables button when both fields are empty', () => {
    render(<BookingForm />)
    expect(screen.getByRole('button', { name: /retrieve booking/i })).toBeDisabled()
  })

  it('disables button when only last name is filled', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    await user.type(screen.getByLabelText(/last name/i), 'Smith')
    expect(screen.getByRole('button', { name: /retrieve booking/i })).toBeDisabled()
  })

  it('disables button when only booking reference is filled', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    await user.type(screen.getByLabelText(/booking reference/i), 'ABC123')
    expect(screen.getByRole('button', { name: /retrieve booking/i })).toBeDisabled()
  })

  it('enables button when both fields are filled', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    await user.type(screen.getByLabelText(/last name/i), 'Smith')
    await user.type(screen.getByLabelText(/booking reference/i), 'ABC123')
    expect(screen.getByRole('button', { name: /retrieve booking/i })).toBeEnabled()
  })

  it('disables button again when a field is cleared', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    await user.type(screen.getByLabelText(/last name/i), 'Smith')
    await user.type(screen.getByLabelText(/booking reference/i), 'ABC123')
    await user.clear(screen.getByLabelText(/last name/i))
    expect(screen.getByRole('button', { name: /retrieve booking/i })).toBeDisabled()
  })
})
