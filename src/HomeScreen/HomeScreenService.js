import axios from "axios";

const endPointURL = process.env.REACT_APP_API_URL;

export const fetchLeadsListService = async () => {
	try {
		const { data = [] } = await axios.get(
			`${endPointURL}/api/leads/?location_string=India`
		);
		return data;
	} catch (error) {
		return error;
	}
};

export const addLeadService = async (payload) => {
	const {
		submittedFirstName,
		submittedLastName,
		submittedEmail,
		submittedLocationString,
		submittedLocationType,
		submittedMobile,
	} = payload;
	try {
		const response = await axios.post(`${endPointURL}/api/leads/`, {
			first_name: submittedFirstName,
			last_name: submittedLastName,
			mobile: submittedMobile,
			email: submittedEmail,
			location_type: submittedLocationType,
			location_string: submittedLocationString,
		});
    return response
	} catch (error) {
		return error;
	}
};

export const deleteLeadService = async (currentSelectedLeadId) => {
  try {
    const response = await axios.delete(`${endPointURL}/api/leads/${currentSelectedLeadId}/`)
    return response
  } catch (error) {
		return error;
	}
}

export const markCommunicationService = async (data, currentSelectedLeadId) => {
  try {
    const response = await axios.put(`${endPointURL}/api/mark_lead/${currentSelectedLeadId}`, {
      communication: data
    })
    return response
  } catch (error) {
		return error;
	}
}