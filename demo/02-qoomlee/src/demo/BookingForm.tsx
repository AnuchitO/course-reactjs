export const BookingForm = () => {

    return (
        <form >
            <h2 >Retrieve Your Booking</h2>

            <div >
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

        </form>
    )
}