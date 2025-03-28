// Function to add warm-up exercises to the list
function addWarmup() {
    let warmupSelect = document.getElementById("warmup");
    let warmupList = document.getElementById("warmupList");
    let selectedExercise = warmupSelect.value;

    let listItem = document.createElement("li");
    listItem.textContent = selectedExercise;
    warmupList.appendChild(listItem);
}

// Function to add workout exercises to the list
function addExercise() {
    let exerciseSelect = document.getElementById("exercise");
    let setsInput = document.getElementById("sets");
    let exerciseList = document.getElementById("exerciseList");

    let selectedExercise = exerciseSelect.value;
    let numberOfSets = setsInput.value;

    let listItem = document.createElement("li");
    listItem.textContent = `${selectedExercise} - ${numberOfSets} Sets`;
    exerciseList.appendChild(listItem);
}

// Timer functionality
let timer;
let seconds = 0;

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            let minutes = Math.floor(seconds / 60);
            let sec = seconds % 60;
            document.getElementById("timer-display").textContent =
                (minutes < 10 ? "0" : "") + minutes + ":" + (sec < 10 ? "0" : "") + sec;
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

// Heart rate recording
function saveHeartRate() {
    let heartRateInput = document.getElementById("heart-rate");
    let heartRecords = document.getElementById("heart-records");

    if (heartRateInput.value) {
        heartRecords.textContent = `Last Recorded Heart Rate: ${heartRateInput.value} BPM`;
    }
}

// BMI Calculator
function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight && height) {
        let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        document.getElementById("bmi-result").textContent = `Your BMI: ${bmi}`;
    } else {
        document.getElementById("bmi-result").textContent = "Please enter valid values!";
    }
}
