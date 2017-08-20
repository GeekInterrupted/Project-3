import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import TravelDiary from "../layouts/TravelDiary";
import LoginView from "../views/LoginView";
import SearchView from "../views/SearchView";
import DashboardView from "../views/DashboardView";


const routes =  (
    <BrowserRouter> 
        <MainLayout>
        
        <Route exact path ="/" component = { TravelDiary }  />

        <Route exact path = "/login" component = { LoginView } />

        <Route exact path = "/edit-entry" component = { DashboardView } />

        </MainLayout>
    </BrowserRouter> 
)

export default routes;

