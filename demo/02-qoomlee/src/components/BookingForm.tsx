import { useState } from 'react'
import { retrieveBooking, type Booking } from '../service/bookingService'

interface BookingFormProps {
  onSuccess: (booking: Booking) => void
}

export default function BookingForm({ onSuccess }: BookingFormProps) {
  const [lastName, setLastName] = useState('')
  const [bookingRef, setBookingRef] = useState('')
  const [error, setError] = useState('')

  const isDisabled = !lastName.trim() || !bookingRef.trim()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      const booking = await retrieveBooking(lastName.trim(), bookingRef.trim())
      onSuccess(booking)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
    setError('')
  }

  const handleBookingRefChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookingRef(e.target.value)
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} className="mx-4 -mt-6 bg-white rounded-2xl shadow-lg p-6 relative z-10">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Retrieve Your Booking</h2>

      <div className="mb-4">
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          placeholder="Your last name"
          value={lastName}
          onChange={handleLastNameChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="bookingRef" className="block text-sm font-medium text-gray-700 mb-1">
          Booking reference (PNR)
        </label>
        <input
          id="bookingRef"
          type="text"
          placeholder="ABC123 OR 1234567890123"
          value={bookingRef}
          onChange={handleBookingRefChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2 mb-4">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isDisabled}
        className={`w-full font-semibold py-3 rounded-xl transition-colors text-white ${
          isDisabled
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-sky-600 hover:bg-sky-700'
        }`}
      >
        Retrieve Booking
      </button>

      <p className="text-xs text-gray-400 mt-4 text-center leading-relaxed">
        Tip: Online check-in opens 24 hours before departure and closes 2 hours before departure.
      </p>
    </form>
  )
}
