import { Routes,Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { PostPage } from "./pages/Issues/PostPage";



export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element = {<Home/>}  />
            <Route path="/post/:number" element = {<PostPage/>}  />

        </Routes>
    )
}