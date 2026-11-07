import {
  navigation,
  hero,
  work,
  about,
  skills,
  journey,
  credentials,
  contact,
  caseStudies,
} from "./components.mjs";
import { person } from "./content.mjs";

export function renderPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    url: "https://himanshu-raturi-portfolio.vercel.app/",
    email: person.email,
    sameAs: [person.github, person.linkedin, person.x],
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Graphic Era Hill University",
    },
  };
  return `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#f4f2eb"><title>Himanshu Raturi — Beyond the Code</title><meta name="description" content="Himanshu Raturi — AI & Full Stack Developer and LLM Engineer. Explore projects in agentic RAG, LLM fine-tuning, computer vision, and intelligent applications."><link rel="canonical" href="https://himanshu-raturi-portfolio.vercel.app/"><meta property="og:type" content="website"><meta property="og:title" content="Himanshu Raturi — Beyond the Code"><meta property="og:description" content="A curious mind. A builder at heart. AI, language models, and intelligent digital experiences."><meta property="og:url" content="https://himanshu-raturi-portfolio.vercel.app/"><meta property="og:image" content="https://himanshu-raturi-portfolio.vercel.app/assets/social-card.png"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Himanshu Raturi — Beyond the Code"><meta name="twitter:description" content="AI & Full Stack Developer | LLM Engineer"><meta name="twitter:image" content="https://himanshu-raturi-portfolio.vercel.app/assets/social-card.png"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="preload" href="/assets/manrope.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="/assets/style.css"><script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, "\\u003c")}</script><script type="module" src="/assets/script.js"></script></head><body><noscript><link rel="stylesheet" href="/assets/no-script.css"></noscript>${navigation()}<main id="main">${hero()}${work()}${about()}${skills()}${journey()}${credentials()}${contact()}</main>${caseStudies()}<div class="cursor-marker" aria-hidden="true"></div></body></html>`;
}
