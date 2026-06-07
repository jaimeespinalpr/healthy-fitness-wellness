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

const featuredPaths = [
  {
    title: "Low and Zero Impact",
    category: "low-impact",
    url: "https://fiatfitnessproject.com/zero-impact-rosary-workout-program/",
    image: "assets/rosary.jpg",
    description:
      "Gentle rosary workout options for beginners, active rest days, seated movement, stretching, and joint-friendly training.",
  },
  {
    title: "Pilates and Mobility",
    category: "pilates",
    url: "https://fiatfitnessproject.com/pilates-rosary-workout-program-2/",
    image: "assets/mer-w-rosary-edited.jpeg",
    description:
      "Core-centered sessions for posture, flexibility, bands, slides, barre, and controlled strength.",
  },
  {
    title: "Strength and Lifting",
    category: "strength",
    url: "https://fiatfitnessproject.com/weightlifting-rosary-workout-program/",
    image: "assets/fiat-logo.png",
    description:
      "Progressive lifting, loops, sliders, isolateral work, power training, and confidence-building strength.",
  },
  {
    title: "Prenatal and Postpartum",
    category: "motherhood",
    url: "https://fiatfitnessproject.com/home/pre-postnatal-rosary-workouts-package/",
    image: "assets/mer-w-rosary-edited.jpeg",
    description:
      "Pregnancy, postpartum, core healing, diastasis recti, and recovery-focused workout paths.",
  },
];

const workoutCategories = [
  { id: "all", label: "All" },
  { id: "beginner", label: "Beginner" },
  { id: "low-impact", label: "Low impact" },
  { id: "pilates", label: "Pilates + mobility" },
  { id: "strength", label: "Strength" },
  { id: "cardio", label: "Cardio + core" },
  { id: "motherhood", label: "Prenatal + recovery" },
  { id: "community", label: "Community + prayer" },
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

const accountGroups = [
  {
    title: "Start here",
    description: "Create an account or return to your member area.",
    links: [
      ["Sign Up", "https://fiatfitnessproject.com/sign-up/"],
      ["Log In", "https://fiatfitnessproject.com/log-in/"],
    ],
  },
  {
    title: "Billing",
    description: "Checkout, membership purchase, and order status pages.",
    links: [
      ["Checkout", "https://fiatfitnessproject.com/checkout/"],
      ["Membership Plan", "https://fiatfitnessproject.com/checkout/?plan=29"],
      ["Order Confirmation", "https://fiatfitnessproject.com/order-confirmation/"],
      ["Order Failed", "https://fiatfitnessproject.com/order-failed/"],
    ],
  },
  {
    title: "Account",
    description: "Profile, directory, and password management.",
    links: [
      ["Account", "https://fiatfitnessproject.com/account/"],
      ["My Profile", "https://fiatfitnessproject.com/my-profile/"],
      ["Member Directory", "https://fiatfitnessproject.com/member-directory/"],
      ["Reset Password", "https://fiatfitnessproject.com/reset-password/"],
    ],
  },
  {
    title: "Affiliates",
    description: "Affiliate dashboard, registration, and password reset.",
    links: [
      ["Affiliate Account", "https://fiatfitnessproject.com/affiliate-account/"],
      ["Affiliate Registration", "https://fiatfitnessproject.com/affiliate-registration/"],
      ["Affiliate Reset Password", "https://fiatfitnessproject.com/affiliate-reset-password/"],
    ],
  },
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

function createFeaturedPathCard(item) {
  const card = document.createElement("article");
  card.className = "featured-card";

  const imageWrap = document.createElement("div");
  imageWrap.className = "featured-card__image";

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = "";
  image.loading = "lazy";

  const play = document.createElement("span");
  play.className = "mini-play";
  play.setAttribute("aria-hidden", "true");

  imageWrap.append(image, play);

  const copy = document.createElement("div");
  copy.className = "featured-card__copy";

  const tag = document.createElement("span");
  tag.className = "link-tag";
  tag.textContent = workoutCategories.find((category) => category.id === item.category).label;

  const title = document.createElement("h4");
  const link = document.createElement("a");
  link.href = item.url;
  link.textContent = item.title;
  title.append(link);

  const description = document.createElement("p");
  description.textContent = item.description;

  copy.append(tag, title, description);
  card.append(imageWrap, copy);
  return card;
}

function categorizeWorkout(title) {
  const normalized = title.toLowerCase();
  if (normalized.includes("beginner")) return "beginner";
  if (
    normalized.includes("prenatal") ||
    normalized.includes("postpartum") ||
    normalized.includes("diastasis")
  ) return "motherhood";
  if (
    normalized.includes("zero impact") ||
    normalized.includes("low impact") ||
    normalized.includes("seated") ||
    normalized.includes("active rest") ||
    normalized.includes("stretching")
  ) return "low-impact";
  if (
    normalized.includes("pilates") ||
    normalized.includes("barre") ||
    normalized.includes("slider") ||
    normalized.includes("slides") ||
    normalized.includes("resistance")
  ) return "pilates";
  if (
    normalized.includes("lifting") ||
    normalized.includes("weightlifting") ||
    normalized.includes("power") ||
    normalized.includes("loop")
  ) return "strength";
  if (
    normalized.includes("cardio") ||
    normalized.includes("core") ||
    normalized.includes("jump") ||
    normalized.includes("run") ||
    normalized.includes("walk") ||
    normalized.includes("cycling") ||
    normalized.includes("step") ||
    normalized.includes("burst")
  ) return "cardio";
  return "community";
}

function workoutToItem([title, url, description]) {
  const category = categorizeWorkout(title);
  return {
    title,
    url,
    description,
    category,
    tag: workoutCategories.find((entry) => entry.id === category).label,
  };
}

function renderCards(containerId, items) {
  const container = document.querySelector(containerId);
  if (!container) return;
  items.forEach((item) => container.append(createCard(item)));
}

function renderFeaturedPaths() {
  const container = document.querySelector("#featured-paths");
  if (!container) return;
  featuredPaths.forEach((item) => container.append(createFeaturedPathCard(item)));
}

function renderFilters() {
  const container = document.querySelector("#workout-filters");
  if (!container) return;
  workoutCategories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "filter-button";
    button.type = "button";
    button.dataset.category = category.id;
    button.textContent = category.label;
    if (category.id === "all") button.classList.add("is-active");
    container.append(button);
  });
}

function renderWorkoutStudio() {
  const container = document.querySelector("#workout-sections");
  const counter = document.querySelector("#library-count");
  if (!container) return;

  const selectedFilter =
    document.querySelector(".filter-button.is-active")?.dataset.category || "all";
  const query = document.querySelector("#library-search")?.value.trim().toLowerCase() || "";
  const allWorkouts = workouts.map(workoutToItem);
  const visibleItems = allWorkouts.filter((item) => {
    const matchesCategory = selectedFilter === "all" || item.category === selectedFilter;
    const searchable = `${item.title} ${item.description} ${item.tag}`.toLowerCase();
    return matchesCategory && searchable.includes(query);
  });

  container.replaceChildren();

  workoutCategories
    .filter((category) => category.id !== "all")
    .forEach((category) => {
      const items = visibleItems.filter((item) => item.category === category.id);
      if (!items.length) return;

      const section = document.createElement("section");
      section.className = "workout-section";

      const header = document.createElement("div");
      header.className = "workout-section__header";

      const heading = document.createElement("h4");
      heading.textContent = category.label;

      const count = document.createElement("span");
      count.textContent = `${items.length} ${items.length === 1 ? "series" : "series"}`;

      header.append(heading, count);

      const grid = document.createElement("div");
      grid.className = "video-card-grid";
      items.forEach((item) => grid.append(createVideoCard(item)));

      section.append(header, grid);
      container.append(section);
    });

  if (counter) {
    counter.textContent = `${visibleItems.length} workout series shown`;
  }

  if (!visibleItems.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML =
      "<strong>No workout series found.</strong><span>Try another category or clear the search to browse the full library.</span>";
    container.append(empty);
  }
}

function createVideoCard(item) {
  const card = document.createElement("article");
  card.className = "video-card";

  const thumb = document.createElement("a");
  thumb.className = `video-thumb video-thumb--${item.category}`;
  thumb.href = item.url;
  thumb.setAttribute("aria-label", `Open ${item.title}`);

  const play = document.createElement("span");
  play.className = "mini-play";
  play.setAttribute("aria-hidden", "true");

  const tag = document.createElement("span");
  tag.textContent = item.tag;

  thumb.append(play, tag);

  const copy = document.createElement("div");
  copy.className = "video-card__copy";

  const title = document.createElement("h5");
  const link = document.createElement("a");
  link.href = item.url;
  link.textContent = item.title;
  title.append(link);

  const description = document.createElement("p");
  description.textContent = item.description;

  copy.append(title, description);
  card.append(thumb, copy);
  return card;
}

function renderAccountLinks() {
  const container = document.querySelector("#account-list");
  if (!container) return;
  accountGroups.forEach((group) => {
    const card = document.createElement("article");
    card.className = "account-card";

    const heading = document.createElement("h4");
    heading.textContent = group.title;

    const description = document.createElement("p");
    description.textContent = group.description;

    const list = document.createElement("ul");
    group.links.forEach(([title, url]) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = url;
      link.textContent = title;
      item.append(link);
      list.append(item);
    });

    card.append(heading, description, list);
    container.append(card);
  });
}

renderFeaturedPaths();
renderCards("#offer-list", offers);
renderCards("#course-list", courses);
renderFilters();
renderWorkoutStudio();
renderAccountLinks();

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-button.is-active").classList.remove("is-active");
    button.classList.add("is-active");
    renderWorkoutStudio();
  });
});

document.querySelector("#library-search")?.addEventListener("input", renderWorkoutStudio);

document.querySelector("#clear-library")?.addEventListener("click", () => {
  const search = document.querySelector("#library-search");
  if (search) search.value = "";
  document.querySelector(".filter-button.is-active")?.classList.remove("is-active");
  document.querySelector('.filter-button[data-category="all"]')?.classList.add("is-active");
  renderWorkoutStudio();
});

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
