import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import TravelDiary from "../layouts/TravelDiary";
import LoginView from "../views/LoginView";
import SearchView from "../views/SearchView";
import DashboardView from "../views/DashboardView";
import LogoutView from "../views/LogoutView";
import AddEntryView from "../views/Entries/AddEntryView";
import EditEntryView from "../views/Entries/EditEntryView";
import RegisterView from "../views/RegisterView";



const routes =  (
    <BrowserRouter> 
        <MainLayout>
        
        <Route exact path ="/" component = { TravelDiary }  />

        <Route exact path = "/login" component = { LoginView } />

        <Route exact path = "/dashboard" component = { DashboardView } />

        <Route exact path = "/logout" component = { LogoutView } />

        <Route exact path = "/register" component = { RegisterView } />

        <Route exact path = "/add_entry" component = { AddEntryView } />

        <Route exact path = "/edit_entry" component = { EditEntryView } />

        <Route exact path = "/search" component = { SearchView } />

        </MainLayout>
    </BrowserRouter> 
)

export default routes;

