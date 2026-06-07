const plans = {
  energy: {
    movementTitle: "Active movement",
    movementCopy:
      "Walk briskly or cycle easily for 25 minutes to wake up your body and lift your mood.",
    strengthTitle: "Functional base",
    strengthCopy:
      "Complete 3 rounds of squats, planks, and incline push-ups with calm rest between sets.",
    recoveryTitle: "Mindful recovery",
    recoveryCopy:
      "Stretch hips, back, and neck before bed to help your nervous system slow down.",
  },
  strength: {
    movementTitle: "Strong activation",
    movementCopy:
      "Use 8 minutes of dynamic mobility to prepare shoulders, hips, knees, and core.",
    strengthTitle: "Strength progression",
    strengthCopy:
      "Practice 4 controlled sets of hip hinges, presses, rows, and squats with clean technique.",
    recoveryTitle: "Muscle repair",
    recoveryCopy:
      "Prioritize protein, water, and 7 to 9 hours of sleep so your body can adapt.",
  },
  balance: {
    movementTitle: "Gentle movement",
    movementCopy:
      "Choose 20 minutes of relaxed walking or light yoga to release tension without draining energy.",
    strengthTitle: "Stability",
    strengthCopy:
      "Pair core work, single-leg balance, and ankle mobility with slow nasal breathing.",
    recoveryTitle: "Mental pause",
    recoveryCopy:
      "Take five minutes for slow breathing and brief journaling to close the day with clarity.",
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

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  document.querySelector(".form-note").textContent =
    "Thank you. Your message is ready for the next step.";
});
