document.addEventListener("DOMContentLoaded", () => {

  // Mark safe
  document.getElementById("markSafe").onclick = () => {
    document.getElementById("statusOutput").innerText =
      "Status: Marked Safe";
  };

  // Request help
  document.getElementById("markNeeds").onclick = () => {
    document.getElementById("statusOutput").innerText =
      "Status: Help Requested";
  };

  // Demo supply locations
  const supplies = [
    "Water Station – 3rd Street",
    "Food Distribution – Central Park",
    "Medical Tent – Riverside High School"
  ];

  supplies.forEach(s => {
    const li = document.createElement("li");
    li.innerText = s;
    document.getElementById("supplyList").appendChild(li);
  });

  // Demo community requests
  const requests = [
    "Family of 4 needs water",
    "Elderly person needs medicine",
    "Power outage on Oak Street"
  ];

  requests.forEach(r => {
    const li = document.createElement("li");
    li.innerText = r;
    document.getElementById("requestList").appendChild(li);
  });

  // Demo donations
  const donations = [
    "Donate to the Smith Family",
    "Gary, Indiana Relief Campaign",
    "Community Food Drive"
  ];

  donations.forEach(d => {
    const li = document.createElement("li");
    li.innerText = d;
    document.getElementById("donationList").appendChild(li);
  });

  // Demo leader updates
  const updates = [
    "Supply drop arriving at 4 PM",
    "Evacuation route updated",
    "Shelter capacity increased"
  ];

  updates.forEach(u => {
    const li = document.createElement("li");
    li.innerText = u;
    document.getElementById("leaderUpdates").appendChild(li);
  });

});
