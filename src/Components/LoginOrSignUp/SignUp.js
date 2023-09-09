import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';


const SignUp = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = (data) => {
       
        axios.post("http://localhost:3200/register/signup",data)
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
       
        
    }
        
  return (
    <div className='signUp-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="First Name" {...register("firstName",{required:true})} />
      {errors.firstName && <span>This field is required</span>}
      <input placeholder="Last Name" {...register("lastName",{required:true})} />
      {errors.lastName && <span>This field is required</span>}
      <input placeholder="Email" type='email'{...register("email",{required:true})} />
      {errors.email && <span>This field is required</span>}
      <input placeholder="Password" type='password' {...register("password",{required:true, minLength:8, pattern: /^[A-Za-z]+$/i})} />
      {errors.password?.type==="required" && <span>This field is required</span>}
      {errors.password?.type==="minLength" && <span>The password must be 8 characters long</span>}
      {/*<input placeholder="Confirm Password"type='password' {...register("confirmPassword",{required:true,validate: (val: string) => {
    if (watch('password') !== val) {
      return "Your passwords do no match";
    }
  }, })} />*/}
      {errors.confirmPassword && <span>This field is required</span>}
      {/* include validation with required or other standard HTML validation rules */}
      {/*<input {...register("exampleRequired", { required: true })} />*/}
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
    </div>
  )
}

export default SignUp