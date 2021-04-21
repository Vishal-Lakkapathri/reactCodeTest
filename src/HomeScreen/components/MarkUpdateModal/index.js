import React, { useState } from "react";
import { Modal, Button, Icon, Form } from "semantic-ui-react";

import "./MarkUpdateModal.css";

const MarkUpdateModal = ({
	toggleMarkUpdateModal,
	isMarkUpdateModalOpen,
	markCommunication,
}) => {
	const [inputValue, setInputValue] = useState("");
	return (
		<Modal
			closeIcon
			open={isMarkUpdateModalOpen}
			onClose={() => toggleMarkUpdateModal(false)}
			onOpen={() => toggleMarkUpdateModal(true)}
		>
			<Modal.Header>Mark Communication</Modal.Header>
			<Form className="update_lead_form">
				<Form.TextArea
					label="Communication"
					placeholder="Tell us more about you..."
					name="communication"
					value={inputValue}
					onChange={(event, data) => setInputValue(data.value)}
				/>
				<div class="buttonContainer">
					<Form.Button
						className="update_lead_btn"
						onClick={() => {
							markCommunication(inputValue);
						}}
					>
						Save
					</Form.Button>
				</div>
			</Form>
		</Modal>
	);
};

export default MarkUpdateModal;
