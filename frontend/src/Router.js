import React from 'react';
import HomeView from './views/HomeView';
import SearchView from './views/SearchView';
import PublicationView from './views/PublicationView';
import { BrowserRouter as Router, Route } from "react-router-dom";


const AppRouter = ({children}) => 
    <Router>
        {children}
        <Route exact path="/" component={HomeView} />
        <Route path="/buscar" component={SearchView} />
        <Route path="/publicacion/:id" component={PublicationView} />
    </Router>

export default AppRouter;