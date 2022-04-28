const employee = "EMPLOYEE";
const hr = "HR";
const accountant = "ACCOUNTANT";
const director = "DIRECTOR";
const buyer = "BUYER";

const userRankList = Object.freeze(
	Object.seal({
		director,
		employee,
		hr,
		accountant,
		buyer
	})
)

export default userRankList;
