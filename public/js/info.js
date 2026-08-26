const infoData = {
  safe: {
    title: "Mark Yourself Safe",
    description: "Use DisasterLink to instantly mark yourself and your family as safe during any crisis. Your status updates help responders prioritize aid and keep loved ones informed.",
  },
  help: {
    title: "Request Help",
    description: "Submit requests for food, water, shelter, or medical assistance. DisasterLink connects you with verified helpers and organizations nearby.",
  },
  map: {
    title: "Find Supply Locations",
    description: "Access real-time maps showing active supply points, shelters, and medical centers. Stay informed and navigate safely.",
  },
  donate: {
    title: "Donate to Families",
    description: "Support families directly through verified donation channels. Every contribution helps rebuild lives and communities.",
  },
  campaigns: {
    title: "Community Campaigns",
    description: "Join organized relief efforts for affected regions. DisasterLink helps coordinate volunteers, supplies, and funding.",
  },
  updates: {
    title: "Leader Updates",
    description: "Community leaders can broadcast evacuation routes, safety alerts, and resource updates to all users in their area.",
  },
};

document.querySelectorAll(".dropdown-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.info;
    const card = btn.closest(".feature-card");
    let infoBox = card.querySelector(".info-box");

    if (!infoBox) {
      infoBox = document.createElement("div");
      infoBox.className = "info-box";
      card.appendChild(infoBox);
    }

    if (infoBox.style.display === "block") {
      infoBox.style.display = "none";
      return;
    }

    const data = infoData[key
