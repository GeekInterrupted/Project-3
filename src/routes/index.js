import React, { Component } from "react";
import { Route, IndexRoute } from "react-router";
import MainLayout from "../layouts/MainLayout";
import TravelDiary from "../layouts/TravelDiary";
import LoginView from "../views/LoginView";
import SearchView from "../views/SearchView";



export default (
    <Route component= {MainLayout} path ="/">
    
    <IndexRoute component = { TravelDiary } name = "home" />

    <Route component = { LoginView } path = "login" name = "login" />
   
    <Route component = { SearchView } path = "/" name = "search" />
   
    </Route>
)


