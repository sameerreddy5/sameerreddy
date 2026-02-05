import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function BookingPage() {
    return (
        <main>
            <Navbar />
            <div style={{ minHeight: '80vh', paddingTop: '80px' }}> {/* Padding for fixed navbar if applicable, or just spacing */}
                <div className="container" style={{ paddingBottom: '40px' }}>
                    <div style={{
                        minHeight: '800px',
                        width: '100%',
                        maxWidth: '1200px',
                        margin: '0px auto',
                        backgroundColor: 'rgba(13, 10, 19, 0.3)',
                        borderRadius: '15px',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div id="booking-embed" data-src="https://superprofile.bio/bookings/sameerreddy?all&type=embedBooking&embedBgColor=0b0b0bff" style={{ width: '100%' }}></div>
                        <Script id='cosmofeed-embed-booking' src='https://cosmofeed.com/assets/embed/booking-embed.js' strategy="lazyOnload" />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
