export interface ApiLoginBody {
	mail: string;
	password: string;
} 

export interface ApiResetPasswordBody {
	mail: string;
} 

export interface ApiCheckResetPasswordTokenBody {
	token: string;
} 

export interface ApiChangePasswordBody {
	password: string;
	reset_token: string;
} 

export interface ApiRetryTokenBody {
	retry_token: string;
} 

export interface ApiCheckAccessTokenBody {
	access_token: string;
} 