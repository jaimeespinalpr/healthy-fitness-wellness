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

const offers = [
  {
    title: "Fiat Fitness Project Membership",
    url: "https://fiatfitnessproject.com/home-2/lets-get-started-choose-your-option/",
    tag: "Membership",
    description:
      "Rosary workouts that strengthen you physically and spiritually, with styles for each set of mysteries including beginner basics, low-impact, lifting, pilates, prenatal, postpartum, and more.",
  },
  {
    title: "Pilates Rosary Workout Program",
    url: "https://fiatfitnessproject.com/pilates-rosary-workout-program-2/",
    tag: "Program",
    description:
      "A low-impact program developed to improve muscle tone, mobility, posture, and overall strength while reflecting on the mysteries of the rosary.",
  },
  {
    title: "Zero Impact Rosary Workout Program",
    url: "https://fiatfitnessproject.com/zero-impact-rosary-workout-program/",
    tag: "Program",
    description:
      "A comprehensive, prayerful exercise program that meets you where you are, from beginner level to advanced, to help you grow physically and spiritually.",
  },
  {
    title: "Weightlifting Rosary Workout Program",
    url: "https://fiatfitnessproject.com/weightlifting-rosary-workout-program/",
    tag: "Program",
    description:
      "A strength-focused rosary workout program designed to engage body and soul while building physical and spiritual strength.",
  },
  {
    title: "Pre and Postnatal Rosary Workouts Package",
    url: "https://fiatfitnessproject.com/home/pre-postnatal-rosary-workouts-package/",
    tag: "Package",
    description:
      "Workouts for pregnancy and postpartum seasons, created to help mothers stay strong, healthy, supported, and prayerful.",
  },
  {
    title: "Diastasis Recti Healing Rosary Workout Program",
    url: "https://fiatfitnessproject.com/diastasis-recti-healing-rosary-workout-program/",
    tag: "Recovery",
    description:
      "A healing-focused rosary workout path for postpartum core recovery, whether you are weeks, months, or years postpartum.",
  },
  {
    title: "Fiat Focus Catholic Coaching",
    url: "https://fiatfitnessproject.com/fiat-focus/",
    tag: "Coaching",
    description:
      "One-on-one coaching for women who want more peace, energy, health, joy, order, and growth in their relationships and vocation.",
  },
  {
    title: "The Peaceful and Productive Planner",
    url: "https://fiatfitnessproject.com/the-peaceful-productive-planner/",
    tag: "Planner",
    description:
      "An all-in-one 12-week planner with space for prayer intentions, weekly planning, routines, priorities, and intentional action.",
  },
  {
    title: "About Meredith",
    url: "https://fiatfitnessproject.com/about-meredith/",
    tag: "About",
    description:
      "Meet Meredith Yonushonis, creator of Fiat Fitness Project, wife, mother, Catholic convert, and coach behind the project.",
  },
  {
    title: "Contact",
    url: "https://fiatfitnessproject.com/contact/",
    tag: "Contact",
    description:
      "Reach out with questions, support needs, or help choosing the right Fiat Fitness Project program.",
  },
];

const courses = [
  {
    title: "Fiat Fitness Project Courses",
    url: "https://fiatfitnessproject.com/fiat-fitness-project-courses/",
    tag: "Courses",
    description:
      "Course offerings for learning, prayer, and growth, including workshops and guided formation resources.",
  },
  {
    title: "Motivation, Mindset and Movement Workshop",
    url: "https://fiatfitnessproject.com/motivation-mindset-movement-workshop/",
    tag: "Workshop",
    description:
      "A fundamentals workshop about motivation, consistency, mindset, limiting beliefs, and progress toward goals.",
  },
  {
    title: "Healthy and Holy, Holistically and Intentionally",
    url: "https://fiatfitnessproject.com/healthy-holy-holistically-intentionally/",
    tag: "Lenten course",
    description:
      "A six-week retreat-style Lenten course for living healthy and holy through holistic and intentional themes.",
  },
  {
    title: "Morning Routine Videos with the Peaceful and Productive Planner",
    url: "https://fiatfitnessproject.com/morning-routine-videos-with-the-peaceful-productive-planner/",
    tag: "Planner resource",
    description:
      "Morning routine support videos connected to the Peaceful and Productive Planner.",
  },
  {
    title: "Free Peaceful and Productive Planner PDF",
    url: "https://fiatfitnessproject.com/your-free-peaceful-productive-planner-1-page-pdf/",
    tag: "Free PDF",
    description:
      "A free one-page Peaceful and Productive Planner PDF resource.",
  },
  {
    title: "Free Fiat Fitness Project Workouts",
    url: "https://fiatfitnessproject.com/free-fiat-fitness-project-workouts/",
    tag: "Free workouts",
    description:
      "A free workout access page for Fiat Fitness Project workout samples.",
  },
  {
    title: "Welcome FOCUS Wives",
    url: "https://fiatfitnessproject.com/welcome-focus-wives/",
    tag: "Welcome",
    description:
      "A welcome page for FOCUS wives introducing Meredith and Fiat Fitness Project.",
  },
];

const workouts = [
  ["E(H)MO(H)M Rosary Workouts", "https://fiatfitnessproject.com/2026/02/01/ehmohm-rosary-workouts/", "Body weight, cardio, lifting, and mystery-based workout formats."],
  ["Weightlifting Rosary Workout Program", "https://fiatfitnessproject.com/2025/12/01/weightlifting-rosary-workout-program/", "Member-access weightlifting rosary workouts."],
  ["Lifting PLUS Rosary Workouts", "https://fiatfitnessproject.com/2025/12/01/lifting-plus-rosary-workouts/", "More reflection and more strength work in the same amount of time."],
  ["Diastasis Recti Healing Rosary Workouts", "https://fiatfitnessproject.com/2025/09/05/diastasis-recti-healing-rosary-workouts/", "Member-access healing rosary workout series."],
  ["Cardio and Core Rosary Workouts", "https://fiatfitnessproject.com/2025/08/06/cardio-core-rosary-workouts/", "HIIT, jump rope, dance, low-impact beginner cardio, and core options."],
  ["Dynamic Stretching Rosary Workouts", "https://fiatfitnessproject.com/2025/07/03/dynamic-stretching-rosary-workouts/", "Flexibility and mobility workouts with stretching exercises throughout each decade."],
  ["Combination Active Rest Rosary Workouts", "https://fiatfitnessproject.com/2025/06/01/combination-active-rest-rosary-workouts/", "Active rest workouts for all four sets of mysteries."],
  ["Pilates Door Track Resistance Bands Level 2", "https://fiatfitnessproject.com/2025/05/02/pilates-door-track-resistance-bands-level-2-rosary-workouts/", "Pilates door track system workouts for each set of mysteries."],
  ["Pilates Door Track Resistance Bands", "https://fiatfitnessproject.com/2025/04/01/pilates-door-track-resistance-bands-rosary-workouts/", "Pilates and resistance band rosary workout series."],
  ["Pilates Resistance Bands Rosary Workouts", "https://fiatfitnessproject.com/2025/03/03/pilates-resistance-bands-rosary-workouts/", "Pilates and band-based rosary workouts."],
  ["Dynamic Power Rosary Workouts", "https://fiatfitnessproject.com/2025/02/01/dynamic-power-rosary-workouts/", "A strength and endurance challenge with explosive power exercises."],
  ["Zero Impact Rosary Workouts Series 4", "https://fiatfitnessproject.com/2024/12/01/zero-impact-rosary-workouts-series-4/", "Member-access zero-impact series."],
  ["Zero Impact 3 Rosary Workouts", "https://fiatfitnessproject.com/2024/10/31/zero-impact-3-rosary-workouts/", "Member-access zero-impact series."],
  ["Zero Impact Rosary Workouts 2", "https://fiatfitnessproject.com/2024/10/02/zero-impact-rosary-workouts-2/", "Member-access zero-impact series."],
  ["Zero Impact Rosary Workouts", "https://fiatfitnessproject.com/2024/09/02/zero-impact-rosary-workouts/", "Member-access zero-impact series."],
  ["Cordless Jump Rope Rosary Workouts", "https://fiatfitnessproject.com/2024/08/01/cordless-jump-rope-rosary-workouts/", "Jump rope inspired rosary workouts without a cord."],
  ["Core Rosary Workouts", "https://fiatfitnessproject.com/2024/07/01/core-rosary-workouts/", "Core-focused rosary workout series."],
  ["Beginner Basics 2", "https://fiatfitnessproject.com/2024/05/30/beginner-basics-2/", "Beginner-friendly rosary workout progression."],
  ["Isolateral Lifting Rosary Workouts", "https://fiatfitnessproject.com/2024/05/01/isolateral-lifting-rosary-workouts/", "One-side-at-a-time lifting to build stability and core engagement."],
  ["Live Rosary Workouts", "https://fiatfitnessproject.com/2024/04/14/live-rosary-workouts/", "Live workout series."],
  ["Pilates with Strength Slides Rosary Workouts", "https://fiatfitnessproject.com/2024/04/01/pilates-with-strength-slides-rosary-workouts/", "Pilates and strength slide rosary workouts."],
  ["Seated Workouts: Offer it Up", "https://fiatfitnessproject.com/2024/03/21/seated-workouts-offer-it-up/", "Upper body, lower body, and core seated workout options."],
  ["Family Rosary Workouts", "https://fiatfitnessproject.com/2024/03/03/family-rosary-workouts/", "Partner and family rosary workouts."],
  ["Loops and Lifting Rosary Workout", "https://fiatfitnessproject.com/2024/01/31/loops-lifting-rosary-workout/", "Loop band and lifting rosary workouts."],
  ["Fiat Fit Fam Calls", "https://fiatfitnessproject.com/2024/01/28/fiat-fit-fam-calls/", "Community calls on story, habits, Catholic growth, and health."],
  ["Active Rest Rosary Workouts", "https://fiatfitnessproject.com/2024/01/01/active-rest-rosary-workouts/", "Low impact, lift and HIIT, full body, and upper body strength active rest."],
  ["Postpartum Rosary Workouts", "https://fiatfitnessproject.com/2023/11/07/postpartum-rosary-workouts/", "Postpartum progression with low-impact exercises."],
  ["Rosary Run/Walk", "https://fiatfitnessproject.com/2023/10/07/rosary-run-walk/", "Intervals, endurance, tempo, and ladder run/walk workouts."],
  ["Rosary Step Workouts", "https://fiatfitnessproject.com/2023/09/01/rosary-step-workouts/", "Step-based rosary workouts."],
  ["Prenatal Third Trimester Rosary Workouts", "https://fiatfitnessproject.com/2023/07/26/prenatal-3rd-trimester-rosary-workouts/", "Member-access prenatal workouts."],
  ["Prenatal Second Trimester Rosary Workouts", "https://fiatfitnessproject.com/2023/07/24/prenatal-2nd-trimester-rosary-workouts/", "Member-access prenatal workouts."],
  ["Prenatal Rosary Workouts", "https://fiatfitnessproject.com/2023/07/24/prenatal-rosary-workouts/", "Member-access prenatal workouts."],
  ["Cycling Rosary Workouts", "https://fiatfitnessproject.com/2023/07/01/cycling-rosary-workouts/", "Cycling-based rosary workouts."],
  ["Barre 2 Rosary Workouts", "https://fiatfitnessproject.com/2023/06/01/barre-2-rosary-workouts/", "Barre rosary workout progression."],
  ["Pilates Rosary Workouts", "https://fiatfitnessproject.com/2023/05/01/pilates-rosary-workouts/", "Pilates rosary workouts."],
  ["Beginner Basics Rosary Workouts", "https://fiatfitnessproject.com/2023/05/01/beginner-basics-rosary-workouts/", "Beginner rosary workout foundations."],
  ["Stretching Rosary Workouts", "https://fiatfitnessproject.com/2023/04/01/stretching-rosary-workouts/", "Stretching-focused rosary workouts."],
  ["Prenatal First Trimester Workouts", "https://fiatfitnessproject.com/2023/03/01/prenatal-1st-trimester-workouts/", "Member-access prenatal workouts."],
  ["Strength Sliders Rosary Workouts", "https://fiatfitnessproject.com/2023/03/01/strength-sliders-rosary-workouts/", "Strength slider rosary workouts."],
  ["Resistance Loop Rosary Workouts", "https://fiatfitnessproject.com/2023/01/31/resistance-loop-rosary-workouts/", "Resistance loop rosary workouts."],
  ["Divine Mercy Chaplet Workouts", "https://fiatfitnessproject.com/2023/01/20/divine-mercy-chaplet-workouts/", "Divine Mercy Chaplet workout series."],
  ["Advanced Burst Rosary Workouts", "https://fiatfitnessproject.com/2022/12/28/advanced-burst-rosary-workouts/", "Advanced burst rosary workouts."],
  ["Lifting Rosary Workouts", "https://fiatfitnessproject.com/2022/12/01/lifting-rosary-workouts/", "Lifting rosary workouts."],
  ["Barre Rosary Workouts", "https://fiatfitnessproject.com/2022/11/16/barre-rosary-workouts/", "Barre rosary workouts."],
  ["Low Impact Rosary Workouts", "https://fiatfitnessproject.com/2022/11/16/low-impact-rosary-workouts/", "Low-impact rosary workouts."],
  ["Rosary Novena Workouts", "https://fiatfitnessproject.com/2022/11/16/rosary-novena-workouts/", "Rosary novena workout series."],
  ["Rosary Burst Workouts", "https://fiatfitnessproject.com/2022/11/12/rosary-burst-workouts/", "Member-access rosary burst workouts."],
];

const accountLinks = [
  ["Sign Up", "https://fiatfitnessproject.com/sign-up/"],
  ["Log In", "https://fiatfitnessproject.com/log-in/"],
  ["Checkout", "https://fiatfitnessproject.com/checkout/"],
  ["Checkout Membership Plan", "https://fiatfitnessproject.com/checkout/?plan=29"],
  ["Order Confirmation", "https://fiatfitnessproject.com/order-confirmation/"],
  ["Order Failed", "https://fiatfitnessproject.com/order-failed/"],
  ["Account", "https://fiatfitnessproject.com/account/"],
  ["My Profile", "https://fiatfitnessproject.com/my-profile/"],
  ["Member Directory", "https://fiatfitnessproject.com/member-directory/"],
  ["Reset Password", "https://fiatfitnessproject.com/reset-password/"],
  ["Affiliate Account", "https://fiatfitnessproject.com/affiliate-account/"],
  ["Affiliate Registration", "https://fiatfitnessproject.com/affiliate-registration/"],
  ["Affiliate Reset Password", "https://fiatfitnessproject.com/affiliate-reset-password/"],
];

const fields = {
  movementTitle: document.querySelector("#movement-title"),
  movementCopy: document.querySelector("#movement-copy"),
  strengthTitle: document.querySelector("#strength-title"),
  strengthCopy: document.querySelector("#strength-copy"),
  recoveryTitle: document.querySelector("#recovery-title"),
  recoveryCopy: document.querySelector("#recovery-copy"),
};

function createCard(item) {
  const card = document.createElement("article");
  card.className = "link-card";

  const tag = document.createElement("span");
  tag.className = "link-tag";
  tag.textContent = item.tag || "Workout";

  const title = document.createElement("h4");
  const link = document.createElement("a");
  link.href = item.url;
  link.textContent = item.title;
  title.append(link);

  const description = document.createElement("p");
  description.textContent = item.description;

  card.append(tag, title, description);
  return card;
}

function renderCards(containerId, items) {
  const container = document.querySelector(containerId);
  if (!container) return;
  items.forEach((item) => container.append(createCard(item)));
}

function renderWorkoutCards() {
  const items = workouts.map(([title, url, description]) => ({
    title,
    url,
    description,
    tag: "Workout",
  }));
  renderCards("#workout-list", items);
}

function renderAccountLinks() {
  const container = document.querySelector("#account-list");
  if (!container) return;
  accountLinks.forEach(([title, url]) => {
    const link = document.createElement("a");
    link.href = url;
    link.textContent = title;
    container.append(link);
  });
}

renderCards("#offer-list", offers);
renderCards("#course-list", courses);
renderWorkoutCards();
renderAccountLinks();

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
