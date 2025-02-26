import React, { useEffect } from "react";
import { Button, Form, Input, message, Radio } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from "../../api/users";



function Register() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    // console.log('Success:', values);
    try{
      const response = await RegisterUser(values);
      console.log(response);
      if(response.status === 201) {
        message.success(response.message);
        navigate("/login")
      }else{
        message.error(response.message);
      }
    }catch(err){
      message.error(err.message);
    }
  };
  
  useEffect(() => {
    if(localStorage.getItem("token")){
      navigate("/")
    }
  },[]);
 return (
   <>
     <main className="App-header">
       <h1>Register to BookMyShow</h1>
       <section className="mw-500 text-center px-3">
         <Form layout="vertical"
         onFinish={onFinish}
         >
          <Form.Item
             label="Name"
             htmlFor="name"
             name="name"
             className="d-block"
             rules={[{ required: true, message: "Name is required" }]}
           >
             <Input
               id="name"
               type="text"
               placeholder="Enter your Name"
             ></Input>
           </Form.Item>
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


           <Form.Item
             label="Password"
             htmlFor="password"
             name="password"
             className="d-block"
             rules={[{ required: true, message: "Password is required" }]}
           >
             <Input
               id="password"
               type="password"
               placeholder="Enter your Password"
             ></Input>
           </Form.Item>


           <Form.Item className="d-block">
             <Button
               type="primary"
               block
               htmlType="submit"
               style={{ fontSize: "1rem", fontWeight: "600" }}
             >
               Register
             </Button>
           </Form.Item>
           <Form.Item
                label="Register as a Partner"
                htmlFor="role"
                name="role"
                className="d-block text-center"
                initialValue={false}
                rules={[{ required: true, message: "Please select an option!" }]}
              >
                <div className="d-flex justify-content-start">
               
                  <Radio.Group
                    name="radiogroup"
                    className="flex-start"
                  >
                    <Radio value={'partner'}>Yes</Radio>
                    <Radio value={'user'}>No</Radio>
                  </Radio.Group>
                </div>
              </Form.Item>

         </Form>
         <div>
           <p>
             Existing User? <Link to="/login">Login Here</Link>
           </p>
         </div>
       </section>
     </main>
   </>
 );
}


export default Register;