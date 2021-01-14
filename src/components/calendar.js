import React, { Component } from 'react'
import { Calendar, Badge, Tag, Space } from 'antd';
import { Components } from 'antd/lib/date-picker/generatePicker';
// import { GETBYDATE } from '../service/calendar'
import moment from 'moment'

class EventCalendar extends Component {
  state = {
    data : []
  }

  getListData(value) {
    let listData;
    // console.log(moment(value).format("YYYY-MM-DD"))
    if(moment(value).format("YYYY-MM-DD") in this.state.data){
      // console.log("hello")
      listData = this.state.data[moment(value).format("YYYY-MM-DD")]
    }
    // console.log(listData)
    return listData || [];
  }
  dateCellRender(value) {
    const listData = this.getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.title}>  
          {moment().diff(item.date, 'days') >0 && <>
            {item.status=="completed" && <Space align="horizontal"> <Badge status={"success"} text={item.title} />  <Tag color="green"> Completed </Tag> </Space>}
            {item.status=="pending" &&  <Space align="horizontal"> <Badge status={"error"} text={item.title} />  <Tag color="red"> Expired </Tag> </Space>}
          </> }
          {moment().diff(item.date, 'days') ==0 && <>
            {item.status=="completed" && <Space align="horizontal"> <Badge status={"success"} text={item.title} />  <Tag color="green"> Completed </Tag> </Space>}
            {item.status=="pending" &&  <Space align="horizontal"> <Badge status={"warning"} text={item.title} />  <Tag color="orange"> Pending </Tag> </Space>}
          </> }
          {moment().diff(item.date, 'days') <0 && <>
            {item.status=="pending" &&  <Space align="horizontal"> <Badge status={"warning"} text={item.title} />  <Tag color="orange"> Pending </Tag> </Space>}
          </> }
          </li>
        ))}
      </ul>
    );
  }

  selectDate = (value) => {
    this.props.handleModal({ title: "", date: moment(value).format("DD-MM-YYYY"), description: "" })
  }

  getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  monthCellRender(value) {
    const num = this.getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
  render() {
    return (
      <>
      {this.state.data && <Calendar onSelect={this.selectDate} dateCellRender={this.dateCellRender.bind(this)} monthCellRender={this.monthCellRender.bind(this)} />}
      </>
    )
  }
}



export default EventCalendar