import React from 'react'
import { Button } from 'semantic-ui-react'

import './ButtonStyles.css'

export const AddLeadButton = ({ handleOnClickAddLeadButton }) => (
	<Button className="add_lead_modal_btn" onClick={handleOnClickAddLeadButton}>
		<span class="textColor">Add Lead</span>
	</Button>
);

export const MarkUpdateButton = ({ handleMarkUpdateButton }) => (
	<Button className="update_lead_modal_btn" onClick={handleMarkUpdateButton}>
		<span class="textColor">Mark Update</span>
	</Button>
);

export const DeleteButton = ({ handleOnClickDeleteButton }) => (
	<Button className="delete_lead_modal_btn" onClick={handleOnClickDeleteButton}>
		<span class="textColor">Delete</span>
	</Button>
);