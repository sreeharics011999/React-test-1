import { NavLink } from "react-router-dom"
import "./home.css"
let Home=()=>{
    return(
        <div className="home-bg">
          <div className="home-1-content">
            <h4 className="home-1-content-h4">Now,anyone can farm</h4>
            <h4 className="home-1-content-h4"><b>Easy Plant Kits for everyone</b></h4>
                <NavLink to="" className="shop-now-btn btn"> Shop Now <i class="bi bi-arrow-right arrow-btn-icon"></i></NavLink>
          </div>
        </div>
    )
}
export default Home