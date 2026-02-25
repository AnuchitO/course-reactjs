export const BookingForm = () => {

    return (
        <form className="mx-4 -mt-6 bg-white rounded-2xl shadow-lg p-6 relative z-10">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Retrieve Your Booking</h2>

            <div className="mb-4">
                <label htmlFor="lastName" >Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    placeholder="Your last name" />
            </div>

            <div >
                <label htmlFor="bookingRef" >
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