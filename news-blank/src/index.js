import React from 'react'
import {render} from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import App from './components/app'
import NewsDetail from './components/news_detail'
import NewsContainer from './components/news_container'
import UserCenter from './components/user_center'
import MediaQuery from 'react-responsive'
import MobileApp from './components/MobileApp'
import MobileNewsContainer from './components/MobileNewsContainer'
import MobileNewsDetail from './components/MobileNewsDetail'
import MobileUserCenter from './components/MobileUserCenter'
render((
    <div>
        <MediaQuery query='(min-device-width: 1224px)'>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={NewsContainer}/>
                    <Route path='/news_detail/:uniquekey/:type' component={NewsDetail}></Route>
                    <Route path='/user_center' component={UserCenter} ></Route>
                </Route>
            </Router>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
            <Router history={hashHistory}>
                <Route path='/' component={MobileApp}>
                    <IndexRoute component={MobileNewsContainer}></IndexRoute>
                    <Route path='/news_detail/:uniquekey' component={MobileNewsDetail}></Route>
                    <Route path='/user_center' component={MobileUserCenter}></Route>
                </Route>
            </Router>
        </MediaQuery>
    </div>
),document.getElementById('root'))