export const BookingForm = () => {

    return (
        <form className="mx-4 -mt-6 bg-white rounded-2xl shadow-lg p-6 relative z-10">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Retrieve Your Booking</h2>

            <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    placeholder="Your last name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="bookingRef" className="block text-sm font-medium text-gray-700 mb-1">
                    Booking reference (PNR)
                </label>
                <input
                    id="bookingRef"
                    type="text"
                    placeholder="ABC123 OR 1234567890123" />
            </div>


            <button type="submit">
                Retrieve Booking
            </button>

            <div>
                <p>
                    <span>Tip:</span> Online check-in opens 24 hours before departure and closes 2 hours before departure.
                </p>
            </div>
        </form>
    )
}