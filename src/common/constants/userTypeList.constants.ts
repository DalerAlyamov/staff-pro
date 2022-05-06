const employee = 1;
const hr = 2;
const accountant = 3;
const director = 4;
const buyer = 5;

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
