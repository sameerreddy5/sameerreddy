import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function BookingPage() {
    return (
        <main>
            <Navbar />
            <div style={{ minHeight: '80vh', paddingTop: '80px' }}> {/* Padding for fixed navbar if applicable, or just spacing */}
                <div className="container">
                    <div id="booking-embed" data-src="https://superprofile.bio/bookings/sameerreddy?all&type=embedBooking&embedBgColor=0b0b0bff"></div>
                    <Script id='cosmofeed-embed-booking' src='https://cosmofeed.com/assets/embed/booking-embed.js' strategy="lazyOnload" />
                </div>
            </div>
            <Footer />
        </main>
    );
}
