(function () {
  const D = PORTFOLIO;
  const $ = (s) => document.querySelector(s);
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ICONS = {
    github: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6.1V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z"/></svg>',
    twitter: '<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M18.2 2.3h3.4l-7.4 8.4 8.7 11.5h-6.8l-5.3-7-6.1 7H1.3l7.9-9L.8 2.3h7l4.8 6.4zm-1.2 17.9h1.9L7 4.2H5z"/></svg>',
    upwork: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
    mail: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  };
  const LABELS = { github: "GitHub", linkedin: "LinkedIn", twitter: "X / Twitter", upwork: "Freelance profile" };

  /* ---------- Basic fields ---------- */
  document.title = `${D.name} | ${D.roles[0]}`;
  $("#logo").innerHTML = `&lt;<b>${esc(D.shortName)}</b> /&gt;`;
  $("#heroName").textContent = D.name;
  $("#heroTagline").textContent = D.tagline;
  $("#statusText").textContent = D.availabilityText;
  if (!D.available) $("#status").style.display = "none";
  $("#footerName").textContent = D.name;
  $("#year").textContent = new Date().getFullYear();
  if (D.resume) $("#resumeBtn").href = D.resume;
  else $("#resumeBtn").remove();

  /* ---------- Socials ---------- */
  const socials = Object.entries(D.socials).filter(([, url]) => url);
  $("#heroSocials").innerHTML = socials
    .map(([k, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener" aria-label="${LABELS[k]}">${ICONS[k]}</a>`)
    .join("");

  /* ---------- Code window ---------- */
  const k = (t) => `<span class="tk-k">${t}</span>`;
  const s = (t) => `<span class="tk-s">"${esc(t)}"</span>`;
  const p = (t) => `<span class="tk-p">${t}</span>`;
  const stackLine = ["MongoDB", "Express", "React", "Node"].map(s).join(", ");
  $("#codeBlock").innerHTML =
    `${k("const")} developer = {\n` +
    `  ${p("name")}: ${s(D.name)},\n` +
    `  ${p("stack")}: [${stackLine}],\n` +
    `  ${p("location")}: ${s(D.location)},\n` +
    `  ${p("openToWork")}: ${k(String(D.available))},\n` +
    `  ${p("build")}: ${k("async")} (idea) =&gt; ${k("await")} ship(idea),\n` +
    `};\n\n<span class="tk-c">// Let's build something great 🚀</span>`;

  $("#stats").innerHTML = D.stats
    .map((st) => `<div class="stat"><b class="grad">${esc(st.value)}</b><span>${esc(st.label)}</span></div>`)
    .join("");

  /* ---------- Typewriter roles ---------- */
  const roleEl = $("#heroRole");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || D.roles.length < 2) {
    roleEl.textContent = D.roles[0];
  } else {
    let ri = 0, ci = 0, deleting = false;
    const tick = () => {
      const word = D.roles[ri];
      ci += deleting ? -1 : 1;
      roleEl.innerHTML = esc(word.slice(0, ci)) + '<span class="cursor">|</span>';
      let delay = deleting ? 40 : 80;
      if (!deleting && ci === word.length) { deleting = true; delay = 1800; }
      else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % D.roles.length; delay = 300; }
      setTimeout(tick, delay);
    };
    tick();
  }

  /* ---------- About & skills ---------- */
  $("#aboutText").innerHTML = D.about.map((para) => `<p>${para}</p>`).join("");
  $("#skills").innerHTML = Object.entries(D.skills)
    .map(([group, list]) =>
      `<div class="skill-group"><h3>${esc(group)}</h3><div class="chips">${list.map((x) => `<span class="chip">${esc(x)}</span>`).join("")}</div></div>`)
    .join("");

  /* ---------- Services ---------- */
  $("#services-grid").innerHTML = D.services
    .map((sv) => `<article class="card reveal"><div class="icon">${sv.icon}</div><h3>${esc(sv.title)}</h3><p>${esc(sv.text)}</p>${sv.price ? `<div class="price">${esc(sv.price)}</div>` : ""}</article>`)
    .join("");

  /* ---------- Projects + filters ---------- */
  const cats = ["All", ...new Set(D.projects.map((pr) => pr.category))];
  $("#filters").innerHTML = cats
    .map((c, i) => `<button class="filter${i === 0 ? " active" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`)
    .join("");

  const hues = [150, 200, 265, 30, 330, 180];
  $("#projects-grid").innerHTML = D.projects
    .map((pr, i) => {
      const h = hues[i % hues.length];
      const thumb = pr.image
        ? `<img src="${esc(pr.image)}" alt="${esc(pr.title)} screenshot" loading="lazy" />`
        : `<span aria-hidden="true">${pr.emoji || "💻"}</span>`;
      const bg = pr.image ? "" : `style="background:linear-gradient(135deg,hsl(${h} 70% 50% / .22),hsl(${h + 40} 70% 50% / .08))"`;
      const links = [
        pr.live ? `<a href="${esc(pr.live)}" target="_blank" rel="noopener">Live demo ↗</a>` : "",
        pr.code ? `<a href="${esc(pr.code)}" target="_blank" rel="noopener">Source code ↗</a>` : "",
      ].join("");
      return `<article class="card project reveal" data-cat="${esc(pr.category)}">
        <div class="thumb" ${bg}>${thumb}${pr.featured ? '<span class="badge">Featured</span>' : ""}</div>
        <div class="body">
          <h3>${esc(pr.title)}</h3>
          <dl>
            <dt>Problem</dt><dd>${esc(pr.problem)}</dd>
            <dt>Solution</dt><dd>${esc(pr.solution)}</dd>
            <dt>Result</dt><dd>${esc(pr.result)}</dd>
          </dl>
          <div class="chips">${pr.tech.map((t) => `<span class="chip small">${esc(t)}</span>`).join("")}</div>
          <div class="links">${links}</div>
        </div>
      </article>`;
    })
    .join("");

  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    document.querySelectorAll(".filter").forEach((b) => b.classList.toggle("active", b === btn));
    const cat = btn.dataset.cat;
    document.querySelectorAll(".project").forEach((card) => {
      card.classList.toggle("hidden", cat !== "All" && card.dataset.cat !== cat);
    });
  });

  /* ---------- Experience ---------- */
  $("#timeline").innerHTML = D.experience
    .map((ex) => `<li class="reveal"><div class="when">${esc(ex.when)}</div><h3>${esc(ex.role)} <span>· ${esc(ex.company)}</span></h3><ul>${ex.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul></li>`)
    .join("");

  /* ---------- Testimonials ---------- */
  if (!D.testimonials || !D.testimonials.length) {
    $("#testimonials").remove();
  } else {
    $("#testimonials-grid").innerHTML = D.testimonials
      .map((t) => {
        const initials = t.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
        return `<figure class="card quote reveal" style="margin:0"><p>${esc(t.quote)}</p><figcaption class="who"><div class="avatar">${esc(initials)}</div><div><b>${esc(t.name)}</b><span>${esc(t.title)}</span></div></figcaption></figure>`;
      })
      .join("");
  }

  /* ---------- Contact ---------- */
  const contactItems = [
    `<li><a href="mailto:${esc(D.email)}">${ICONS.mail}${esc(D.email)}</a></li>`,
    ...socials.map(([k2, url]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener">${ICONS[k2]}${LABELS[k2]}</a></li>`),
    `<li><a>${ICONS.pin}${esc(D.location)}</a></li>`,
  ];
  $("#contactList").innerHTML = contactItems.join("");

  const form = $("#contactForm");
  const note = $("#formNote");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    if (D.formEndpoint) {
      note.textContent = "Sending…";
      try {
        const res = await fetch(D.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error();
        form.reset();
        note.textContent = "Thanks! Your message was sent. I'll get back to you soon.";
      } catch {
        note.textContent = `Something went wrong. Please email me directly at ${D.email}.`;
      }
    } else {
      const subject = encodeURIComponent(`${data.topic} from ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\n${data.name}\n${data.email}`);
      window.location.href = `mailto:${D.email}?subject=${subject}&body=${body}`;
      note.textContent = "Opening your email app…";
    }
  });

  /* ---------- Theme toggle ---------- */
  $("#themeToggle").addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* ---------- Mobile menu ---------- */
  const links = $("#navLinks");
  $("#menuBtn").addEventListener("click", () => links.classList.toggle("open"));
  links.addEventListener("click", (e) => { if (e.target.tagName === "A") links.classList.remove("open"); });

  /* ---------- Nav shadow + active link ---------- */
  const nav = $("#nav");
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 10), { passive: true });

  const navAnchors = [...links.querySelectorAll("a")];
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          navAnchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`));
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("main section[id]").forEach((sec) => spy.observe(sec));

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
