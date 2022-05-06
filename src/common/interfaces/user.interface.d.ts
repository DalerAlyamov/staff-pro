// 1 – "EMPLOYEE" 2 – "HR" 3 – "ACCOUNTANT" 4 – "DIRECTOR" 5 – "BUYER";
export type UserTypeList = 1 | 2 | 3 | 4 | 5;

export interface UserData {
  id: string;
  name: string;
  surname: string;
  mail: string;
  type: UserRankList;
  rank_id: string;
  department_id: string;
  avatar: string;
  vacation_days: number;
}

export interface UserSlice {
  data: UserData | undefined;
}