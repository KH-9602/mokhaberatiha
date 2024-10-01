var now = new Date();
var date_time = now.toLocaleString();
document.getElementById("date").innerHTML = gregorian_to_jalali(
    now.getFullYear() ,
    now.getMonth() + 1,
    now.getDate() ,
);
