import React from "react";
import { Modal, Form, Button } from "semantic-ui-react";
// import renderIf from 'renderIf'

import "./AddLeadModal.css";

const options = [
  { key: "c", text: "City", value: "City" },
  { key: "z", text: "Zip", value: "Zip" },
  { key: "co", text: "Country", value: "Country" }
];

export default class AddLeadModal extends React.Component {
	state = {
		first_name: "",
		last_name: "",
		email: "",
		mobile: "",
		location_type: "",
		location_string: "",
		submittedFirstName: "",
		submittedLastName: "",
		submittedEmail: "",
		submittedMobile: "",
		submittedLocationType: "",
		submittedLocationString: "",
	};

	handleChange = (e, { name, value }) => this.setState({ [name]: value });

	handleSubmit = () => {
		const {
			first_name,
			last_name,
			email,
			mobile,
			location_type,
			location_string,
		} = this.state;
		const { submitForm } = this.props;
		this.setState({
			submittedFirstName: first_name,
			submittedLastName: last_name,
			submittedEmail: email,
			submittedMobile: mobile,
			submittedLocationType: location_type,
			submittedLocationString: location_string,
		});
		submitForm({
			submittedFirstName: first_name,
			submittedLastName: last_name,
			submittedEmail: email,
			submittedMobile: mobile,
			submittedLocationType: location_type,
			submittedLocationString: location_string,
		});
	};

	render() {
		const { isAddLeadModalOpen, toggleAddLeadModal } = this.props;
		const {
			first_name,
			last_name,
			email,
			mobile,
			location_type,
			location_string,
		} = this.state;
		// const renderIf
		return (
			<Modal
				onClose={() => toggleAddLeadModal(false)}
				onOpen={() => toggleAddLeadModal(true)}
				open={isAddLeadModalOpen}
			>
				<Modal.Header>Add Lead</Modal.Header>
				<Modal.Content>
					<Form onSubmit={this.handleSubmit} class="add_lead_form">
						<Form.Group>
							<div class="formContainer">
								<div class="formRow">
									<div class="formField">
										<label class="formLable">First Name</label>
										<Form.Input
											placeholder="First Name"
											name="first_name"
											value={first_name}
											onChange={this.handleChange}
										/>
									</div>
									<div class="formField">
										<label class="formLable">Last Name</label>
										<Form.Input
											placeholder="Last Name"
											name="last_name"
											value={last_name}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div class="formRow">
									<div class="formField">
										<label class="formLable">Email Address</label>
										<Form.Input
											placeholder="Email Address"
											name="email"
											value={email}
											onChange={this.handleChange}
										/>
									</div>
									<div class="formField">
										<label class="formLable">Mobile</label>
										<Form.Input
											placeholder="Mobile"
											name="mobile"
											value={mobile}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div class="formRow">
									<div class="formField">
										<label class="formLable">Location Type</label>
										<select
											id="location_type"
											name="location_type"
											onChange={(e) =>
												this.handleChange(e, {
													name: "location_type",
													value: document.getElementById("location_type").value,
												})
											}
										>
											<option value="City">City</option>
											<option value="Zip">Zip</option>
											<option value="Country">Country</option>
										</select>
									</div>
									<div class="formField">
										<label class="formLable">Location String</label>
										<Form.Input
											placeholder="Location String"
											name="location_string"
											value={location_string}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div class="formRow">
									<Button
										content="Close"
										secondary
										onClick={() => toggleAddLeadModal(false)}
									/>
									<Form.Button
										disabled={
											!first_name ||
											!last_name ||
											!email ||
											!mobile ||
											!location_type ||
											!location_string
										}
										content="Save"
										className="add_lead_btn"
										onClick={this.handleOnClick}
										primary
									/>
								</div>
							</div>
						</Form.Group>
					</Form>
				</Modal.Content>
			</Modal>
		);
	}
}
