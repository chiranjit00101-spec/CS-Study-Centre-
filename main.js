const routes = {
  home: { title: "Home", sub: "Welcome" },
  community: { title: "Community", sub: "Friends" },
  chat: { title: "Chat", sub: "Messages" },
  notifications: { title: "Notifications", sub: "Alerts" },
  classPage: { title: "Classes", sub: "Choose one" },

  /* ===== Class 9 ===== */
  PaidClassclass9: { title: "Class 9", sub: "Tap to continue" },
  subjects9: { title: "Class 9", sub: "Subjects" },
  subjectsFree9: { title: "Class 9", sub: "Free Subjects" },

  /* Class 9 → Free Subjects Pages */
  "sub-bangla9free": { title: "বাংলা", sub: "Class 9" },
  "sub-english9free": { title: "English", sub: "Class 9" },
  "sub-history9free": { title: "ইতিহাস", sub: "Class 9" },
  "sub-geo9free": { title: "ভূগোল", sub: "Class 9" },
  "sub-math9free": { title: "গণিত", sub: "Class 9" },
  "sub-life9free": { title: "জীবন বিজ্ঞান", sub: "Class 9" },
  "sub-phy9free": { title: "ভৌত বিজ্ঞান", sub: "Class 9" },

  /* ===== Class 10 ===== */
  class10: { title: "Class 10", sub: "Bongmistry" },
  subjectspaid10: { title: "Class 10", sub: "Subjects" },
  subjectsFree10: { title: "Class 10", sub: "Free Subjects" },

  /* Class 10 → Free Subjects Pages */
  "sub-bangla10free": { title: "বাংলা", sub: "Class 10" },
  "sub-english10free": { title: "English", sub: "Class 10" },
  "sub-history10free": { title: "ইতিহাস", sub: "Class 10" },
  "sub-geo10free": { title: "ভূগোল", sub: "Class 10" },
  "sub-math10free": { title: "গণিত", sub: "Class 10" },
  "sub-life10free": { title: "জীবন বিজ্ঞান", sub: "Class 10" },
  "sub-phy10free": { title: "ভৌত বিজ্ঞান", sub: "Class 10" },

  /* ===== Others ===== */
  bongmistry: { title: "Bongmistry", sub: "Open" },
  settings: { title: "Settings", sub: "Preferences" },
  info: { title: "Info", sub: "About" },
  profile: { title: "Profile", sub: "User" }
};

function showRoute(hash){
  const id = (hash||"#home").replace("#","");
  document.getElementById("brandTitle").textContent = routes[id]?.title || "CG Study Center";
  document.getElementById("brandSub").textContent = routes[id]?.sub || "All-in-one single file";
  document.querySelectorAll("section.view").forEach(v=>v.classList.remove("active"));
  const el=document.getElementById(id);
  if(el) el.classList.add("active");
}
window.addEventListener("hashchange",()=>showRoute(location.hash));
window.addEventListener("DOMContentLoaded",()=>showRoute(location.hash||"#home"));

/* side menu */
const menuBtn=document.getElementById("menuBtn");
const sideMenu=document.getElementById("sideMenu");
const overlay=document.getElementById("menuOverlay");
menuBtn.onclick=()=>{sideMenu.classList.add("open");overlay.classList.add("show");};
overlay.onclick=()=>{sideMenu.classList.remove("open");overlay.classList.remove("show");location.hash="#home";};
sideMenu.querySelectorAll("a").forEach(a=>{a.onclick=()=>{sideMenu.classList.remove("open");overlay.classList.remove("show");};});


/* ==== Show Subjects Tabs ==== */
function showSubjects(category, btn) {
  // সব subject div hide করে দিচ্ছি
  document.getElementById("science-subjects").style.display = "none";
  document.getElementById("arts-subjects").style.display = "none";
  document.getElementById("commerce-subjects").style.display = "none";

  // নির্বাচিত category show করবো
  document.getElementById(category + "-subjects").style.display = "grid";

  // Active Tab highlight
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  btn.classList.add("active");
}
/* ==== Electrostatics Filter + Save ==== */
let savedItems = new Set();

function filterDetail(type, btn) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  btn.classList.add("active");

  document.querySelectorAll("#detailList .detail-card").forEach(card => {
    if(type==="all") {
      card.style.display="block";
    } else if(type==="saved") {
      card.style.display = savedItems.has(card.id) ? "block" : "none";
    } else {
      card.style.display = (card.dataset.type===type) ? "block" : "none";
    }
  });
}
