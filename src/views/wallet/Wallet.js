import React, { Component } from 'react'
import { WhiteSpace } from 'antd-mobile';
import "./index.css"

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
  );
class Wallet extends Component {
    render() {
        return (
            <div className="help-box">
                钱包 - 页面
                <div>
                    <WhiteSpace size="xs" />
                    <PlaceHolder />

                    <WhiteSpace size="sm" />
                    <PlaceHolder />

                    <WhiteSpace />
                    <PlaceHolder />

                    <WhiteSpace size="lg" />
                    <PlaceHolder />

                    <WhiteSpace size="xl" />
                    <PlaceHolder />
                </div>
            </div>
        );
    }
}

export default Wallet

