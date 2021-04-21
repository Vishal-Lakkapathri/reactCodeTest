import React, { useState, useEffect } from "react";
// import renderIf from 'render-if'

import { AddLeadButton } from "./components/Buttons";
import LeadsTable from "./components/LeadsTable";
import AddLeadModal from "./components/AddLeadModal";
import DeleteLeadModal from "./components/DeleteLeadModal";
import MarkUpdateModal from "./components/MarkUpdateModal";

import {
	fetchLeadsListService,
	addLeadService,
	deleteLeadService,
	markCommunicationService,
} from "./HomeScreenService";

import "./HomeScreenStyles.css";

export const HomeScreenView = () => {
	const [leadsList, setLeadsList] = useState([]);
	const [isAddLeadModalOpen, toggleAddLeadModal] = useState(false);
	const [isDeleteLeadModalOpen, toggleDeleteLeadModal] = useState(false);
	const [currentSelectedLeadId, setCurrentSelectedLeadId] = useState(0);
	const [isMarkUpdateModalOpen, toggleMarkUpdateModal] = useState(false);

	const fetchLeadsList = () => {
		fetchLeadsListService()
			.then((data) => setLeadsList(data))
			.catch((error) => console.log("Error from fetchLeadsListService", error));
	};

	useEffect(() => {
		fetchLeadsList();
	}, []);

	const submitForm = async (payload) => {
		const response = await addLeadService(payload);
		if (response.status === 201) {
			toggleAddLeadModal(!isAddLeadModalOpen);
			fetchLeadsList();
		}
	};

	const handleOnClickDeleteButton = (id) => {
		toggleDeleteLeadModal(!isDeleteLeadModalOpen);
		setCurrentSelectedLeadId(id);
	};

	const handleMarkUpdateButton = (id) => {
		toggleMarkUpdateModal(!isMarkUpdateModalOpen);
		setCurrentSelectedLeadId(id);
	};

	const deleteLead = async () => {
		const response = await deleteLeadService(currentSelectedLeadId);
		if (response.status === 204) {
			toggleDeleteLeadModal(!isDeleteLeadModalOpen);
			fetchLeadsList();
		}
	};

	const markCommunication = async (data) => {
		const response = await markCommunicationService(
			data,
			currentSelectedLeadId
		);
		if (response.status === 202) {
			fetchLeadsList();
		}
	};

	return (
		<div className="mainContainer">
			<AddLeadModal
				toggleAddLeadModal={toggleAddLeadModal}
				submitForm={submitForm}
				isAddLeadModalOpen={isAddLeadModalOpen}
			/>
			<DeleteLeadModal
				toggleDeleteLeadModal={toggleDeleteLeadModal}
				isDeleteLeadModalOpen={isDeleteLeadModalOpen}
				deleteLead={deleteLead}
			/>
			<MarkUpdateModal
				isMarkUpdateModalOpen={isMarkUpdateModalOpen}
				toggleMarkUpdateModal={toggleMarkUpdateModal}
				markCommunication={markCommunication}
			/>
			<AddLeadButton
				handleOnClickAddLeadButton={() =>
					toggleAddLeadModal(!isAddLeadModalOpen)
				}
			/>
			<LeadsTable
				leadsList={leadsList}
				handleOnClickDeleteButton={(index) => handleOnClickDeleteButton(index)}
				handleMarkUpdateButton={(index) => handleMarkUpdateButton(index)}
			/>
		</div>
	);
};
