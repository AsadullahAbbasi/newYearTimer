const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function timer(){
    const newYearDate = new Date('2024-01-01');
    const currentDate = new Date();
    const totalsecs = (newYearDate - currentDate) / 1000;
     //conversion
     const days = Math.floor(totalsecs / 3600 / 24);
     const hours = Math.floor(totalsecs / 3600) % 24;
     const mins = Math.floor(totalsecs / 60) % 60;
     const seconds = Math.floor(totalsecs) % 60;
     //dispaly
      daysEl.innerHTML = formatTime(days)
      hoursEl.innerHtML = formatTime(hours)
      minsEl.innerHTML = formatTime(mins)
      secondsEl.innerHTML = formatTime(seconds)
    
}

//calling func to be executed immediately when pg get
timer()

function formatTime(time){
    return time < 10 ? `0${time}`:time;
}

//lets go Boom
setInterval(timer, 1000)

// test code
// setInterval(countdown, 1000);
// const newYears = "1 Jan 2021";
// const newYearsDate = new Date(newYears);
// const currentDate = new Date();

// const totalSeconds = (newYearsDate - currentDate) / 1000;
// console.log(newYearsDate);
// note here month is mentioned from 1 but in return its mean 10 represent oct but in return it will be 9 or sept and when we subtract two date objects there difference is returned in ms
// let d1=new Date("2023-10-17")
// let d2=new Date("2023-10-18")
// console.log(d2-d1);
// const milliseconds = 86400000;
// const days = milliseconds / 86400000; // 1 day

// console.log(days); // Output: 1

// let date=new Date("2005-02-2new3");
// let d=new Date()
// document.write(d.getMonth()+1)

// test code
// so days and month both start from 0
// ChatGPT
// Yes, in JavaScript, both days of the week and months in the Date object start from 0. Here's a quick recap:

// Days of the week:

// 0: Sunday
// 1: Monday
// 2: Tuesday
// 3: Wednesday
// 4: Thursday
// 5: Friday
// 6: Saturday
// Months:

// 0: January
// 1: February
// 2: March
// 3: April
// 4: May
// 5: June
// 6: July
// 7: August
// 8: September
// 9: October
// 10: November
// 11: December