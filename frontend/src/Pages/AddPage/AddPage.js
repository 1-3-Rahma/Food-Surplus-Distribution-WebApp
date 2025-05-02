import Header from '../../Components/Header/Header'
import AddItems from '../../Components/AddItem/AddItem'
import Footer from '../../Components/Footer/Footer2';

function AddPage() {
    return (
        <div className="page-container">
            <Header />
            <div className="content-wrapper justify-content-center align-items-center">
                <AddItems />
            </div>
            <Footer/>
        </div>
    )
}

export default AddPage;