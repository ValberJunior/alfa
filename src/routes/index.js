import { Routes, Route } from "react-router-dom";
import { Home, Maps, PageNotFound } from "../page";


export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<PageNotFound/>}/>
            <Route path="/maps" element={<Maps/>}/>
        </Routes>
    )
}