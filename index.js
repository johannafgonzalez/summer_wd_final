// Timer
function runTime() {
    //   console.log(timer);
    const timer = document.querySelector("#timer").innerText; // "1:08"
    if (timer !== "0:00") {
      var timeInSecond = convertToSeconds(timer); // 68
      timeInSecond--; // 67
      var newTime = convertBackToString(timeInSecond); // "1:07"
      console.log(newTime);
      document.querySelector("#timer").innerText = newTime;
      setTimeout(runTime, 1000);
    }
   }
   function convertToSeconds(timer) {
    // separate the string value by the colon
    var splitTimer = timer.split(":"); 
    // ["00", "10"]  

    var numberMinutesInSecond = Number(splitTimer[0]) * 60;
    var numberSeconds = Number(splitTimer[1]);

    var totalSeconds = numberMinutesInSecond + numberSeconds;
    return totalSeconds;
   }
   function convertBackToString(timeInSecond) {
    // convert divide by 60 = 14.
    var minutes = Math.floor(timeInSecond / 60); // 0
    // take the remainder (modulo) = 38.
    var seconds = timeInSecond % 60; // 9
    if (seconds < 10) {
      seconds = "0" + seconds;
    //   console.log(seconds);
    }
    // tack them together with a colon (:)
    var timeString = minutes + ":" + seconds; // 0:09
    // and display that
    return timeString;
    // document.getElementsByName(timeString).innerHTML

   }


// Task List

function createNewTask(){
    console.log("the button has been clicked");
    var inputField = document.getElementById("taskInput");
    var inputValue = inputField.value;

    if (inputValue != "") {
        console.log(inputValue)
        
        var newTr = document.createElement("tr");
        newTr.classList.add("taskList");

        newTr.innerHTML = '<td class="task">' + inputValue + '</td><td class="deleteButtonTd"><button class="deleteBtn"> Delete</button></td>';


        var taskListTable = document.getElementById("taskListContainer");
        taskListTable.appendChild(newTr);

        inputField.value = "";
        makeAllDeleteWork();

    }

}

function deleteTask() {
    var tr = this.parentElement.parentElement;
    tr.parentElement.removeChild(tr);
}

function makeAllDeleteWork() {
    var deleteButtons = document.querySelectorAll('.deleteBtn');

    for(let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', deleteTask);
    }
}
;
 
    
    

