let player_scr = 0;
let comp_scr = 0;

const choices = document.querySelectorAll(".choice");
const pla_scr = document.getElementById("player_scr");
const com_scr = document.getElementById("comp_scr");

const comp_game = () => {
  const moves = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * 3);
  return moves[random];
};

const player_game = (player_choice) => {
  const comp_choice = comp_game();

  if (player_choice === comp_choice) {
    tie();
  } else {
    player_win = true;
    if (player_choice === "rock") {
      player_win = comp_choice === "paper" ? false : true;
    } else if (player_choice === "paper") {
      player_win = comp_choice === "scissor" ? false : true;
    } else {
      player_win = comp_choice === "rock" ? false : true;
    }
    winner(player_win);
  }
};

function tie() {
  tag.innerText = "ItS TIE...; ";
}

function winner() {
  if (player_win) {
    player_scr++;
    pla_scr.innerText = player_scr;
    tag.innerText = "YOU WON...🥳";
  } else {
    comp_scr++;
    com_scr.innerText = comp_scr;
    tag.innerText = "YOU LOOSE... 🫤";
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const player_choice = choice.getAttribute("id");
    player_game(player_choice);
  });
});
