import React from "react";
import * as Yup from "yup"
import {ErrorMessage, Field, Formik, Form} from "formik"

export default class BasicForm extends React.Component{
    constructor(){
        super()
        this.state = {
            user: {
                name: "",
                email: "",
                password: "",
                confirmpass: "",
                terms: false
            },
            schema: Yup.object({
                name: Yup.string().required('Please enter name').min(3, 'Too short').max(15, 'too large'),
                email: Yup.string().required('Please enter email'),
                password: Yup.string().required('Please enter password').matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/, 'Must be contain 8 character'),
                confirmpass: Yup.string().required('Please confirm password').oneOf([Yup.ref('password'), null], 'confirm password doesnt match'),
                terms: Yup.bool().required().oneOf([true], 'Please accept the terms')
            })
        }
    }

    render(){
        return(
            <div>
                <Formik initialValues={this.state.user} validationSchema={this.state.schema} onSubmit={(values) => {console.log(values)}}>
                    <Form className = "container">
                        <div className="mb-3">
                            <label>Name</label>
                            <Field name="name" type="text" className="form-control"></Field>
                            <small>
                                <ErrorMessage component='label' className="text-danger" name="name"></ErrorMessage>
                            </small>
                        </div>
                        <div className="mb-3">
                            <label>Email</label>
                            <Field name="email" type="text" className="form-control"></Field>
                            <small>
                                <ErrorMessage component='label' className="text-danger" name="email"></ErrorMessage>
                            </small>
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <Field name="password" type="password" className="form-control"></Field>
                            <small>
                                <ErrorMessage component='label' className="text-danger" name="password"></ErrorMessage>
                            </small>
                        </div>
                        <div className="mb-3">
                            <label>Confirm password</label>
                            <Field name="confirmpass" type="password" className="form-control"></Field>
                            <small>
                                <ErrorMessage component='label' className="text-danger" name="confirmpass"></ErrorMessage>
                            </small>
                        </div>
                        <div className="mb-3">
                            <label>Accept terms</label>
                            <Field name="terms" type="checkbox" className="mx-2"></Field>
                            <small>
                                <ErrorMessage component='label' className="text-danger" name="terms"></ErrorMessage>
                            </small>
                        </div>
                        <div className="mb-3">
                            <input type="submit" className="btn btn-primary" value='Register'></input>
                        </div>
                    </Form>
                </Formik>
            </div>
        )
    }
}