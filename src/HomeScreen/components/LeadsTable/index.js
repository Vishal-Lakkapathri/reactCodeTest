import React from "react";
import { Table } from "semantic-ui-react";

import { MarkUpdateButton, DeleteButton } from "../Buttons";

const TableHeader = ({ value }) => <th>{value}</th>;

const TableRow = ({
	name = "N/A",
	email = "N/A",
	mobileNumber = "N/A",
	locationType = "N/A",
	locationString = "N/A",
	handleOnClickDeleteButton,
	handleMarkUpdateButton,
}) => {
	return (
		<tr>
			<td>{name}</td>
			<td>{email}</td>
			<td>{mobileNumber}</td>
			<td>{locationType}</td>
			<td>{locationString}</td>
			<td>
				<MarkUpdateButton
					handleMarkUpdateButton={handleMarkUpdateButton}
				/>
				<DeleteButton handleOnClickDeleteButton={handleOnClickDeleteButton} />
			</td>
		</tr>
	);
};

const LeadsTable = ({
	leadsList = [],
	handleOnClickDeleteButton,
	handleMarkUpdateButton,
}) => {
	return (
		<table class="ui celled table leads_table">
			<thead>
				<tr>
					<TableHeader value="Name" />
					<TableHeader value="Email" />
					<TableHeader value="Mobile Number" />
					<TableHeader value="Location Type" />
					<TableHeader value="Location String" />
					<TableHeader value="Actions" />
				</tr>
			</thead>
			{leadsList.map(
				({
					first_name: firstName,
					last_name: lastName,
					email,
					mobile,
					location_type: locationType,
					location_string: locationString,
					id,
				}) => {
					return (
						<tbody>
							<TableRow
								name={`${firstName} ${lastName}`}
								email={email}
								mobileNumber={mobile}
								locationType={locationType}
								locationString={locationString}
								handleOnClickDeleteButton={() => handleOnClickDeleteButton(id)}
								handleMarkUpdateButton={() => handleMarkUpdateButton(id)}
							/>
						</tbody>
					);
				}
			)}
		</table>
	);
};

export default LeadsTable;
