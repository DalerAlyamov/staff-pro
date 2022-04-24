const employee = "EMPLOYEE";
const hr = "HR";
const accountant = "ACCOUNTANT";
const director = "DIRECTOR";

const userRankList = Object.freeze(
	Object.seal({
		director,
		employee,
		hr,
		accountant
	})
)

export default userRankList;
