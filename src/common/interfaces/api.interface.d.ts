import { HouseTypesList } from './houseTypes';

export interface Response {
	status_code: number;
	message: string;
	payload: any;
}

// Api_Группа_Имя_Данные 

/* Auth */

export interface Api_Accountant_AttachDocumentsToBusinessTrip_Body {
	id: string;
	name: string;
	file_base64: string;
}

/* Auth */

export interface Api_Auth_Login_Body {
	mail: string;
	password: string;
}

export interface Api_Auth_ResetPassword_Body {
	mail: string;
}

export interface Api_Auth_CheckResetPasswordToken_Body {
	token: string;
}

export interface Api_Auth_ChangePassword_Body {
	password: string;
	reset_token: string;
}

export interface Api_Auth_RetryToken_Body {
	retry_token: string;
}

export interface Api_Auth_CheckAccessToken_Body {
	access_token: string;
}

/* BusinessTrip */

export interface Api_BusinessTrip_Create_Body {
	name: string;
}

export interface Api_BusinessTrip_GetAll_Params {
	query: string;
	filter_type: 1 | 2 | 3;
	date: number;
}

export interface Api_BusinessTrip_GetAll_Params {
	query: string;
	filter_type: 1 | 2 | 3;
	date: string;
	project_id: string[];
	destination_id: string[];
}

export interface Api_BusinessTrip_Edit_Body {
	name: string;
	date_start: number;
	date_end: number;
	author_id: string;
	documents: {
		id: string;
		name: string;
		file_base64: string;
	}[];
	trip_routes: {
		coutnry_id: string;
		city_id: string;
		city_from_id: string;
		city_to_id: string;
		company: string;
		is_in_tajikistan: boolean;
		goal_id: string;
		project_id: string;
		description: string;
		transport_id: string;
		is_personal_transport: boolean;
		house_requirement: boolean;
		type_of_house: HouseTypesList;
		date_start: number;
		date_end: number;
	}[];
}

/* Buyer */

export interface Api_Buyer_GetAllApplications_Params {
	query: string;
	page: number;
	filter_by: 1 | 2;
}

export interface Api_Buyer_GetMyApplications_Params {
	query: string;
	page: number;
	filter_by: 1 | 2;
}

export interface Api_Buyer_AttachDocumentsToBusinessTrip_Body {
	id: string;
	name: string;
	file_base64: string;
}

/* Employee */

export interface Api_Employee_GetAll_Params {
	filter_type: 1 | 2;
}

export interface Api_Employee_GetApplications_Params {
	query: string;
	page: number;
	filter_by: 1 | 2;
}

export interface Api_Employee_GetAllEmployeeApplications_Params {
	query: string;
	page: number;
	filter_by: 1 | 2;
}

/* HR */

export interface Api_HR_CreateEmployee_Body {
	name: string;
	surname: string;
	patronymic: string;
	rank_id: string;
	departament_id: string;
	type: 1 | 2;
	vacation_days: number;
	supervisor_id: string;
	documents: {
		id: string;
		name: string;
		file_base64: string;
	}[];
}

export interface Api_HR_EditBusinessTripTemplate_Body {
	destination: {
		abroad: {
			id: string;
			city: string;
			country: string;
			price: number;
			currency: "RUB" | "EUR" | "USD";
			active: boolean;  
		}[];
		domestic: {
			id: string;
			city: string;
			country: string;
			price: number;
			currency: "RUB" | "EUR" | "USD";
			active: boolean;  
		}[];
	}[];
	project: {
		id: string;
		name: string;
		active: boolean;
	}[];
	goals: {
		id: string;
		name: string;
	}[];
	transport: {
		id: string;
		name: string;
		start_point: string;
		end_point: string;
		active: boolean;
	}[];
}

export interface Api_HR_EditEmployeeTemplate_Body {
	department_list: {
		id: string;
		name: string;
	}[];
	supervisor_list: {
		id: string;
		name: string;
	}[];
	rank_list: {
		id: string;
		name: string;
	}[];
}

export interface Api_HR_EditEmployee_Body {
	name: string;
	surname: string;
	patronymic: string;
	rank_id: string;
	departament_id: string;
	type: 1 | 2;
	vacation_days: number;
	supervisor_id: string;
	documents: {
		id: string;
		name: string;
		file_base64: string;
	}[];
}

/* Notifications */

export interface Api_Notifications_GetAll_Params {
	is_notion: 1 | 0;
	page: number;
}

/* Vacation */

export interface Api_Vacation_Create_Body {
	id: string;
	date_start: number;
	date_end: number;
	type_id: string;
	description: string; 
}

export interface Api_Vacation_Edit_Body {
	id: string;
	date_start: number;
	date_end: number;
	type_id: string;
	description: string; 
}

export interface Api_Vacation_GetAll_Params {
	filter_type: 1 | 2;
}