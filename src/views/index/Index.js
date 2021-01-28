import React, { Component } from 'react'
//import Fetch from 'react-fetch'
import {getList} from '../../api/home'
class Index extends Component {
    constructor(props){
      super(props);
      this.state={
          list:[]
      }
    }

    componentDidMount() {
      getList({}).then(res=>{
          this.setState({
              list:res
          })
      });
    }
   
    render() {
        const {list}= this.state;
        return (
            <div className="main-box">
                主页 - 页面
               <div>
                   <ul>
                   {list.map((item,index)=>{
                      return(
                        <li key={`${item}-${index}`}>
                             {item.text}
                        </li>
                      ) 
                   }) }
                   </ul>
               </div>
            </div>
        );
    }
}

export default Index