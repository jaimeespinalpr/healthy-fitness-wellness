const plans = {
  energy: {
    movementTitle: "Active movement",
    movementCopy:
      "25 minutes of brisk walking or easy cycling to wake up the body and lift your mood.",
    strengthTitle: "Functional base",
    strengthCopy:
      "3 rounds of squats, planks, and incline push-ups with calm rest between sets.",
    recoveryTitle: "Mindful recovery",
    recoveryCopy:
      "Gentle hip, back, and neck stretches before bed to help your nervous system slow down.",
  },
  strength: {
    movementTitle: "Strong activation",
    movementCopy:
      "8 minutes of dynamic mobility to prepare shoulders, hips, knees, and core.",
    strengthTitle: "Strength progression",
    strengthCopy:
      "4 controlled sets of hip hinges, pushes, rows, and squats with clean technique.",
    recoveryTitle: "Muscle repair",
    recoveryCopy:
      "Enough protein, water, and 7 to 9 hours of sleep to support progress.",
  },
  balance: {
    movementTitle: "Gentle movement",
    movementCopy:
      "20 minutes of relaxed walking or light yoga to release tension without draining energy.",
    strengthTitle: "Stability",
    strengthCopy:
      "Core work, single-leg balance, and ankle mobility with nasal breathing.",
    recoveryTitle: "Mental pause",
    recoveryCopy:
      "Five minutes of slow breathing and brief journaling to close the day with clarity.",
  },
};

const fields = {
  movementTitle: document.querySelector("#movement-title"),
  movementCopy: document.querySelector("#movement-copy"),
  strengthTitle: document.querySelector("#strength-title"),
  strengthCopy: document.querySelector("#strength-copy"),
  recoveryTitle: document.querySelector("#recovery-title"),
  recoveryCopy: document.querySelector("#recovery-copy"),
};

document.querySelectorAll(".goal-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".goal-button.is-active").classList.remove("is-active");
    button.classList.add("is-active");

    const selectedPlan = plans[button.dataset.goal];
    Object.entries(fields).forEach(([key, element]) => {
      element.textContent = selectedPlan[key];
    });
  });
});
