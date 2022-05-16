import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
      let signInError;
      const navigate = useNavigate();

      if(error || gError || updateerror){
          signInError = <p className='text-red-500'>{error?.message || gError?.message || updateerror?.message}</p>
      }
    if(loading || gLoading || updating){
        return <Loading/>
    }
    if (gUser) {
        console.log(gUser);
    }
    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        console.log('update Done...');
        navigate('/appointment')
    };
    return (
        <div className='flex justify-center content-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center font-bold font-2xl">Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="name"
                            placeholder="Enter your Name"
                            class="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required:{
                                    value: true,
                                    message: 'name is Required'
                                }
                              })}
                        />
                        <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                            <span class="label-text-alt">Alt label</span>
                        </label>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email"
                            placeholder="your Email"
                            class="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required:{
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                  message: 'provide valid Email'
                                }
                              })}
                        />
                        <label class="label">
                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            <span class="label-text-alt">Alt label</span>
                        </label>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="password"
                            placeholder="your Password"
                            class="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required:{
                                    value: true,
                                    message: 'Required Password'
                                },
                                minLength: {
                                  value: 6,
                                  message: 'Must be 6 characters or longers'
                                }
                              })}
                        />
                        <label class="label">
                        {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            <span class="label-text-alt">Alt label</span>
                        </label>
                    </div>
                    {signInError}
                    <input className='btn w-full max-w-xs' type="submit" value="Sign Up" />
                </form>
                <p>Already hou have to Account doctor portal?<Link className='text-primary' to="/login">Please login</Link></p>
                <div className="divider">OR</div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline">
                    Contineu with google</button>
            </div>

        </div>
    </div>
    );
};

export default Signup;