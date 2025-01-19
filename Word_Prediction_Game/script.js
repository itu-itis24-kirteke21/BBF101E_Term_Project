const challengeInput = document.getElementById("challenge");
const userInput = document.getElementById("user-input");
const messageElement = document.getElementById("message");
const restartBtn = document.getElementById("restart-btn");
const submitBtn = document.getElementById("submit-btn");
const B = document.getElementById("b")
const B_image = document.getElementById("B")
const L = document.getElementById("l")
const L_image = document.getElementById("L")
const A = document.getElementById("a")
const A_image = document.getElementById("A")
const S = document.getElementById("s")
const S_image = document.getElementById("S")
const T = document.getElementById("t")
const T_image = document.getElementById("T")

function endGame(){
        messageElement.textContent ="Congratulations! You won the game.";
        messageElement.style.color ='green';
        alert("You have won the game")
    restartBtn.classList.remove("hidden");
}
let B_flag =0
let L_flag =0
let A_flag =0
let S_flag =0
let T_flag =0

function startGame() {
    restartBtn.classList.add("hidden");
    submitBtn.classList.remove("hidden");
    userInput.value = "";
    messageElement.textContent = "";
    B.classList.remove("hidden");
    B_image.classList.add("hidden")
    L.classList.remove("hidden");
    L_image.classList.add("hidden")
    A.classList.remove("hidden");
    A_image.classList.add("hidden")
    S.classList.remove("hidden");
    S_image.classList.add("hidden")
    T.classList.remove("hidden");
    T_image.classList.add("hidden")
    B_flag = 0;
    L_flag = 0;
    A_flag = 0;
    S_flag = 0;
    T_flag = 0;
}

submitBtn.addEventListener("click", () => {
    const Input_val = userInput.value.toUpperCase();
    if((Input_val == "B") && (B_flag == 0)) {
        B.classList.add("hidden");
        B_image.classList.remove("hidden")
        messageElement.textContent = "Nice guess!";
        messageElement.style.color ='green';
        restartBtn.classList.remove("hidden");
        B_flag =1;
    }else if((Input_val == "L") && (L_flag == 0)) {
        L.classList.add("hidden");
        L_image.classList.remove("hidden")
        messageElement.textContent = "Nice guess!";
        messageElement.style.color ='green';
        restartBtn.classList.remove("hidden");
        L_flag =1;
    }else if((Input_val == "A") && (A_flag == 0)) {
        A.classList.add("hidden");
        A_image.classList.remove("hidden")
        messageElement.textContent = "Nice guess!";
        messageElement.style.color ='green';
        restartBtn.classList.remove("hidden");
        A_flag =1;
    }else if((Input_val == "S") && (S_flag == 0)) {
        S.classList.add("hidden");
        S_image.classList.remove("hidden")
        messageElement.textContent = "Nice guess!";
        messageElement.style.color ='green';
        restartBtn.classList.remove("hidden");
        S_flag =1;
    }else if((Input_val == "T") && (T_flag == 0)) {
        T.classList.add("hidden");
        T_image.classList.remove("hidden")
        messageElement.textContent = "Nice guess!";
        messageElement.style.color ='green'
        restartBtn.classList.remove("hidden");
        T_flag =1;
    }
     else {
        messageElement.textContent = "Incorrect! Try again.";
        messageElement.style.color ='red';
        restartBtn.classList.remove("hidden");
    }
    let Total_flag = B_flag + L_flag + A_flag + S_flag + T_flag
    if(Total_flag ==5) {
        setTimeout(() => {
            endGame();
        }, 100);
    }
});

restartBtn.addEventListener("click", startGame);

startGame();