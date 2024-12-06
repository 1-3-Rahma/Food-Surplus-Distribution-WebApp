import Header from '../../Components/Header/Header';
import MapSection from '../../Components/MapSection/MapSection';
import OrderDetailsTable from '../../Components/OrderDetailsTable/OrderDetails';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import Footer from '../../Components/Footer/Footer'


function VoulanterOrderDetails (){
    return(
        <div>
           <Header/>
           <MapSection/>
           <OrderDetailsTable/>
           <div className='bg-gray-180 flex flex-col gap-10  items-center jusify-center' >
           <ProgressBar/>
           <Footer/>
           </div>
        </div>




    )
}

export default VoulanterOrderDetails ;