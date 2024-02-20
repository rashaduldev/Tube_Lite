import { Outlet } from "react-router-dom";
import Main from "../Components/Main/Main";


const Root = () => {
    return (
        <div>
            <Main></Main>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;