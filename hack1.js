const s = "12:40:22AM";
function timeConversion(s) {
  // Write your code here
  const newTime = s.split(":");
  const wayTime = newTime[2][2];
  const timeMinute = `${newTime[2][0]}${newTime[2][1]}`;
  let myTime = "";
  const tempTime = `${newTime[0]}:${newTime[1]}:${timeMinute}`;
  if (wayTime === "P" && parseInt(newTime[0]) < 12) {
    myTime = `${parseInt(newTime[0]) + 12}:${newTime[1]}:${timeMinute}`;
  } else if (wayTime === "A" && parseInt(newTime[0]) === 12) {
    myTime = `${parseInt(newTime[0]) - 12}:${newTime[1]}:${timeMinute}`;
  } else {
    myTime = `${newTime[0]}:${newTime[1]}:${timeMinute}`;
  }
  return myTime;
}

console.log(timeConversion(s));