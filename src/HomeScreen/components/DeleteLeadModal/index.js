import React from "react";
import { Modal, Button, Icon } from "semantic-ui-react";

const DeleteLeadModal = ({ toggleDeleteLeadModal, isDeleteLeadModalOpen, deleteLead }) => (
	<Modal
		closeIcon
		open={isDeleteLeadModalOpen}
		onClose={() => toggleDeleteLeadModal(false)}
		onOpen={() => toggleDeleteLeadModal(true)}
	>
		<Modal.Header>Do you wish to delete this Lead?</Modal.Header>
		<Modal.Content className="delete_lead_form">
			<Button color="red" onClick={() => toggleDeleteLeadModal(false)}>
				<Icon name="remove" /> No
			</Button>
			<Button color="green" onClick={deleteLead} className="delete_lead_btn">
				<Icon name="checkmark" /> Yes
			</Button>
		</Modal.Content>
	</Modal>
);

export default DeleteLeadModal;
