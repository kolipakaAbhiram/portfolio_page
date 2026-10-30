/* ==========================================================
   Page logic. You normally do NOT need to edit this file;
   change your content in js/data.js instead.
   ========================================================== */

const D = PORTFOLIO;
const $ = (selector) => document.querySelector(selector);
const chips = (items) => items.map((item) => `<span>${item}</span>`).join("");
const extLink = (external) => (external ? ' target="_blank" rel="noopener"' : "");

/* ---------- Renderers: each fills one part of the page ---------- */

function renderHome() {
  document.title = D.pageTitle;
  $("#logoText").textContent = D.logoText;
  $("#logoName").textContent = D.logoName;
  $("#status").textContent = D.status;
  $("#firstName").textContent = D.firstName;
  $("#lastName").textContent = D.lastName;
  $("#tagline").textContent = D.tagline;
  $("#resumeBtn").href = D.resumeFile;
  $("#photo").src = D.photo;
  $("#photoBadge").textContent = D.photoBadge;
  $("#stats").innerHTML = D.stats
    .map((s) => `<div class="card stat"><b>${s.value}</b><span>${s.label}</span></div>`)
    .join("");
}

function renderAbout() {
  $("#aboutText").textContent = D.aboutText;
  $("#aboutCards").innerHTML = D.about
    .map((a) => `<div class="card row"><div class="ic">${a.icon}</div><div><h3>${a.title}</h3><p class="d">${a.text}</p></div></div>`)
    .join("");
}

function renderEducation() {
  const e = D.education;
  $("#educationCard").innerHTML = `
    <div class="top">
      <div class="row">
        <div class="ic">🎓</div>
        <div>
          <h3 style="font-size:1.6rem">${e.degree}</h3>
          <p class="d" style="font-size:1.2rem">${e.college}</p>
          <p class="d mono">${e.period}</p>
        </div>
      </div>
      <div class="cg"><small class="mono">CGPA</small><b>${e.cgpa}</b></div>
    </div>
    <div class="chips">${chips(e.subjects)}</div>`;
}

function renderExperience() {
  $("#experienceList").innerHTML = D.experience
    .map((x) => `
      <div class="card">
        <div class="top">
          <div><h3 style="font-size:1.7rem">${x.role}</h3><p class="d">🧳 ${x.company}</p></div>
          <span class="date">${x.period}</span>
        </div>
        <ul>${x.points.map((p) => `<li>${p}</li>`).join("")}</ul>
      </div>`)
    .join("");
}

function renderSkills() {
  $("#skillCards").innerHTML = D.skills
    .map((s) => `<div class="card sk"><h3><span class="ic">${s.icon}</span>${s.title}</h3><div class="chips">${chips(s.items)}</div></div>`)
    .join("");
}

function renderCerts() {
  $("#certCards").innerHTML = D.certs
    .map((c) => `<div class="card cert"><div class="ic">🏅</div><h3>${c.title}</h3><p class="d">${c.issuer}</p><small>${c.meta}</small></div>`)
    .join("");
}

function renderProjects(filter = "all") {
  $("#projectCards").innerHTML = D.projects
    .filter((p) => filter === "all" || p.type === filter)
    .map((p) => `
      <div class="card pc">
        <div class="ph"><b>${p.domain.toUpperCase()}</b><span>${p.type.toUpperCase()}</span></div>
        <h3 style="font-size:1.45rem">${p.title}</h3>
        <p class="d" style="margin-top:8px">${p.description}</p>
        <div class="imp"><small>IMPACT</small>${p.impact}</div>
        <div class="chips" style="margin-top:0">${chips(p.tech)}</div>
        ${p.github ? `<a class="gh" href="${p.github}" target="_blank" rel="noopener">View on GitHub ↗</a>` : ""}
      </div>`)
    .join("");
}

function renderCode() {
  $("#codeText").textContent = D.codeText;
  $("#codeLinks").innerHTML = D.links
    .map((l, i) => `<a class="btn ${i === 0 ? "p" : ""}" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`)
    .join("");
}

function renderContact() {
  $("#contactText").textContent = D.contactText;
  $("#contactList").innerHTML = D.contact
    .map((c) => `<a href="${c.href}"${extLink(c.external)}><div class="ic">${c.icon}</div><div><small>${c.label}</small>${c.text}</div></a>`)
    .join("");
  $("#footerText").innerHTML = `${D.footerText} <b>${D.footerHighlight}</b>`;
}

/* ---------- Behaviour ---------- */

// Typing animation in the hero ("I am a ...")
function startTyping() {
  let word = 0, letters = 0, deleting = false;
  (function tick() {
    const text = D.roles[word];
    letters += deleting ? -1 : 1;
    $("#typed").textContent = text.slice(0, letters);
    let delay = deleting ? 40 : 80;
    if (!deleting && letters === text.length) { deleting = true; delay = 1400; }
    else if (deleting && letters === 0) { deleting = false; word = (word + 1) % D.roles.length; delay = 300; }
    setTimeout(tick, delay);
  })();
}

// Project filter buttons (All / Internship / Personal)
function setupFilters() {
  $("#filters").onclick = (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    document.querySelectorAll("#filters button").forEach((b) => b.classList.toggle("on", b === btn));
    renderProjects(btn.dataset.filter);
  };
}

// Highlight the nav link of the section currently on screen
function setupNavHighlight() {
  const links = [...document.querySelectorAll("#nav a")];
  const sections = links.map((a) => $(a.getAttribute("href")));
  const update = () => {
    let current = 0;
    sections.forEach((s, i) => { if (s.getBoundingClientRect().top < 200) current = i; });
    links.forEach((a, i) => a.classList.toggle("on", i === current));
  };
  addEventListener("scroll", update);
  update();
}

// Contact form: opens the visitor's email app with the message filled in
function setupContactForm() {
  $("#contactForm").onsubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio message from " + $("#formName").value);
    const body = encodeURIComponent($("#formMessage").value + "\n\n" + $("#formEmail").value);
    location.href = `mailto:${D.email}?subject=${subject}&body=${body}`;
  };
}

/* ---------- Start ---------- */
renderHome(); renderAbout(); renderEducation(); renderExperience(); renderSkills();
renderCerts(); renderProjects(); renderCode(); renderContact();
startTyping(); setupFilters(); setupNavHighlight(); setupContactForm();
