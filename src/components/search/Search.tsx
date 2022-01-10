import { Button, Form, Input } from 'antd';
import React from 'react';
import IconSearch from '../icons/IconSearch';
interface typeSearch {
    children: string;
    background: string;
}
const Search = (props: typeSearch) => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <Form className="search"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
           
            <Form.Item
                name="username"
                rules={[
                    { required: true, message: 'Please input your username!' },
                ]}>
                <Input
                    placeholder={props.children}
                    style={{ background: props.background }}
                />
            </Form.Item>
            <button type="submit">
                {' '}
                <IconSearch />
            </button>
        </Form>
    );
};

export default Search;
