function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <svg className="w-8 h-8 text-sky-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-bold text-sky-700">Qoomlee</span>
          <span className="text-xs text-gray-400">Airline</span>
        </div>
      </div>
      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm">
        P
      </div>
    </header>
  )
}

function HeroBanner() {
  return (
    <section className="bg-gradient-to-br from-sky-500 to-sky-700 text-white text-center px-6 py-10 rounded-b-3xl">
      <h1 className="text-2xl font-bold mb-1">Online Check-in</h1>
      <p className="text-sm font-medium opacity-90">Fly Smart. Fly Qoomlee.</p>
      <p className="text-xs opacity-70 mt-1">Check in online and save time at the airport</p>
    </section>
  )
}

function BookingForm() {
  return (
    <form className="mx-4 -mt-6 bg-white rounded-2xl shadow-lg p-6 relative z-10">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Retrieve Your Booking</h2>

      <div className="mb-4">
        <label htmlFor="demo-lastName" className="block text-sm font-medium text-gray-700 mb-1">
          Last Name
        </label>
        <input
          id="demo-lastName"
          type="text"
          placeholder="Your last name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="demo-bookingRef" className="block text-sm font-medium text-gray-700 mb-1">
          Booking reference (PNR)
        </label>
        <input
          id="demo-bookingRef"
          type="text"
          placeholder="ABC123 OR 1234567890123"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
        />
      </div>

      <button
        type="button"
        className="w-full bg-gray-300 cursor-not-allowed font-semibold py-3 rounded-xl text-white"
      >
        Retrieve Booking
      </button>

      <div className="mt-5 sm:mt-6 p-3.5 sm:p-4 bg-sky-50 rounded-lg border border-sky-100">
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          <span className="font-semibold text-sky-700">Tip:</span> Online check-in opens 24 hours before departure and closes 2 hours before departure.
        </p>
      </div>

    </form>
  )
}

function FlightStatus() {
  return (
    <section className="mx-4 mt-6 bg-white rounded-2xl shadow-sm p-5">
      <div className="flex items-center gap-2 mb-2">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-sky-100 text-sky-600">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </span>
        <h2 className="text-base font-bold text-gray-800">Flight Status</h2>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed mb-3">
        Track your flight in real-time. Get updates on departure, arrival, gate changes, and delays.
      </p>
      <a href="#" className="text-sm font-semibold text-sky-600 hover:text-sky-700">
        Check Status →
      </a>
    </section>
  )
}

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 px-1">
      <a href="#" className="flex flex-col items-center gap-0.5 text-gray-400 text-xs">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
        </svg>
        Home
      </a>
      <a href="#" className="flex flex-col items-center gap-0.5 text-gray-400 text-xs">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
        Flights
      </a>
      <a href="#" className="flex flex-col items-center gap-0.5 text-sky-600 font-semibold text-xs">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Check-in
      </a>
      <a href="#" className="flex flex-col items-center gap-0.5 text-gray-400 text-xs">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        Manage Booking
      </a>
      <a href="#" className="flex flex-col items-center gap-0.5 text-gray-400 text-xs">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Contact
      </a>
    </nav>
  )
}

function SelectPassengers() {
  const passengers = [
    { id: '1', name: 'ALEX HUUM', type: 'ADT', seat: '12A', selected: true },
    { id: '2', name: 'Somsee Kuum', type: 'ADT', seat: '12B', selected: true },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          <button type="button" className="text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div>
            <span className="block text-base font-bold text-gray-800">Check-in</span>
            <span className="block text-xs text-gray-400">Select Passengers</span>
          </div>
        </div>
        <span className="text-xs text-gray-400">Step 2 of 5</span>
      </div>

      <div className="h-1 bg-gray-200">
        <div className="h-1 bg-sky-500 w-2/5" />
      </div>

      <div className="flex-1 px-4 pt-6 pb-4">
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h2 className="text-lg font-bold text-gray-800 mb-1">Select Passengers</h2>
          <p className="text-sm text-gray-400 mb-4">Choose passengers for check-in</p>

          <div className="space-y-3">
            {passengers.map((p) => (
              <div
                key={p.id}
                className={`w-full text-left rounded-xl border-2 p-4 relative ${p.selected ? 'border-sky-500 bg-sky-50' : 'border-gray-200 bg-white'
                  }`}
              >
                <span className="block text-base font-semibold text-gray-800">{p.name}</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{p.type}</span>
                  <span className="text-xs text-gray-400">Seat {p.seat}</span>
                </div>
                {p.selected && (
                  <div className="absolute top-0 right-0 w-8 h-8 bg-sky-500 rounded-bl-xl rounded-tr-[10px] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button type="button" className="flex items-center gap-1 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Clear All
          </button>
        </div>
      </div>

      <div className="px-4 py-4 bg-white border-t border-gray-200 flex gap-3">
        <button type="button" className="flex-1 py-3 rounded-xl border border-gray-300 font-semibold text-gray-700 bg-white">
          Back
        </button>
        <button type="button" className="flex-1 py-3 rounded-xl font-semibold text-white bg-sky-600 hover:bg-sky-700">
          Continue
        </button>
      </div>
    </div>
  )
}

export default function CheckInDemo() {
  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen">
      <div className="min-h-screen bg-gray-50 pb-20">
        <Header />
        <HeroBanner />
        <BookingForm />
        <FlightStatus />
        <BottomNav />
      </div>

      <h2 className="text-center text-lg font-bold py-4 bg-white border-b mt-8">Select Passengers Page</h2>
      <SelectPassengers />
    </div>
  )
}
