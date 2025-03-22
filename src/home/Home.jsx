import Banner from "../component/Banner"
import BestSellerBooks from "./BestSellerBooks"
import Favbook from "./Favbook"
import OtherBooks from "./OtherBooks"
import PromoBanner from "./PromoBanner"
import Review from "./Review"


const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellerBooks />
      <Favbook />
      <PromoBanner />
      <OtherBooks />
      <Review />
    </div>
    
  )
}

export default Home
