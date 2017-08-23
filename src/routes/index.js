import React, { Component } from "react";
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
import Result from "../components/Result";


const routes =(

            <BrowserRouter> 
            {/* Passing location to NavBtn */}
            <MainLayout location={location}>
            
            {/* <Route exact path ="/" component = { TravelDiary }  /> */}

            {/* <Route exact path ="/" component = { Result } state={location.state}/> */}
    
            <Route exact path = "/login" component = { LoginView } />
    
            <Route exact path = "/dashboard" component = { DashboardView } />
    
            <Route exact path = "/logout" component = { LogoutView } />
    
            <Route exact path = "/register" component = { RegisterView } />
    
            <Route exact path = "/add_entry" component = { AddEntryView } />
    
            <Route exact path = "/edit_entry" component = { EditEntryView } />
    
    
    
            </MainLayout>
        </BrowserRouter> 
        
   
)

export default routes;

