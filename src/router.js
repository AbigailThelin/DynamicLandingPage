import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import LandingPage from './jsx/LandingPage.js'


export default(
    <Switch>
        <Route component={LandingPage} path='/' exact/>
    </Switch>
)