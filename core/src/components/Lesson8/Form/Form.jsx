import React, { Component } from "react";
// import classes from "./form.module.css"
import "./form.style.css"


class Form extends Component {
    render() {
        return (
            <div>
                <h6 className="text-center">Form</h6>

                <form className="form w-75 m-auto border p-3">

                    {/* Name */}
                    <div className="form-group">
                        <div className="row">

                            {/* First Name */}
                            <div className="col">
                                <label htmlFor="firstname">First Name</label>
                                <input name="firstname" type="text" className="form-control" />
                            </div>

                            {/* Last Name */}
                            <div className="col">
                                <label htmlFor="lastname">Last Name</label>
                                <input name="lastname" type="text" className="form-control" />
                            </div>
                        </div>
                    </div>


                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input name="email" type="email" className="form-control" />
                    </div>



                    {/* Phone */}
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input name="phone" type="text" className="form-control" />
                    </div>


                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" className="form-control" />
                    </div>



                    {/* Gender */}
                    <fieldset className="form-group">
                        <label className="form-check-label">Gender</label>

                        <div className="form-check">
                            <label htmlFor="gender" className="form-check-label"></label>
                            <input type="radio" name="gender" className="form-check-input" />
                            Male
                        </div>

                        <div className="form-check">
                            <label htmlFor="gender" className="form-check-label"></label>
                            <input type="radio" name="gender" className="form-check-input" />
                            Female
                        </div>

                        <div className="form-check">
                            <label htmlFor="gender" className="form-check-label"></label>
                            <input type="radio" name="gender" className="form-check-input" />
                            Others
                        </div>
                    </fieldset>


                    <div className="form-group">
                        <label htmlFor="birthday">Date of Birth</label>
                        <input type="date" name="birthday" className="form-control" />
                    </div>



                    {/* Country */}
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select name="country" className="form-control">
                            <option>Select One</option>
                            <option value='Afganistan'>Afganistan</option>
                            <option value='Bangladesh'>Bangladesh</option>
                            <option value='Pakistan'>Pakistan</option>
                            <option value='Saudi Arab'>Saudi Arab</option>
                            <option value='USA'>USA</option>
                        </select>
                    </div>




                    {/* Skills */}
                    <div className="form-group">
                        <label htmlFor="skills" className="form-check-label">Skills
                        </label>
                        <br />


                        <div className="form-check">
                            <label htmlFor="java" className="form-check-label">
                                <input type="checkbox" className="form-check-input" name="java" />
                                Java
                            </label>
                        </div>

                        <div className="form-check">
                            <label htmlFor="c" className="form-check-label">
                                <input type="checkbox" className="form-check-input" name="c" />
                                C
                            </label>
                        </div>

                        <div className="form-check">
                            <label htmlFor="javascript" className="form-check-label">
                                <input type="checkbox" className="form-check-input" name="javascript" />
                                JavaScript
                            </label>
                        </div>

                        <div className="form-check">
                            <label htmlFor="python" className="form-check-label">
                                <input type="checkbox" className="form-check-input" name="python" />
                                Python
                            </label>
                        </div>
                    </div>


                    {/* Message */}
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" className="form-control" rows="5"></textarea>
                    </div>


                    {/* Agree */}

                    <div className="form-check">
                        <label htmlFor="agree" className="form-check-label">
                            <input type="checkbox" className="form-check-input" name="agree" />
                            I agree with terms and conditions
                        </label>
                    </div>


                    <input name="submit" type="button" value="Submit" className="btn btn-success" />
                </form>
            </div>
        )
    }
}

export default Form