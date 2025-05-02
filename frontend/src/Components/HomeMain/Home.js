import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import foodpackaging from '../../Assets/food-packaging-ideas.png';
import Homepagephoto from '../../Assets/homepagephoto.png';


function HomeMain() {
  return (
    <div className='mainPage'>
  <img src={Homepagephoto} className="mainimg img-fluid" alt="Homepage" />
      

      <h3 className="hh">About</h3>
      <p className="mainh3 ">
        Sharing Food, Spreading Hope – With MealAid
        <br />
        <br />
        Every day, large amounts of edible food are wasted by hotels,
        restaurants, and households. This contributes to environmental problems
        and denies opportunities to address food insecurity. MealAid bridges
        the gap between surplus food and those in need by creating a streamlined
        network for collection and distribution. With MealAid, food providers
        can seamlessly list surplus food, making it accessible to NGOs,
        shelters, and volunteers dedicated to combating hunger. The app ensures
        timely and efficient food redistribution to shelters, food banks, and
        communities, reducing waste and making a meaningful impact on lives.
      </p>
 



        
     <div className= "cardsContainer">
     <h3 className='hh'>Highlight</h3>
        <div class="card-container-h mr-4">
            <div class="card align-items-center" style={{ width: '18rem' }}>
                <img src= {foodpackaging} alt = "food packaging" class="card-img-top imgCard" />
                <div class="card-body">
                <p class="card-text">food servery in a good packaging </p>
                </div>
            </div>
            <div class="card align-items-center" style={{ width: '18rem' }}>
                <img src= {foodpackaging} alt = "food packaging" class="card-img-top imgCard" />
                <div class="card-body">
                <p class="card-text">food servery in a good packaging </p>
                </div>
            </div>
            <div class="card align-items-center" style={{ width: '18rem' }}>
                <img src= {foodpackaging} alt = "food packaging" class="card-img-top imgCard" />
                <div class="card-body">
                <p class="card-text">food servery in a good packaging </p>
                </div>
            </div>
            <div class="card align-items-center" style={{ width: '18rem' }}>
                <img src= {foodpackaging} alt = "food packaging" class="card-img-top imgCard" />
                <div class="card-body">
                <p class="card-text">food servery in a good packaging </p>
                </div>
            </div>
            <div class="card align-items-center" style={{ width: '18rem' }}>
                <img src= {foodpackaging} alt = "food packaging" class="card-img-top imgCard" />
                <div class="card-body">
                <p class="card-text">food servery in a good packaging </p>
                </div>
            </div>
            <div class="card align-items-center" style={{ width: '18rem' }}>
                <img src= {foodpackaging} alt = "food packaging" class="card-img-top imgCard" />
                <div class="card-body">
                <p class="card-text">food servery in a good packaging </p>
                </div>
            </div>
            <div class="card align-items-center" style={{ width: '18rem' }}>
                <img src= {foodpackaging} alt = "food packaging" class="card-img-top imgCard" />
                <div class="card-body">
                <p class="card-text">food servery in a good packaging </p>
                </div>
            </div>
        </div>
     </div>
    
    </div>
  );
}

export default HomeMain;