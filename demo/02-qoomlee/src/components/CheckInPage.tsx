import Header from './Header'
import HeroBanner from './HeroBanner'
import BookingForm from './BookingForm'
import FlightStatus from './FlightStatus'
import BottomNav from './BottomNav'

export default function CheckInPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      <HeroBanner />
      <BookingForm />
      <FlightStatus />
      <BottomNav />
    </div>
  )
}
