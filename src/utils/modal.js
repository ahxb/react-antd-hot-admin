import React, {Component} from 'react';
import './modal.scss';
import {Button} from 'antd';


class mymodal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch: false,

        }
    }
    componentWillReceiveProps( nextProps){

        let visible=this.props.visible
        this.setState({
            switch: visible,
        })
    }
    cell(){
        this.setState({
            switch: false,
        })
    }
    down(e){

        let width=e.clientX-this.refs.modal.offsetLeft;
        let height=e.clientY-this.refs.modal.offsetTop;

        let md = this.refs.modal;


        $(md).on('mousemove',function (evt) {
            $(this).css({
                left:evt.clientX-width,
                top:evt.clientY-height
            })

        })
        $(md).on('mouseup',function (e) {
            e.preventDefault();
            e.stopPropagation();

            $(md).off('mousemove mouseup');
        })
    }

    up(e){
        e.preventDefault();
        e.stopPropagation();
    }
    render() {
        return (
            <div className="modal">



                {
                    this.state.switch ?
                        <div >
                            <div className="ant-modal-mask "></div>
                            <div className="ant-modal-wrap ">
                                <div  ref="modal" className="ant-modal">
                                    <div className="ant-modal-content">
                                        <div
                                            className="ant-modal-header"
                                            onMouseDown={this.down.bind(this)}
                                            onMouseUp={this.up.bind(this)}

                                        >移动的modal</div>
                                        <div className="ant-modal-body ">
                                            <p>adfasdfasdf</p>
                                            <p>adfasdfasdf</p>
                                            <p>adfasdfasdf</p>
                                            <p>adfasdfasdf</p>
                                        </div>
                                        <div className="ant-modal-footer">
                                            <button type="button" className="ant-btn ant-btn-lg" onClick={this.cell.bind(this)}><span>ok</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :''
                }




            </div>
        );
    }
}


export default mymodal;
