import Footer from "../Footer/Footer";
import Navber from "../Navber/Navber";


const Main = () => {
    return (
        <div>
            {/* Navber */}
            <Navber></Navber>
            {/* Main Part Start */}
            <div>
                <h1>Main part</h1>
            </div>
            {/* Main Part end */}
            <Footer></Footer>
        </div>
    );
};

export default Main;