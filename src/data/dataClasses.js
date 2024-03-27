let classes = [
  {
    name: "History",
    teacher: "Mr. Paul",
    hour: "2p.m - 3p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#32a854",
    hasATest: true,
    hasAwarning: false,
    grade: 20,
    for: ["primary-school", "middle-school", "highschool"],
  },
  {
    name: "Social Studies",
    teacher: "Mrs. Carmen",
    hour: "8a.m - 9a.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#329ea8",
    hasATest: false,
    hasAwarning: false,
    grade: 30,
    for: ["primary-school", "middle-school", "highschool"],
  },
  {
    name: "Anthropology",
    teacher: "Mrs. Ana",
    hour: "10a.m - 11a.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#77a832",
    hasATest: false,
    hasAwarning: false,
    grade: 40,
    for: ["highschool"],
  },
  {
    name: "Math",
    teacher: "Mrs. Rosa",
    hour: "1p.m - 2p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#de0d0d",
    hasATest: true,
    hasAwarning: true,
    grade: 50,
    for: ["primary-school", "middle-school", "highschool"],
  },
  {
    name: "Physics",
    teacher: "Mr. Carl Paulson",
    hour: "2p.m - 3p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#de0d0d",
    hasATest: false,
    hasAwarning: true,
    grade: 0,
    for: ["middle-school", "highschool"],
  },
  {
    name: "Chemistry",
    teacher: "Mr. Deutsch",
    hour: "5p.m - 6p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#0d5ade",
    hasATest: false,
    hasAwarning: true,
    grade: 0,
    for: ["middle-school", "highschool"],
  },
  {
    name: "Biology",
    teacher: "Mr. Michael",
    hour: "3p.m - 4p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#105e2e",
    hasATest: true,
    hasAwarning: false,
    grade: 0,
    for: ["primary-school", "middle-school", "highschool"],
  },
  {
    name: "Philosophy",
    teacher: "Mrs. Blakefield",
    hour: "3p.m - 4p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#890aa8",
    hasATest: false,
    hasAwarning: true,
    grade: 0,
    for: ["primary-school", "middle-school", "highschool"],
  },
  {
    name: "Ethics",
    teacher: "Mrs. Blakefield",
    hour: "5p.m - 6p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#a80aa0",
    hasATest: false,
    hasAwarning: true,
    grade: 0,
    for: ["middle-school", "highschool"],
  },
  {
    name: "English",
    teacher: "Mrs. Amber",
    hour: "9a.m - 10a.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#5c0aa8",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["primary-school", "middle-school", "highschool"],
  },
  {
    name: "Italian",
    teacher: "Mr. Paolo",
    hour: "11a.m - 12a.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#36e33f",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["primary-school", "middle-school", "highschool"],
  },
  {
    name: "Portuguese",
    teacher: "Mr. Pereira",
    hour: "11a.m - 12a.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#cfbf0e",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["primary-school", "middle-school", "highschool"],
  },
  {
    name: "German",
    teacher: "Mrs. Volk",
    hour: "8a.m - 9a.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#cf880e",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["primary-school", "middle-school", "highschool"],
  },
  {
    name: "Spanish",
    teacher: "Mrs. Carmen",
    hour: "9a.m - 10a.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#cf4b0e",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["primary-school", "middle-school", "highschool"],
  },
  {
    name: "French",
    teacher: "Mr. François",
    hour: "11a.m - 12a.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#0e4bcf",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["primary-school", "middle-school", "highschool"],
  },
  {
    name: "Computer Hardware I",
    teacher: "Mrs. French",
    hour: "8a.m - 9a.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#9fcf0e",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["middle-school", "highschool"],
  },
  {
    name: "Computer Hardware II",
    teacher: "Mrs. French",
    hour: "8a.m - 9a.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#9fcf0e",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["middle-school", "highschool"],
  },
  {
    name: "P.E",
    teacher: "Mrs. Carol",
    hour: "11a.m - 12p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#eff21b",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["middle-school", "highschool"],
  },
  {
    name: "Java Basics",
    teacher: "Mrs. Java",
    hour: "4p.m - 5p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#f50202",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["primary-school", "middle-school", "highschool"],
  },
  {
    name: "Java Intermidiate",
    teacher: "Mrs. Java",
    hour: "4p.m - 5p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#f50202",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["middle-school", "highschool"],
  },
  {
    name: "Java Advanced",
    teacher: "Mrs. Java",
    hour: "4p.m - 5p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#f50202",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["middle-school", "highschool"],
  },
  {
    name: "C# Basics",
    teacher: "Mr. C",
    hour: "1p.m - 2p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#0b0f87",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["primary-school", "middle-school", "highschool"],
  },
  {
    name: "C# Intermidiate",
    teacher: "Mr. C",
    hour: "1p.m - 2p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#0b0f87",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["middle-school", "highschool"],
  },
  {
    name: "C# Advanced",
    teacher: "Mr. C",
    hour: "1p.m - 2p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#0b0f87",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["middle-school", "highschool"],
  },
  {
    name: "Javascript Basics",
    teacher: "Mrs. J",
    hour: "2p.m - 3p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#faee05",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["primary-school", "middle-school", "highschool"],
  },
  {
    name: "Javascript Intermidiate",
    teacher: "Mrs. J",
    hour: "2p.m - 3p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#faee05",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["middle-school", "highschool"],
  },
  {
    name: "Javascript Advanced",
    teacher: "Mrs. J",
    hour: "2p.m - 3p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#faee05",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["middle-school", "highschool"],
  },
  {
    name: "HTML + CSS",
    teacher: "Mr. Pietro",
    hour: "5p.m - 6p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#9405fa",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["middle-school", "highschool"],
  },
  {
    name: "Python Basics",
    teacher: "Mr. Pietro",
    hour: "4p.m - 5p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#1e2dd4",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["middle-school", "highschool"],
  },
  {
    name: "Python Intermidiate",
    teacher: "Mr. Pietro",
    hour: "4p.m - 5p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#1e2dd4",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["middle-school", "highschool"],
  },
  {
    name: "Python Advanced",
    teacher: "Mr. Pietro",
    hour: "4p.m - 5p.m",
    room: "235",
    day: ["Monday", "Wednesday", "Friday"],
    color: "#1e2dd4",
    hasATest: false,
    hasAwarning: false,
    grade: 0,
    for: ["middle-school", "highschool"],
  },
];

export default classes;
