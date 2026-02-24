import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BookingForm from './BookingForm'
import * as bookingService from '../service/bookingService'

vi.mock('../service/bookingService')

const mockBooking = {
  pnr: 'ABC123',
  passengers: [
    { id: '1', name: 'ALEX HUUM', type: 'ADT', seat: '12A' },
    { id: '2', name: 'Somsee Kuum', type: 'ADT', seat: '12B' },
  ],
}

describe('BookingForm', () => {
  const mockOnSuccess = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders Retrieve Your Booking heading', () => {
    render(<BookingForm onSuccess={mockOnSuccess} />)
    expect(screen.getByText('Retrieve Your Booking')).toBeInTheDocument()
  })

  it('renders Last Name input', () => {
    render(<BookingForm onSuccess={mockOnSuccess} />)
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
  })

  it('renders Booking reference (PNR) input', () => {
    render(<BookingForm onSuccess={mockOnSuccess} />)
    expect(screen.getByLabelText(/booking reference/i)).toBeInTheDocument()
  })

  it('renders Retrieve Booking button', () => {
    render(<BookingForm onSuccess={mockOnSuccess} />)
    expect(
      screen.getByRole('button', { name: /retrieve booking/i }),
    ).toBeInTheDocument()
  })

  it('renders tip text', () => {
    render(<BookingForm onSuccess={mockOnSuccess} />)
    expect(
      screen.getByText(/online check-in opens 24 hours before departure/i),
    ).toBeInTheDocument()
  })

  it('allows user to type last name', async () => {
    const user = userEvent.setup()
    render(<BookingForm onSuccess={mockOnSuccess} />)
    const input = screen.getByLabelText(/last name/i)
    await user.type(input, 'Smith')
    expect(input).toHaveValue('Smith')
  })

  it('allows user to type booking reference', async () => {
    const user = userEvent.setup()
    render(<BookingForm onSuccess={mockOnSuccess} />)
    const input = screen.getByLabelText(/booking reference/i)
    await user.type(input, 'ABC123')
    expect(input).toHaveValue('ABC123')
  })

  it('disables button when both fields are empty', () => {
    render(<BookingForm onSuccess={mockOnSuccess} />)
    expect(
      screen.getByRole('button', { name: /retrieve booking/i }),
    ).toBeDisabled()
  })

  it('disables button when only last name is filled', async () => {
    const user = userEvent.setup()
    render(<BookingForm onSuccess={mockOnSuccess} />)
    await user.type(screen.getByLabelText(/last name/i), 'Smith')
    expect(
      screen.getByRole('button', { name: /retrieve booking/i }),
    ).toBeDisabled()
  })

  it('disables button when only booking reference is filled', async () => {
    const user = userEvent.setup()
    render(<BookingForm onSuccess={mockOnSuccess} />)
    await user.type(screen.getByLabelText(/booking reference/i), 'ABC123')
    expect(
      screen.getByRole('button', { name: /retrieve booking/i }),
    ).toBeDisabled()
  })

  it('enables button when both fields are filled', async () => {
    const user = userEvent.setup()
    render(<BookingForm onSuccess={mockOnSuccess} />)
    await user.type(screen.getByLabelText(/last name/i), 'Smith')
    await user.type(screen.getByLabelText(/booking reference/i), 'ABC123')
    expect(
      screen.getByRole('button', { name: /retrieve booking/i }),
    ).toBeEnabled()
  })

  it('disables button again when a field is cleared', async () => {
    const user = userEvent.setup()
    render(<BookingForm onSuccess={mockOnSuccess} />)
    await user.type(screen.getByLabelText(/last name/i), 'Smith')
    await user.type(screen.getByLabelText(/booking reference/i), 'ABC123')
    await user.clear(screen.getByLabelText(/last name/i))
    expect(
      screen.getByRole('button', { name: /retrieve booking/i }),
    ).toBeDisabled()
  })

  it('calls onSuccess with booking data when retrieval succeeds', async () => {
    vi.mocked(bookingService.retrieveBooking).mockResolvedValue(mockBooking)
    const user = userEvent.setup()
    render(<BookingForm onSuccess={mockOnSuccess} />)

    await user.type(screen.getByLabelText(/last name/i), 'Huum')
    await user.type(screen.getByLabelText(/booking reference/i), 'ABC123')
    await user.click(
      screen.getByRole('button', { name: /retrieve booking/i }),
    )

    await waitFor(() => {
      expect(mockOnSuccess).toHaveBeenCalledWith(mockBooking)
    })
  })

  it('shows error message when booking is not found', async () => {
    vi.mocked(bookingService.retrieveBooking).mockRejectedValue(
      new Error('Booking not found'),
    )
    const user = userEvent.setup()
    render(<BookingForm onSuccess={mockOnSuccess} />)

    await user.type(screen.getByLabelText(/last name/i), 'Unknown')
    await user.type(screen.getByLabelText(/booking reference/i), 'ZZZ999')
    await user.click(
      screen.getByRole('button', { name: /retrieve booking/i }),
    )

    await waitFor(() => {
      expect(screen.getByText('Booking not found')).toBeInTheDocument()
    })
    expect(mockOnSuccess).not.toHaveBeenCalled()
  })

  it('clears error when user starts typing again', async () => {
    vi.mocked(bookingService.retrieveBooking).mockRejectedValue(
      new Error('Booking not found'),
    )
    const user = userEvent.setup()
    render(<BookingForm onSuccess={mockOnSuccess} />)

    await user.type(screen.getByLabelText(/last name/i), 'Unknown')
    await user.type(screen.getByLabelText(/booking reference/i), 'ZZZ999')
    await user.click(
      screen.getByRole('button', { name: /retrieve booking/i }),
    )

    await waitFor(() => {
      expect(screen.getByText('Booking not found')).toBeInTheDocument()
    })

    await user.type(screen.getByLabelText(/last name/i), 'a')
    expect(screen.queryByText('Booking not found')).not.toBeInTheDocument()
  })
})
