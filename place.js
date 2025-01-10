//1
const workersSalary = [12000, 20000, 18000, 27000, 30000, 30000, 23000]
const summ = workersSalary.reduce((balance, grn) => balance + grn, 0)
console.log(summ)
//2
const team = [
{name: "Bob" , friends:["Alice", "Stewie", "Peter", "Brain", "Homer"], skill: "kindness"},
{name: "Alice" , friends:["Bob", "Brain", "Peter"], skill: "FrontEnd"},
{name: "Stewie", friends:["none"], skill:"smart"},
{name: "Peter", friends:["Stewie", "Alice"], skill: "Brainshtorm"},
{name: "Brain", friends:["Bob", "Alice"], skill: "comunication"},
{name: "Homer", friends:["Marge", "Bart"], skill: "FastEating"}
]

const friendNameFinder = team.reduce((found, person) => {
    if(person.friends.some(friendName => team.some(member => member.name === friendName))){
        found.push(person.name)
    }
    return found
} ,[]) 

console.log(friendNameFinder)

//3
const copyTeam = [...team];
const teamFriendFilter = copyTeam.sort((personPrev, personNext) => {
    let arrPrev = personPrev.friends;
    let arrNext = personNext.friends;


    return arrPrev.length - arrNext.length; 
});

console.log(teamFriendFilter);

//4
const arraySkills = copyTeam.reduce((skills, person) => {
    skills.push(person.skill);
    return skills; 
}, []);
console.log(arraySkills.sort())
