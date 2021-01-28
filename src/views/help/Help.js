import React, { Component } from 'react'
import {getData} from '@/api/home'
import { checkLoginState,getLego} from '@/api/help'

class Help extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }

    componentDidMount() {
       // this.props.location.state中看到 fromWechat: true:
        console.log("this.props:",this.props.location.state)
        getData({}).then(data=>{
            this.setState({
                list:data || []
            })
        })
        // checkLoginState().then(data=>{
        //     console.log("登录状态:",data)
        // })
        getLego().then(data=>{
            console.log("djshdjksh:",data)
        })
    }
    render() {
        const {list} = this.state;

        return (
            <div className="help-box">
                帮助与反馈 - 页面
                <div>
                    <ul>
                        {list.map((item,index)=>{
                            return (
                                <li key={`${item}-${index}`}>
                                    {item.text}
                                </li>
                            )
                         
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Help;