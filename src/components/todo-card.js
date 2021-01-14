import React, {Component} from 'react'
import { EditOutlined, DeleteOutlined  } from '@ant-design/icons';
import {connect} from 'react-redux'

import moment from 'moment'
class TodoCard extends Component {
    render() {
        console.log(this.props.data.id)
        return(
            <div className="todo-card" >
                <div>
                    <b className="card-header"> {this.props.data.title} </b> &nbsp;
                    <i style={{fontSize:"10px"}}>({this.props.data.date})</i>
                    <div style={{float:"right"}} >
                        <EditOutlined onClick={()=>this.props.handleModal(this.props.data)} style={{cursor:"pointer"}} ></EditOutlined>
                        &nbsp;&nbsp;
                        <DeleteOutlined onClick={()=>this.props.handleDelete(this.props.data)} style={{cursor:"pointer"}} ></DeleteOutlined>
                    </div>
                </div>
                <div className="card-body" >
                    {this.props.data.description}
                </div>
            </div>
        )
    }
}

export default (TodoCard)