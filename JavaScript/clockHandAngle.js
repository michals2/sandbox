const date1 = new Date();

console.log(date1.getMinutes());
console.log(date1.getHours());

function clockHandAngle(date) {
  let hour = date.getHours();
  if (hour > 12) hour -= 12;
  const minutes = date.getMinutes();
  const minuteAngle = minutes / 60 * 360;
  const hourAngle = 30 * hour + minutes / 60 * 30;
  const delta = Math.abs(hourAngle - minuteAngle);
  return Math.min(delta, 360 - delta);
}

console.log(clockHandAngle(date1));
