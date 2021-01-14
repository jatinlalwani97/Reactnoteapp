import React, { Component } from 'react'
import { Input, Button, Form } from 'antd';
const { TextArea } = Input;
class TodoForm extends Component {
    onFinish = (values) => {
        if(this.props.data.id) {
            values.id = this.props.data.id
            this.props.handleEdit(values)
        }
        else {
            this.props.handleSubmit(values)
        }
        
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render() {
        return (
            <React.Fragment>
                <br/>
                <Form
                    layout="vertical"
                    style={{ width: "80%", margin: "1% 10%" }}
                    name="basic"
                    initialValues={this.props.data}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: 'Please input your title!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Date"
                        name="date"
                        rules={[{ required: true, message: 'Please input your date!' }]}
                    >
                        <Input disabled />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please input your description!' }]}
                    >
                        <Input.TextArea autoSize={{minRows:"5", maxRows:"5"}} />
                    </Form.Item>
                    <Form.Item>
                        <center>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button> &nbsp; &nbsp;
                            <Button onClick={() => this.props.handleModal(false)} type="primary">
                                Cancel
                            </Button>
                        </center>
                    </Form.Item>
                </Form>
            </React.Fragment>
        )
    }
}

export default TodoForm