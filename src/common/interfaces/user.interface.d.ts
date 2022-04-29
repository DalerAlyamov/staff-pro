export type UserTypeList = "EMPLOYEE" | "HR" | "ACCOUNTANT" | "DIRECTOR" | "BUYER";

export interface UserData {
  id: string;
  name: string;
  surname: string;
  email: string;
  rank: string;
  type: UserRankList;
  avatar: string;
  vacation_days: number;
}

export interface UserSlice {
  data: UserData | undefined;
}