const days = ["Senin", "Selasa", "Rabu"];

for (const daysKey in days) {
    console.log(days[daysKey]);
}

for (const day of days) {
    console.log(day);
}

days.forEach((i) => {
    console.log(i);
})
