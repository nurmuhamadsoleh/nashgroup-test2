import ContainerDynamicColor from "./module/Product/Container/ContainerDynamicColor";
import ContainerFormProduct from "./module/Product/Container/ContainerFormProduct";
import ContainerGridColor from "./module/Product/Container/ContainerGridColor";
import ContainerProduct from "./module/Product/Container/ContainerProduct";
import ContainerUser from "./module/Product/Container/ContainerUser";
import {createBrowserRouter} from "react-router-dom"

export const router = createBrowserRouter([
//     path: "/form",
//     element: <ContainerFormProduct/>
// }, {
//     path:'/dyanimic-color',
//     element: <ContainerDynamicColor/>   
// }, {
//     path:'/grid-color',
//     element: <ContainerGridColor/>
// }, {
{
    path:'/',
    element: <ContainerUser/>
}])