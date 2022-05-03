// Api_Группа_Имя_Метод 

import { HouseTypesList } from './houseTypes';

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