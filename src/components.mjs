import { person, projects, expertise, certificates } from "./content.mjs";

export const escape = (text) =>
  String(text).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
export const arrow = '<span aria-hidden="true">↗</span>';
const external = (url, label, className = "") =>
  `<a class="${className}" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${label}${arrow}</a>`;
const label = (number, title) =>
  `<p class="eyebrow"><span>${number} /</span> ${title}</p>`;
const tags = (items) =>
  `<ul class="tags">${items.map((item) => `<li>${escape(item)}</li>`).join("")}</ul>`;

export function navigation() {
  return `<a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header"><a class="wordmark" href="#top" aria-label="Himanshu Raturi, home">h<span class="wordmark-dot">.</span>r<span class="wordmark-dot">.</span></a>
  <a class="header-identity" href="#about">HIMANSHU RATURI<span>AI & FULL STACK DEVELOPER</span></a>
  <button class="menu-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="Open navigation"><span></span><span></span></button>
  <nav id="main-nav" aria-label="Main navigation"><a href="#work">Work <sup>05</sup></a><a href="#about">About</a><a href="#expertise">Expertise</a><a href="#journey">Journey</a><a class="nav-contact" href="#contact">Let’s talk ${arrow}</a></nav></header>`;
}

export function hero() {
  const resumeUrl =
    person.resume || `mailto:${person.email}?subject=Resume%20request`;
  return `<section class="hero" id="top" aria-labelledby="hero-heading">
  <div class="hero-topline"><p class="eyebrow"><span class="signal-dot"></span> INTELLIGENCE MEETS INTENTION</p><p class="eyebrow hero-edition">A PERSONAL DIGITAL UNIVERSE — VOL. 01</p></div>
  <div class="hero-composition"><h1 id="hero-heading"><span class="headline-line">BEYOND</span><span class="headline-line second-line">THE <em>CODE</em><span class="headline-period">.</span></span></h1>
  <div class="neural-stage"><canvas id="neural-canvas" aria-hidden="true"></canvas><span class="orbit-label orbit-label-top">FIG. 01 — A CONNECTED MIND</span><span class="orbit-label orbit-label-bottom">IDEAS → SYSTEMS → IMPACT</span><button class="motion-toggle" aria-pressed="false" aria-label="Pause visual animation">Pause motion <span aria-hidden="true">Ⅱ</span></button></div>
  <div class="hero-side-note" aria-hidden="true">THINK DEEPLY. BUILD WITH PURPOSE.</div></div>
  <div class="hero-bottom"><div class="hero-intro"><p class="small-label">HELLO, I’M HIMANSHU RATURI.</p><p>I turn complex ideas into<br><strong>intelligent digital experiences.</strong></p><p class="hero-role">AI & Full Stack Developer <span>/</span> LLM Engineer</p></div>
  <div class="hero-actions"><a class="button button-dark" href="#work">Explore my work <span aria-hidden="true">↓</span></a><a class="text-link" href="${resumeUrl}" ${person.resume ? "download" : ""}>${person.resume ? "Download résumé" : "Request résumé"} ${arrow}</a></div>
  <a class="scroll-cue" href="#work"><span class="scroll-circle" aria-hidden="true">↓</span><span>SCROLL TO<br>EXPLORE</span></a></div>
  </section><div class="discipline-strip" aria-hidden="true"><span>INTELLIGENT SYSTEMS</span><i>✳</i><span>HUMAN-CENTERED THINKING</span><i>✳</i><span>ENDLESS CURIOSITY</span><i>✳</i><span>BUILT WITH INTENTION</span></div>`;
}

export function work() {
  return `<section id="work" class="section work-section" aria-labelledby="work-heading"><div class="section-heading">${label("01", "SELECTED WORK")}<div class="heading-row"><h2 id="work-heading">Ideas made<br><em>intelligent.</em></h2><p>A collection of experiments and applications.<br>From language and retrieval to the way machines see.</p></div></div>
  <div class="project-toolbar"><div class="filters" role="group" aria-label="Filter projects"><button class="filter is-active" data-filter="all" aria-pressed="true">All work <span>05</span></button><button class="filter" data-filter="Language & retrieval" aria-pressed="false">Language & retrieval</button><button class="filter" data-filter="Computer vision" aria-pressed="false">Computer vision</button></div><span class="project-count" aria-live="polite">5 projects</span></div>
  <div class="project-list">${projects
    .map(
      (
        project,
      ) => `<article class="project" data-category="${escape(project.category)}" id="project-${project.id}"><div class="project-image-wrap"><div class="project-image-label"><span>${project.number} / ${project.category.toUpperCase().replace("&", "&amp;")}</span>${project.status ? '<span class="project-status">IN PROGRESS</span>' : '<span aria-hidden="true">↗</span>'}</div><img src="/assets/${project.image}.webp" width="1050" height="700" loading="lazy" decoding="async" alt="Original portfolio artwork for ${escape(project.name)}"><p class="art-caption">PROJECT ARTWORK / ${escape(project.name)}</p></div>
  <div class="project-copy"><p class="small-label">${project.number} — ${escape(project.name)}</p><h3>${project.title}</h3><p>${project.short}</p>${tags(project.tags)}<div class="project-links"><a class="text-link" href="#case-${project.id}" data-case-open="case-${project.id}" aria-haspopup="dialog">Inside the project <span aria-hidden="true">+</span></a>${external(`${person.github}/${project.repo}`, "GitHub ", "repository-link")}</div></div></article>`,
    )
    .join("")}</div>
  <div class="work-end"><span>ALWAYS BUILDING. ALWAYS LEARNING.</span>${external(person.github, "Explore my GitHub ", "text-link")}</div></section>`;
}

export function about() {
  return `<section class="section about-section" id="about" aria-labelledby="about-heading">${label("02", "THE PERSON BEHIND THE CODE")}<div class="about-grid"><div class="portrait-wrap"><img src="/assets/portrait.webp" width="600" height="772" loading="lazy" decoding="async" alt="Himanshu Raturi"><span class="portrait-note">BASED IN DEHRADUN, INDIA <span aria-hidden="true">↗</span></span></div><div class="about-copy"><h2 id="about-heading">A curious mind.<br>A builder <em>at heart.</em></h2><p class="about-lead">I’m Himanshu, a Computer Science student exploring what happens when strong engineering meets artificial intelligence.</p><p>I build intelligent applications by combining Large Language Models with robust backend systems. My work brings together API integration, AI-driven reasoning workflows, and voice-enabled applications to make complex processes feel simple.</p><p>From computer vision and transfer learning to semantic search, RAG, and fine-tuning with QLoRA, I enjoy understanding the foundations—and putting them to work.</p><div class="about-signoff"><span class="signature">Himanshu Raturi</span><a class="text-link" href="#contact">Let’s connect ${arrow}</a></div></div></div></section>`;
}

export function skills() {
  return `<section class="section expertise-section" id="expertise" aria-labelledby="expertise-heading">${label("03", "MY WORKING TOOLKIT")}<div class="heading-row"><h2 id="expertise-heading">Different tools.<br><em>One connected vision.</em></h2><p>The technologies behind my projects.<br>Explore the parts, see the connections.</p></div><div class="expertise-list">${expertise.map((item, index) => `<details class="expertise-item" ${index === 0 ? "open" : ""}><summary><span class="expertise-number">${item.number}</span><h3>${item.name}</h3><span class="expand-icon" aria-hidden="true">+</span></summary><div class="expertise-content"><p>${item.description}</p>${tags(item.skills)}</div></details>`).join("")}</div></section>`;
}

export function journey() {
  return `<section class="section journey-section" id="journey" aria-labelledby="journey-heading"><div class="journey-intro">${label("04", "FOUNDATIONS & FORWARD MOTION")}<h2 id="journey-heading">Still learning.<br><em>Always becoming.</em></h2><p>A foundation in computer science.<br>A curiosity that goes beyond the syllabus.</p></div><div class="timeline"><article class="timeline-item"><p class="timeline-date">2023 — 2027 <span>UNDERGRADUATE</span></p><h3>B.Tech, Computer Science<br>& Engineering</h3><p>Graphic Era Hill University, Dehradun</p><span class="score">CGPA <strong>8.77 <small>/ 10</small></strong></span><p class="timeline-detail">Machine Learning, Deep Learning, Probability & Statistics, Linear Algebra, Data Structures & Algorithms, and Database Management Systems.</p></article><article class="timeline-item compact"><p class="timeline-date">2023</p><div><h3>Senior Secondary · CBSE</h3><p>Foothills Academy, Rishikesh</p></div><span class="school-score">88.00%</span></article><article class="timeline-item compact"><p class="timeline-date">2021</p><div><h3>Secondary · CBSE</h3><p>Foothills Academy, Rishikesh</p></div><span class="school-score">87.00%</span></article></div>
  <div class="curiosity-note"><span class="asterisk" aria-hidden="true">✳</span><div><p class="small-label">BEYOND THE IMPLEMENTATION</p><h3>Understanding the <em>why.</em></h3><p>I’m drawn to the mathematical and algorithmic foundations of machine learning. I’m exploring information retrieval, context-aware reasoning, and efficient model adaptation—and how to turn that understanding into useful, scalable AI systems.</p></div></div></section>`;
}

export function credentials() {
  return `<section class="section credentials-section" id="credentials" aria-labelledby="credentials-heading"><div class="heading-row"><div>${label("05", "CONTINUING TO GROW")}<h2 id="credentials-heading">Learning, <em>on record.</em></h2></div><span class="small-label">CERTIFICATIONS & PARTICIPATION</span></div><div class="credential-list">${certificates.map((cert) => `<a href="${escape(cert.url)}" class="credential" target="_blank" rel="noopener noreferrer"><span class="credential-issuer">${cert.issuer}<small>${cert.date}</small></span><div class="credential-main"><h3>${cert.title}</h3><span>${cert.description}</span></div><span class="credential-arrow" aria-hidden="true">↗</span><span class="sr-only">View credential (opens a new tab)</span></a>`).join("")}</div></section>`;
}

export function contact() {
  return `<section class="section contact-section" id="contact" aria-labelledby="contact-heading"><div class="contact-top">${label("06", "THE NEXT CONNECTION")}<span class="small-label">GOOD THINGS START WITH A CONVERSATION.</span></div><h2 id="contact-heading">LET’S BUILD<br><em>SOMETHING</em><br><span class="contact-last">THAT MATTERS.<a class="contact-orb" href="mailto:${person.email}" aria-label="Email Himanshu Raturi">↗</a></span></h2><div class="contact-bottom"><div><p>Have an idea, an opportunity, or a question?<br>I’d love to hear from you.</p><a class="email-link" href="mailto:${person.email}">${person.email}</a><button class="copy-email" data-copy-email="${person.email}" aria-label="Copy email address">Copy email <span aria-hidden="true">⧉</span></button><p class="copy-status" role="status"></p></div><div class="contact-socials">${external(person.github, "GitHub ")}${external(person.linkedin, "LinkedIn ")}${external(person.x, "X / Twitter ")}<a href="tel:+917906819386">${person.phone} ${arrow}</a></div></div>
  <details class="contact-compose"><summary>Prefer to leave a message? <span aria-hidden="true">+</span></summary><form action="https://formsubmit.co/${person.email}" method="POST" id="contact-form"><input type="hidden" name="_template" value="table"><input type="text" name="_honey" class="honeypot" tabindex="-1" autocomplete="off" aria-hidden="true"><div class="form-row"><label>Your name<input name="name" autocomplete="name" required maxlength="120"></label><label>Your email<input name="email" type="email" autocomplete="email" required maxlength="254"></label></div><label>What’s on your mind?<input name="subject" required maxlength="180" placeholder="An idea, an opportunity, a hello…"></label><label>Your message<textarea name="message" required rows="4" maxlength="5000"></textarea></label><div class="form-submit"><p>Delivered through FormSubmit.<br>You’ll continue to their confirmation page.</p><button class="button button-dark" type="submit">Send message ${arrow}</button></div><p class="form-status" role="status"></p></form></details></section>
  <footer class="site-footer"><a class="wordmark" href="#top" aria-label="Back to top">h.r.</a><span>© ${new Date().getFullYear()} HIMANSHU RATURI</span><span>DEHRADUN, INDIA <span class="footer-dot">●</span> <time id="india-time">IST</time></span><a href="#top">BACK TO TOP ↑</a></footer>`;
}

export function caseStudies() {
  return projects
    .map(
      (project) =>
        `<dialog class="case-dialog" id="case-${project.id}" aria-labelledby="case-title-${project.id}"><div class="dialog-toolbar"><span class="small-label">PROJECT ${project.number} / ${project.category.toUpperCase().replace("&", "&amp;")}</span><button class="dialog-close" aria-label="Close project details">Close <span aria-hidden="true">×</span></button></div><div class="dialog-body"><p class="eyebrow">${project.status || "PROJECT NOTES"}</p><h2 id="case-title-${project.id}">${project.name}</h2><p class="case-intro">${project.short}</p><img src="/assets/${project.image}.webp" width="1050" height="700" alt="Original portfolio artwork for ${escape(project.name)}" loading="lazy"><p class="art-caption">Original portfolio artwork; not an application screenshot.</p><h3>The idea & implementation</h3><p>${project.description}</p><h3>System overview</h3><ol class="architecture-flow">${project.flow.map((step) => `<li>${step}</li>`).join("")}</ol><h3>What’s inside</h3><ul class="case-features">${project.features.map((feature) => `<li>${feature}</li>`).join("")}</ul><h3>The toolkit</h3>${tags(project.tags)}<div class="case-footer">${external(`${person.github}/${project.repo}`, "Explore the source ", "button button-dark")}<span class="small-label">${project.status ? "CURRENTLY IN DEVELOPMENT" : "CODE & DOCUMENTATION ON GITHUB"}</span></div></div></dialog>`,
    )
    .join("");
}
