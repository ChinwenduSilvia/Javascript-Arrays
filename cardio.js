const inventors = [
    { first: 'Benjamin', last: 'Franklin', year: 1706, passed: 1790},
    { first: 'William', last: 'Cullen', year: 1710, passed: 1790},
    { first: 'Jozef', last: 'Karol', year: 1713, passed: 1789},
    { first: 'John', last: 'Roebuck', year: 1718, passed: 1794},
    { first: 'James', last: 'Watt', year: 1736, passed: 1819},
    { first: 'James', last: 'Hargreaves', year: 1720, passed: 1778},
    { first: 'Nicolas-Joseph', last: 'Cugnot', year: 1725, passed: 1804},
    { first: 'Thomas', last: 'Jefferson', year: 1743, passed: 1726},
    { first: 'Alessandro', last: 'Volta', year: 1745, passed: 1827},
    { first: 'Dennis', last: 'Gabor', year: 1900, passed: 1979},
    { first: 'Leighton', last: 'Wilkie', year: 1900, passed: 1993},
    { first: 'Enrico', last: 'Fermi', year: 1901, passed: 1954},
    { first: 'Franc', last: 'Trkman', year: 1903, passed: 1995},
    { first: 'Philo', last: 'Farnsworth', year: 1906, passed: 1971},
    { first: 'Frank', last: 'Whittle', year: 1907, passed: 1996},  
];

const seventeen = inventors.filter(inventor => (inventor.year >= 1700 && inventor.year < 1800))
console.table(seventeen);

const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(ordered);

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

const oldest = inventors.sort(function(a, b){
    const lastPerson = a.passed - a.year;
    const nextPerson = b.passed - b.year;
    return lastPerson > nextPerson ? -1 : 1;
});
console.table(oldest);

const people = ['Octavia, Jade', 'Denice, Germine', 
                'Seria, Michell', 'Courtney, Nelly', 
                'Doretha, Sydney','Deidra, Monika', 
                'Lashond, Judi', 'Chelsey, Antionette',];

const alpha = people.sort(function(lastOne, nextOne) {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.log(alpha);

const things = ['bed', 'mirror', 'pen', 
                'book', 'bed', 'book',];

const list = things.reduce(function(obj, item){
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(list);

