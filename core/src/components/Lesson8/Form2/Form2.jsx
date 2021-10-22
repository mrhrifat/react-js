import React, { Component } from "react";

import "./style/form2.style.css";

class Form2 extends Component {


	handleChange = event => {
		// console.log(event.target)
		// console.log(event.target.name)

		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		console.log(this.state)
	}

	handleAgree = event => {
		this.setState({
			agree: event.target.checked
		})
	}

	handleSkill = event => {
		if (event.target.checked) {
			this.setState({
				skills: [...this.state.skills, event.target.value]
			})
		} else {
			const skills = this.state.skills.filter(skill => { return skill !== event.target.value })
			this.setState({ skills })
		}
	}

	state = {
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
		password: '',
		gender: '',
		birthday: '',
		country: '',
		skills: [],
		message: '',
		agree: false
	}


	render() {
		const { firstname, lastname, email, phone, password, birthday, country, skills, message, agree } = this.state

		return (
			<div>
				<h6 className="text-center">Form 2</h6>

				<form className="form w-75 m-auto border p-3">



					{/* Name */}
					<div className="form-group">
						<div className="row">

							{/* First Name */}
							<div className="col">
								<label htmlFor="firstname">First Name</label>
								<input
									name="firstname"
									type="text"
									className="form-control"
									onChange={this.handleChange}
									value={firstname}
								/>
							</div>

							{/* Last Name */}
							<div className="col">
								<label htmlFor="lastname">Last Name</label>
								<input
									name="lastname"
									type="text"
									className="form-control"
									onChange={this.handleChange}
									value={lastname}
								/>
							</div>
						</div>
					</div>



					{/* Email */}
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							name="email"
							type="email"
							className="form-control"
							onChange={this.handleChange}
							value={email}
						/>
					</div>



					{/* Phone */}
					<div className="form-group">
						<label htmlFor="phone">Phone</label>
						<input
							name="phone"
							type="text"
							className="form-control"
							onChange={this.handleChange}
							value={phone}
						/>
					</div>



					{/* Password */}
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							name="password"
							type="password"
							className="form-control"
							onChange={this.handleChange}
							value={password}
						/>
					</div>



					{/* Gender */}
					<fieldset className="form-group" >
						<label className="form-check-label">Gender</label>

						<div className="form-check">
							<label htmlFor="gender" className="form-check-label"></label>
							<input type="radio" name="gender" className="form-check-input"
								value="Male"
								onChange={this.handleChange}
							/>
							Male
						</div>

						<div className="form-check">
							<label htmlFor="gender" className="form-check-label"></label>
							<input type="radio" name="gender" className="form-check-input"
								value="Female"
								onChange={this.handleChange}
							/>
							Female
						</div>

						<div className="form-check">
							<label htmlFor="gender" className="form-check-label"></label>
							<input type="radio" name="gender" className="form-check-input"
								value="Others"
								onChange={this.handleChange}
							/>
							Others
						</div>
					</fieldset>


					{/* Birthday */}
					<div className="form-group">
						<label htmlFor="birthday">Date of Birth</label>
						<input
							type="date"
							name="birthday"
							className="form-control"
							onChange={this.handleChange}
							value={birthday}
						/>
					</div>



					{/* Country */}
					<div className="form-group">
						<label htmlFor="country">Country</label>
						<select
							name="country"
							className="form-control"
							onChange={this.handleChange}
							value={country}
						>
							<option>Select One</option>
							<option value="Afganistan">Afganistan</option>
							<option value="Bangladesh">Bangladesh</option>
							<option value="Pakistan">Pakistan</option>
							<option value="Saudi Arab">Saudi Arab</option>
							<option value="USA">USA</option>
						</select>
					</div>



					{/* Skills */}
					<div className="form-group">
						<label htmlFor="skills" className="form-check-label">
							Skills
						</label>
						<br />

						<div className="form-check">
							<label htmlFor="java" className="form-check-label">
								<input
									type="checkbox"
									className="form-check-input"
									name="skills"
									value="Java"
									checked={skills.includes("Java")}
									onChange={this.handleSkill}

								/>
								Java
							</label>
						</div>

						<div className="form-check">
							<label htmlFor="c" className="form-check-label">
								<input
									type="checkbox"
									className="form-check-input"
									name="skills"
									value="C"
									checked={skills.includes("C")}
									onChange={this.handleSkill}
								/>C
							</label>
						</div>

						<div className="form-check">
							<label htmlFor="javascript" className="form-check-label">
								<input
									type="checkbox"
									className="form-check-input"
									name="skills"
									value="JavaScript"
									checked={skills.includes("JavaScript")}
									onChange={this.handleSkill}

								/>
								JavaScript
							</label>
						</div>

						<div className="form-check">
							<label htmlFor="python" className="form-check-label">
								<input
									type="checkbox"
									className="form-check-input"
									name="skills"
									value="Python"
									checked={skills.includes("Python")}
									onChange={this.handleSkill}

								/>
								Python
							</label>
						</div>

						<div className="form-check">
							<label htmlFor="C#" className="form-check-label">
								<input
									type="checkbox"
									className="form-check-input"
									name="skills"
									value="C#"
									checked={skills.includes("C#")}
									onChange={this.handleSkill}

								/>
								C#
							</label>
						</div>
					</div>



					{/* Message */}
					<div className="form-group">
						<label htmlFor="message">Message</label>
						<textarea
							name="message"
							className="form-control"
							rows="5"
							onChange={this.handleChange}
							value={message}
						>

						</textarea>
					</div>



					{/* Agree */}
					<div className="form-check">
						<label htmlFor="agree" className="form-check-label">
							<input
								type="checkbox"
								className="form-check-input"
								name="agree"
								onChange={this.handleAgree}
								checked={agree}
							/>
							I agree with terms and conditions
						</label>
					</div>



					<input name="submit" type="button" value="Submit" className="btn btn-success" onClick={this.handleSubmit}
					/>
				</form>
			</div>
		);
	}
}

export default Form2;
