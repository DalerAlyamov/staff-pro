export type UserRankList = "EMPLOYEE" | "HR" | "ACCOUNTANT" | "DIRECTOR";

export interface User {
  id: string | undefined;
  name: string | undefined;
  email: string | undefined;
  rank: UserRankList | undefined;
}