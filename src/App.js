import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css'
import 'antd/dist/antd.css';
import EventCalendar from './components/calendar'
import TodoCard from './components/todo-card'
import Modal from './components/modal'
import {deleteTodo} from './actions/todo'
class App extends Component {
  state = {
    data: false ,
    todo:this.props.todo
  }
  handleModal = (data) => {
    this.setState({
      data: data
    })
  }
  handleDelete = (data) => {
    this.props.deleteTodo(data)
    this.setState({todo:this.props.todo})
  }
  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <div className="topNav" >
          NoTe App
        </div>
        <div style={{ display: "flex" }} >
          <div className="calendar">
            <EventCalendar handleModal={this.handleModal}></EventCalendar>
          </div>
          <div className="all-events" >
            <div className="event-header" >
              <h2 style={{ color: "#3D4977", fontWeight: "800" }} >Todos</h2>
            </div>
            <hr />
            {this.state.todo && Object.keys(this.state.todo).map(key =>
              <div> <TodoCard handleDelete={this.handleDelete} handleModal={this.handleModal} key ={key} data ={this.props.todo[key]} ></TodoCard> </div>
            )
            }
          </div>
        </div>
        {this.state.data && <Modal data={this.state.data} handleModal={this.handleModal} />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  deleteTodo: (data) => dispatch(deleteTodo(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);