import React, { useEffect } from 'react'
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { ForgetPassword, LoginUser } from '../../api/users';
import { message } from 'antd'

function Forget() {
    const onFinish = async (values) => {
        console.log(values);
        try {
            const response = await ForgetPassword(values)
            if (response.status === "success") {
                message.success(response.message)
                alert("OTP sent to your email")
                window.location.href = '/reset'
            }
            else {
                message.error(response.message)
            }
        } catch (error) {
            message.error(error.message)
        }
    }
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate("/");
        }
    }, [])
    return (
        <>
            <header className="App-header">
                <main className="main-area mw-500 text-center px-3">
                    <section className="left-section">
                        <h1>Forget Password</h1>
                    </section>
                    <section className="right-section">
                        <Form layout="vertical" onFinish={onFinish}>

                            <Form.Item
                                label="Email"
                                htmlFor="email"
                                name="email"
                                className="d-block"
                                rules={[{ required: true, message: "Email is required" }]}
                            >
                                <Input
                                    id="email"
                                    type="text"
                                    placeholder="Enter your Email"
                                ></Input>
                            </Form.Item>


                            <Form.Item className="d-block">
                                <Button
                                    type="primary"
                                    block
                                    htmlType="submit"
                                    style={{ fontSize: "1rem", fontWeight: "600" }}
                                >
                                    SEND OTP
                                </Button>
                            </Form.Item>
                        </Form>
                        <div>
                            <p>
                                Existing User? <Link to="/login">Login Here</Link>
                            </p>
                        </div>
                    </section>
                </main>
            </header>
        </>
    )
}

export default Forget
