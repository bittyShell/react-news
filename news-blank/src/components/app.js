import React,{Component} from 'react'
import {render} from 'react-dom'
import NewsFooter from './news_footer'
import NewsHeader from './news_header'
import '../componentsCss/pc.css'
export default class App extends Component{
    render(){
        return(
            <div>
                <NewsHeader/>
                {this.props.children}
                <NewsFooter/>
            </div>
        )
    }
}
