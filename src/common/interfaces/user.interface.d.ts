export type UserTypeList = "EMPLOYEE" | "HR" | "ACCOUNTANT" | "DIRECTOR" | "BUYER";

export interface User {
  id: string | undefined;
  name: string | undefined;
  email: string | undefined;
  rank: string | undefined;
  type: UserRankList | undefined;
}