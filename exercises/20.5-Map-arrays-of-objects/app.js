let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = (person) => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
	return " Hello, my name is " + person.name + " and I am " + `${currentYear - person.birthDate.getUTCFullYear()}` + " years old";
};

console.log(people.map(simplifier));

