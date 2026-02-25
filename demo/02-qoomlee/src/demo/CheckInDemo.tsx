import { BookingForm } from "./BookingForm"

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
    </div>
  )
}
