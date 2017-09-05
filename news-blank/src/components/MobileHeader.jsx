import React, {Component} from 'react'
import {
  Icon,
  Button,
  Modal,
  Tabs,
  Form,
  Input,
  message
} from 'antd'
import {Link} from 'react-router'
import axios from 'axios'

import logo from '../images/logo.png'

const TabPane = Tabs.TabPane
const FormItem = Form.Item

class MobileHeader extends Component{
  state ={
    username:null,
      modalVisible:false
  }
  componentDidMount(){
    const username=localStorage.getItem('username')
      if(username){
      this.setState({username})
      }
  }


  render(){
    const {username,modalVisible}=this.state
    const {getFieldDecorator}=this.props.form
    return
  }
}

export default Form.create()(MobileNewsHeader)