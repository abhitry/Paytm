import {Button}from "../components/Button"
import { useState } from "react"
import {BottomWarning}from "../components/BottomWarning"
import {Heading}from "../components/Heading"
import {SubHeading}from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import {InputBox}from "../components/InputBox"

export const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();
    const url="https://paytm-backend-1ymy.onrender.com";
    return (<div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
      <Heading label={"Sign In"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange={e => {
                setUsername(e.target.value);
                }}  placeholder="harkirat@gmail.com" label={"Email"} />
        <InputBox  onChange={e => {
                setPassword(e.target.value);
                }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
        <Button onClick={async ()=>{
            try{
                    const response=await axios.post(url+"/api/v1/user/signin",{
                    username,
                    password
                })
                if(response.data.token){
                  localStorage.setItem("token",response.data.token);
                  navigate("/dashboard")
                }
            }
            catch(error)
            {
              alert(error.response?.data?.message || "Something went wrong. Please try again.");
            }
            }} label={"Sign In"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
</div>);
};
