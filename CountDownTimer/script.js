//first we select the elements by id 
// const minutesInput = document.getElementById("minutesInput");
// const minutes = document.getElementById("minutes");
// const seconds = document.getElementById("seconds");

// const startBtn = document.getElementById("startBtn");
// const pauseBtn = document.getElementById("pauseBtn");
// const resetBtn = document.getElementById("resetBtn");

// let totalSeconds = 0;
// let timer = null;

// startBtn.addEventListener("click",function(){

//     if(timer!=null) return;

//     const minutes = Number(minutesInput.value);
//     if(minutes <= 0) return;

//     totalSeconds = minutes * 60;

//     timer = setInterval(function () {

//         const mins = Math.floor(totalSeconds/60);
//         const secs = totalSeconds % 60;

//         minutes.innerText = String(mins).padStart(2,"0");
//         seconds.innerText = String(secs).padStart(2,"0");

//         totalSeconds--;

//         if(totalSeconds<0){
//             clearInterval(timer);
//             timer = null;
//         }

//     },1000);
//     });

//     pauseBtn.addEventListener("click", function(){
//         clearInterval(timer);
//         timer = null;
//     });

//     resetBtn.addEventListener("click",function (){
//         clearInterval(timer);
//         timer = null;


//         totalSeconds = 0;
//         minutes.innerText = "00";
//         seconds.innerText  = "00";
//         minutesInput.value = "";
//     });



//by claude version 
const minutesInput = document.getElementById("minutesInput");
        const minutesDisplay = document.getElementById("minutes");
        const secondsDisplay = document.getElementById("seconds");
        const timerDisplay = document.getElementById("timerDisplay");
        const progressFill = document.getElementById("progressFill");
        const statusMessage = document.getElementById("statusMessage");

        const startBtn = document.getElementById("startBtn");
        const pauseBtn = document.getElementById("pauseBtn");
        const resetBtn = document.getElementById("resetBtn");

        let totalSeconds = 0;
        let initialSeconds = 0;
        let timer = null;
        let isPaused = false;

        function updateDisplay(mins, secs) {
            minutesDisplay.textContent = String(mins).padStart(2, "0");
            secondsDisplay.textContent = String(secs).padStart(2, "0");
        }

        function updateProgress() {
            if (initialSeconds > 0) {
                const percentage = (totalSeconds / initialSeconds) * 100;
                progressFill.style.width = percentage + "%";
            }
        }

        function playSound() {
            // Create a simple beep sound using Web Audio API
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        }

        startBtn.addEventListener("click", function() {
            if (timer !== null && !isPaused) return;

            if (!isPaused) {
                const inputMinutes = Number(minutesInput.value);
                if (isNaN(inputMinutes) || inputMinutes <= 0 || inputMinutes > 999) {
                    statusMessage.textContent = "⚠️ Please enter a valid number (1-999)";
                    statusMessage.className = "status-message";
                    return;
                }

                totalSeconds = inputMinutes * 60;
                initialSeconds = totalSeconds;
                statusMessage.textContent = "";
            }

            isPaused = false;
            timerDisplay.classList.add("running");
            startBtn.disabled = true;
            pauseBtn.disabled = false;
            resetBtn.disabled = false;
            minutesInput.disabled = true;

            timer = setInterval(function() {
                const mins = Math.floor(totalSeconds / 60);
                const secs = totalSeconds % 60;

                updateDisplay(mins, secs);
                updateProgress();

                // Add warning state when less than 10 seconds
                if (totalSeconds <= 10 && totalSeconds > 0) {
                    timerDisplay.classList.add("warning");
                } else {
                    timerDisplay.classList.remove("warning");
                }

                totalSeconds--;

                if (totalSeconds < 0) {
                    clearInterval(timer);
                    timer = null;
                    timerDisplay.classList.remove("running", "warning");
                    timerDisplay.classList.add("expired");
                    statusMessage.textContent = "⏰ Time's up!";
                    statusMessage.className = "status-message complete";
                    startBtn.disabled = false;
                    pauseBtn.disabled = true;
                    minutesInput.disabled = false;
                    playSound();
                    
                    setTimeout(() => {
                        timerDisplay.classList.remove("expired");
                    }, 500);
                }
            }, 1000);

            statusMessage.textContent = "⏳ Timer running...";
            statusMessage.className = "status-message";
        });

        pauseBtn.addEventListener("click", function() {
            if (timer !== null) {
                clearInterval(timer);
                timer = null;
                isPaused = true;
                timerDisplay.classList.remove("running", "warning");
                startBtn.disabled = false;
                startBtn.textContent = "▶ Resume";
                statusMessage.textContent = "⏸ Timer paused";
                statusMessage.className = "status-message";
            }
        });

        resetBtn.addEventListener("click", function() {
            clearInterval(timer);
            timer = null;
            isPaused = false;

            totalSeconds = 0;
            initialSeconds = 0;
            updateDisplay(0, 0);
            progressFill.style.width = "100%";
            
            timerDisplay.classList.remove("running", "warning", "expired");
            minutesInput.value = "";
            minutesInput.disabled = false;
            
            startBtn.disabled = false;
            startBtn.textContent = "▶ Start";
            pauseBtn.disabled = true;
            resetBtn.disabled = true;
            
            statusMessage.textContent = "";
        });

        // Allow Enter key to start timer
        minutesInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter" && !startBtn.disabled) {
                startBtn.click();
            }
        });















