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
const H1 = document.getElementById("heart1")
const H2 = document.getElementById("heart2")
const H3 = document.getElementById("heart3")
scorespan = document.getElementById("score");

function loseGame() {
    restartBtn.classList.remove("hidden");
    userInput.disabled = true;
    submitBtn.disabled = true;
    setTimeout(() => {
        alert("You have lost the game!");
    }, 100);
}
function endGame(){
        userInput.disabled = true;
        submitBtn.disabled = true;
    restartBtn.classList.remove("hidden");
    setTimeout(() => {
        alert("You have won the game")
    }, 100);
}

let B_flag =0
let L_flag =0
let A_flag =0
let S_flag =0
let T_flag =0
score = 0;scorespan.textContent = score;

function startGame() {
    userInput.disabled = false;
    submitBtn.disabled = false;
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
    H1.classList.remove("hidden")
    H2.classList.remove("hidden")
    H3.classList.remove("hidden")
    B_flag = 0;
    L_flag = 0;
    A_flag = 0;
    S_flag = 0;
    T_flag = 0;
    hearts = 3;
    score = 0;scorespan.textContent = score;
}

submitBtn.addEventListener("click", () => {
    const Input_val = userInput.value.toUpperCase();
    if((Input_val == "B") && (B_flag == 0)) {
        B.classList.add("hidden");
        B_image.classList.remove("hidden");
        restartBtn.classList.remove("hidden");
        score += 20;scorespan.textContent = score;
        B_flag =1;
    }else if((Input_val == "L") && (L_flag == 0)) {
        L.classList.add("hidden");
        L_image.classList.remove("hidden");
        restartBtn.classList.remove("hidden");
        score += 20;scorespan.textContent = score;
        L_flag =1;
    }else if((Input_val == "A") && (A_flag == 0)) {
        A.classList.add("hidden");
        A_image.classList.remove("hidden");
        restartBtn.classList.remove("hidden");
        score += 20;scorespan.textContent = score;
        A_flag =1;
    }else if((Input_val == "S") && (S_flag == 0)) {
        S.classList.add("hidden");
        S_image.classList.remove("hidden");
        restartBtn.classList.remove("hidden");
        score += 20;scorespan.textContent = score;
        S_flag =1;
    }else if((Input_val == "T") && (T_flag == 0)) {
        T.classList.add("hidden");
        T_image.classList.remove("hidden");
        restartBtn.classList.remove("hidden");
        score += 20;scorespan.textContent = score;
        T_flag =1;
    }else if(Input_val == "BLAST"){
        B.classList.add("hidden");
        B_image.classList.remove("hidden");
        L.classList.add("hidden");
        L_image.classList.remove("hidden");
        A.classList.add("hidden");
        A_image.classList.remove("hidden");
        S.classList.add("hidden");
        S_image.classList.remove("hidden");
        T.classList.add("hidden");
        T_image.classList.remove("hidden");
        score = 100;scorespan.textContent = score;
        setTimeout(() => {
            endGame();
        }, 100);
    }else if (userInput.value.trim().length > 1){
        loseGame();
    }
     else {
        restartBtn.classList.remove("hidden");
        if (hearts == 3){
            H1.classList.add("hidden")
            hearts -=1;
        }
        else if(hearts == 2){
            H2.classList.add("hidden")
            hearts -=1;
        }
        else if(hearts == 1){
            H3.classList.add("hidden")
            hearts -=1;
            loseGame();
        }
        
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