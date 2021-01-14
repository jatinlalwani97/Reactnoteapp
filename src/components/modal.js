import React, { Component } from 'react'
import { Button } from 'antd'
import TodoForm from './todo-form'
import { connect } from 'react-redux'
import { addTodo, editTodo } from '../actions/todo'
class Modal extends Component {
    state = {
        error: {
            title: "",
            description: ""
        }
    }
    handleEdit = async(data) => {
        await this.props.editTodo(data)
        this.props.handleModal(false)
    }
    handleSubmit = async (data) => {
        await this.props.addTodo(data)
        console.log(this.props)
        this.props.handleModal(false)
    }
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <div className="modal-background" onClick={() => this.props.handleModal(false)} >

                </div>
                <div className="modal" >
                    <div className="topNav" style={{ zIndex: "9999" }} >
                        Add Note
                        </div>
                    <TodoForm handleEdit={this.handleEdit} handleModal={this.props.handleModal} handleSubmit={this.handleSubmit} data={this.props.data} />
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    addTodo: (data) => dispatch(addTodo(data)),
    editTodo: (data) => dispatch(editTodo(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Modal)