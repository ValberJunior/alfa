import { Routes, Route } from "react-router-dom";
import { Home, PageNotFound } from "../page";


export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}