import Header from '../../Components/Header/Header';
import MapSection from '../../Components/MapSection/MapSection';
import OrderDetailsTable from '../../Components/OrderDetailsTable/OrderDetails';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import Footer from '../../Components/Footer/Footer2';

function VolunteerOrderDetails() {
    return (
        <div>
            <Header />
            <MapSection />
            <OrderDetailsTable />
            <div className='bg-gray-180 flex flex-col gap-10 items-center justify-center' >
                <ProgressBar />
                <Footer />
            </div>
        </div>
    )
}

export default VolunteerOrderDetails;