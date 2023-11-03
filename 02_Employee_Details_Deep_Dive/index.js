const employees = [
    {
      id: "C101",
      name: "Varun",
      role: "Junior Web Developer",
      experience: "2 Years",
      payout: "25000",
    },
    {
      id: "C102",
      name: "Srinika",
      role: "Junior Web Developer",
      experience: "1 Year",
      payout: "20000",
    },
    {
      id: "C103",
      name: "Rakshitha",
      role: "Front End Developer",
      experience: "3 Years",
      payout: "30000",
    },
    {
      id: "C104",
      name: "Hema",
      role: "Junior Web Developer",
      experience: "3 Years",
      payout: "25000",
    },
    {
      id: "C105",
      name: "Deepak",
      role: "Front End Developer",
      experience: "4 Years",
      payout: "35000",
    },
    {
      id: "C106",
      name: "Sakthi",
      role: "Back End Developer",
      experience: "2 Years",
      payout: "30000",
    },
    {
      id: "C107",
      name: "Dakshan",
      role: "Senior Front End Developer",
      experience: "5 Years",
      payout: "45000",
    },
    {
      id: "C108",
      name: "Ananth",
      role: "BDE",
      experience: "2 Years",
      payout: "20000",
    },
    {
      id: "C109",
      name: "Sharaddha",
      role: "Business Associate",
      experience: "1 Year",
      payout: "15000",
    },
    {
      id: "C110",
      name: "Dinesh",
      role: "Tech Lead",
      experience: "4 Years",
      payout: "65000",
    },
  ];

 //1. Display employee details in a table format in console.

// console.table(employees)

//2&3. Display Employees who are working as a Junior Web Developer

//  const result = employees.filter(e=>e.role==="Junior Web Developer")
//  .map(e=>console.log( e.name))
//  console.log("Total junior web developes are :" +result.length)

//4.Display Employee name and role whose salary range is from 25000 to 35000

// const result = employees.filter(e=>e.payout>=25000 && e.payout<=35000)
// .map(e=>console.log(`${e.name} ${e.role}`))
// console.log(result.length)

//5. Display the senior employee details.
//I cont do This please explian mam
//I used include, Object and entries 
let senior = employees.filter(e=>{
  e.role.find("Senior")
  
})
console.log(senior)