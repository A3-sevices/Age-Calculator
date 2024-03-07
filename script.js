 function getAge(){
    let inputValue = document.getElementById("inputContent").value;
    let value = new Date(inputValue);
    let currentDate = new Date();

    let diffBtwYear = currentDate.getFullYear() - value.getFullYear();
    let diffBtwMonth = currentDate.getMonth() - value.getMonth();
    let diffBtwDate = currentDate.getDate() - value.getDate();

    if (diffBtwYear < 0) {
        document.getElementById("currentAge").innerHTML = "invalid Date";
    } else if (diffBtwMonth > 0 || (diffBtwMonth === 0 && diffBtwDate >= 0)) {
        document.getElementById("currentAge").innerHTML = `Your current Age is ${diffBtwYear} years, ${diffBtwMonth} months, and ${diffBtwDate} days .`;
    } else {
        diffBtwYear -= 1;
        if (diffBtwMonth <= 0) {
            if (diffBtwDate > 0 ) {
                diffBtwMonth = 12 + diffBtwMonth;
            } else {
                diffBtwMonth = 11 - diffBtwMonth
            }
        }
        if (diffBtwDate < 0) {
            diffBtwDate = 30 + diffBtwDate;
            diffBtwMonth -= 1;
        }
        document.getElementById("currentAge").innerHTML = `Your current Age is ${diffBtwYear} years, ${diffBtwMonth} months, and ${diffBtwDate} days .`;
    }
 }

 function currentDate(){
    let currentDateInput = formattedDate();
    document.getElementById("inputContent").value = currentDateInput;
 }

 function formattedDate(date = new Date()){
    return `${date.getFullYear()}-${short(date.getMonth() + 1)}-${short(date.getDate())}`
 }

 function short(num) {
    return num.toString().padStart(2, "0");
 }

currentDate();