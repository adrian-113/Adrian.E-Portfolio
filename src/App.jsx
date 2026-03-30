import { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// TRANSLATIONS
// ─────────────────────────────────────────────────────────────────────────────
const T18N = {
  en: {
    // Shared
    homeTagline: "Process-first · Cologne, Germany",
    back: "← Back",
    backToPortfolio: "← Back to portfolio",
    scroll: "Scroll",
    thankYou1: "Thank you for",
    thankYou2: "reviewing the work.",
    credit: "Adrián Etopa Herrera · UX/UI Designer",
    aboutMe: "About me",
    close: "Close",
    competencies: "Competencies",
    aboutBio: "Born in the Canary Islands, based in Cologne. Years of experience in customer-facing leadership roles — which is where I learned that good design solves real problems for real people. Since discovering UX, I've dedicated myself to it completely.",
    competencyList: [
      { area:"UX Design",           items:["Classic, agile & hybrid","Defining goals & milestones","Project steering & evaluation"] },
      { area:"Analytical Skills",   items:["Research & user studies","Usability testing","Process optimisation"] },
      { area:"Coordination",        items:["Cross-department alignment","Resource planning","Priority setting & troubleshooting"] },
      { area:"Leadership",          items:["Team & shift management","Identifying & developing potential","Team motivation"] },
      { area:"Service Orientation", items:["Identifying customer needs","Consulting, sales & complaint management","Solution-oriented"] },
    ],
    traits: ["Results-driven","Curious","Resilient","Fast learner","Team player"],
    projects: [
      { tag:"Game · UX/UI Design",       desc:"Designing a Hellmann's branded island inside Fortnite Creative" },
      { tag:"App · UX/UI Design",        desc:"Community platform for Spanish speakers in Germany" },
      { tag:"Web & App · UX/UI",         desc:"Brand, web and mobile redesign for a city exploration platform" },
      { tag:"Accessibility · UX Design", desc:"WhatsApp bot making job search accessible to visually impaired people" },
    ],
    // ── IRRESISTIBLE ──
    ay_heroLabel: "Game Design · Branded Experience · 2024",
    ay_heroDesc: "Hellmann's branded Fortnite island. The brief: no violence, and mayo has to be the mechanic — not the branding.",
    ay_heroTags: ["UX Design","UI Design","Game Design","User Testing","Branded Experience"],
    ay_briefLabel: "The Brief",
    ay_briefTitle: "A brief with two constraints that pulled in opposite directions.",
    ay_briefP1: "During a tutorship with game designer Giulia Pignataro — running alongside a real client project — we were asked to build a Fortnite Creative island for Hellmann's, based on the slogan \"All You Can Eat.\" The map had to be published and playable, not a concept.",
    ay_briefP2: "Two requirements made the brief harder than it looks: no direct or indirect violence — on a platform where the default answer to every design question is \"shoot it\" — and the mechanics had to be built around mayonnaise, not just branded with it.",
    ay_briefP3: "Those two constraints pushed the design toward something more specific: if Mayo couldn't be decoration, it had to be functional. That ended up being the most interesting part of the project.",
    ay_briefQuote: "Working with Giulia meant being inside a real project process — seeing how decisions get made when a client and a deadline are actual, not simulated.",
    ay_ideationLabel: "Ideation",
    ay_moodboardLabel: "Reference islands — existing Fortnite Creative maps",
    ay_ideationTitle: "From brief to concept.",
    ay_ideationP1: "We started by studying what already existed — which Fortnite islands worked, which didn't, and why. That gave us a realistic picture of what the engine could support before we proposed anything.",
    ay_ideasLabel: "Ideas explored",
    ay_ideasP: "The no-violence constraint ruled out most of the obvious directions before we even started sketching. On a platform where combat is the default answer to almost every design challenge, working without it forced a completely different kind of thinking.",
    ay_conceptTitle: "What we chose",
    ay_conceptLabel: "The concept",
    ay_conceptBody: "Hellmann's sets a challenge: the ultimate eat-out. Teams and solo players compete on a Battle Royale island. The brand doesn't appear as a logo on a wall — it appears as the resource you can't play without.",
    ay_whyLabel: "Why this worked",
    ay_whyBody: "Up to 40 players. Obstacle and survival course. Mayo as ammo, resource gauge, and score multiplier. Running out doesn't kill you — it stops you earning. That's the non-violent version of pressure.",
    ay_mechLabel: "How the mechanic works",
    ay_mechTitle: "Mayo as resource, not logo.",
    ay_mechP: "The brief said the mechanics had to be linked to mayonnaise. The solution was to make it the game's core resource: you collect it, manage it, and spend it. Run out and you stop scoring.",
    ay_journeyLabel: "Player Journey",
    ay_journeyTitle: "How the game plays out.",
    ay_journeyP: "From the first lobby screen to the end of a round. Fortnite Creative has a fixed engine and fixed UI conventions — every screen is a balance between what you want to show and what the platform actually lets you do.",
    ay_testLabel: "User Testing",
    ay_testTitle: "The game loop worked. The onboarding didn't.",
    ay_testP: "Testing happened in Fortnite Creative before the map was published. Four users played across 22 tasks. All completed sessions, understood the core loop, and none got stuck. The problems were concentrated in information architecture. Fixable. Not fundamental.",
    ay_fixLabel: "Fix",
    ay_conclLabel: "Conclusions",
    ay_conclTitle: "What we learned.",
    ay_conclP: "The no-violence constraint ended up being useful — it pushed the design somewhere more specific. Working with Giulia meant being inside a real decision-making process, not a simulated one.",
    ay_concl1Head: "Context", ay_concl1Body: "This wasn't a classroom exercise — it was a tutorship running alongside a real client project, with real objectives and real constraints. The brief came from an actual client, the testing happened with real players in Fortnite Creative before publishing, and the map was shipped.",
    ay_concl2Head: "What didn't work", ay_concl2Body: "Testing showed that the onboarding didn't land the way we expected. In the lobby, players were focused on when the game would start — not on reading panels. Most explored the environment instead of engaging with the information signs.",
    ay_concl3Head: "What we'd change", ay_concl3Body: "If the project continued, the onboarding is where we'd focus first. Instead of separate static panels spread around the lobby, rules could be embedded into the first few seconds of gameplay itself — so players learn by doing.",
    // ── NEO ──
    neo_heroLabel: "Accessibility · UX Design · CO UX",
    neo_heroDesc: "The job platform for blind and visually impaired people. App + landing page, built as part of CO UX.",
    neo_heroTags: ["Accessibility","Prototyping","Landing Page","Collaborative process"],
    neo_whatLabel: "What is Neo?",
    neo_whatTitle: "Job search via WhatsApp. Accessible by design.",
    neo_whatP1: "Neo is a job search platform built specifically for blind and visually impaired people. It uses WhatsApp as its interface — because that's what this group already uses, and it already works with their screen readers. No new app to learn.",
    neo_whatP2: "Companies post jobs on the web. Users register and search through WhatsApp. The platform generates a database that companies can query to find and contact candidates directly. The whole flow is screen-reader compatible by design, not as an afterthought.",
    neo_briefCardLabel: "CO-UX G4 — Inherited brief",
    neo_swot: [
      { icon:"💪", label:"Strength",    text:"Promotes inclusion — impacts quality of life and economic independence" },
      { icon:"🎯", label:"Opportunity", text:"Users and companies with no shared accessible platform today" },
      { icon:"⚠️", label:"Risk",        text:"Building something accessible enough to actually matter" },
      { icon:"🔧", label:"Tech",        text:"Responsive web app, 100% keyboard and screen reader navigable" },
    ],
    neo_researchLabel: "Research — inherited",
    neo_researchTitle: "We worked from the research. We didn't do it.",
    neo_researchP: "The research was completed by the group before us and handed over as part of the CO UX format. Our job was to understand it well enough to make good prototype decisions — and to be honest about where we were working with incomplete information.",
    neo_dataLabel: "Quantitative data — \"Digital Divide and Disability\" PDF",
    neo_personasLabel: "User personas",
    neo_goalsLabel: "Goals",
    neo_needsLabel: "Needs",
    neo_techLabel: "Tech",
    neo_techResearchLabel: "Assistive technology research",
    neo_benchmarkLabel: "Benchmark — accessible platforms",
    neo_insightsLabel: "Key insights",
    neo_defLabel: "Definition",
    neo_defTitle: "Before screens: structure.",
    neo_defP: "The inherited research gave us a clear picture of who we were designing for. Before touching the prototype, we mapped where those users were (AS IS) and where Neo should take them (TO BE).",
    neo_iaLabel: "Information Architecture",
    neo_userFlowLabel: "User Flow",
    neo_mvpLabel: "MVP — two core tasks",
    neo_journeyLabel: "User Journey — Fermín, 30, visual impairment · Goal: find a job",
    neo_journeySubtitle: "Two realities — before Neo, and after.",
    neo_asIsLabel: "AS IS — Current reality",
    neo_toBeLabel: "TO BE — With Neo",
    neo_storyLabel: "Ideation — Storytelling",
    neo_storyTitle: "Juan's story.",
    neo_storyP: "We used a storytelling exercise to validate the concept and map the user journey before building anything. Juan — visually impaired, looking for work — finds Neo through a support group and uses it to navigate the job market through WhatsApp.",
    neo_storyBadge: "CO-UX G4 · Inherited narrative, adapted for prototype direction",
    neo_botPersonaLabel: "Bot persona — Neo",
    neo_protoLabel: "Prototype — WhatsApp bot",
    neo_protoTitle: "The interface is a WhatsApp conversation.",
    neo_protoP: "Neo isn't a standalone app — it's a WhatsApp bot. The key insight: visually impaired users are already familiar with WhatsApp's screen reader integration. Building on that means they don't have to learn a new interface. The prototype shows the onboarding flow — Neo introduces itself, collects the user's basic data, and gets ready to start the job search.",
    neo_landingLabel: "Landing Page",
    neo_landingTitle: "Hi, I'm Neo.",
    neo_landingP: "The landing page serves two audiences: users who need the WhatsApp bot, and companies who want to post jobs and access the candidate database. Hero section, key features, testimonials, and direct access to start the conversation.",
    neo_conclLabel: "Conclusions",
    neo_flow: {
      f1: "Flow 1 — Registration",
      f2: "Flow 2 — Job Search & Application",
      f3: "Flow 3 — Edit Profile",
      welcome: "Welcome", chooseProgram: "Choose program",
      hasProfile1: "Has", hasProfile2: "profile?",
      yes: "Yes", no: "No",
      viewProfile: "View profile", editProfile: "Edit profile",
      createProfile: "Create profile", name: "Name",
      dob: "Date of birth", skills: "Skills",
      experience: "Experience", profileSaved: "Profile saved ✓",
      home: "Home", jobListings: "Job listings",
      filter: "Filter", selectOffer: "Select offer",
      loggedIn1: "Logged", loggedIn2: "in?",
      applyDirectly: "Apply directly ✓",
      fillForm: "Fill form", login: "Login", apply: "Apply ✓",
      myProfile: "My profile", editSection: "Edit section",
      bioData: "Bio / Data", languages: "Languages",
      education: "Education", cvFiles: "CV / Files",
      confirm1: "Confirm?", confirm2: "",
      saved: "Saved ✓", discard: "Discard",
    },
    neo_conclTitle: "What the format taught us.",
    neo_conclP: "CO UX is structured around passing work between groups — each team inherits from the previous one and hands off to the next. Working from the middle of the process rather than the beginning changes how you think about decisions: you can't ignore what came before, and you have to leave things clear enough for whoever comes next.",
    neo_concl1Head: "Working from a handoff is real work", neo_concl1Body: "We prototyped from research and definition we didn't produce ourselves. That forced a different discipline — you can't fill gaps from your own assumptions. You work with what's there, or acknowledge what's missing.",
    neo_concl2Head: "WhatsApp as the interface was the right call", neo_concl2Body: "The decision to use WhatsApp rather than build a new app was the most important design decision of the project. Users didn't need to learn anything new — they use their existing screen reader in a context they already trust.",
    neo_concl3Head: "The test was done by the group after us", neo_concl3Body: "In the CO UX format each group passes the work forward. The usability testing was completed by the next group, not by us. We built the prototype and the landing page. Worth stating clearly.",
    // ── MAPHUNTER ──
    mh_heroLabel: "Web & App · UI Redesign",
    mh_heroDesc: "\"Explora la ciudad a tu ritmo, sin limitaciones, según tus gustos.\" Brand, web and mobile redesign for a city exploration platform.",
    mh_heroTags: ["Brand Identity","Web Redesign","Mobile Redesign","Solo project"],
    mh_briefLabel: "Brief",
    mh_briefTitle: "Given a system. Applied with criteria.",
    mh_briefP1: "Maphunter is a city exploration platform — tours, maps, points of interest, cultural agenda. The product worked. The visual identity didn't match what it had become.",
    mh_briefP2: "The marketing team had already defined a new brand direction — typography, colour palette, visual tone. My job was to take that brandbook and apply it consistently across the web and the mobile app. I didn't choose the colours or the typefaces. I decided how to use them.",
    mh_briefP3: "Beyond the visual redesign, I also explored product directions of my own — a UX improvement for self-guided tours, a gamification system to drive engagement, and two monetisation models connecting the platform to the local economy.",
    mh_brandLabel: "Brand System",
    mh_brandTitle: "What I was given.",
    mh_brandP: "The marketing team defined the brand direction — visual tone, youthful and informal, playful but structured. Two typefaces and a four-colour palette. My starting point, not my decision.",
    mh_typographyLabel: "Typography",
    mh_colourLabel: "Colour palette",
    mh_brandQuote: "The pairing of Trump Gothic Pro with Kepler creates a deliberate contrast — structural weight against editorial warmth. Purple as the dominant colour gives the brand a distinct personality. Yellow provides energy without aggression.",
    mh_webLabel: "Website Redesign",
    mh_webTitle: "Current → New.",
    mh_webP: "The brief was to apply the new brand system to the existing web — same content, same structure, different visual language.",
    mh_webCaption: "The original site relied on text descriptions and a generic layout. The redesign applies the brand palette and typography system — purple as the dominant structural colour, Trump Gothic Pro for headings, photography as a primary element.",
    mh_beforeLabel: "Before",
    mh_afterLabel: "After",
    mh_mobileLabel: "Mobile Redesign",
    mh_mobileTitle: "Four screens. Same system.",
    mh_mobileP: "The same brand system applied across the four core mobile views.",
    mh_beyondLabel: "Beyond the brief",
    mh_beyondTitle: "What I proposed on top.",
    mh_beyondP: "The brief was to apply the brand system to the existing product. These are proposals I developed on my own initiative — a UX improvement, a retention mechanism, and two monetisation models.",
    mh_ownInitiative: "Own initiative",
    mh_conclLabel: "Conclusions & Thoughts",
    mh_decisionsLabel: "Design decisions",
    mh_decisionsTitle: "Three choices that defined the system.",
    mh_decisionsP: "Applying a brandbook isn't passive — every rule has gaps, and every gap requires a decision. These three shaped everything else.",
    mh_decisions: [
      { n:"01", head:"Navigation bar: purple fill across the whole bar", body:"The original app used a white bottom nav with coloured icons. The redesign fills the entire nav bar with purple — making it a structural element rather than a utility strip. This anchors the brand colour at the bottom of every screen and makes the active state (yellow icon) immediately readable against the dark background. The before/after on Tours shows how much weight that single change adds to the layout." },
      { n:"02", head:"Cards: leading with photography, not metadata", body:"The original Tours listing led with two lines of text and small thumbnails. The redesign flips the priority — the card opens with a full-width photo, and the metadata (duration, distance, guide) sits below it. The same logic applies across the Map and Point of Interest screens. When the product is a physical experience, the image is the most honest preview of what you're buying." },
      { n:"03", head:"CTA buttons: yellow on purple, not white on purple", body:"The original site used white buttons on purple backgrounds — low contrast, easy to miss. The redesign uses yellow as the CTA colour throughout, both on the web and in the app. Yellow on purple has better visual contrast and aligns with the brandbook's definition of yellow as the interaction accent. The 'VER RUTA' and 'Descargar aplicación' buttons in the before/after show the difference in visibility." },
    ],
    mh_conclTitle: "Consistency is the redesign.",
    mh_conclP: "The biggest change wasn't any individual screen. It was applying the same visual logic consistently across every surface — web and mobile, photo-heavy and text-heavy, hero and detail.",
    mh_concl1Head: "Brand before screens", mh_concl1Body: "Starting with typography and colour before opening any screen prevented the most common redesign mistake: fixing pixels without fixing the system that generates them.",
    mh_concl2Head: "Current vs new forces honesty", mh_concl2Body: "Placing the original next to the redesign makes every decision visible and justifiable. It's harder to make a change that doesn't actually improve anything when the original is right there.",
    mh_concl3Head: "What's missing", mh_concl3Body: "The visual redesign has no user feedback. The gamification system, the restaurant integration, the extended agenda — these came from thinking about how the product could work as a business. But I never tested them with real users. Everything in 'Beyond the brief' is still a hypothesis.",
    // ── ENCUENTRA ──
    en_heroLabel: "App · UX/UI Design · Coderhouse",
    en_heroDesc: "A community platform connecting Spanish speakers in Germany — housing, jobs, events, and professionals, all in Spanish.",
    en_heroTags: ["UX Research","UI Design","Prototyping","User Testing","Social Platform"],
    en_whatLabel: "What is Encuentra?",
    en_whatTitle: "The WhatsApp group, but built properly.",
    en_whatP1: "Encuentra is an app for Spanish speakers living in Germany. It centralises what was already happening in scattered WhatsApp groups and Facebook communities — housing searches, job leads, Spanish-speaking professionals, cultural events — and gives it proper structure.",
    en_whatP2: "The idea came from a direct observation. The community already existed and was already active — it just had no real tool. Encuentra is what those groups would look like if they were built as an actual product.",
    en_whatP3: "This was my first UX/UI project, completed at Coderhouse. It followed the full double diamond — research, definition, ideation, prototype, and usability testing with real users.",
    en_viewPrototype: "→ View prototype",
    en_researchLabel: "Research",
    en_researchTitle: "Desk research + user interviews.",
    en_researchP: "The process started by observing active Facebook groups for Spanish speakers in Germany — more than 10 daily posts per group, confirming a real active community. Then came the interviews.",
    en_benchmarkLabel: "Benchmark",
    en_profileLabel: "Profile of interviewees",
    en_responsesLabel: "Highlighted responses",
    en_personasLabel: "User personas",
    en_goalsLabel: "Goals",
    en_frustrationsLabel: "Frustrations",
    en_empathyLabel: "Empathy map",
    en_defLabel: "Definition & Ideation",
    en_defTitle: "Structure before screens.",
    en_defP: "Once the research was synthesised, the work moved to defining who the product was for, how they would move through it, and what information needed to live where.",
    en_iaLabel: "Information architecture",
    en_taskFlowsLabel: "Task flows",
    en_task1Label: "Task 1 — Find a flat",
    en_task2Label: "Task 2 — Publish a post",
    en_wireframesLowLabel: "Wireframes — low fidelity",
    en_wireframesMidLabel: "Wireframes — medium fidelity",
    en_protoLabel: "Prototype",
    en_protoTitle: "The screens.",
    en_protoP: "Login, community feed, calendar, and direct messaging. Four screens, one shared system.",
    en_feedTitle: "Community feed",
    en_feedBody: "The main feed surfaces posts from the community — housing, recommendations, job leads. Posts are searchable and persistent, solving the core problem with WhatsApp groups.",
    en_msgTitle: "Messaging",
    en_msgBody: "Confirmed-request messaging between community members. Before a conversation opens, the sender must confirm their intent — this prevents spam, protects users from unsolicited contact, and creates a basic layer of accountability in a community of strangers.",
    en_uiLabel: "UI Kit",
    en_uiTitle: "Typography, colour, components.",
    en_uiP: "Every component built before touching the high-fidelity screens — cards, navigation, inputs, maps, dialogs, and the orbital notification animation.",
    en_colourLabel: "Colour palette",
    en_typographyLabel: "Typography",
    en_navLabel: "Navigation",
    en_cardsLabel: "Cards",
    en_controlsLabel: "Controls & inputs",
    en_contentLabel: "Content & data",
    en_testLabel: "Usability Testing",
    en_testTitle: "What broke.",
    en_testP: "Three users tested the Figma prototype. All were Spanish speakers living in Germany — close to the real user, but not strangers, which made them more forgiving than a real usability study would produce. Worth naming.",
    en_taskCompletion: "Task completion",
    en_findingsLabel: "Findings & fixes",
    en_fixLabel: "Fix",
    en_satisfactionLabel: "Overall satisfaction",
    en_easeLabel: "Ease of use",
    en_recommendLabel: "Would recommend",
    en_conclLabel: "Conclusions",
    en_conclTitle: "The community already existed. The product didn't.",
    en_conclP: "The most important thing research confirmed was that the problem was real. People were already doing this manually through chat groups. The app didn't need to create a behaviour — it needed to give an existing one a better home.",
    en_concl1Head: "Observation as a starting point", en_concl1Body: "The idea came from noticing something real happening around me. Starting from an observed behaviour rather than an assumed problem made the research phase much more grounded.",
    en_concl2Head: "The testing limitations are real", en_concl2Body: "Testing with friends reduces friction in ways that matter. They forgive more, assume better intent, and rarely abandon tasks. A second round with neutral users would give a clearer picture of where the actual breaking points are.",
    en_concl3Head: "Where it goes from here", en_concl3Body: "The professional directory is the most distinctive feature and the one most underexplored. Beyond the product, this project was my first real contact with UX. The prototyping phase is where it clicked for me — working through flows in Figma, iterating on screens, seeing how a decision at component level affects the whole experience.",
    en_ctaLabel: "Figma prototype",
    en_ctaTitle: "Try it yourself.",
    en_ctaP: "The full clickable prototype — login, home feed, listing detail, messaging, and the calendar.",
    en_ctaButton: "Open prototype ↗",
    en_flow1: ["Open app","Login / Register","Home feed","Filter: Rent","Browse listings","Open listing","Contact"],
    en_flow1types: ["start","","","","","decision","end"],
    en_flow2: ["Open app","Login","Tap FAB (+)","Choose category","Fill in details","Add photos","Publish"],
    en_flow2types: ["start","","","","","","end"],
    en_iaTree: [
      { label:"Rent",          children:["Find flat","Post listing","Favourites"] },
      { label:"Jobs",          children:["Listings","Post offer","Favourites"] },
      { label:"Professionals", children:["Search","Profile","Contact"] },
      { label:"Agenda",        children:["Events","Calendar"] },
      { label:"Profile",       children:["My listings","Messages","Settings"] },
    ],
    // ── DATA ARRAYS ──
    ay_explored: [
      { title:"Three ring portals", tag:"Most developed",  why:"Our first serious direction. Three concentric rings — to pass through a portal, you had to eat Mayo. Eating transformed you: snake mode, low gravity, flight, sticky physics. Conceptually rich, technically a nightmare. The engine couldn't support the transformation states reliably enough to ship." },
      { title:"Competitive race",   tag:"Discarded early", why:"Speed-only mechanic. Mayonnaise had nowhere to live — you'd be racing past it, not with it." },
      { title:"Object search",      tag:"Discarded early", why:"Players could complete it alone. The brief required social interaction — a scavenger hunt is fundamentally solitary." },
      { title:"Recipe creation",    tag:"Discarded early", why:"Cooking mechanics are slow. Fortnite players move constantly. Asking them to stand still was asking them to play against every instinct they have on that platform." },
      { title:"Enemy waves",        tag:"First eliminated", why:"Even food-themed enemies you 'eat' rather than shoot count as indirect violence. Clear line, clear answer." },
    ],
    ay_cards: [
      { n:"01", title:"Collect", body:"Jars and balloons across the map. Shoot the balloon — the Mayo bar loads on hit. Immediate feedback loop: action, consequence, resource." },
      { n:"02", title:"Manage",  body:"The yellow bar at the bottom centre is the heartbeat of the game. Depletes as you play. 'MAYO LOW!' in red: find more, or stop scoring." },
      { n:"03", title:"Spend",   body:"Save enough consumables and a special power-up unlocks. Use now for a small effect, or hold for a bigger one. Constant micro-tension." },
      { n:"04", title:"Score",   body:"100 team points wins outright. Lead at the 2-minute mark and the game is yours. Running out of Mayo doesn't kill you — it just stops you earning." },
    ],
    ay_flow: ["Island Discovery","Island Selection","Cinematic","Island Lobby","In-Game","Power-Ups","Victory"],
    ay_screens: [
      { n:"01", title:"Island Discovery",    tag:"Entry",        body:"The Fortnite Discover screen after searching 'Hellmann\'s'. The island appears in Creative search results — players can find and enter it by name, or use the map code directly." , img:"/Image/Irresistible/Menu1.png"},
      { n:"02", title:"Island Selection",    tag:"Pre-game",     body:"The island detail page — players see the cover image, player count and map code before selecting. The cover art has to communicate the concept at a glance." , img:"/Image/Irresistible/Menu2.png"},
      { n:"03", title:"Cinematic",           tag:"Intro",        body:"A short cinematic before the lobby loads. The one moment where the brand can appear without the player needing to do anything — easiest screen to get right and easiest to waste." , img:"/Image/Irresistible/Cinematic2.png"},
      { n:"04", title:"Island Lobby",        tag:"Onboarding",   body:"Players arrive surrounded by informational panels explaining the game. 2-minute timer before the match starts. In testing, 3 of 4 users explored the environment instead of reading. The biggest problem in the whole project." , img:"/Image/Irresistible/Interface4.png"},
      { n:"05", title:"In-Game Interface",   tag:"HUD",          body:"The custom HUD sits on top of Fortnite's existing interface. Team scores, time counter, individual points, and the Mayo bar. When it runs low, 'MAYO LOW!' fires in red — the clearest feedback in the whole system." , img:"/Image/Irresistible/Interface3.png"},
      { n:"06", title:"Power-Ups",           tag:"Consumables",  body:"Consumables found on the map go into inventory. Players can use them immediately for a small effect or save until they hit the threshold for a special power-up. The top-left counter tracks how many are needed." , img:"/Image/Irresistible/Interface8.png"},
      { n:"07", title:"Victory Conditions",  tag:"End of round", body:"At 2 minutes, a warning appears and the timer changes colour. 100 team points wins outright; if nobody hits that, whoever leads at the buzzer wins. Messages specify win and lose conditions." , img:"/Image/Irresistible/Interface5.png"},
    ],
    neo_asIs: [
      { step:"Relies on friends to find out if there are job offers", feeling:"😟", thought:"Job platforms aren't accessible. I need to ask for help." },
      { step:"Tries to search for job offers himself",                 feeling:"😢", thought:"Most sites are impossible to navigate with my screen reader." },
      { step:"Can't find an offer independently",                      feeling:"😟", thought:"I can't do this alone. I need someone to help me search." },
      { step:"A friend finds one — but it's already expired",         feeling:"😢", thought:"What a shame. I couldn't find it before, and now I can't even apply." },
    ],
    neo_toBe: [
      { step:"Finds Neo through a support group",                       feeling:"😟", thought:"It will probably cost me to find an offer. Normal platforms aren't accessible." },
      { step:"Discovers the web is built for screen readers",           feeling:"😍", thought:"This is adapted to my needs — my reader can read everything perfectly." },
      { step:"Browses offers adapted to his disability",                feeling:"😐", thought:"A bit frustrated, not sure he'll find the right offer — but he tries." },
      { step:"Finds matching offers, sends his CV easily",              feeling:"😊", thought:"Surprised that he can send a CV in an accessible, easy way." },
      { step:"Company notifies him they've seen his application",       feeling:"😍", thought:"Uncertain, but relieved. The web notified him automatically." },
      { step:"Company contacts him for an interview",                   feeling:"😍", thought:"Thrilled — contacted for an interview. First time this happened digitally." },
    ],
    mh_mobileScreens: [
      { title:"Tours",             body:"The tours listing screen gets a cleaner card hierarchy — tour type, duration, and rating are all immediately visible. The colour system makes active states and CTAs unambiguous." },
      { title:"Map",               body:"Points of interest are surfaced more cleanly on the map. The filter and navigation controls use the brand colour consistently so the interface reads as intentional rather than assembled." },
      { title:"Point of interest", body:"The point of interest screen combines photography, video, contextual information, and a guide profile in a single scrollable view." },
      { title:"Cultural agenda",   body:"The agenda view applies the same card system as Tours, making the layout consistent and scannable. Events are grouped clearly and the hierarchy guides the eye." },
    ],
    mh_beyondIdeas: [
      { n:"01", title:"Solo tour navigation",       img:"Tourmap.png",      body:"Self-guided tours display multiple points on a general map. The proximity indicator shows your distance to the next point as a persistent element on screen, so you always know where you stand without touching the map." },
      { n:"02", title:"Gamification",               img:"Gamificacion.png", body:"A mission and achievements system to drive engagement between visits. The idea was to connect achievements to real activity: visiting a historic site, completing a video tour, or sharing a recommendation unlocks a reward." },
      { n:"03", title:"Local monetisation",         img:"Restaurante.png",  body:"Restaurants and local businesses could pay to appear on the Maphunter map with a profile and booking option. Local guides would act as the connection point. Tourists are already in the city — the app could capture that moment." },
      { n:"04", title:"Cultural agenda — extended", img:"Agendanew2.png",   body:"The original agenda covered major cultural events. The extended version would also include smaller events — stand-up nights, local markets, neighbourhood festivals — with in-app ticket purchases." },
    ],

    // ── TABLE ROWS ──
    ay_briefRows: [["Client","Hellmann's"],["Platform","Fortnite Creative"],["Mentor","Giulia Pignataro"],["Context","Industry tutorship, parallel to real project"],["Players","Up to 40 simultaneous"],["Map code","2532-8226-5643"]],
    ay_users: [
      { name:"Elio",   issues:["Didn't notice explanation cards","Buggy jar collection","Missed main objective UI","Didn't understand 'boring' message"] },
      { name:"Sophie", issues:["Missed explanation cards","Didn't notice objective","Round felt too long","Consumables unclear"] },
      { name:"Sergi",  issues:["Lobby instructions not clear","Didn't understand objective","Too many messages","Map leads to bottom — hard to recover"] },
      { name:"Emre",   issues:["Slogan misread as instruction","Mayo bar badly placed","Boomerang use initially unclear","Map bottom issue"] },
    ],
    ay_patterns: [
      { area:"Lobby onboarding",       sev:"Critical", finding:"3 of 4 users didn't notice the explanation cards in the Island Lobby.",        fix:"Panels redesigned to be impossible to walk past — scaled and repositioned to dominate the environment." },
      { area:"Game objective clarity", sev:"Critical", finding:"2 of 4 users couldn't state the game's objective after reading the lobby.",    fix:"Main objective UI repositioned and made visually dominant. Clearer hierarchy." },
      { area:"'No Mayo no Munch'",     sev:"Issue",    finding:"Users read the message as a Hellmann's slogan, not a game instruction.",       fix:"'Boring' empty state removed. Clearer icon language added." },
      { area:"Mayo jar collection",    sev:"Bug",      finding:"One user couldn't collect from jars — shots had no effect.",                  fix:"Bug fixed. Hit confirmation feedback made immediate." },
      { area:"Consumables system",     sev:"Issue",    finding:"2 of 4 users didn't understand how power-ups worked or when they'd trigger.", fix:"Pop-up messaging clarified. Counter given a clearer visual anchor." },
      { area:"Round length",           sev:"Minor",    finding:"Sophie found the round too long — Sergi and Emre found it appropriate.",     fix:"No change. Feedback wasn't unanimous and pace felt right in full-gameplay context." },
    ],
    neo_whatRows: [["Initiative","CO UX — by Nicolás Roberto Barrientos"],["Theme","Total visual impairment"],["Our phase","Prototype + landing page"],["Platform","WhatsApp bot + web"]],
    neo_stats: [
      { n:"31%", label:"of respondents have visual impairment, 47.9% female / 52% male" },
      { n:"75%", label:"of visually impaired individuals have some level of visual disability" },
      { n:"64%", label:"occasionally need assistance with tasks; only 8% require total assistance" },
      { n:"39%", label:"of visually impaired individuals are employed" },
    ],
    neo_personas: [
      { name:"Fermín Rosario", age:"30", role:"Unemployed · Córdoba, Argentina", bio:"Lost his sight completely at 8. Lives alone, manages daily life with a cane and Talkback. Needs help once or twice a week. Before the pandemic, he was socially active.", goals:["Total independence","Raise awareness on accessibility","Stable, paid employment"], needs:["Job finder specifying skills and capacities","Accessible payment tools","Channel to connect with others"], tech:["Android + Talkback","Screen reader","Instagram, Facebook, Twitter"] },
      { name:"Constanza Gajardo", age:"25", role:"Psychology student · Santiago de Chile", bio:"Blind from birth. Final year of university, commutes independently. Uses every tool available to be as autonomous as possible. Wants to help others facing discrimination.", goals:["Graduate and practice professionally","Independence and mobility","Equal employment opportunities"], needs:["Accessible tech tools","Employers who see ability over disability","Support to expand social networks"], tech:["JAWS screen reader","Smartphone + screen reader","Gmail, Facebook, Messenger"] },
    ],
    neo_techItems: [
      { name:"TalkBack",   type:"Screen reader",     platform:"Android (pre-installed)", desc:"Provides voice messages so users can interact without looking at the screen. Part of Android Accessibility Suite." },
      { name:"JAWS",       type:"Screen reader",     platform:"Windows",                 desc:"Industry-standard screen reader for desktop. Used by professionals and power users." },
      { name:"Be My Eyes", type:"Visual assistance", platform:"iOS + Android",           desc:"Connects blind users with sighted volunteers via live video call. Free. Helps with colour recognition, reading labels, daily tasks." },
      { name:"BrailleBack",type:"Braille display",   platform:"Android",                 desc:"Bridges smartphone and braille display via Bluetooth. Lets users navigate and input text using braille keys." },
    ],
    neo_benchmarks: [
      { name:"GOV.UK",      verdict:"Reference", pro:"Full keyboard navigation, structured headings, narration support built-in", con:"Purely governmental — no employment-specific features" },
      { name:"Scope UK",    verdict:"Partial",   pro:"Narration toggle, good ARIA labelling",                                    con:"Content-heavy. Designed for awareness, not job matching" },
      { name:"BBC iPlayer", verdict:"Reference", pro:"Screen reader tested, accessible video player, strong contrast",           con:"Entertainment context — not translatable to job search" },
      { name:"InfoJobs",    verdict:"Gap",       pro:"Large job database, widespread use in Spain and LATAM",                    con:"Not built for screen readers. Unlabelled buttons, dynamic content fails assistive tech" },
    ],
    neo_insights: [
      { head:"Screen readers don't work reliably on most job sites",      body:"Unlabelled buttons, dynamic content, and custom components without ARIA attributes make standard platforms nearly unusable." },
      { head:"57.8% rely on technology to communicate with family and friends", body:"WhatsApp is already part of daily life for this group — building on familiar tools reduces the learning barrier." },
      { head:"Only 1.7% perform professional tasks digitally",            body:"The gap between technology availability and actual professional use shows the accessibility barrier is structural, not individual." },
    ],
    neo_mvpTasks: [
      { task:"Task 1 — Profile upload", desc:"User completes their profile via WhatsApp conversation. Name, contact, languages, skills, CV in text, experience, certificates. The bot collects it all conversationally.", steps:["HOME — select language","Fill profile: name, email, CV, skills, experience","Data protection checkbox","Profile saved to database"] },
      { task:"Task 2 — Job search",     desc:"User browses job offers filtered by their profile. Selects an offer, sees the full listing, applies. If not logged in — redirected to register first.",            steps:["HOME → Job Listings","Browse and filter offers","Select an offer and read the full posting","If logged in → apply directly","If not → fill form → login → apply"] },
    ],
    neo_scenes: [
      { n:"01", icon:"📞", text:"Juan receives a call from his friend Miguel, who tells him he has started working at a company — despite having the same visual disability as Juan. Juan asks him how he got the job." },
      { n:"02", icon:"🌐", text:"Miguel tells him he heard about a website called Neo through a support group. The platform offers job opportunities for visually impaired people — and is built to be accessible for them." },
      { n:"03", icon:"🎙️", text:"Miguel explains that Juan can upload his CV to the website using voice commands. All his data gets registered both on the web and in a downloadable database that companies can access directly." },
      { n:"04", icon:"🤖", text:"Once registered, Juan can browse available vacancies with the help of Neo — the virtual assistant — and apply for positions, all through WhatsApp." },
      { n:"05", icon:"✅", text:"A few weeks later, Juan finds a job that fits his needs and where he feels valued." },
    ],
    mh_briefRows: [["Type","Commission — visual redesign"],["Scope","Web + Mobile app"],["Role","UI implementation from brandbook"],["Output","Hi-fi designs for web and app"]],
    en_whatRows: [["Type","First UX/UI project — Coderhouse"],["Platform","Mobile app (iOS)"],["Process","Full double diamond"],["Duration","4 months"],["Testing","Usability testing, 3 users"],["Tools","Figma, Maze, Miro"]],
    en_profileRows: [["Age","Between 24 and 36 years old"],["Residence","Germany"],["Native language","Spanish"],["Characteristics","Not proficient in German, in Germany less than 5 years"]],
    en_benchmarks: [
      { name:"Facebook groups", pro:"Large existing user base, familiar to the community", con:"No structure. Everything in one feed. No filtering." },
      { name:"Internations",    pro:"Events, networking, some structure",                   con:"Not in Spanish. Paid features. Focused on professional networking, not daily life." },
      { name:"Expatica",        pro:"Articles and guides on living in Germany",             con:"Purely editorial. No community interaction. Passive consumption only." },
    ],
    en_responses: [
      "Many faced bureaucratic issues due to language complexity, resulting in mistakes with economic repercussions.",
      "Interviewees actively seek jobs in WhatsApp and Facebook groups because they feel more comfortable with Spanish-speaking colleagues.",
      "A specialised notification system would make using these groups easier, saving time in the search process.",
      "There is an interest in Spanish-speaking events — the language facilitates socialisation and communication.",
    ],
    en_personas: [
      { name:"Laura, 27", role:"Graphic designer, recently arrived in Cologne", goals:["Find a flat with Spanish-speaking flatmates","Connect with other creatives in the local Spanish community","Find events and cultural activities in Spanish"], frustrations:["Facebook groups are noisy and hard to filter","Can't tell legitimate listings from spam","Finding a Spanish-speaking doctor is harder than it should be"] },
      { name:"Juan, 34",  role:"Engineer, 3 years in Munich",                   goals:["Find better job opportunities than the ones in his network","Connect with Spanish-speaking professionals in his sector","Stay up to date with community events"], frustrations:["Professional opportunities scattered across too many platforms","Language barrier slows down every administrative process","No reliable way to find Spanish-speaking legal or financial advice"] },
    ],
    en_empathy: [
      { label:"Thinks & feels",     body:"Comfortable and culturally reflected when communicating with Spanish speakers. Finds it easier to get recommendations through people like them." },
      { label:"What they see",      body:"Excessive messages in Facebook groups, making it tedious to find relevant information. Bureaucratic difficulties everywhere." },
      { label:"What they hear",     body:"Friends and coworkers experiencing housing and bureaucratic issues due to language barriers." },
      { label:"Pain points & needs",body:"Language barriers in bureaucracy and housing. Too much noise in the groups they rely on. They need quick, relevant information in Spanish." },
    ],
    en_tasks: [
      { task:"Register / Login",          u1:true,  u2:true,  u3:true,  note:"All users completed without issues." },
      { task:"Find a flat listing",        u1:true,  u2:true,  u3:true,  note:"Straightforward once navigation was understood." },
      { task:"Contact a flatmate",         u1:true,  u2:false, u3:true,  note:"User 2 couldn't distinguish Chat from VIEW." },
      { task:"Publish a post",             u1:false, u2:true,  u3:false, note:"2 of 3 users didn't find the FAB on first try." },
      { task:"Find an event in the agenda",u1:true,  u2:false, u3:true,  note:"User 2 expected events in the home feed." },
      { task:"Find a professional",        u1:true,  u2:true,  u3:false, note:"User 3 looked for it in the search bar, not the nav." },
    ],
    en_findings: [
      { area:"Post creation (FAB)",    sev:"Critical", finding:"2 of 3 users couldn't locate the button to create a post on first attempt.",               fix:"FAB made larger and labelled. Also added a contextual empty-state prompt on the feed." },
      { area:"Navigation clarity",     sev:"Critical", finding:"The three feed tabs weren't clear enough — users tried to browse all content from the home screen.", fix:"Tab labels revised with icons. Active state made more distinct." },
      { area:"Contact vs. view",       sev:"Issue",    finding:"The difference between the Chat button and the VIEW button on listing cards wasn't obvious.", fix:"Button hierarchy clarified — Chat is primary (orange), VIEW secondary (outlined)." },
      { area:"Agenda discoverability", sev:"Issue",    finding:"One user looked for upcoming events in the main feed rather than in the Agenda tab.",       fix:"Upcoming events widget added to the home screen to bridge the two surfaces." },
      { area:"Notification feedback",  sev:"Minor",    finding:"After completing actions, users weren't sure if anything had happened.",                    fix:"Confirmation toasts and dialog messages added throughout." },
    ],
  },
  es: {
    // Shared
    homeTagline: "Proceso antes que pantallas · Colonia, Alemania",
    back: "← Volver",
    backToPortfolio: "← Volver al portfolio",
    scroll: "Bajar",
    thankYou1: "Gracias por",
    thankYou2: "revisar el trabajo.",
    credit: "Adrián Etopa Herrera · Diseñador UX/UI",
    aboutMe: "Sobre mí",
    close: "Cerrar",
    competencies: "Competencias",
    aboutBio: "Nacido en Canarias, afincado en Colonia. Años de experiencia en roles de liderazgo con clientes — ahí aprendí que el buen diseño resuelve problemas reales para personas reales. Desde que descubrí el UX, me he dedicado a ello por completo.",
    competencyList: [
      { area:"Diseño UX",               items:["Clásico, ágil e híbrido","Definición de objetivos e hitos","Dirección y evaluación de proyectos"] },
      { area:"Capacidad analítica",      items:["Investigación y estudios de usuario","Pruebas de usabilidad","Optimización de procesos"] },
      { area:"Coordinación",            items:["Alineación entre departamentos","Planificación de recursos","Priorización y resolución de problemas"] },
      { area:"Liderazgo",               items:["Gestión de equipos y turnos","Identificar y desarrollar potencial","Motivación del equipo"] },
      { area:"Orientación al cliente",  items:["Identificar necesidades","Consultoría, ventas y gestión de incidencias","Orientado a soluciones"] },
    ],
    traits: ["Orientado a resultados","Curioso","Resiliente","Aprendizaje rápido","Trabajo en equipo"],
    projects: [
      { tag:"Game · UX/UI Design",       desc:"Diseño de una isla de Hellmann's dentro de Fortnite Creative" },
      { tag:"App · UX/UI Design",        desc:"Plataforma comunitaria para hispanohablantes en Alemania" },
      { tag:"Web & App · UX/UI",         desc:"Rediseño de marca, web y móvil de una plataforma de exploración urbana" },
      { tag:"Accesibilidad · UX Design", desc:"Bot de WhatsApp para facilitar la búsqueda de empleo a personas con discapacidad visual" },
    ],
    // ── IRRESISTIBLE ──
    ay_heroLabel: "Diseño de juego · Experiencia de marca · 2024",
    ay_heroDesc: "Isla de Hellmann's en Fortnite. El brief: sin violencia, y la mayonesa tiene que ser la mecánica — no el branding.",
    ay_heroTags: ["UX Design","UI Design","Diseño de juego","Testing con usuarios","Experiencia de marca"],
    ay_briefLabel: "El Brief",
    ay_briefTitle: "Un brief con dos restricciones que tiraban en sentidos opuestos.",
    ay_briefP1: "Durante una tutoría con la diseñadora de juegos Giulia Pignataro — que corría en paralelo a un proyecto real con cliente — nos encargaron construir una isla de Fortnite Creative para Hellmann's, basada en el slogan \"All You Can Eat\". El mapa tenía que estar publicado y ser jugable, no un concepto.",
    ay_briefP2: "Dos requisitos hacían el brief más difícil de lo que parece: sin violencia directa ni indirecta — en una plataforma donde la respuesta por defecto es \"dispárale\" — y las mecánicas tenían que construirse alrededor de la mayonesa, no solo llevar su marca.",
    ay_briefP3: "Esas dos restricciones empujaron el diseño hacia algo más específico: si la mayo no podía ser decoración, tenía que ser funcional. Eso resultó ser la parte más interesante del proyecto.",
    ay_briefQuote: "Trabajar con Giulia significó estar dentro de un proceso real — ver cómo se toman decisiones cuando hay un cliente y un plazo de verdad.",
    ay_ideationLabel: "Ideación",
    ay_moodboardLabel: "Islas de referencia — mapas Creative de Fortnite existentes",
    ay_ideationTitle: "Del brief al concepto.",
    ay_ideationP1: "Empezamos estudiando lo que ya existía — qué islas de Fortnite funcionaban, cuáles no, y por qué. Eso nos dio una imagen realista de lo que el motor podía soportar antes de proponer nada.",
    ay_ideasLabel: "Ideas exploradas",
    ay_ideasP: "La restricción de no-violencia descartó la mayoría de las direcciones obvias antes de empezar a esbozar. En una plataforma donde el combate es la respuesta por defecto, trabajar sin él obligó a pensar de una forma completamente diferente.",
    ay_conceptTitle: "Lo que elegimos",
    ay_conceptLabel: "El concepto",
    ay_conceptBody: "Hellmann's lanza un reto: el festín definitivo. Equipos y solos compiten en una isla de Battle Royale. La marca no aparece como logo en una pared — aparece como el recurso sin el que no puedes jugar.",
    ay_whyLabel: "Por qué funcionó",
    ay_whyBody: "Hasta 40 jugadores. Circuito de obstáculos y supervivencia. La mayo como munición, indicador de recursos y multiplicador de puntos. Quedarte sin ella no te mata — te impide puntuar. Esa es la versión no violenta de la presión.",
    ay_mechLabel: "Cómo funciona la mecánica",
    ay_mechTitle: "La mayo como recurso, no como logo.",
    ay_mechP: "El brief decía que las mecánicas tenían que estar vinculadas a la mayonesa. La solución fue convertirla en el recurso central del juego: la recoges, la gestionas y la gastas. Sin ella, dejas de puntuar.",
    ay_journeyLabel: "Recorrido del jugador",
    ay_journeyTitle: "Cómo se desarrolla la partida.",
    ay_journeyP: "Desde la primera pantalla del lobby hasta el final de una ronda. Fortnite Creative tiene un motor y convenciones de UI fijos — cada pantalla es un equilibrio entre lo que quieres mostrar y lo que la plataforma te deja hacer.",
    ay_testLabel: "Testing con usuarios",
    ay_testTitle: "El bucle de juego funcionó. El onboarding, no.",
    ay_testP: "Las pruebas se hicieron en Fortnite Creative antes de publicar el mapa. Cuatro usuarios jugaron en 22 tareas. Todos completaron las sesiones, entendieron el bucle principal y ninguno se quedó atascado. Los problemas se concentraron en la arquitectura de información.",
    ay_fixLabel: "Solución",
    ay_conclLabel: "Conclusiones",
    ay_conclTitle: "Lo que aprendimos.",
    ay_conclP: "La restricción de no-violencia resultó útil — empujó el diseño hacia algo más específico. Trabajar con Giulia significó estar dentro de un proceso real de toma de decisiones.",
    ay_concl1Head: "Contexto", ay_concl1Body: "Esto no fue un ejercicio de clase — fue una tutoría que corría en paralelo a un proyecto real con cliente. El brief venía de un cliente real, las pruebas se hicieron con jugadores reales en Fortnite Creative antes de publicar, y el mapa se publicó.",
    ay_concl2Head: "Lo que no funcionó", ay_concl2Body: "Las pruebas mostraron que el onboarding no aterrizó como esperábamos. En el lobby, los jugadores estaban pendientes de cuándo empezaría el juego — no de leer paneles. La mayoría exploró el entorno en vez de interactuar con los carteles.",
    ay_concl3Head: "Lo que cambiaríamos", ay_concl3Body: "Si el proyecto continuara, el onboarding es donde nos centraríamos primero. En vez de paneles estáticos separados, las reglas podrían integrarse en los primeros segundos de juego — para que los jugadores aprendan haciendo.",
    // ── NEO ──
    neo_heroLabel: "Accesibilidad · UX Design · CO UX",
    neo_heroDesc: "La plataforma de empleo para personas ciegas y con discapacidad visual. App + landing page, desarrollada como parte del CO UX.",
    neo_heroTags: ["Accesibilidad","Prototipado","Landing Page","Proceso colaborativo"],
    neo_whatLabel: "¿Qué es Neo?",
    neo_whatTitle: "Búsqueda de empleo por WhatsApp. Accesible por diseño.",
    neo_whatP1: "Neo es una plataforma de búsqueda de empleo diseñada específicamente para personas ciegas y con discapacidad visual. Usa WhatsApp como interfaz — porque es lo que este grupo ya utiliza, y ya funciona con sus lectores de pantalla. Sin app nueva que aprender.",
    neo_whatP2: "Las empresas publican empleo en la web. Los usuarios se registran y buscan por WhatsApp. La plataforma genera una base de datos que las empresas pueden consultar para encontrar y contactar candidatos directamente. Todo el flujo es compatible con lectores de pantalla por diseño, no como añadido posterior.",
    neo_briefCardLabel: "CO-UX G4 — Brief heredado",
    neo_swot: [
      { icon:"💪", label:"Fortaleza",   text:"Promueve la inclusión — impacta la calidad de vida y la independencia económica" },
      { icon:"🎯", label:"Oportunidad", text:"Usuarios y empresas sin plataforma accesible compartida hoy" },
      { icon:"⚠️", label:"Riesgo",      text:"Construir algo suficientemente accesible para que realmente importe" },
      { icon:"🔧", label:"Tecnología",  text:"App web responsive, 100% navegable por teclado y lector de pantalla" },
    ],
    neo_researchLabel: "Research — heredado",
    neo_researchTitle: "Trabajamos desde el research. No lo hicimos nosotros.",
    neo_researchP: "El research lo completó el grupo anterior y nos lo entregaron como parte del formato CO UX. Nuestro trabajo era entenderlo lo suficientemente bien para tomar buenas decisiones de prototipo — y ser honestos sobre dónde trabajábamos con información incompleta.",
    neo_dataLabel: "Datos cuantitativos — PDF \"Brecha Digital y Discapacidad\"",
    neo_personasLabel: "Personas de usuario",
    neo_goalsLabel: "Objetivos",
    neo_needsLabel: "Necesidades",
    neo_techLabel: "Tecnología",
    neo_techResearchLabel: "Investigación de tecnología asistiva",
    neo_benchmarkLabel: "Benchmark — plataformas accesibles",
    neo_insightsLabel: "Conclusiones clave",
    neo_defLabel: "Definición",
    neo_defTitle: "Antes de las pantallas: la estructura.",
    neo_defP: "El research heredado nos dio una imagen clara de para quién diseñábamos. Antes de tocar el prototipo, mapeamos dónde estaban esos usuarios (AS IS) y adónde debía llevarlos Neo (TO BE).",
    neo_iaLabel: "Arquitectura de información",
    neo_userFlowLabel: "Flujo de usuario",
    neo_mvpLabel: "MVP — dos tareas principales",
    neo_journeyLabel: "User Journey — Fermín, 30, discapacidad visual · Objetivo: encontrar empleo",
    neo_journeySubtitle: "Dos realidades — antes de Neo y después.",
    neo_asIsLabel: "AS IS — Realidad actual",
    neo_toBeLabel: "TO BE — Con Neo",
    neo_storyLabel: "Ideación — Storytelling",
    neo_storyTitle: "La historia de Juan.",
    neo_storyP: "Usamos un ejercicio de storytelling para validar el concepto y mapear el recorrido del usuario antes de construir nada. Juan — con discapacidad visual, buscando trabajo — descubre Neo a través de un grupo de apoyo y lo usa para navegar el mercado laboral a través de WhatsApp.",
    neo_storyBadge: "CO-UX G4 · Narrativa heredada, adaptada para orientar el prototipo",
    neo_botPersonaLabel: "Personalidad del bot — Neo",
    neo_protoLabel: "Prototipo — Bot de WhatsApp",
    neo_protoTitle: "La interfaz es una conversación de WhatsApp.",
    neo_protoP: "Neo no es una app independiente — es un bot de WhatsApp. La clave: los usuarios con discapacidad visual ya están familiarizados con la integración del lector de pantalla en WhatsApp. Construir sobre esa base significa que no tienen que aprender ninguna interfaz nueva.",
    neo_landingLabel: "Landing Page",
    neo_landingTitle: "Hola, soy Neo.",
    neo_landingP: "La landing page sirve a dos audiencias: usuarios que necesitan el bot de WhatsApp, y empresas que quieren publicar empleos y acceder a la base de candidatos.",
    neo_conclLabel: "Conclusiones",
    neo_flow: {
      f1: "Flujo 1 — Registro",
      f2: "Flujo 2 — Búsqueda y solicitud de empleo",
      f3: "Flujo 3 — Editar perfil",
      welcome: "Bienvenida", chooseProgram: "Elegir programa",
      hasProfile1: "¿Tiene", hasProfile2: "perfil?",
      yes: "Sí", no: "No",
      viewProfile: "Ver perfil", editProfile: "Editar perfil",
      createProfile: "Crear perfil", name: "Nombre",
      dob: "Fecha de nacimiento", skills: "Habilidades",
      experience: "Experiencia", profileSaved: "Perfil guardado ✓",
      home: "Inicio", jobListings: "Ofertas de empleo",
      filter: "Filtrar", selectOffer: "Seleccionar oferta",
      loggedIn1: "¿Sesión", loggedIn2: "iniciada?",
      applyDirectly: "Solicitar directamente ✓",
      fillForm: "Rellenar formulario", login: "Iniciar sesión", apply: "Solicitar ✓",
      myProfile: "Mi perfil", editSection: "Editar sección",
      bioData: "Bio / Datos", languages: "Idiomas",
      education: "Formación", cvFiles: "CV / Archivos",
      confirm1: "¿Confirmar?", confirm2: "",
      saved: "Guardado ✓", discard: "Descartar",
    },
    neo_conclTitle: "Lo que aprendimos del formato.",
    neo_conclP: "CO UX está estructurado para pasar el trabajo entre grupos — cada equipo hereda del anterior y traspasa al siguiente. Trabajar desde la mitad del proceso en lugar del inicio cambia cómo piensas en las decisiones: no puedes ignorar lo que vino antes, y tienes que dejar las cosas claras para el grupo que llega después.",
    neo_concl1Head: "Trabajar desde un traspaso es trabajo real", neo_concl1Body: "Prototipamos desde un research y una definición que no habíamos producido nosotros. Eso exigió una disciplina diferente — no puedes rellenar huecos desde tus propias suposiciones. Trabajas con lo que hay, o reconoces lo que falta.",
    neo_concl2Head: "WhatsApp como interfaz fue la decisión correcta", neo_concl2Body: "La decisión de usar WhatsApp en lugar de construir una app nueva fue la más importante del proyecto. Los usuarios no necesitaban aprender nada nuevo — usan su lector de pantalla en un contexto en el que ya confían.",
    neo_concl3Head: "El testing lo hizo el grupo después de nosotros", neo_concl3Body: "En el formato CO UX cada grupo pasa el trabajo al siguiente. Las pruebas de usabilidad las completó el grupo posterior, no nosotros. Nosotros construimos el prototipo y la landing page. Merece la pena aclararlo.",
    // ── MAPHUNTER ──
    mh_heroLabel: "Web & App · Rediseño UI",
    mh_heroDesc: "\"Explora la ciudad a tu ritmo, sin limitaciones, según tus gustos.\" Rediseño de marca, web y móvil de una plataforma de exploración urbana.",
    mh_heroTags: ["Identidad de marca","Rediseño web","Rediseño móvil","Proyecto individual"],
    mh_briefLabel: "Brief",
    mh_briefTitle: "Un sistema dado. Aplicado con criterio.",
    mh_briefP1: "Maphunter es una plataforma de exploración urbana — tours, mapas, puntos de interés, agenda cultural. El producto funcionaba. La identidad visual no se correspondía con lo que había llegado a ser.",
    mh_briefP2: "El equipo de marketing ya había definido una nueva dirección de marca — tipografía, paleta de colores, tono visual. Mi trabajo era coger ese brandbook y aplicarlo de forma consistente. No elegí los colores ni las tipografías. Decidí cómo usarlos.",
    mh_briefP3: "Más allá del rediseño visual, también exploré propuestas propias — una mejora UX para los tours autoguiados, un sistema de gamificación y dos modelos de monetización que conectan la plataforma con la economía local.",
    mh_brandLabel: "Sistema de marca",
    mh_brandTitle: "Lo que me dieron.",
    mh_brandP: "El equipo de marketing definió la dirección de marca — tono visual, juvenil e informal, lúdico pero estructurado. Dos tipografías y una paleta de cuatro colores. Mi punto de partida, no mi decisión.",
    mh_typographyLabel: "Tipografía",
    mh_colourLabel: "Paleta de colores",
    mh_brandQuote: "La combinación de Trump Gothic Pro y Kepler crea un contraste deliberado — peso estructural frente a calidez editorial. El morado como color dominante da a la marca una personalidad distintiva. El amarillo aporta energía sin agresividad.",
    mh_webLabel: "Rediseño web",
    mh_webTitle: "Antes → Después.",
    mh_webP: "El brief era aplicar el nuevo sistema de marca a la web existente — mismo contenido, misma estructura, diferente lenguaje visual.",
    mh_webCaption: "La web original se apoyaba en descripciones de texto y una maquetación genérica. El rediseño aplica la paleta y el sistema tipográfico — el morado como color estructural dominante, Trump Gothic Pro para los títulos y la fotografía como elemento principal.",
    mh_beforeLabel: "Antes",
    mh_afterLabel: "Después",
    mh_mobileLabel: "Rediseño móvil",
    mh_mobileTitle: "Cuatro pantallas. El mismo sistema.",
    mh_mobileP: "El mismo sistema de marca aplicado a las cuatro vistas principales de la app móvil.",
    mh_beyondLabel: "Más allá del brief",
    mh_beyondTitle: "Lo que propuse de más.",
    mh_beyondP: "El brief era aplicar el sistema de marca al producto existente. Estas son propuestas que desarrollé por iniciativa propia — una mejora UX, un mecanismo de retención y dos modelos de monetización.",
    mh_ownInitiative: "Iniciativa propia",
    mh_conclLabel: "Conclusiones y reflexiones",
    mh_decisionsLabel: "Decisiones de diseño",
    mh_decisionsTitle: "Tres decisiones que definieron el sistema.",
    mh_decisionsP: "Aplicar un brandbook no es pasivo — cada regla tiene huecos, y cada hueco requiere una decisión. Estas tres definieron todo lo demás.",
    mh_decisions: [
      { n:"01", head:"Barra de navegación: relleno morado en toda la barra", body:"La app original usaba un nav inferior blanco con iconos de colores. El rediseño rellena toda la barra con morado — convirtiéndola en un elemento estructural en vez de una tira utilitaria. Esto ancla el color de marca en la parte inferior de cada pantalla y hace que el estado activo (icono amarillo) sea inmediatamente legible sobre el fondo oscuro. El antes/después de Tours muestra cuánto peso añade ese único cambio a la maquetación." },
      { n:"02", head:"Tarjetas: fotografía primero, metadatos después", body:"El listado original de Tours abría con dos líneas de texto y miniaturas pequeñas. El rediseño invierte la prioridad — la tarjeta abre con una foto a ancho completo y los metadatos (duración, distancia, guía) quedan debajo. La misma lógica se aplica en el Mapa y la pantalla de Punto de interés. Cuando el producto es una experiencia física, la imagen es la vista previa más honesta de lo que se compra." },
      { n:"03", head:"Botones CTA: amarillo sobre morado, no blanco sobre morado", body:"La web original usaba botones blancos sobre fondos morados — bajo contraste, fáciles de ignorar. El rediseño usa el amarillo como color de CTA en toda la web y la app. El amarillo sobre morado tiene mejor contraste visual y se alinea con la definición del brandbook del amarillo como acento de interacción. Los botones 'VER RUTA' y 'Descargar aplicación' en el antes/después muestran la diferencia en visibilidad." },
    ],
    mh_conclTitle: "La consistencia es el rediseño.",
    mh_conclP: "El cambio más importante no fue ninguna pantalla individual. Fue aplicar la misma lógica visual de forma consistente en todas las superficies — web y móvil, con mucha fotografía y con mucho texto.",
    mh_concl1Head: "La marca antes que las pantallas", mh_concl1Body: "Empezar por la tipografía y el color antes de abrir ninguna pantalla evitó el error más común en los rediseños: arreglar píxeles sin arreglar el sistema que los genera.",
    mh_concl2Head: "El actual vs el nuevo obliga a la honestidad", mh_concl2Body: "Poner el original junto al rediseño hace que cada decisión sea visible y justificable. Es más difícil hacer un cambio que no mejora nada cuando el original está al lado.",
    mh_concl3Head: "Lo que falta", mh_concl3Body: "El rediseño visual no tiene feedback de usuarios. El sistema de gamificación, la integración de restaurantes, la agenda ampliada — surgieron de pensar en cómo podría funcionar el producto como negocio. Pero nunca los probé con usuarios reales. Todo en 'Más allá del brief' sigue siendo una hipótesis.",
    // ── ENCUENTRA ──
    en_heroLabel: "App · UX/UI Design · Coderhouse",
    en_heroDesc: "Una plataforma comunitaria que conecta hispanohablantes en Alemania — vivienda, empleo, eventos y profesionales, todo en español.",
    en_heroTags: ["Investigación UX","Diseño UI","Prototipado","Testing con usuarios","Plataforma social"],
    en_whatLabel: "¿Qué es Encuentra?",
    en_whatTitle: "El grupo de WhatsApp, pero bien hecho.",
    en_whatP1: "Encuentra es una app para hispanohablantes que viven en Alemania. Centraliza lo que ya ocurría en grupos de WhatsApp y comunidades de Facebook dispersas — búsquedas de piso, ofertas de empleo, profesionales hispanohablantes, eventos culturales — y le da una estructura adecuada.",
    en_whatP2: "La idea surgió de una observación directa. La comunidad ya existía y ya era activa — simplemente no tenía una herramienta real. Encuentra es cómo quedarían esos grupos si estuvieran construidos como un producto de verdad.",
    en_whatP3: "Este fue mi primer proyecto de UX/UI, completado en Coderhouse. Siguió el doble diamante completo — research, definición, ideación, prototipo y pruebas de usabilidad con usuarios reales.",
    en_viewPrototype: "→ Ver prototipo",
    en_researchLabel: "Research",
    en_researchTitle: "Desk research + entrevistas con usuarios.",
    en_researchP: "El proceso empezó observando grupos activos de Facebook para hispanohablantes en Alemania — más de 10 publicaciones diarias por grupo, lo que confirmó una comunidad real y activa. Luego vinieron las entrevistas.",
    en_benchmarkLabel: "Benchmark",
    en_profileLabel: "Perfil de los entrevistados",
    en_responsesLabel: "Respuestas destacadas",
    en_personasLabel: "Personas de usuario",
    en_goalsLabel: "Objetivos",
    en_frustrationsLabel: "Frustraciones",
    en_empathyLabel: "Mapa de empatía",
    en_defLabel: "Definición e ideación",
    en_defTitle: "La estructura antes que las pantallas.",
    en_defP: "Una vez sintetizado el research, el trabajo pasó a definir para quién era el producto, cómo se moverían por él y qué información debía estar dónde.",
    en_iaLabel: "Arquitectura de información",
    en_taskFlowsLabel: "Flujos de tareas",
    en_task1Label: "Tarea 1 — Encontrar un piso",
    en_task2Label: "Tarea 2 — Publicar un anuncio",
    en_wireframesLowLabel: "Wireframes — baja fidelidad",
    en_wireframesMidLabel: "Wireframes — fidelidad media",
    en_protoLabel: "Prototipo",
    en_protoTitle: "Las pantallas.",
    en_protoP: "Login, feed de la comunidad, calendario y mensajería directa. Cuatro pantallas, un sistema compartido.",
    en_feedTitle: "Feed de la comunidad",
    en_feedBody: "El feed principal muestra publicaciones de la comunidad — vivienda, recomendaciones, ofertas de trabajo. Las publicaciones son buscables y persistentes, resolviendo el problema central de los grupos de WhatsApp.",
    en_msgTitle: "Mensajería",
    en_msgBody: "Mensajería por confirmación entre los miembros de la comunidad. Antes de abrir una conversación, el remitente debe confirmar su intención — esto evita el spam, protege a los usuarios de contactos no deseados y genera una capa básica de responsabilidad en una comunidad de desconocidos.",
    en_uiLabel: "UI Kit",
    en_uiTitle: "Tipografía, color, componentes.",
    en_uiP: "Cada componente construido antes de tocar las pantallas de alta fidelidad — tarjetas, navegación, inputs, mapas, diálogos y la animación de notificación orbital.",
    en_colourLabel: "Paleta de colores",
    en_typographyLabel: "Tipografía",
    en_navLabel: "Navegación",
    en_cardsLabel: "Tarjetas",
    en_controlsLabel: "Controles e inputs",
    en_contentLabel: "Contenido y datos",
    en_testLabel: "Testing de usabilidad",
    en_testTitle: "Lo que falló.",
    en_testP: "Tres usuarios probaron el prototipo de Figma. Todos eran hispanohablantes que vivían en Alemania — cercanos al usuario real, pero no desconocidos, lo que les hacía más indulgentes que en un estudio real. Vale la pena nombrarlo.",
    en_taskCompletion: "Completado de tareas",
    en_findingsLabel: "Hallazgos y soluciones",
    en_fixLabel: "Solución",
    en_satisfactionLabel: "Satisfacción general",
    en_easeLabel: "Facilidad de uso",
    en_recommendLabel: "Lo recomendaría",
    en_conclLabel: "Conclusiones",
    en_conclTitle: "La comunidad ya existía. El producto, no.",
    en_conclP: "Lo más importante que confirmó el research fue que el problema era real. La gente ya hacía esto manualmente a través de grupos de chat. La app no necesitaba crear un comportamiento — necesitaba darle una mejor herramienta a uno que ya existía.",
    en_concl1Head: "La observación como punto de partida", en_concl1Body: "La idea surgió de notar algo real que ocurría a mi alrededor. Partir de un comportamiento observado en lugar de un problema asumido hizo que la fase de research fuera mucho más sólida.",
    en_concl2Head: "Las limitaciones del testing son reales", en_concl2Body: "Probar con conocidos reduce la fricción de formas que importan. Perdonan más, asumen mejor intención y rara vez abandonan las tareas. Una segunda ronda con usuarios neutros daría una imagen más clara.",
    en_concl3Head: "Hacia dónde va", en_concl3Body: "El directorio de profesionales es la función más distintiva y la menos explorada. Más allá del producto, este proyecto fue mi primer contacto real con el UX. La fase de prototipado fue donde algo encajó — trabajar los flujos en Figma, iterar sobre pantallas, ver cómo una decisión a nivel de componente afecta a toda la experiencia.",
    en_ctaLabel: "Prototipo Figma",
    en_ctaTitle: "Pruébalo tú mismo.",
    en_ctaP: "El prototipo completo y clicable — login, feed principal, detalle de anuncio, mensajería y el calendario.",
    en_ctaButton: "Abrir prototipo ↗",
    en_flow1: ["Abrir app","Login / Registro","Feed principal","Filtro: Alquiler","Ver anuncios","Abrir anuncio","Contactar"],
    en_flow1types: ["start","","","","","decision","end"],
    en_flow2: ["Abrir app","Login","Pulsar FAB (+)","Elegir categoría","Rellenar detalles","Añadir fotos","Publicar"],
    en_flow2types: ["start","","","","","","end"],
    en_iaTree: [
      { label:"Alquiler",      children:["Buscar piso","Publicar","Favoritos"] },
      { label:"Trabajo",       children:["Ofertas","Publicar oferta","Favoritos"] },
      { label:"Profesionales", children:["Buscar","Perfil","Contactar"] },
      { label:"Agenda",        children:["Eventos","Calendario"] },
      { label:"Perfil",        children:["Mis anuncios","Mensajes","Ajustes"] },
    ],
    // ── DATA ARRAYS ──
    ay_explored: [
      { title:"Tres portales en anillos", tag:"La más desarrollada",  why:"Primera dirección seria. Tres anillos concéntricos — para atravesar un portal había que comer Mayo. Comer te transformaba: modo serpiente, gravedad baja, vuelo, física pegajosa. Conceptualmente rico, técnicamente imposible. El motor no soportaba los estados de transformación con suficiente fiabilidad." },
      { title:"Carrera competitiva",      tag:"Descartada temprano",  why:"Mecánica solo de velocidad. La mayonesa no tenía hueco — ibas a pasarla de largo, no a jugar con ella." },
      { title:"Búsqueda de objetos",      tag:"Descartada temprano",  why:"Los jugadores podían completarla solos. El brief requería interacción social — una búsqueda del tesoro es fundamentalmente solitaria." },
      { title:"Creación de recetas",      tag:"Descartada temprano",  why:"Las mecánicas de cocina son lentas. Los jugadores de Fortnite se mueven constantemente. Pedirles que se queden quietos era pedirles que jugaran contra todos sus instintos." },
      { title:"Oleadas de enemigos",      tag:"Primera eliminada",    why:"Incluso los enemigos temáticos que 'comes' en vez de disparar cuentan como violencia indirecta. Línea clara, respuesta clara." },
    ],
    ay_cards: [
      { n:"01", title:"Recoger",   body:"Tarros y globos por el mapa. Disparas al globo — la barra de Mayo se carga al impactar. Bucle de feedback inmediato: acción, consecuencia, recurso." },
      { n:"02", title:"Gestionar", body:"La barra amarilla en la parte inferior central es el corazón del juego. Se vacía mientras juegas. 'MAYO BAJA' en rojo: encuentra más, o deja de puntuar." },
      { n:"03", title:"Gastar",    body:"Acumula suficientes consumibles y se desbloquea un power-up especial. Úsalo ahora para un efecto pequeño, o guárdalo para uno mayor. Micro-tensión constante." },
      { n:"04", title:"Puntuar",   body:"100 puntos de equipo gana directamente. Lidera al llegar al minuto 2 y el juego es tuyo. Quedarte sin mayo no te mata — solo te impide puntuar." },
    ],
    ay_flow: ["Descubrimiento","Selección de isla","Cinemática","Lobby de la isla","En partida","Power-ups","Victoria"],
    ay_screens: [
      { n:"01", title:"Descubrimiento de la isla", tag:"Entrada",          body:"La pantalla de Discover de Fortnite tras buscar 'Hellmann\'s'. La isla aparece en los resultados de Creative — los jugadores pueden acceder por nombre o usando el código del mapa directamente." , img:"/Image/Irresistible/Menu1.png"},
      { n:"02", title:"Selección de isla",         tag:"Pre-partida",      body:"Los jugadores eligen la variante de isla. Si esta pantalla no es clara, la saltan y entran en algo que no eligieron. Tenía que ser legible en pocos segundos." , img:"/Image/Irresistible/Menu2.png"},
      { n:"03", title:"Cinemática",                tag:"Intro",            body:"Una breve cinemática antes de cargar el lobby. El único momento en que la marca puede aparecer sin que el jugador tenga que hacer nada — la pantalla más fácil de hacer bien y de desperdiciar." , img:"/Image/Irresistible/Cinematic2.png"},
      { n:"04", title:"Lobby de la isla",          tag:"Onboarding",       body:"Los jugadores llegan rodeados de paneles con las instrucciones del juego. Temporizador de 2 minutos antes de que empiece la partida. En las pruebas, 3 de 4 usuarios exploraron el entorno en vez de leer. El problema más grande del proyecto." , img:"/Image/Irresistible/Interface4.png"},
      { n:"05", title:"Interfaz en partida",        tag:"HUD",              body:"El HUD personalizado se superpone a la interfaz existente de Fortnite. Puntuaciones de equipo, contador de tiempo, puntos individuales y la barra de Mayo. Cuando baja, 'MAYO BAJA' aparece en rojo — el feedback más claro de todo el sistema." , img:"/Image/Irresistible/Interface3.png"},
      { n:"06", title:"Power-ups",                 tag:"Consumibles",      body:"Los consumibles del mapa van al inventario. Los jugadores pueden usarlos de inmediato para un efecto pequeño o guardarlos hasta alcanzar el umbral del power-up especial. El contador arriba-izquierda lleva la cuenta." , img:"/Image/Irresistible/Interface8.png"},
      { n:"07", title:"Condiciones de victoria",   tag:"Fin de ronda",     img:"/Image/Irresistible/Interface5.png", body:"A los 2 minutos aparece un aviso y el temporizador cambia de color. 100 puntos de equipo gana directamente; si nadie llega, gana quien lleve la delantera al pitido final." },
    ],
    neo_asIs: [
      { step:"Depende de amigos para saber si hay ofertas de empleo", feeling:"😟", thought:"Las plataformas de empleo no son accesibles. Necesito pedir ayuda." },
      { step:"Intenta buscar ofertas él mismo",                        feeling:"😢", thought:"La mayoría de webs son imposibles de navegar con mi lector de pantalla." },
      { step:"No puede encontrar una oferta de forma independiente",  feeling:"😟", thought:"No puedo hacerlo solo. Necesito que alguien me ayude a buscar." },
      { step:"Un amigo encuentra una — pero ya ha caducado",         feeling:"😢", thought:"Qué pena. No pude encontrarla antes y ahora ya no puedo solicitar." },
    ],
    neo_toBe: [
      { step:"Descubre Neo a través de un grupo de apoyo",             feeling:"😟", thought:"Seguramente me costará encontrar una oferta. Las plataformas normales no son accesibles." },
      { step:"Descubre que la web está construida para lectores de pantalla", feeling:"😍", thought:"Está adaptado a mis necesidades — mi lector lee todo perfectamente." },
      { step:"Explora ofertas adaptadas a su discapacidad",           feeling:"😐", thought:"Algo frustrado, no está seguro de encontrar la oferta adecuada — pero lo intenta." },
      { step:"Encuentra ofertas compatibles, envía su CV fácilmente", feeling:"😊", thought:"Sorprendido de poder enviar un CV de forma accesible y sencilla." },
      { step:"La empresa le notifica que han visto su solicitud",     feeling:"😍", thought:"Inseguro, pero aliviado. La web le ha notificado automáticamente." },
      { step:"La empresa le contacta para una entrevista",            feeling:"😍", thought:"Emocionado — le han contactado para una entrevista. Primera vez que ocurre de forma digital." },
    ],
    mh_mobileScreens: [
      { title:"Tours",              body:"La pantalla de listado de tours consigue una jerarquía de tarjetas más limpia — tipo de tour, duración y valoración son visibles de inmediato. El sistema de colores hace que los estados activos y los CTAs sean inequívocos." },
      { title:"Mapa",               body:"Los puntos de interés aparecen de forma más clara en el mapa. Los controles de filtro y navegación usan el color de marca de forma consistente, haciendo que la interfaz parezca intencional en lugar de ensamblada." },
      { title:"Punto de interés",   body:"La pantalla de punto de interés combina fotografía, vídeo, información contextual y el perfil del guía en una sola vista con scroll." },
      { title:"Agenda cultural",    body:"La vista de agenda aplica el mismo sistema de tarjetas que Tours, haciendo la maquetación consistente y escaneable. Los eventos se agrupan con claridad y la jerarquía guía la mirada." },
    ],
    mh_beyondIdeas: [
      { n:"01", title:"Navegación en tour individual",   img:"Tourmap.png",      body:"Los tours autoguiados muestran varios puntos en un mapa general. El indicador de proximidad muestra tu distancia al siguiente punto como elemento persistente en pantalla, para que siempre sepas dónde estás sin tocar el mapa." },
      { n:"02", title:"Gamificación",                   img:"Gamificacion.png", body:"Un sistema de misiones y logros para fomentar el engagement entre visitas. La idea era vincular los logros a actividad real: visitar un sitio histórico, completar un tour en vídeo o compartir una recomendación desbloquea una recompensa." },
      { n:"03", title:"Monetización local",             img:"Restaurante.png",  body:"Restaurantes y negocios locales podrían pagar para aparecer en el mapa de Maphunter con un perfil y opción de reserva. Los guías locales actuarían como punto de conexión. Los turistas ya están en la ciudad — la app podría capturar ese momento." },
      { n:"04", title:"Agenda cultural — ampliada",     img:"Agendanew2.png",   body:"La agenda original cubría los grandes eventos culturales. La versión ampliada también incluiría eventos más pequeños — noches de comedia, mercados locales, fiestas de barrio — con compra de entradas en la app." },
    ],

    // ── TABLE ROWS ──
    ay_briefRows: [["Cliente","Hellmann's"],["Plataforma","Fortnite Creative"],["Mentora","Giulia Pignataro"],["Contexto","Tutoría con industria, paralela a un proyecto real"],["Jugadores","Hasta 40 simultáneos"],["Código del mapa","2532-8226-5643"]],
    ay_users: [
      { name:"Elio",   issues:["No notó los paneles explicativos","Fallo en la recogida de tarros","No vio la UI del objetivo principal","No entendió el mensaje 'aburrido'"] },
      { name:"Sophie", issues:["Pasó por alto los paneles","No notó el objetivo","La ronda le pareció larga","Consumibles poco claros"] },
      { name:"Sergi",  issues:["Instrucciones del lobby poco claras","No entendió el objetivo","Demasiados mensajes","El mapa lleva al fondo — difícil de recuperar"] },
      { name:"Emre",   issues:["Leyó el slogan como instrucción","Barra de mayo mal ubicada","Uso del boomerang inicialmente confuso","Problema del fondo del mapa"] },
    ],
    ay_patterns: [
      { area:"Onboarding del lobby",       sev:"Crítico",  finding:"3 de 4 usuarios no notaron los paneles explicativos en el Lobby de la isla.",     fix:"Los paneles se rediseñaron para ser imposibles de ignorar — reescalados y reposicionados para dominar el entorno." },
      { area:"Claridad del objetivo",      sev:"Crítico",  finding:"2 de 4 usuarios no supieron describir el objetivo del juego tras leer el lobby.", fix:"UI del objetivo principal reposicionada y con mayor jerarquía visual." },
      { area:"'No Mayo no Munch'",         sev:"Problema", finding:"Los usuarios leyeron el mensaje como un slogan de Hellmann's, no como instrucción del juego.", fix:"Estado vacío 'aburrido' eliminado. Lenguaje de iconos más claro." },
      { area:"Recogida de tarros de mayo", sev:"Bug",      finding:"Un usuario no podía recoger de los tarros — los disparos no tenían efecto.",      fix:"Bug corregido. Feedback de impacto inmediato." },
      { area:"Sistema de consumibles",     sev:"Problema", finding:"2 de 4 usuarios no entendieron cómo funcionaban los power-ups ni cuándo se activarían.", fix:"Mensajes emergentes clarificados. Contador con mejor anclaje visual." },
      { area:"Duración de la ronda",       sev:"Menor",    finding:"Sophie encontró la ronda demasiado larga — Sergi y Emre la encontraron adecuada.", fix:"Sin cambios. El feedback no fue unánime y el ritmo funcionó bien en contexto de partida completa." },
    ],
    neo_whatRows: [["Iniciativa","CO UX — por Nicolás Roberto Barrientos"],["Temática","Discapacidad visual total"],["Nuestra fase","Prototipo + landing page"],["Plataforma","Bot de WhatsApp + web"]],
    neo_stats: [
      { n:"31%", label:"de los encuestados tiene discapacidad visual, 47,9% mujeres / 52% hombres" },
      { n:"75%", label:"de las personas con discapacidad visual tiene algún nivel de discapacidad visual" },
      { n:"64%", label:"necesita ayuda ocasionalmente; solo el 8% requiere asistencia total" },
      { n:"39%", label:"de las personas con discapacidad visual está empleada" },
    ],
    neo_personas: [
      { name:"Fermín Rosario", age:"30", role:"Desempleado · Córdoba, Argentina", bio:"Perdió la vista completamente a los 8 años. Vive solo, gestiona su día a día con un bastón y Talkback. Necesita ayuda una o dos veces a la semana. Antes de la pandemia era socialmente activo.", goals:["Independencia total","Concienciar sobre accesibilidad","Empleo estable y remunerado"], needs:["Buscador de empleo que especifique habilidades y capacidades","Herramientas de pago accesibles","Canal para conectar con otros"], tech:["Android + Talkback","Lector de pantalla","Instagram, Facebook, Twitter"] },
      { name:"Constanza Gajardo", age:"25", role:"Estudiante de psicología · Santiago de Chile", bio:"Ciega de nacimiento. Último año de universidad, se desplaza de forma independiente. Usa todas las herramientas disponibles para ser lo más autónoma posible. Quiere ayudar a otros que sufren discriminación.", goals:["Graduarse y ejercer profesionalmente","Independencia y movilidad","Igualdad de oportunidades laborales"], needs:["Herramientas tecnológicas accesibles","Empleadores que vean la capacidad por encima de la discapacidad","Apoyo para ampliar redes sociales"], tech:["Lector de pantalla JAWS","Smartphone + lector de pantalla","Gmail, Facebook, Messenger"] },
    ],
    neo_techItems: [
      { name:"TalkBack",   type:"Lector de pantalla",  platform:"Android (preinstalado)", desc:"Proporciona mensajes de voz para que los usuarios interactúen sin mirar la pantalla. Parte de Android Accessibility Suite." },
      { name:"JAWS",       type:"Lector de pantalla",  platform:"Windows",                desc:"Lector de pantalla estándar del sector para escritorio. Usado por profesionales y usuarios avanzados." },
      { name:"Be My Eyes", type:"Asistencia visual",   platform:"iOS + Android",          desc:"Conecta usuarios ciegos con voluntarios videntes mediante videollamada en directo. Gratuito." },
      { name:"BrailleBack",type:"Display braille",     platform:"Android",                desc:"Conecta el smartphone con una pantalla braille vía Bluetooth. Permite navegar e introducir texto con teclas braille." },
    ],
    neo_benchmarks: [
      { name:"GOV.UK",      verdict:"Referencia", pro:"Navegación completa por teclado, encabezados estructurados, soporte de narración integrado", con:"Exclusivamente gubernamental — sin funciones específicas de empleo" },
      { name:"Scope UK",    verdict:"Parcial",    pro:"Opción de narración, buen etiquetado ARIA",                                                  con:"Mucho contenido. Diseñada para sensibilización, no para emparejamiento laboral" },
      { name:"BBC iPlayer", verdict:"Referencia", pro:"Testado con lector de pantalla, reproductor accesible, buen contraste",                     con:"Contexto de entretenimiento — no aplicable a búsqueda de empleo" },
      { name:"InfoJobs",    verdict:"Brecha",     pro:"Gran base de datos de empleo, uso extendido en España y LATAM",                              con:"No construida para lectores de pantalla. Botones sin etiquetar, contenido dinámico falla con tecnología asistiva" },
    ],
    neo_insights: [
      { head:"Los lectores de pantalla no funcionan bien en la mayoría de portales de empleo", body:"Botones sin etiquetar, contenido dinámico y componentes personalizados sin atributos ARIA hacen que las plataformas estándar sean prácticamente inutilizables." },
      { head:"El 57,8% usa tecnología para comunicarse con familia y amigos",                  body:"WhatsApp ya forma parte de la vida cotidiana de este grupo — construir sobre herramientas conocidas reduce la barrera de aprendizaje." },
      { head:"Solo el 1,7% realiza tareas profesionales digitalmente",                         body:"La brecha entre la disponibilidad tecnológica y el uso profesional real muestra que la barrera de accesibilidad es estructural, no individual." },
    ],
    neo_mvpTasks: [
      { task:"Tarea 1 — Subir perfil", desc:"El usuario completa su perfil mediante una conversación de WhatsApp. Nombre, contacto, idiomas, habilidades, CV en texto, experiencia, certificados. El bot lo recoge todo de forma conversacional.", steps:["INICIO — seleccionar idioma","Rellenar perfil: nombre, email, CV, habilidades, experiencia","Casilla de protección de datos","Perfil guardado en la base de datos"] },
      { task:"Tarea 2 — Búsqueda de empleo", desc:"El usuario navega por las ofertas filtradas por su perfil. Selecciona una oferta, ve el listado completo y solicita. Si no ha iniciado sesión, se le redirige a registrarse.", steps:["INICIO → Ofertas de trabajo","Explorar y filtrar ofertas","Seleccionar una oferta y leer el anuncio completo","Si ha iniciado sesión → solicitar directamente","Si no → rellenar formulario → iniciar sesión → solicitar"] },
    ],
    neo_scenes: [
      { n:"01", icon:"📞", text:"Juan recibe una llamada de su amigo Miguel, que le cuenta que ha empezado a trabajar en una empresa — a pesar de tener la misma discapacidad visual que Juan. Juan le pregunta cómo lo ha conseguido." },
      { n:"02", icon:"🌐", text:"Miguel le cuenta que se enteró de una web llamada Neo a través de un grupo de apoyo. La plataforma ofrece oportunidades de empleo para personas con discapacidad visual — y está construida para ser accesible." },
      { n:"03", icon:"🎙️", text:"Miguel le explica que Juan puede subir su CV a la web mediante comandos de voz. Todos sus datos quedan registrados tanto en la web como en una base de datos descargable a la que las empresas pueden acceder." },
      { n:"04", icon:"🤖", text:"Una vez registrado, Juan puede explorar las vacantes disponibles con la ayuda de Neo — el asistente virtual — y solicitar puestos, todo a través de WhatsApp." },
      { n:"05", icon:"✅", text:"Pocas semanas después, Juan encuentra un empleo que se adapta a sus necesidades y donde se siente valorado." },
    ],
    mh_briefRows: [["Tipo","Encargo — rediseño visual"],["Alcance","Web + App móvil"],["Rol","Implementación UI desde el brandbook"],["Entregable","Diseños hi-fi para web y app"]],
    en_whatRows: [["Tipo","Primer proyecto UX/UI — Coderhouse"],["Plataforma","App móvil (iOS)"],["Proceso","Doble diamante completo"],["Duración","4 meses"],["Testing","Pruebas de usabilidad, 3 usuarios"],["Herramientas","Figma, Maze, Miro"]],
    en_profileRows: [["Edad","Entre 24 y 36 años"],["Residencia","Alemania"],["Lengua materna","Español"],["Características","Sin conocimiento de alemán, en Alemania desde hace menos de 5 años"]],
    en_benchmarks: [
      { name:"Grupos de Facebook", pro:"Gran base de usuarios existente, familiar para la comunidad", con:"Sin estructura. Todo en un feed. Sin filtros." },
      { name:"Internations",       pro:"Eventos, networking, algo de estructura",                     con:"No está en español. Funciones de pago. Centrada en networking profesional, no en vida cotidiana." },
      { name:"Expatica",           pro:"Artículos y guías para vivir en Alemania",                   con:"Puramente editorial. Sin interacción comunitaria. Solo consumo pasivo." },
    ],
    en_responses: [
      "Muchos se enfrentaron a problemas burocráticos por la complejidad del idioma, con consecuencias económicas.",
      "Los entrevistados buscan trabajo activamente en grupos de WhatsApp y Facebook porque se sienten más cómodos con compañeros hispanohablantes.",
      "Un sistema de notificaciones especializado facilitaría el uso de estos grupos, ahorrando tiempo en la búsqueda.",
      "Hay interés en eventos en español — el idioma facilita la socialización y la comunicación.",
    ],
    en_personas: [
      { name:"Laura, 27", role:"Diseñadora gráfica, recién llegada a Colonia", goals:["Encontrar piso con compañeros hispanohablantes","Conectar con creativos de la comunidad española local","Encontrar eventos y actividades culturales en español"], frustrations:["Los grupos de Facebook son ruidosos y difíciles de filtrar","No se puede distinguir anuncios legítimos del spam","Encontrar un médico hispanohablante es más difícil de lo que debería"] },
      { name:"Juan, 34",  role:"Ingeniero, 3 años en Múnich",                  goals:["Encontrar mejores oportunidades laborales que las de su red","Conectar con profesionales hispanohablantes de su sector","Estar al día de los eventos de la comunidad"], frustrations:["Las oportunidades profesionales dispersas en demasiadas plataformas","La barrera del idioma ralentiza todos los trámites administrativos","No hay forma fiable de encontrar asesoría legal o financiera en español"] },
    ],
    en_empathy: [
      { label:"Piensa y siente",         body:"Se siente cómodo y culturalmente representado cuando se comunica en español. Le resulta más fácil recibir recomendaciones a través de personas como él." },
      { label:"Lo que ve",               body:"Mensajes en exceso en los grupos de Facebook, haciendo tedioso encontrar información relevante. Dificultades burocráticas por todas partes." },
      { label:"Lo que escucha",          body:"Amigos y compañeros que tienen problemas de vivienda y burocracia por la barrera del idioma." },
      { label:"Puntos de dolor y necesidades", body:"Barreras idiomáticas en la burocracia y la vivienda. Demasiado ruido en los grupos que utiliza. Necesita información rápida y relevante en español." },
    ],
    en_tasks: [
      { task:"Registrarse / Iniciar sesión",   u1:true,  u2:true,  u3:true,  note:"Todos los usuarios completaron sin problemas." },
      { task:"Encontrar un anuncio de piso",   u1:true,  u2:true,  u3:true,  note:"Directo una vez entendida la navegación." },
      { task:"Contactar a un compañero",       u1:true,  u2:false, u3:true,  note:"El usuario 2 no distinguió Chat de VER." },
      { task:"Publicar un anuncio",            u1:false, u2:true,  u3:false, note:"2 de 3 usuarios no encontraron el FAB a la primera." },
      { task:"Encontrar un evento en la agenda",u1:true, u2:false, u3:true,  note:"El usuario 2 esperaba los eventos en el feed principal." },
      { task:"Encontrar un profesional",       u1:true,  u2:true,  u3:false, note:"El usuario 3 lo buscó en la barra de búsqueda, no en el nav." },
    ],
    en_findings: [
      { area:"Creación de anuncio (FAB)",     sev:"Crítico",  finding:"2 de 3 usuarios no encontraron el botón para crear un anuncio en el primer intento.", fix:"FAB ampliado y etiquetado. También se añadió un prompt en el estado vacío del feed." },
      { area:"Claridad de la navegación",    sev:"Crítico",  finding:"Las tres pestañas del feed no eran suficientemente claras — los usuarios intentaban ver todo el contenido desde la pantalla principal.", fix:"Etiquetas de las pestañas revisadas con iconos. Estado activo más diferenciado." },
      { area:"Chat vs. ver",                 sev:"Problema", finding:"La diferencia entre el botón Chat y el botón VER en las tarjetas de anuncio no era obvia.", fix:"Jerarquía de botones clarificada — Chat es principal (naranja), VER secundario (contorno)." },
      { area:"Descubribilidad de la agenda", sev:"Problema", finding:"Un usuario buscó los próximos eventos en el feed principal en lugar de en la pestaña Agenda.", fix:"Widget de próximos eventos añadido a la pantalla principal para conectar ambas superficies." },
      { area:"Feedback de notificaciones",   sev:"Menor",   finding:"Tras completar acciones, los usuarios no estaban seguros de que hubiera pasado algo.", fix:"Toasts de confirmación y mensajes de diálogo añadidos en todo el flujo." },
    ],
  },
};



// ─────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────────────────────────────────────
const T = {
  black:   "#0a0a0a",
  dark:    "#111111",
  light:   "#f2f2ef",
  white:   "#ffffff",
  mid:     "#888888",
  font:    "'Satoshi', 'Helvetica Neue', Helvetica, Arial, sans-serif",
};

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS DATA
// ─────────────────────────────────────────────────────────────────────────────
const PROJECTS = [
  { id:"allyoucaneat", title:"Irresistible",  tag:"Game · UX/UI Design",       desc:"Designing a Hellmann's branded island inside Fortnite Creative",  color:"rgba(29,72,168,0.78)",  accent:"#ffd700" },
  { id:"encuentra",    title:"Encuentra",      tag:"App · UX/UI Design",        desc:"Community platform for Spanish speakers in Germany",              color:"rgba(15,40,80,0.88)",   accent:"#f5a623" },
  { id:"maphunter",    title:"Maphunter",       tag:"Web & App · UX/UI",         desc:"Brand, web and mobile redesign for a city exploration platform",  color:"rgba(180,140,20,0.78)", accent:"#d4a017" },
  { id:"neo",          title:"Neo",             tag:"Accessibility · UX Design", desc:"WhatsApp bot making job search accessible to visually impaired people", color:"rgba(60,20,100,0.82)", accent:"#a259ff" },
];

// ─────────────────────────────────────────────────────────────────────────────
// SHARED: Fade-in reveal on mount
// ─────────────────────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0 }) {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay * 1000 + 60); return () => clearTimeout(t); }, []);
  return (
    <div style={{ opacity:v?1:0, transform:v?"none":"translateY(28px)", transition:"opacity 0.75s ease, transform 0.75s ease" }}>
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED: Case study nav
// ─────────────────────────────────────────────────────────────────────────────
function CaseNav({ onBack, accent = T.white, visible = true, tg, lang, setLang }) {
  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:100,
      height:52, padding:"0 clamp(20px,5vw,64px)",
      display:"flex", alignItems:"center", justifyContent:"space-between",
      background:"rgba(10,10,10,0.85)", backdropFilter:"blur(16px)",
      borderBottom:"1px solid rgba(255,255,255,0.06)",
      opacity: visible ? 1 : 0, pointerEvents: visible ? "all" : "none",
      transition:"opacity 0.5s ease",
    }}>
      <button onClick={onBack}
        style={{ fontFamily:T.font, fontSize:12, fontWeight:600, color:"rgba(255,255,255,0.7)",
          background:"transparent", border:"1px solid rgba(255,255,255,0.18)",
          padding:"7px 20px", borderRadius:4, cursor:"pointer",
          letterSpacing:"0.06em", transition:"all 0.18s" }}
        onMouseEnter={e=>{ e.currentTarget.style.borderColor=accent; e.currentTarget.style.color=accent; }}
        onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(255,255,255,0.18)"; e.currentTarget.style.color="rgba(255,255,255,0.7)"; }}>
        {tg ? tg.back : "← Back"}
      </button>
      {tg && <LangToggle lang={lang} setLang={setLang} />}
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED: Section label
// ─────────────────────────────────────────────────────────────────────────────
function Label({ text, col = T.mid }) {
  return (
    <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.22em",
      textTransform:"uppercase", color:col, marginBottom:16 }}>{text}</p>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED: Image placeholder
// ─────────────────────────────────────────────────────────────────────────────
function ImgBox({ label, ratio = "56.25%", accent = "#333", light = false }) {
  return (
    <div style={{ position:"relative", paddingTop:ratio, borderRadius:4, overflow:"hidden",
      background: light ? "#e0e0dc" : "#1a1a1a",
      border: `1px solid ${light ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.07)"}` }}>
      <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column",
        alignItems:"center", justifyContent:"center", gap:10 }}>
        <div style={{ width:32, height:32, border:`1.5px dashed ${accent}55`,
          borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontSize:16, color:`${accent}66`, lineHeight:1 }}>+</span>
        </div>
        <span style={{ fontFamily:T.font, fontSize:9, letterSpacing:"0.14em", textTransform:"uppercase",
          color:`${accent}66`, textAlign:"center", padding:"0 16px", maxWidth:200 }}>{label}</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED: Case study footer
// ─────────────────────────────────────────────────────────────────────────────
function CaseFooter({ onBack, accent, heroImg = null, tg }) {
  return (
    <footer style={{ background:T.black,
      textAlign:"center", borderTop:`1px solid rgba(255,255,255,0.07)`, overflow:"hidden" }}>
      {heroImg && (
        <div style={{ position:"relative", maxHeight:500, overflow:"hidden" }}>
          <img src={heroImg} alt="footer visual"
            style={{ width:"100%", objectFit:"cover", objectPosition:"20% center", display:"block", maxHeight:500 }}
            onError={e=>e.target.style.display="none"} />
          <div style={{ position:"absolute", inset:0,
            background:"linear-gradient(to bottom, #0a0a0a 0%, transparent 25%, transparent 65%, #0a0a0a 100%)" }}/>
        </div>
      )}
      <div style={{ padding:"clamp(48px,8vw,80px) clamp(24px,6vw,80px)" }}>
        <p style={{ fontFamily:T.font, fontSize:"clamp(28px,5vw,56px)", fontWeight:900,
          color:T.white, lineHeight:1, letterSpacing:"-0.02em", marginBottom:8 }}>
          {tg ? tg.thankYou1 : "Thank you for"}
        </p>
        <p style={{ fontFamily:T.font, fontSize:"clamp(28px,5vw,56px)", fontWeight:900,
          color:accent, lineHeight:1, letterSpacing:"-0.02em", marginBottom:40 }}>
          {tg ? tg.thankYou2 : "reviewing the work."}
        </p>
        <p style={{ fontFamily:T.font, fontSize:11, color:"rgba(255,255,255,0.25)",
          letterSpacing:"0.16em", textTransform:"uppercase", marginBottom:32 }}>
          {tg ? tg.credit : "Adrián Etopa Herrera · UX/UI Designer"}
        </p>
        <button onClick={onBack}
          style={{ fontFamily:T.font, fontSize:12, fontWeight:600, color:accent,
            background:"transparent", border:`1px solid ${accent}55`,
            padding:"12px 36px", borderRadius:4, cursor:"pointer",
            letterSpacing:"0.08em", transition:"all 0.2s" }}
          onMouseEnter={e=>{ e.currentTarget.style.background=accent; e.currentTarget.style.color=T.black; }}
          onMouseLeave={e=>{ e.currentTarget.style.background="transparent"; e.currentTarget.style.color=accent; }}>
          {tg ? tg.backToPortfolio : "← Back to portfolio"}
        </button>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HOME
// ─────────────────────────────────────────────────────────────────────────────
function AboutOverlay({ onClose, tg }) {
  const competencies = tg ? tg.competencyList : [];
  return (
    <div style={{ position:"fixed", inset:0, zIndex:200, background:"rgba(0,0,0,0.94)",
      backdropFilter:"blur(20px)", overflowY:"auto" }} onClick={onClose}>
      <div style={{ maxWidth:760, margin:"0 auto", padding:"clamp(40px,8vh,80px) clamp(24px,5vw,48px)" }}
        onClick={e => e.stopPropagation()}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:48 }}>
          <div>
            <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.22em",
              textTransform:"uppercase", color:T.mid, marginBottom:12 }}>{tg ? tg.aboutMe : 'About me'}</p>
            <p style={{ fontFamily:T.font, fontSize:"clamp(32px,5vw,48px)", fontWeight:900,
              color:T.white, lineHeight:1.0, letterSpacing:"-0.02em" }}>
              Adrián Etopa<br/>Herrera
            </p>
          </div>
          <button onClick={onClose}
            style={{ fontFamily:T.font, fontSize:12, fontWeight:600, color:"rgba(255,255,255,0.4)",
              background:"transparent", border:"1px solid rgba(255,255,255,0.12)",
              padding:"8px 18px", borderRadius:3, cursor:"pointer",
              letterSpacing:"0.06em", transition:"all 0.18s", flexShrink:0, marginTop:4 }}
            onMouseEnter={e=>{ e.currentTarget.style.color=T.white; e.currentTarget.style.borderColor="rgba(255,255,255,0.35)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.color="rgba(255,255,255,0.4)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.12)"; }}>
            {tg ? tg.close : "Close"}
          </button>
        </div>
        <p style={{ fontFamily:T.font, fontSize:15, color:"rgba(255,255,255,0.5)",
          lineHeight:1.85, marginBottom:48, maxWidth:560 }}>
          {tg ? tg.aboutBio : ''}
        </p>
        <div style={{ height:1, background:"rgba(255,255,255,0.08)", marginBottom:40 }}/>
        <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.22em",
          textTransform:"uppercase", color:T.mid, marginBottom:28 }}>{tg ? tg.competencies : 'Competencies'}</p>
        <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
          {competencies.map((c, i) => (
            <div key={c.area} style={{
              display:"grid", gridTemplateColumns:"clamp(120px,30%,180px) 1fr",
              gap:"0 32px", padding:"18px 0",
              borderBottom:"1px solid rgba(255,255,255,0.07)",
              borderTop: i === 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
            }}>
              <p style={{ fontFamily:T.font, fontSize:12, fontWeight:700,
                color:T.white, letterSpacing:"0.02em", paddingTop:2 }}>{c.area}</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"6px 10px" }}>
                {c.items.map(item => (
                  <span key={item} style={{ fontFamily:T.font, fontSize:11, fontWeight:400,
                    color:"rgba(255,255,255,0.45)", lineHeight:1.6 }}>
                    {item}{c.items.indexOf(item) < c.items.length - 1 ? " ·" : ""}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop:32, display:"flex", gap:10, flexWrap:"wrap" }}>
          {(tg ? tg.traits : []).map(s => (
            <span key={s} style={{ fontFamily:T.font, fontSize:10, fontWeight:600,
              padding:"7px 16px", borderRadius:3,
              border:"1px solid rgba(255,255,255,0.12)",
              color:"rgba(255,255,255,0.4)", letterSpacing:"0.06em" }}>{s}</span>
          ))}
        </div>
        <div style={{ marginTop:48, paddingTop:32, borderTop:"1px solid rgba(255,255,255,0.08)",
          display:"flex", gap:28, flexWrap:"wrap", alignItems:"center" }}>
          <a href="mailto:adrian.etopa@gmail.com"
            style={{ fontFamily:T.font, fontSize:12, color:"rgba(255,255,255,0.35)",
              textDecoration:"none", transition:"color 0.15s" }}
            onMouseEnter={e=>e.currentTarget.style.color=T.white}
            onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.35)"}>
            adrian.etopa@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/adri%C3%A1n-etopa/" target="_blank" rel="noreferrer"
            style={{ fontFamily:T.font, fontSize:12, color:"rgba(255,255,255,0.35)",
              textDecoration:"none", transition:"color 0.15s" }}
            onMouseEnter={e=>e.currentTarget.style.color=T.white}
            onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.35)"}>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

function Home({ onProject, tg, lang, setLang }) {
  const [about, setAbout] = useState(false);
  const [hovIdx, setHovIdx] = useState(null);

  return (
    <div style={{ fontFamily:T.font, background:T.black, position:"relative" }}>
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html, body, #root { width:100%; max-width:100%; }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        @media (min-width:641px) {
          .home-wrap { width:100vw; height:100vh; display:flex; flex-direction:column; overflow:hidden; }
          .home-hero { height:65vh; flex-shrink:0; }
          .home-cards { display:flex; flex:1; min-height:0; }
          .home-card { flex:1; position:relative; overflow:hidden; cursor:pointer; }
          .home-card-inner { position:absolute; inset:0; display:flex; flex-direction:column; justify-content:space-between; padding:clamp(14px,2vh,22px) clamp(14px,3vw,22px); }
          .home-divider { position:absolute; top:0; left:0; width:1px; height:100%; background:rgba(255,255,255,0.45); z-index:10; }
        }
        @media (max-width:640px) {
          .home-wrap { width:100%; min-height:100svh; display:flex; flex-direction:column; overflow-y:auto; overflow-x:hidden; }
          .home-hero { height:56vmax; min-height:260px; flex-shrink:0; }
          .home-cards { display:flex; flex-direction:column; }
          .home-card { position:relative; min-height:110px; cursor:pointer; border-bottom:1px solid rgba(255,255,255,0.2); }
          .home-card-inner { position:absolute; inset:0; display:flex; flex-direction:column; justify-content:space-between; padding:16px 20px; }
          .home-card-title { font-size:17px !important; }
          .home-card-tag { font-size:10px !important; }
          .home-card-desc { font-size:12px !important; }
          .home-divider { display:none; }
          .home-contact { display:none !important; }
        }
      `}</style>

      <div className="home-wrap">
        <img src="/Image/Me.png" alt="Adrián Etopa"
          style={{ position:"absolute", inset:0, width:"100%", height:"100%",
            objectFit:"cover", objectPosition:"center 15%",
            filter:"grayscale(100%)", zIndex:0 }}
          onError={e => e.target.style.display = "none"} />
        <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.20)", zIndex:1 }}/>

        <div className="home-hero" style={{ position:"relative", overflow:"hidden", zIndex:2 }}>
          <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"60%",
            background:"linear-gradient(to top, rgba(0,0,0,0.80) 0%, transparent 100%)" }}/>

          <div className="home-contact" style={{ position:"absolute", top:20,
            left:"clamp(20px,4vw,52px)", display:"flex", flexDirection:"column", gap:5, zIndex:10 }}>
            <a href="mailto:adrian.etopa@gmail.com"
              style={{ fontFamily:T.font, fontSize:11, color:"rgba(255,255,255,0.7)",
                textDecoration:"none", display:"flex", alignItems:"center", gap:6 }}>
              <span style={{ fontSize:13 }}>@</span> adrian.etopa@gmail.com
            </a>
            <a href="https://linkedin.com/in/adrianetopa" target="_blank" rel="noreferrer"
              style={{ fontFamily:T.font, fontSize:11, color:"rgba(255,255,255,0.7)",
                textDecoration:"none", display:"flex", alignItems:"center", gap:6 }}>
              <span style={{ fontWeight:800 }}>in</span> LinkedIn
            </a>
          </div>

          <div style={{ position:"absolute", bottom:0, left:0, right:0, zIndex:10,
            padding:"0 clamp(20px,4vw,52px) clamp(18px,3vh,32px)",
            display:"flex", alignItems:"flex-end", justifyContent:"space-between", gap:16 }}>
            <div>
              <p style={{ fontFamily:T.font, fontSize:"clamp(36px,8vw,100px)", fontWeight:900,
                color:T.white, lineHeight:0.88, letterSpacing:"-0.03em" }}>
                Adrián Etopa
              </p>
              <p style={{ fontFamily:T.font, fontSize:"clamp(13px,1.8vw,21px)", fontWeight:400,
                color:"rgba(255,255,255,0.65)", letterSpacing:"0.01em", marginTop:10 }}>
                UX/UI Designer
              </p>
              <p style={{ fontFamily:T.font, fontSize:"clamp(11px,1.2vw,14px)", fontWeight:400,
                color:"rgba(255,255,255,0.35)", letterSpacing:"0.02em", marginTop:6 }}>
                {tg.homeTagline}
              </p>
            </div>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:16, flexShrink:0 }}>
              <LangToggle lang={lang} setLang={setLang} />
              <button onClick={() => setAbout(true)}
                style={{ fontFamily:T.font, fontSize:"clamp(13px,1.5vw,18px)", fontWeight:700,
                  color:T.white, background:"transparent", border:"none",
                  cursor:"pointer", padding:0, margin:0,
                  opacity:1, transition:"opacity 0.18s", position:"relative" }}
                onMouseEnter={e=>e.currentTarget.style.opacity="0.5"}
                onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
                {tg ? tg.aboutMe : "About me"}
                <span style={{ position:"absolute", bottom:-3, left:0, right:0,
                  height:"1px", background:"rgba(255,255,255,0.5)" }}/>
              </button>
            </div>
          </div>
        </div>

        <div className="home-cards"
          style={{ zIndex:2, position:"relative", borderTop:"1px solid rgba(255,255,255,0.45)" }}>
          {PROJECTS.map((p, i) => (
            <div key={p.id} className="home-card"
              onClick={() => onProject(p.id)}
              onMouseEnter={() => setHovIdx(i)}
              onMouseLeave={() => setHovIdx(null)}
              style={{
                transition:"filter 0.25s ease",
                filter: hovIdx !== null && hovIdx !== i ? "brightness(0.65)" : "brightness(1)",
              }}>
              <div style={{ position:"absolute", inset:0, backdropFilter:"blur(20px)",
                WebkitBackdropFilter:"blur(20px)", background:"transparent" }}/>
              <div style={{ position:"absolute", inset:0, background:p.color }}/>
              {i > 0 && <div className="home-divider"/>}
              <div className="home-card-inner">
                <p className="home-card-title" style={{ fontFamily:T.font,
                  fontSize:"clamp(15px,1.15vw,16px)", fontWeight:700,
                  color:T.white, lineHeight:1.2, letterSpacing:"-0.01em" }}>
                  {p.title}
                </p>
                <div>
                  <p className="home-card-tag" style={{ fontFamily:T.font,
                    fontSize:"clamp(9px,0.6vw,9px)", fontWeight:700,
                    letterSpacing:"0.18em", textTransform:"uppercase",
                    color:"rgba(255,255,255,0.55)", marginBottom:6 }}>
                    {tg ? tg.projects[i].tag : p.tag}
                  </p>
                  <p className="home-card-desc" style={{ fontFamily:T.font,
                    fontSize:"clamp(11px,0.82vw,12px)", fontWeight:400,
                    color:"rgba(255,255,255,0.5)", lineHeight:1.6 }}>
                    {tg ? tg.projects[i].desc : p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {about && <AboutOverlay onClose={() => setAbout(false)} tg={tg} />}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ALL YOU CAN EAT CASE STUDY
// ─────────────────────────────────────────────────────────────────────────────
const AY_ACCENT = "#ffd700";







const AY_SEV_COLOR = { "Critical":"#ef4444","Crítico":"#ef4444","Issue":AY_ACCENT,"Problema":AY_ACCENT,"Bug":"#f97316","Minor":"#60a5fa","Menor":"#60a5fa" };

function AYHero({ tg }) {
  const [on, setOn] = useState(false);
  useEffect(() => { setTimeout(() => setOn(true), 300); }, []);
  return (
    <div style={{ position:"relative", width:"100vw", height:"100vh", minHeight:560,
      background:"#080e1a", overflow:"hidden", display:"flex", alignItems:"flex-end" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 40% 50%, rgba(255,215,0,0.06) 0%, transparent 65%)" }}/>
      <div style={{ position:"absolute", right:0, top:0, bottom:0, width:"55%", opacity:0.35 }}>
        <img src="/Image/Irresistible/Hero.png" alt="Irresistible Fortnite island"
          style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block" }}
          onError={e=>e.target.style.display="none"} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, #080e1a 0%, transparent 50%)" }}/>
      </div>
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"80%",
        background:"linear-gradient(to top, #080e1a 30%, transparent)", zIndex:1 }}/>
      <div style={{ position:"relative", zIndex:2, width:"100%",
        padding:"0 clamp(24px,6vw,80px) clamp(48px,8vh,80px)",
        opacity:on?1:0, transform:on?"none":"translateY(24px)",
        transition:"opacity 1s ease, transform 1s ease" }}>
        <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.22em",
          textTransform:"uppercase", color:AY_ACCENT, marginBottom:14 }}>
          {tg.ay_heroLabel}
        </p>
        <h1 style={{ fontFamily:T.font, fontSize:"clamp(52px,10vw,120px)", fontWeight:900,
          color:T.white, lineHeight:0.85, letterSpacing:"-0.03em", margin:"0 0 28px" }}>
          Irresistible
        </h1>
        <p style={{ fontFamily:T.font, fontSize:"clamp(14px,1.4vw,17px)", color:"rgba(255,255,255,0.45)",
          maxWidth:480, lineHeight:1.75, marginBottom:28 }}>
          {tg.ay_heroDesc}
        </p>
        <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
          {tg.ay_heroTags.map(t => (
            <span key={t} style={{ fontFamily:T.font, fontSize:10, fontWeight:600,
              padding:"6px 16px", border:`1px solid ${AY_ACCENT}33`,
              color:"rgba(255,255,255,0.4)", letterSpacing:"0.1em",
              textTransform:"uppercase", borderRadius:3 }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ position:"absolute", bottom:28, right:"clamp(24px,5vw,64px)", zIndex:2,
        display:"flex", flexDirection:"column", alignItems:"center", gap:8,
        animation:"bounce 2.2s ease infinite" }}>
        <span style={{ fontFamily:T.font, fontSize:9, color:"rgba(255,255,255,0.25)",
          letterSpacing:"0.18em", textTransform:"uppercase" }}>Scroll</span>
        <div style={{ width:1, height:36, background:`${AY_ACCENT}33` }}/>
      </div>
    </div>
  );
}

function AYIntro({ tg }) {
  return (
    <section style={{ background:T.light, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto", display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"clamp(40px,5vw,80px)" }}>
        <Reveal>
          <Label text={tg.ay_briefLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(28px,4vw,40px)", fontWeight:900,
            color:T.black, lineHeight:1.0, letterSpacing:"-0.02em", marginBottom:32 }}>
            {tg.ay_briefTitle}
          </h2>
          <div style={{ display:"flex", flexDirection:"column" }}>
            {tg.ay_briefRows.map(([k,v]) => (
              <div key={k} style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:"4px 16px", padding:"13px 0",
                borderBottom:"1px solid rgba(0,0,0,0.1)", alignItems:"baseline" }}>
                <span style={{ fontFamily:T.font, fontSize:10, fontWeight:700, color:T.mid,
                  letterSpacing:"0.12em", textTransform:"uppercase", flexShrink:0, paddingRight:12 }}>{k}</span>
                <span style={{ fontFamily:T.font, fontSize:13, color:T.black, fontWeight:500,
                  textAlign:"right" }}>{v}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div style={{ paddingTop:44 }}>
            <p style={{ fontFamily:T.font, fontSize:15, color:"#555", lineHeight:1.9, marginBottom:18 }}>
              {tg.ay_briefP1}
            </p>
            <p style={{ fontFamily:T.font, fontSize:15, color:"#555", lineHeight:1.9, marginBottom:18 }}>
              {tg.ay_briefP2}
            </p>
            <p style={{ fontFamily:T.font, fontSize:15, color:"#555", lineHeight:1.9 }}>
              {tg.ay_briefP3}
            </p>
            <div style={{ marginTop:24, padding:"16px 20px", borderLeft:`3px solid ${AY_ACCENT}`,
              background:`${AY_ACCENT}08`, borderRadius:"0 4px 4px 0" }}>
              <p style={{ fontFamily:T.font, fontSize:13, color:T.black, lineHeight:1.75 }}>
                {tg.ay_briefQuote}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AYMoodboard() {
  const imgs = [
    "/Image/Irresistible/Mood2.png","/Image/Irresistible/Mood3.png","/Image/Irresistible/Mood6.png",
    "/Image/Irresistible/Mood4.png","/Image/Irresistible/Mood1.png","/Image/Irresistible/Mood5.png",
  ];
  return (
    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))", gap:6 }}>
      {imgs.map((src, i) => (
        <div key={i} style={{ aspectRatio:"16/10", overflow:"hidden", borderRadius:4, background:"#111" }}>
          <img src={src} alt={`Reference ${i+1}`}
            style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block" }}
            onError={e=>e.target.parentElement.style.display="none"} />
        </div>
      ))}
    </div>
  );
}

function AYIdeation({ tg }) {
  const explored = tg.ay_explored;
  return (
    <section style={{ background:T.dark, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto" }}>
        <Reveal>
          <Label text={tg.ay_ideationLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(28px,4vw,40px)", fontWeight:900,
            color:T.white, lineHeight:1.0, letterSpacing:"-0.02em", marginBottom:12 }}>
            {tg.ay_ideationTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:14, color:"rgba(255,255,255,0.35)",
            lineHeight:1.85, maxWidth:580, marginBottom:40 }}>
            {tg.ay_ideationP1}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p style={{ fontFamily:T.font, fontSize:9, fontWeight:700, letterSpacing:"0.16em",
            textTransform:"uppercase", color:"rgba(255,255,255,0.25)", marginBottom:10 }}>
            {tg.ay_moodboardLabel}
          </p>
          <AYMoodboard />
        </Reveal>
        <Reveal delay={0.12}>
          <div style={{ marginTop:64, marginBottom:8 }}>
            <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.22em",
              textTransform:"uppercase", color:T.mid, marginBottom:12 }}>{tg.ay_ideasLabel}</p>
            <p style={{ fontFamily:T.font, fontSize:14, color:"rgba(255,255,255,0.35)",
              lineHeight:1.85, maxWidth:580, marginBottom:28 }}>
              {tg.ay_ideasP}
            </p>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {explored.map((e) => (
              <div key={e.title} style={{ display:"grid", gridTemplateColumns:"1fr 3fr",
                gap:"0 24px", padding:"18px 20px",
                background: e.title === tg.ay_explored[0].title ? `${AY_ACCENT}08` : "rgba(239,68,68,0.04)",
                border:`1px solid ${e.accent === AY_ACCENT ? AY_ACCENT+"22" : "rgba(239,68,68,0.14)"}`,
                borderRadius:4, alignItems:"start" }}>
                <div>
                  <p style={{ fontFamily:T.font, fontSize:12, fontWeight:700,
                    color: e.title === tg.ay_explored[0].title ? AY_ACCENT : "#f87171", marginBottom:4 }}>{e.title}</p>
                  <p style={{ fontFamily:T.font, fontSize:9, fontWeight:600, letterSpacing:"0.12em",
                    textTransform:"uppercase", color:"rgba(255,255,255,0.25)" }}>{e.tag}</p>
                </div>
                <p style={{ fontFamily:T.font, fontSize:13, color:"rgba(255,255,255,0.4)", lineHeight:1.75 }}>{e.why}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.18}>
          <div style={{ marginTop:48, padding:"32px",
            background:`${AY_ACCENT}08`, border:`1px solid ${AY_ACCENT}22`, borderRadius:4 }}>
            <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.22em",
              textTransform:"uppercase", color:AY_ACCENT, marginBottom:20 }}>{tg.ay_conceptTitle}</p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:32 }}>
              <div>
                <p style={{ fontFamily:T.font, fontSize:11, fontWeight:700,
                  color:"rgba(255,255,255,0.35)", letterSpacing:"0.12em",
                  textTransform:"uppercase", marginBottom:10 }}>{tg.ay_conceptLabel}</p>
                <p style={{ fontFamily:T.font, fontSize:14, color:T.white, lineHeight:1.85 }}>
                  {tg.ay_conceptBody}
                </p>
              </div>
              <div>
                <p style={{ fontFamily:T.font, fontSize:11, fontWeight:700,
                  color:"rgba(255,255,255,0.35)", letterSpacing:"0.12em",
                  textTransform:"uppercase", marginBottom:10 }}>{tg.ay_whyLabel}</p>
                <p style={{ fontFamily:T.font, fontSize:14, color:T.white, lineHeight:1.85 }}>
                  {tg.ay_whyBody}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AYMechanic({ tg }) {
  const cards = tg.ay_cards;
  return (
    <section style={{ background:T.light, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto" }}>
        <Reveal>
          <Label text={tg.ay_mechLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(28px,4vw,40px)", fontWeight:900,
            color:T.black, lineHeight:1.0, letterSpacing:"-0.02em", marginBottom:12 }}>
            {tg.ay_mechTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:15, color:"#555", lineHeight:1.9,
            maxWidth:560, marginBottom:48 }}>
            {tg.ay_mechP}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:12 }}>
            {cards.map(({ n, title, body }, ci) => (
              <div key={n} style={{ padding:"24px 20px", background:T.white, borderRadius:4,
                border: ci === cards.length-1 ? `2px solid ${AY_ACCENT}` : "1px solid rgba(0,0,0,0.08)",
                boxShadow: ci === cards.length-1 ? `0 4px 24px ${AY_ACCENT}22` : "0 2px 16px rgba(0,0,0,0.05)" }}>
                <span style={{ fontFamily:T.font, fontSize:48, fontWeight:900,
                  color:"rgba(0,0,0,0.05)", lineHeight:1, display:"block",
                  marginBottom:-4, letterSpacing:"-0.04em" }}>{n}</span>
                <p style={{ fontFamily:T.font, fontSize:13, fontWeight:700, color:T.black,
                  marginBottom:8, letterSpacing:"0.02em" }}>{title}</p>
                <p style={{ fontFamily:T.font, fontSize:13, color:"#666", lineHeight:1.8 }}>{body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AYScreens({ tg }) {
  const flow = tg.ay_flow;
  return (
    <section style={{ background:T.dark, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto" }}>
        <Reveal>
          <Label text={tg.ay_journeyLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(28px,4vw,40px)", fontWeight:900,
            color:T.white, lineHeight:1.0, letterSpacing:"-0.02em", marginBottom:12 }}>
            {tg.ay_journeyTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:14, color:"rgba(255,255,255,0.35)",
            lineHeight:1.85, maxWidth:520, marginBottom:40 }}>
            {tg.ay_journeyP}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:56,
            padding:"18px 20px", background:"rgba(255,255,255,0.04)",
            border:"1px solid rgba(255,255,255,0.07)", borderRadius:4 }}>
            {flow.map((s, i) => (
              <div key={s} style={{ display:"flex", alignItems:"center", gap:6 }}>
                <span style={{ fontFamily:T.font, fontSize:11, fontWeight:600,
                  color: i < 3 ? "rgba(255,255,255,0.3)" : i === 3 ? AY_ACCENT : i >= 6 ? "rgba(255,255,255,0.6)" : T.white,
                  padding:"5px 14px", background:"rgba(255,255,255,0.04)",
                  borderRadius:3, whiteSpace:"nowrap" }}>{s}</span>
                {i < flow.length-1 && <span style={{ color:"rgba(255,255,255,0.18)", fontSize:10 }}>→</span>}
              </div>
            ))}
          </div>
        </Reveal>
        {tg.ay_screens.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.05}>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
              gap:"clamp(24px,4vw,52px)",
              borderTop:"1px solid rgba(255,255,255,0.06)",
              padding:"clamp(36px,5vw,52px) 0", alignItems:"center" }}>
              <div style={{ order:i%2===0?0:1 }}>
                <div style={{ position:"relative", paddingTop:"56.25%", borderRadius:4, overflow:"hidden", background:"#1a1a1a" }}>
                  <img src={s.img} alt={s.title}
                    style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", display:"block" }}
                    onError={e=>e.target.style.display="none"} />
                </div>
              </div>
              <div style={{ order:i%2===0?1:0 }}>
                <p style={{ fontFamily:T.font, fontSize:9, fontWeight:700, letterSpacing:"0.18em",
                  textTransform:"uppercase", color:AY_ACCENT, marginBottom:8 }}>{s.tag}</p>
                <div style={{ display:"flex", alignItems:"baseline", gap:12, marginBottom:10 }}>
                  <span style={{ fontFamily:T.font, fontSize:52, fontWeight:900, color:"rgba(255,255,255,0.06)",
                    lineHeight:1, userSelect:"none", letterSpacing:"-0.04em", flexShrink:0 }}>{s.n}</span>
                  <h3 style={{ fontFamily:T.font, fontSize:"clamp(18px,2.2vw,24px)", fontWeight:900,
                    color:T.white, lineHeight:1.1, letterSpacing:"-0.02em" }}>{s.title}</h3>
                </div>
                <p style={{ fontFamily:T.font, fontSize:14, color:"rgba(255,255,255,0.4)", lineHeight:1.85 }}>{s.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AYTesting({ tg }) {
  return (
    <section style={{ background:T.light, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto" }}>
        <Reveal>
          <Label text={tg.ay_testLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(28px,4vw,40px)", fontWeight:900,
            color:T.black, lineHeight:1.0, letterSpacing:"-0.02em", marginBottom:12 }}>
            {tg.ay_testTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:15, color:"#555", lineHeight:1.9,
            maxWidth:560, marginBottom:48 }}>
            {tg.ay_testP}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:12, marginBottom:48 }}>
            {tg.ay_users.map(u => (
              <div key={u.name} style={{ padding:"20px 18px", background:T.white, borderRadius:4,
                border:"1px solid rgba(0,0,0,0.08)", boxShadow:"0 2px 12px rgba(0,0,0,0.04)" }}>
                <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, color:"#1d4ed8",
                  letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:12 }}>
                  User: {u.name}
                </p>
                <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
                  {u.issues.map(iss => (
                    <div key={iss} style={{ display:"flex", gap:8, alignItems:"flex-start" }}>
                      <span style={{ color:"#ef4444", fontSize:10, marginTop:3, flexShrink:0, fontWeight:700 }}>✕</span>
                      <span style={{ fontFamily:T.font, fontSize:12, color:"#666", lineHeight:1.65 }}>{iss}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {tg.ay_patterns.map(p => {
              const col = AY_SEV_COLOR[p.sev] || T.mid;
              return (
                <div key={p.area} style={{ display:"grid", gridTemplateColumns:"8px 1fr 1fr 1fr",
                  gap:"0 20px", padding:"18px 20px", background:T.white,
                  borderRadius:4, border:"1px solid rgba(0,0,0,0.08)", alignItems:"start" }}>
                  <div style={{ width:8, height:8, borderRadius:"50%", background:col, marginTop:3, flexShrink:0 }}/>
                  <div>
                    <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, color:T.black,
                      letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:5 }}>
                      {p.area}
                      <span style={{ marginLeft:8, fontWeight:400, color:col, fontSize:9 }}>{p.sev}</span>
                    </p>
                  </div>
                  <p style={{ fontFamily:T.font, fontSize:12, color:"#666", lineHeight:1.7 }}>{p.finding}</p>
                  <div>
                    <p style={{ fontFamily:T.font, fontSize:9, fontWeight:700, color:"#16a34a",
                      letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:5 }}>{tg.ay_fixLabel}</p>
                    <p style={{ fontFamily:T.font, fontSize:12, color:"#666", lineHeight:1.7 }}>{p.fix}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AYConclusions({ tg }) {
  return (
    <section style={{ background:T.dark, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto", display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"clamp(40px,6vw,80px)" }}>
        <Reveal>
          <Label text={tg.ay_conclLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(28px,4vw,42px)", fontWeight:900,
            color:T.white, lineHeight:1.0, letterSpacing:"-0.02em", marginBottom:20 }}>
            {tg.ay_conclTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:14, color:"rgba(255,255,255,0.4)", lineHeight:1.9 }}>
            {tg.ay_conclP}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div style={{ display:"flex", flexDirection:"column" }}>
            {[
              { head:tg.ay_concl1Head||"", body:tg.ay_concl1Body||"" },
              { head:tg.ay_concl2Head||"", body:tg.ay_concl2Body||"" },
              { head:tg.ay_concl3Head||"", body:tg.ay_concl3Body||"" },
            ].map(({ head, body }, i) => (
              <div key={head} style={{ display:"flex", gap:20, paddingBottom:28, marginBottom:4,
                borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
                <span style={{ fontFamily:T.font, fontSize:11, fontWeight:900, color:AY_ACCENT,
                  flexShrink:0, marginTop:1 }}>{String(i+1).padStart(2,"0")}</span>
                <div>
                  <p style={{ fontFamily:T.font, fontSize:11, fontWeight:700, color:T.white,
                    letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:8 }}>{head}</p>
                  <p style={{ fontFamily:T.font, fontSize:13, color:"rgba(255,255,255,0.38)", lineHeight:1.85 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AllYouCanEat({ onBack, tg, lang, setLang }) {
  return (
    <>
      <style>{`
        body{display:block!important;place-items:unset!important;} #root{width:100%!important;max-width:100%!important;margin:0!important;padding:0!important;}
        html,body{overflow:auto!important;height:auto!important;width:100%!important;overflow-x:hidden!important;}
        @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(8px)}}
        @media(max-width:700px){[style*="repeat(auto-fit"]{grid-template-columns:1fr!important;}[style*="order:0"],[style*="order:1"]{order:unset!important;}}
      `}</style>
      <CaseNav onBack={onBack} accent={AY_ACCENT} tg={tg} lang={lang} setLang={setLang} />
      <AYHero tg={tg} />
      <AYIntro tg={tg} />
      <AYIdeation tg={tg} />
      <AYMechanic tg={tg} />
      <AYScreens tg={tg} />
      <AYTesting tg={tg} />
      <AYConclusions tg={tg} />
      <CaseFooter onBack={onBack} accent={AY_ACCENT} heroImg="/Image/Irresistible/Hero3.png" tg={tg} />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// NEO CASE STUDY
// ─────────────────────────────────────────────────────────────────────────────
const N_ACCENT = "#a259ff";
const N_IMG    = "/Image/Neo/";

function NeoHero({ tg }) {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 200); return () => clearTimeout(t); }, []);
  return (
    <div style={{ position:"relative", width:"100vw", height:"100vh", minHeight:560,
      background:"#0c0a04", overflow:"hidden", display:"flex", alignItems:"flex-end" }}>
      <img src={N_IMG+"Website.png"} alt=""
        style={{ position:"absolute", inset:0, width:"100%", height:"100%",
          objectFit:"cover", objectPosition:"left top",
          opacity:0.18, filter:"blur(2px) saturate(0.8)", display:"block" }}
        onError={e=>e.target.style.display="none"} />
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"75%",
        background:"linear-gradient(to top, #0a0a12 25%, transparent)" }}/>
      <div style={{ position:"relative", zIndex:2, width:"100%",
        padding:"0 clamp(24px,6vw,80px) clamp(48px,8vh,80px)",
        opacity:on?1:0, transform:on?"none":"translateY(24px)",
        transition:"opacity 1s ease, transform 1s ease" }}>
        <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.22em",
          textTransform:"uppercase", color:N_ACCENT, marginBottom:14 }}>
          {tg.neo_heroLabel}
        </p>
        <h1 style={{ fontFamily:T.font, fontSize:"clamp(52px,10vw,120px)", fontWeight:900,
          color:T.white, lineHeight:0.88, letterSpacing:"-0.03em", margin:"0 0 24px" }}>
          Neo
        </h1>
        <p style={{ fontFamily:T.font, fontSize:"clamp(14px,1.4vw,17px)", color:"rgba(255,255,255,0.45)",
          maxWidth:460, lineHeight:1.75, marginBottom:28 }}>
          {tg.neo_heroDesc}
        </p>
        <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
          {tg.neo_heroTags.map(t => (
            <span key={t} style={{ fontFamily:T.font, fontSize:10, fontWeight:600,
              padding:"6px 16px", border:`1px solid ${N_ACCENT}44`,
              color:"rgba(255,255,255,0.5)", letterSpacing:"0.1em", borderRadius:3 }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function NeoWhat({ tg }) {
  return (
    <section style={{ background:T.light, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto", display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"clamp(40px,5vw,80px)" }}>
        <Reveal>
          <Label text={tg.neo_whatLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(26px,3.5vw,38px)", fontWeight:900,
            color:T.black, lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:32 }}>
            {tg.neo_whatTitle}
          </h2>
          <div style={{ display:"flex", flexDirection:"column" }}>
            {tg.neo_whatRows.map(([k,v]) => (
              <div key={k} style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:"4px 16px", padding:"13px 0",
                borderBottom:"1px solid rgba(0,0,0,0.1)" }}>
                <span style={{ fontFamily:T.font, fontSize:10, fontWeight:700, color:T.mid,
                  letterSpacing:"0.12em", textTransform:"uppercase" }}>{k}</span>
                <span style={{ fontFamily:T.font, fontSize:13, color:T.black, fontWeight:500,
                  textAlign:"right" }}>{v}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div style={{ paddingTop:44 }}>
            <p style={{ fontFamily:T.font, fontSize:15, color:"#555", lineHeight:1.9, marginBottom:18 }}>
              {tg.neo_whatP1}
            </p>
            <p style={{ fontFamily:T.font, fontSize:15, color:"#555", lineHeight:1.9, marginBottom:18 }}>
              {tg.neo_whatP2}
            </p>
            <div style={{ marginTop:8, padding:"20px 22px",
              background:"rgba(162,89,255,0.05)",
              border:"1px solid rgba(162,89,255,0.2)", borderRadius:6 }}>
              <p style={{ fontFamily:T.font, fontSize:9, fontWeight:700, letterSpacing:"0.18em",
                textTransform:"uppercase", color:"rgba(162,89,255,0.6)", marginBottom:10 }}>
                {tg.neo_briefCardLabel}
              </p>
              <p style={{ fontFamily:T.font, fontSize:13, color:"#444", lineHeight:1.8, marginBottom:14,
                fontStyle:"italic" }}>
                "¿Cómo podríamos facilitar la búsqueda laboral de las personas con discapacidad visual total para mejorar su calidad de vida?"
              </p>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                {tg.neo_swot.map(sw => (
                  <div key={sw.label} style={{ display:"flex", gap:8, alignItems:"flex-start" }}>
                    <span style={{ fontSize:14, flexShrink:0 }}>{sw.icon}</span>
                    <div>
                      <p style={{ fontFamily:T.font, fontSize:9, fontWeight:700, color:N_ACCENT,
                        letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:2 }}>{sw.label}</p>
                      <p style={{ fontFamily:T.font, fontSize:11, color:"#666", lineHeight:1.55 }}>{sw.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function NeoGoal({ tg }) {
  return (
    <section style={{ background:T.dark, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto" }}>
        <Reveal>
          <Label text={tg.neo_researchLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(26px,3.5vw,38px)", fontWeight:900,
            color:T.white, lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:12 }}>
            {tg.neo_researchTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:14, color:"rgba(255,255,255,0.35)",
            lineHeight:1.85, maxWidth:600, marginBottom:48 }}>
            {tg.neo_researchP}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
            textTransform:"uppercase", color:T.mid, marginBottom:16 }}>
            {tg.neo_dataLabel}
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:10, marginBottom:48 }}>
            {tg.neo_stats.map(s => (
              <div key={s.n} style={{ padding:"20px 16px", background:"rgba(162,89,255,0.07)",
                border:"1px solid rgba(162,89,255,0.18)", borderRadius:4 }}>
                <p style={{ fontFamily:T.font, fontSize:32, fontWeight:900, color:N_ACCENT,
                  lineHeight:1, marginBottom:8, letterSpacing:"-0.02em" }}>{s.n}</p>
                <p style={{ fontFamily:T.font, fontSize:12, color:"rgba(255,255,255,0.45)", lineHeight:1.7 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
            textTransform:"uppercase", color:T.mid, marginBottom:16 }}>{tg.neo_personasLabel}</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:12, marginBottom:48 }}>
            {tg.neo_personas.map((p, pi) => { const pcol = pi===0 ? "#6d28d9" : "#7c3aed"; return (
              <div key={p.name} style={{ background:"rgba(255,255,255,0.04)",
                border:"1px solid rgba(255,255,255,0.08)", borderRadius:6, overflow:"hidden" }}>
                <div style={{ background:`${pcol}33`, borderBottom:`1px solid ${pcol}44`,
                  padding:"20px 24px", display:"flex", alignItems:"center", gap:16 }}>
                  <div style={{ width:48, height:48, borderRadius:"50%",
                    background:`${pcol}55`, border:`2px solid ${pcol}88`,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:22, flexShrink:0 }}>👤</div>
                  <div>
                    <p style={{ fontFamily:T.font, fontSize:15, fontWeight:700, color:T.white, margin:0 }}>{p.name}, {p.age}</p>
                    <p style={{ fontFamily:T.font, fontSize:11, color:"rgba(255,255,255,0.45)", margin:0 }}>{p.role}</p>
                  </div>
                </div>
                <div style={{ padding:"18px 24px" }}>
                  <p style={{ fontFamily:T.font, fontSize:12, color:"rgba(255,255,255,0.45)", lineHeight:1.75, marginBottom:16 }}>{p.bio}</p>
                  <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                    {[
                      { label:tg.neo_goalsLabel, items:p.goals, col:"#34d399" },
                      { label:tg.neo_needsLabel, items:p.needs, col:N_ACCENT },
                      { label:tg.neo_techLabel, items:p.tech, col:"rgba(255,255,255,0.35)" },
                    ].map(g => (
                      <div key={g.label}>
                        <p style={{ fontFamily:T.font, fontSize:9, fontWeight:700, letterSpacing:"0.12em",
                          textTransform:"uppercase", color:g.col, marginBottom:6 }}>{g.label}</p>
                        {g.items.map(item => (
                          <div key={item} style={{ display:"flex", gap:7, marginBottom:4 }}>
                            <span style={{ color:g.col, fontSize:9, flexShrink:0, marginTop:3 }}>·</span>
                            <p style={{ fontFamily:T.font, fontSize:11, color:"rgba(255,255,255,0.42)", lineHeight:1.6, margin:0 }}>{item}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ); })}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
            textTransform:"uppercase", color:T.mid, marginBottom:16 }}>{tg.neo_techResearchLabel}</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:10, marginBottom:48 }}>
            {tg.neo_techItems.map(t => (
              <div key={t.name} style={{ padding:"18px 20px",
                background:"rgba(162,89,255,0.06)", border:"1px solid rgba(162,89,255,0.16)", borderRadius:4 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
                  <p style={{ fontFamily:T.font, fontSize:13, fontWeight:700, color:T.white, margin:0 }}>{t.name}</p>
                  <span style={{ fontFamily:T.font, fontSize:9, fontWeight:600, color:N_ACCENT,
                    letterSpacing:"0.1em", textTransform:"uppercase" }}>{t.type}</span>
                </div>
                <p style={{ fontFamily:T.font, fontSize:10, color:"rgba(255,255,255,0.3)", marginBottom:8 }}>{t.platform}</p>
                <p style={{ fontFamily:T.font, fontSize:11, color:"rgba(255,255,255,0.4)", lineHeight:1.7, margin:0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
            textTransform:"uppercase", color:T.mid, marginBottom:16 }}>{tg.neo_benchmarkLabel}</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:10, marginBottom:48 }}>
            {tg.neo_benchmarks.map(b => (
              <div key={b.name} style={{ padding:"24px 28px", background:"rgba(255,255,255,0.04)",
                border:"1px solid rgba(255,255,255,0.07)", borderRadius:6 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
                  <p style={{ fontFamily:T.font, fontSize:14, fontWeight:700, color:T.white, margin:0 }}>{b.name}</p>
                  <span style={{ fontFamily:T.font, fontSize:9, fontWeight:700, letterSpacing:"0.1em",
                    textTransform:"uppercase", padding:"3px 8px", borderRadius:3,
                    background: (b.verdict==="Reference"||b.verdict==="Referencia") ? "rgba(52,211,153,0.15)" : (b.verdict==="Gap"||b.verdict==="Brecha") ? "rgba(239,68,68,0.15)" : "rgba(162,89,255,0.15)",
                    color: (b.verdict==="Reference"||b.verdict==="Referencia") ? "#34d399" : (b.verdict==="Gap"||b.verdict==="Brecha") ? "#f87171" : N_ACCENT,
                  }}>{b.verdict}</span>
                </div>
                <div style={{ display:"flex", gap:8, marginBottom:6 }}>
                  <span style={{ color:"#34d399", fontSize:10, flexShrink:0, marginTop:1 }}>+</span>
                  <p style={{ fontFamily:T.font, fontSize:11, color:"rgba(255,255,255,0.4)", lineHeight:1.6, margin:0 }}>{b.pro}</p>
                </div>
                <div style={{ display:"flex", gap:8 }}>
                  <span style={{ color:"#f87171", fontSize:10, flexShrink:0, marginTop:1 }}>-</span>
                  <p style={{ fontFamily:T.font, fontSize:11, color:"rgba(255,255,255,0.4)", lineHeight:1.6, margin:0 }}>{b.con}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
            textTransform:"uppercase", color:T.mid, marginBottom:16 }}>{tg.neo_insightsLabel}</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:10 }}>
            {tg.neo_insights.map(f => (
              <div key={f.head} style={{ padding:"20px", background:"rgba(255,255,255,0.04)",
                border:"1px solid rgba(255,255,255,0.07)", borderRadius:4 }}>
                <p style={{ fontFamily:T.font, fontSize:13, fontWeight:700, color:T.white, marginBottom:8 }}>{f.head}</p>
                <p style={{ fontFamily:T.font, fontSize:12, color:"rgba(255,255,255,0.4)", lineHeight:1.75 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function NeoDefinition({ tg, lang }) {
  const asIs = tg.neo_asIs;
  const toBe = tg.neo_toBe;

  return (
    <section style={{ background:"#0a0614", padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)",
      borderTop:"1px solid rgba(162,89,255,0.12)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto" }}>
        <Reveal>
          <Label text={tg.neo_defLabel} col={N_ACCENT} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(26px,3.5vw,38px)", fontWeight:900,
            color:T.white, lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:12 }}>
            {tg.neo_defTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:14, color:"rgba(255,255,255,0.35)",
            lineHeight:1.85, maxWidth:600, marginBottom:56 }}>
            {tg.neo_defP}
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
            textTransform:"uppercase", color:T.mid, marginBottom:24 }}>{tg.neo_iaLabel}</p>
          <div style={{ borderRadius:8, overflow:"hidden", marginBottom:8 }}>
                <img
                  src={lang === "es" ? "/Image/Neo/AIespañol.png" : "/Image/Neo/AIenglish.png"}
                  alt="Information Architecture"
                  style={{ width:"100%", height:"auto", display:"block" }}
                  onError={e => e.target.style.display="none"}
                />
              </div>        </Reveal>

        <Reveal delay={0.07}>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
            textTransform:"uppercase", color:T.mid, marginBottom:24 }}>{tg.neo_userFlowLabel}</p>
          <div style={{ background:"#f4f3f0", borderRadius:8, padding:"clamp(24px,4vw,48px) clamp(16px,3vw,32px)", marginBottom:56 }}>
            {(() => {
              const S = "#4a90d9"; const G = "#34a853"; const R = "#e57373"; const TXT = "#fff";
              const font = `600 10px 'Helvetica Neue',Arial,sans-serif`;
              const fontSm = `600 9px 'Helvetica Neue',Arial,sans-serif`;
              const Box = ({ label, col=S, w=110 }) => (
                <div style={{ padding:"7px 12px", background:col, borderRadius:5, minWidth:w,
                  fontFamily:T.font, fontSize:10, fontWeight:600, color:TXT,
                  textAlign:"center", whiteSpace:"nowrap", flexShrink:0 }}>{label}</div>
              );
              const Diamond = ({ label1, label2 }) => (
                <div style={{ position:"relative", width:80, height:44, flexShrink:0 }}>
                  <svg viewBox="0 0 80 44" style={{ position:"absolute", inset:0, width:"100%", height:"100%" }}>
                    <polygon points="40,2 78,22 40,42 2,22" fill={S} stroke="none"/>
                    <text x="40" y="19" style={{ font:fontSm, fill:TXT, textAnchor:"middle", dominantBaseline:"middle" }}>{label1}</text>
                    <text x="40" y="32" style={{ font:fontSm, fill:TXT, textAnchor:"middle", dominantBaseline:"middle" }}>{label2}</text>
                  </svg>
                </div>
              );
              const Arr = () => <div style={{ color:"#888", fontSize:16, lineHeight:1, flexShrink:0, alignSelf:"center" }}>→</div>;
              const ArrD = () => <div style={{ color:"#888", fontSize:16, lineHeight:1, textAlign:"center" }}>↓</div>;
              const Lbl = ({ t }) => <div style={{ fontFamily:T.font, fontSize:9, color:"#777", alignSelf:"center", flexShrink:0 }}>{t}</div>;
              const End = ({ col=R }) => (
                <div style={{ padding:"7px 14px", background:col, borderRadius:20,
                  fontFamily:T.font, fontSize:10, fontWeight:700, color:TXT,
                  flexShrink:0, alignSelf:"center" }}>END</div>
              );
              const SecLabel = ({ t }) => (
                <p style={{ fontFamily:T.font, fontSize:9, fontWeight:700, color:"#a259ff",
                  letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:14, marginTop:0 }}>{t}</p>
              );
              const row = { display:"flex", alignItems:"center", gap:8, flexWrap:"nowrap", overflowX:"auto", paddingBottom:4 };
              const col = { display:"flex", flexDirection:"column", gap:4 };
              const divider = { height:1, background:"rgba(162,89,255,0.2)", margin:"20px 0" };

              const f = tg.neo_flow;
              return (
                <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
                  <SecLabel t={f.f1}/>
                  <div style={row}>
                    <Box label="START" col={G}/>
                    <Arr/><Box label={f.welcome}/>
                    <Arr/><Box label={f.chooseProgram}/>
                    <Arr/><Diamond label1={f.hasProfile1} label2={f.hasProfile2}/>
                    <div style={col}>
                      <div style={{ display:"flex", gap:8, alignItems:"center" }}>
                        <Lbl t={f.yes}/><Arr/><Box label={f.viewProfile}/><Arr/><Box label={f.editProfile}/><Arr/><End col={G}/>
                      </div>
                      <div style={{ display:"flex", gap:8, alignItems:"flex-start", marginTop:4 }}>
                        <Lbl t={f.no}/>
                        <div style={col}>
                          <div style={row}>
                            <Arr/><Box label={f.createProfile}/>
                            <Arr/><Box label={f.name} w={70}/>
                            <Arr/><Box label={f.dob} w={90}/>
                            <Arr/><Box label={f.skills} w={70}/>
                            <Arr/><Box label={f.experience} w={90}/>
                            <Arr/><Box label={f.profileSaved} col={G}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={divider}/>
                  <SecLabel t={f.f2}/>
                  <div style={row}>
                    <Box label="START" col={G}/>
                    <Arr/><Box label={f.home}/>
                    <Arr/><Box label={f.jobListings}/>
                    <Arr/><Box label={f.filter}/>
                    <Arr/><Box label={f.selectOffer}/>
                    <Arr/><Diamond label1={f.loggedIn1} label2={f.loggedIn2}/>
                    <div style={col}>
                      <div style={{ display:"flex", gap:8, alignItems:"center" }}>
                        <Lbl t={f.yes}/><Arr/><Box label={f.applyDirectly} col={G}/><Arr/><End col={G}/>
                      </div>
                      <div style={{ display:"flex", gap:8, alignItems:"center", marginTop:4 }}>
                        <Lbl t={f.no}/><Arr/><Box label={f.fillForm}/><Arr/><Box label={f.login}/><Arr/><Box label={f.apply} col={G}/><Arr/><End col={G}/>
                      </div>
                    </div>
                  </div>

                  <div style={divider}/>
                  <SecLabel t={f.f3}/>
                  <div style={row}>
                    <Box label="START" col={G}/>
                    <Arr/><Box label={f.myProfile}/>
                    <Arr/><Box label={f.editSection}/>
                    <Arr/><Box label={f.bioData} w={80}/>
                    <Arr/><Box label={f.languages} w={80}/>
                    <Arr/><Box label={f.education} w={80}/>
                    <Arr/><Box label={f.skills} w={70}/>
                    <Arr/><Box label={f.cvFiles} w={80}/>
                    <Arr/><Diamond label1={f.confirm1} label2={f.confirm2}/>
                    <div style={col}>
                      <div style={{ display:"flex", gap:8, alignItems:"center" }}>
                        <Lbl t={f.yes}/><Arr/><Box label={f.saved} col={G}/><Arr/><End col={G}/>
                      </div>
                      <div style={{ display:"flex", gap:8, alignItems:"center", marginTop:4 }}>
                        <Lbl t={f.no}/><Arr/><Box label={f.discard} col={R}/><Arr/><End/>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
            textTransform:"uppercase", color:T.mid, marginBottom:16 }}>{tg.neo_mvpLabel}</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:10, marginBottom:56 }}>
            {tg.neo_mvpTasks.map((t, ti) => {
              const tcol = ti===0 ? N_ACCENT : "#7c3aed";
              return (
              <div key={t.task} style={{ padding:"24px", background:"rgba(255,255,255,0.04)",
                border:`1px solid ${tcol}33`, borderRadius:6 }}>
                <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.12em",
                  textTransform:"uppercase", color:tcol, marginBottom:10 }}>{t.task}</p>
                <p style={{ fontFamily:T.font, fontSize:13, color:"rgba(255,255,255,0.45)", lineHeight:1.75, marginBottom:16 }}>{t.desc}</p>
                <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                  {t.steps.map((s, i) => (
                    <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
                      <span style={{ fontFamily:T.font, fontSize:9, fontWeight:700,
                        color:`${tcol}99`, flexShrink:0, marginTop:2, minWidth:16 }}>
                        {String(i+1).padStart(2,"0")}
                      </span>
                      <p style={{ fontFamily:T.font, fontSize:11, color:"rgba(255,255,255,0.38)",
                        lineHeight:1.55, margin:0 }}>{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            ); })}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
            textTransform:"uppercase", color:T.mid, marginBottom:8 }}>{tg.neo_journeyLabel}</p>
          <p style={{ fontFamily:T.font, fontSize:13, color:"rgba(255,255,255,0.35)", marginBottom:24, lineHeight:1.75 }}>
            {tg.neo_journeySubtitle}
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:16 }}>
            <div style={{ borderRadius:6, overflow:"hidden", border:"1px solid rgba(239,68,68,0.2)" }}>
              <div style={{ padding:"14px 20px", background:"rgba(239,68,68,0.12)",
                display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, color:"#f87171",
                  letterSpacing:"0.14em", textTransform:"uppercase", margin:0 }}>{tg.neo_asIsLabel}</p>
                <span style={{ fontSize:18 }}>😢</span>
              </div>
              <div style={{ background:"rgba(255,255,255,0.03)" }}>
                {asIs.map((item, i) => (
                  <div key={i} style={{ padding:"14px 20px", display:"flex", gap:14, alignItems:"flex-start",
                    borderBottom: i < asIs.length-1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                    <div style={{ width:34, height:34, borderRadius:"50%",
                      background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)",
                      display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, flexShrink:0 }}>
                      {item.feeling}
                    </div>
                    <div>
                      <p style={{ fontFamily:T.font, fontSize:12, fontWeight:600, color:T.white,
                        marginBottom:4, lineHeight:1.4 }}>{item.step}</p>
                      <p style={{ fontFamily:T.font, fontSize:11, color:"rgba(255,255,255,0.32)",
                        lineHeight:1.6, margin:0, fontStyle:"italic" }}>"{item.thought}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius:6, overflow:"hidden", border:"1px solid rgba(162,89,255,0.25)" }}>
              <div style={{ padding:"14px 20px", background:"rgba(162,89,255,0.12)",
                display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, color:N_ACCENT,
                  letterSpacing:"0.14em", textTransform:"uppercase", margin:0 }}>{tg.neo_toBeLabel}</p>
                <span style={{ fontSize:18 }}>😍</span>
              </div>
              <div style={{ background:"rgba(255,255,255,0.03)" }}>
                {toBe.map((item, i) => (
                  <div key={i} style={{ padding:"14px 20px", display:"flex", gap:14, alignItems:"flex-start",
                    borderBottom: i < toBe.length-1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                    <div style={{ width:34, height:34, borderRadius:"50%",
                      background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)",
                      display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, flexShrink:0 }}>
                      {item.feeling}
                    </div>
                    <div>
                      <p style={{ fontFamily:T.font, fontSize:12, fontWeight:600, color:T.white,
                        marginBottom:4, lineHeight:1.4 }}>{item.step}</p>
                      <p style={{ fontFamily:T.font, fontSize:11, color:"rgba(255,255,255,0.32)",
                        lineHeight:1.6, margin:0, fontStyle:"italic" }}>"{item.thought}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


function NeoStorytelling({ tg }) {
  return (
    <section style={{ background:T.light, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto" }}>
        <Reveal>
          <Label text={tg.neo_storyLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(26px,3.5vw,38px)", fontWeight:900,
            color:T.black, lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:12 }}>
            {tg.neo_storyTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:14, color:"#555", lineHeight:1.85, maxWidth:580, marginBottom:16 }}>
            {tg.neo_storyP}
          </p>
          <div style={{ display:"inline-block", padding:"6px 14px", marginBottom:40,
            background:"rgba(162,89,255,0.06)", border:"1px solid rgba(162,89,255,0.18)", borderRadius:3 }}>
            <p style={{ fontFamily:T.font, fontSize:11, color:"#7c3aed", fontWeight:600,
              letterSpacing:"0.06em", margin:0 }}>
              {tg.neo_storyBadge}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
            {tg.neo_scenes.map((s, i) => (
              <div key={s.n} style={{ display:"flex", gap:20, padding:"20px 0",
                borderBottom: i < 4 ? "1px solid rgba(0,0,0,0.07)" : "none",
                alignItems:"flex-start" }}>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
                  <div style={{ width:40, height:40, borderRadius:"50%",
                    background:"rgba(162,89,255,0.1)", border:"1px solid rgba(162,89,255,0.25)",
                    display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>
                    {s.icon}
                  </div>
                </div>
                <div style={{ flex:1, paddingTop:8 }}>
                  <span style={{ fontFamily:T.font, fontSize:9, fontWeight:700,
                    color:"rgba(162,89,255,0.55)", letterSpacing:"0.14em",
                    textTransform:"uppercase", display:"block", marginBottom:6 }}>Scene {s.n}</span>
                  <p style={{ fontFamily:T.font, fontSize:14, color:"#555", lineHeight:1.85, margin:0 }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div style={{ marginTop:48, padding:"28px 32px",
            background:"linear-gradient(135deg, rgba(162,89,255,0.08) 0%, rgba(124,58,237,0.05) 100%)",
            border:"1px solid rgba(162,89,255,0.2)", borderRadius:8,
            display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:24 }}>
            <div>
              <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
                textTransform:"uppercase", color:N_ACCENT, marginBottom:12 }}>{tg.neo_botPersonaLabel}</p>
              <div style={{ width:56, height:56, borderRadius:12, background:"rgba(162,89,255,0.2)",
                border:"1px solid rgba(162,89,255,0.3)", display:"flex",
                alignItems:"center", justifyContent:"center", fontSize:28, marginBottom:12 }}>🤖</div>
              <p style={{ fontFamily:T.font, fontSize:15, fontWeight:700, color:T.black, marginBottom:4 }}>Neo</p>
              <p style={{ fontFamily:T.font, fontSize:12, color:"#888" }}>Virtual assistant · job search accessibility</p>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {[
                { label:"Role", value:"Assist users through the job-search process on the platform" },
                { label:"Style", value:"Casual, friendly — always accessible and clear" },
                { label:"Personality", value:"Friendly · Wise · Empathetic" },
              ].map(attr => (
                <div key={attr.label}>
                  <p style={{ fontFamily:T.font, fontSize:9, fontWeight:700, letterSpacing:"0.12em",
                    textTransform:"uppercase", color:"rgba(162,89,255,0.6)", marginBottom:2 }}>{attr.label}</p>
                  <p style={{ fontFamily:T.font, fontSize:12, color:"#555", lineHeight:1.6 }}>{attr.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function NeoPrototype({ tg }) {
  const files = ["Neowhats1.png","Neowhats2.png","Neowhats3.png","Neowhats4.png","Neowhats5.png","Neowhats6.png"];

  return (
    <section style={{ background:T.light, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto" }}>
        <Reveal>
          <Label text={tg.neo_protoLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(26px,3.5vw,38px)", fontWeight:900,
            color:T.black, lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:12 }}>
            {tg.neo_protoTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:14, color:"#555", lineHeight:1.85, maxWidth:580, marginBottom:56 }}>
            {tg.neo_protoP}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))",
            gap:"clamp(12px,2vw,24px)",
          }}>
            {files.map((f) => (
              <div key={f} style={{
                borderRadius:16, overflow:"hidden",
                boxShadow:"0 8px 28px rgba(0,0,0,0.12)",
                border:"1px solid rgba(0,0,0,0.08)",
                background:"#fff",
              }}>
                <img
                  src={`${N_IMG}${f}`}
                  alt=""
                  style={{ width:"100%", height:"auto", display:"block" }}
                  onError={e => e.target.parentElement.style.display="none"}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function NeoLanding({ tg }) {
  return (
    <section style={{ background:T.dark, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto" }}>
        <Reveal>
          <Label text={tg.neo_landingLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(26px,3.5vw,38px)", fontWeight:900,
            color:T.white, lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:12 }}>
            {tg.neo_landingTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:14, color:"rgba(255,255,255,0.35)",
            lineHeight:1.85, maxWidth:560, marginBottom:40 }}>
            {tg.neo_landingP}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ borderRadius:8, overflow:"hidden",
            border:"1px solid rgba(162,89,255,0.2)",
            boxShadow:"0 20px 60px rgba(0,0,0,0.5)" }}>
            <img
              src={`${N_IMG}Website.png`}
              alt="Neo landing page design"
              style={{ width:"100%", height:"auto", display:"block" }}
              onError={e => e.target.parentElement.style.display="none"}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function NeoConclusions({ tg }) {
  return (
    <section style={{ background:T.light, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto", display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"clamp(40px,6vw,80px)" }}>
        <Reveal>
          <Label text={tg.neo_conclLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(26px,3.5vw,40px)", fontWeight:900,
            color:T.black, lineHeight:1.0, letterSpacing:"-0.02em", marginBottom:20 }}>
            {tg.neo_conclTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:14, color:"#555", lineHeight:1.9 }}>
            {tg.neo_conclP}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div style={{ display:"flex", flexDirection:"column" }}>
            {[
              { head:tg.neo_concl1Head||"", body:tg.neo_concl1Body||"" },
              { head:tg.neo_concl2Head||"", body:tg.neo_concl2Body||"" },
              { head:tg.neo_concl3Head||"", body:tg.neo_concl3Body||"" },
            ].map(({ head, body }, i) => (
              <div key={head} style={{ display:"flex", gap:20, paddingBottom:28, marginBottom:4,
                borderBottom:"1px solid rgba(0,0,0,0.08)" }}>
                <span style={{ fontFamily:T.font, fontSize:11, fontWeight:900, color:N_ACCENT,
                  flexShrink:0, marginTop:1 }}>{String(i+1).padStart(2,"0")}</span>
                <div>
                  <p style={{ fontFamily:T.font, fontSize:11, fontWeight:700, color:T.black,
                    letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:8 }}>{head}</p>
                  <p style={{ fontFamily:T.font, fontSize:13, color:"#666", lineHeight:1.85 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Neo({ onBack, tg, lang, setLang }) {
  const [navVisible, setNavVisible] = useState(false);
  useEffect(() => { setTimeout(() => setNavVisible(true), 1800); }, []);
  return (
    <>
      <style>{`
        html,body{overflow-x:hidden!important;}
        @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}
        @media (max-width:700px){
          [style*="repeat(auto-fit"]{grid-template-columns:1fr!important;}
          [style*="order:0"],[style*="order: 0"],[style*="order:1"],[style*="order: 1"]{order:unset!important;}
          section, div{max-width:100vw;}
        }
      `}</style>
      <CaseNav onBack={onBack} accent={N_ACCENT} visible={navVisible} tg={tg} lang={lang} setLang={setLang} />
      <NeoHero tg={tg} />
      <NeoWhat tg={tg} />
      <NeoLanding tg={tg} />
      <NeoGoal tg={tg} />
      <NeoDefinition tg={tg} lang={lang} />
      <NeoStorytelling tg={tg} />
      <NeoPrototype tg={tg} />
      <NeoConclusions tg={tg} />
      <CaseFooter onBack={onBack} accent={N_ACCENT} tg={tg} />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAPHUNTER CASE STUDY
// ─────────────────────────────────────────────────────────────────────────────
const MH_ACCENT = "#d4a017";
const MH_IMG    = "/Image/Maphunter/";

function MaphunterHero({ tg }) {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 200); return () => clearTimeout(t); }, []);
  return (
    <div style={{ position:"relative", width:"100vw", height:"100vh", minHeight:560,
      background:"#0c0a04", overflow:"hidden", display:"flex", alignItems:"flex-end" }}>
      <div style={{ position:"absolute", inset:0,
        background:"radial-gradient(ellipse at 60% 40%, rgba(92,50,210,0.2) 0%, transparent 65%)" }}/>
      <img src={MH_IMG+"Maphunterweb.png"} alt="Maphunter"
        style={{ position:"absolute", inset:0, width:"100%", height:"100%",
          objectFit:"cover", objectPosition:"center top", opacity:0.18, filter:"blur(2px) saturate(1.2)" }}
        onError={e=>e.target.style.display="none"} />
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"75%",
        background:"linear-gradient(to top, #0c0a04 25%, transparent)" }}/>
      <div style={{ position:"relative", zIndex:2, width:"100%",
        padding:"0 clamp(24px,6vw,80px) clamp(48px,8vh,80px)",
        opacity:on?1:0, transform:on?"none":"translateY(24px)",
        transition:"opacity 1s ease, transform 1s ease" }}>
        <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.22em",
          textTransform:"uppercase", color:MH_ACCENT, marginBottom:14 }}>
          {tg.mh_heroLabel}
        </p>
        <h1 style={{ fontFamily:T.font, fontSize:"clamp(52px,10vw,120px)", fontWeight:900,
          color:T.white, lineHeight:0.88, letterSpacing:"-0.03em", margin:"0 0 24px" }}>
          Maphunter
        </h1>
        <p style={{ fontFamily:T.font, fontSize:"clamp(14px,1.4vw,17px)", color:"rgba(255,255,255,0.45)",
          maxWidth:500, lineHeight:1.75, marginBottom:28 }}>
          {tg.mh_heroDesc}
        </p>
        <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
          {tg.mh_heroTags.map(t => (
            <span key={t} style={{ fontFamily:T.font, fontSize:10, fontWeight:600,
              padding:"6px 16px", border:`1px solid ${MH_ACCENT}44`,
              color:"rgba(255,255,255,0.5)", letterSpacing:"0.1em", borderRadius:3 }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function MaphunterBrief({ tg }) {
  return (
    <section style={{ background:T.light, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto", display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"clamp(40px,5vw,80px)" }}>
        <Reveal>
          <Label text={tg.mh_briefLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(26px,3.5vw,38px)", fontWeight:900,
            color:T.black, lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:32 }}>
            {tg.mh_briefTitle}
          </h2>
          <div style={{ display:"flex", flexDirection:"column" }}>
            {tg.mh_briefRows.map(([k,v]) => (
              <div key={k} style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap",
                gap:"4px 16px", padding:"13px 0", borderBottom:"1px solid rgba(0,0,0,0.1)" }}>
                <span style={{ fontFamily:T.font, fontSize:10, fontWeight:700, color:T.mid,
                  letterSpacing:"0.12em", textTransform:"uppercase" }}>{k}</span>
                <span style={{ fontFamily:T.font, fontSize:13, color:T.black, fontWeight:500, textAlign:"right" }}>{v}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div style={{ paddingTop:44 }}>
            <p style={{ fontFamily:T.font, fontSize:15, color:"#555", lineHeight:1.9, marginBottom:18 }}>
              {tg.mh_briefP1}
            </p>
            <p style={{ fontFamily:T.font, fontSize:15, color:"#555", lineHeight:1.9, marginBottom:18 }}>
              {tg.mh_briefP2}
            </p>
            <p style={{ fontFamily:T.font, fontSize:15, color:"#555", lineHeight:1.9 }}>
              {tg.mh_briefP3}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MaphunterBrand({ tg }) {
  const swatches = [
    { hex:"#5C32D2", name:"Purple",      role:"Primary — CTAs, headings, active states" },
    { hex:"#B1A8E1", name:"Soft purple", role:"Secondary — backgrounds, dividers, subtle UI" },
    { hex:"#FFD101", name:"Yellow",      role:"Accent — highlights, hover, key actions" },
    { hex:"#FFFFFF", name:"White",       role:"Base — surfaces, text on dark backgrounds" },
  ];
  return (
    <section style={{ background:"#0e0b18", padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto" }}>
        <Reveal>
          <Label text={tg.mh_brandLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(26px,3.5vw,38px)", fontWeight:900,
            color:T.white, lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:12 }}>
            {tg.mh_brandTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:14, color:"rgba(255,255,255,0.4)",
            lineHeight:1.85, maxWidth:560, marginBottom:56 }}>
            {tg.mh_brandP}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
            textTransform:"uppercase", color:"rgba(255,255,255,0.3)", marginBottom:24 }}>{tg.mh_typographyLabel}</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:2, marginBottom:48 }}>
            <div style={{ background:"#5C32D2", padding:"clamp(28px,4vw,48px)", borderRadius:"4px 0 0 4px" }}>
              <p style={{ fontFamily:"Georgia, serif", fontSize:"clamp(40px,6vw,72px)", fontWeight:900,
                color:"#FFD101", lineHeight:0.9, letterSpacing:"-0.02em", marginBottom:20 }}>
                Trump<br/>Gothic Pro
              </p>
              <p style={{ fontFamily:T.font, fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.5)",
                letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:8 }}>Display — Headings</p>
              <p style={{ fontFamily:T.font, fontSize:12, color:"rgba(255,255,255,0.45)", lineHeight:1.7 }}>
                Bold, directional, confident. Used for all display text, section titles, and high-impact moments.
              </p>
            </div>
            <div style={{ background:"#1a1428", border:"1px solid rgba(92,50,210,0.3)",
              padding:"clamp(28px,4vw,48px)", borderRadius:"0 4px 4px 0" }}>
              <p style={{ fontFamily:"Georgia, 'Times New Roman', serif",
                fontSize:"clamp(36px,5vw,60px)", fontWeight:400,
                color:"#B1A8E1", lineHeight:0.95, letterSpacing:"-0.01em",
                fontStyle:"italic", marginBottom:20 }}>
                Aa Kepler
              </p>
              <p style={{ fontFamily:T.font, fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.5)",
                letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:8 }}>Body — Reading text</p>
              <p style={{ fontFamily:T.font, fontSize:12, color:"rgba(255,255,255,0.45)", lineHeight:1.7 }}>
                Readable, warm, editorial. Used for body copy and descriptive content across all surfaces.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
            textTransform:"uppercase", color:"rgba(255,255,255,0.3)", marginBottom:24 }}>{tg.mh_colourLabel}</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:2, marginBottom:48 }}>
            {swatches.map(s => (
              <div key={s.hex}>
                <div style={{ height:120, background:s.hex,
                  border: s.hex === "#FFFFFF" ? "1px solid rgba(255,255,255,0.1)" : "none" }}/>
                <div style={{ padding:"14px 16px", background:"#16112a", border:"1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 }}>
                    <p style={{ fontFamily:T.font, fontSize:12, fontWeight:700, color:T.white, margin:0 }}>{s.name}</p>
                    <code style={{ fontFamily:"monospace", fontSize:11, color:"rgba(255,255,255,0.35)" }}>{s.hex}</code>
                  </div>
                  <p style={{ fontFamily:T.font, fontSize:11, color:"rgba(255,255,255,0.35)", lineHeight:1.6, margin:0 }}>{s.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.14}>
          <div style={{ padding:"24px 28px", background:"rgba(92,50,210,0.12)",
            border:"1px solid rgba(92,50,210,0.25)", borderRadius:4 }}>
            <p style={{ fontFamily:T.font, fontSize:13, color:"rgba(255,255,255,0.5)", lineHeight:1.85, margin:0 }}>
              {tg.mh_brandQuote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MaphunterWeb({ tg }) {
  const Img = ({ src, alt }) => (
    <div style={{ borderRadius:6, overflow:"hidden", background:"#f0ede8", border:"1px solid rgba(0,0,0,0.08)" }}>
      <img src={MH_IMG+src} alt={alt} style={{ width:"100%", height:"auto", display:"block" }}
        onError={e=>e.target.style.display="none"} />
    </div>
  );
  return (
    <section style={{ background:T.light, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto" }}>
        <Reveal>
          <Label text={tg.mh_webLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(26px,3.5vw,38px)", fontWeight:900,
            color:T.black, lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:12 }}>
            {tg.mh_webTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:14, color:"#555", lineHeight:1.85,
            maxWidth:560, marginBottom:48 }}>
            {tg.mh_webP}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <div style={{ marginBottom:16 }}>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
              <span style={{ fontFamily:T.font, fontSize:10, fontWeight:700, color:T.mid, letterSpacing:"0.16em", textTransform:"uppercase" }}>{tg.mh_beforeLabel}</span>
              <span style={{ color:"rgba(0,0,0,0.2)" }}>→</span>
              <span style={{ fontFamily:T.font, fontSize:10, fontWeight:700, color:"#5C32D2", letterSpacing:"0.16em", textTransform:"uppercase" }}>{tg.mh_afterLabel}</span>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:8, marginBottom:16 }}>
              <Img src="Maphunterwebold.png" alt="Maphunter web — before" />
              <Img src="Maphunterweb.png" alt="Maphunter web — after" />
            </div>
            <p style={{ fontFamily:T.font, fontSize:13, color:"#666", lineHeight:1.8 }}>
              {tg.mh_webCaption}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MaphunterMobile({ tg }) {
  const screens = tg.mh_mobileScreens.map((s, i) => ({
    ...s,
    old:  ["Toursold.png","Mapold.png","Puntoold.png","Agendaold.png"][i],
    new_: ["Toursnew.png","Mapnew.png","Puntonew.png","Agendanew.png"][i],
  }));
  const Img = ({ src, alt }) => (
    <div style={{ borderRadius:8, overflow:"hidden", boxShadow:"0 8px 32px rgba(0,0,0,0.4)", border:"1px solid rgba(255,255,255,0.06)" }}>
      <img src={MH_IMG+src} alt={alt} style={{ width:"100%", height:"auto", display:"block" }}
        onError={e=>e.target.style.display="none"} />
    </div>
  );
  return (
    <section style={{ background:T.dark, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto" }}>
        <Reveal>
          <Label text={tg.mh_mobileLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(26px,3.5vw,38px)", fontWeight:900,
            color:T.white, lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:12 }}>
            {tg.mh_mobileTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:14, color:"rgba(255,255,255,0.35)",
            lineHeight:1.85, maxWidth:520, marginBottom:56 }}>
            {tg.mh_mobileP}
          </p>
        </Reveal>
        {screens.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
              gap:"clamp(24px,4vw,52px)", borderTop:"1px solid rgba(255,255,255,0.06)",
              padding:"clamp(36px,5vw,52px) 0", alignItems:"center" }}>
              <div style={{ order:i%2===0?0:1 }}>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:16 }}>
                  <span style={{ fontFamily:T.font, fontSize:9, fontWeight:700, color:"rgba(255,255,255,0.3)", letterSpacing:"0.14em", textTransform:"uppercase" }}>Before</span>
                  <span style={{ color:"rgba(255,255,255,0.15)", fontSize:10 }}>→</span>
                  <span style={{ fontFamily:T.font, fontSize:9, fontWeight:700, color:"#5C32D2", letterSpacing:"0.14em", textTransform:"uppercase" }}>After</span>
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                  <Img src={s.old} alt={`${s.title} — before`} />
                  <Img src={s.new_} alt={`${s.title} — after`} />
                </div>
              </div>
              <div style={{ order:i%2===0?1:0 }}>
                <span style={{ fontFamily:T.font, fontSize:52, fontWeight:900,
                  color:"rgba(255,255,255,0.04)", lineHeight:1, display:"block",
                  marginBottom:-8, letterSpacing:"-0.04em" }}>0{i+1}</span>
                <h3 style={{ fontFamily:T.font, fontSize:"clamp(18px,2.2vw,24px)", fontWeight:900,
                  color:T.white, marginBottom:14, letterSpacing:"-0.02em" }}>{s.title}</h3>
                <p style={{ fontFamily:T.font, fontSize:14, color:"rgba(255,255,255,0.4)", lineHeight:1.85 }}>{s.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function MaphunterBeyond({ tg }) {
  const MH_YELLOW = "#FFD101";
  const Img = ({ src, alt }) => (
    <div style={{ borderRadius:8, overflow:"hidden", boxShadow:"0 8px 32px rgba(0,0,0,0.4)", border:"1px solid rgba(255,255,255,0.08)" }}>
      <img src={MH_IMG+src} alt={alt} style={{ width:"100%", height:"auto", display:"block" }}
        onError={e=>e.target.style.display="none"} />
    </div>
  );
  const ideas = tg.mh_beyondIdeas;
  return (
    <section style={{ background:"#0e0b18", padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto" }}>
        <Reveal>
          <Label text={tg.mh_beyondLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(26px,3.5vw,38px)", fontWeight:900,
            color:T.white, lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:12 }}>
            {tg.mh_beyondTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:14, color:"rgba(255,255,255,0.4)",
            lineHeight:1.85, maxWidth:600, marginBottom:56 }}>
            {tg.mh_beyondP}
          </p>
        </Reveal>
        {ideas.map((idea, i) => (
          <Reveal key={idea.n} delay={i * 0.06}>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
              gap:"clamp(24px,4vw,52px)", borderTop:"1px solid rgba(255,255,255,0.06)",
              padding:"clamp(36px,5vw,52px) 0", alignItems:"center" }}>
              <div style={{ order:i%2===0?0:1, maxWidth:260, margin:"0 auto", width:"100%" }}>
                <Img src={idea.img} alt={idea.title} />
              </div>
              <div style={{ order:i%2===0?1:0 }}>
                <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
                  <span style={{ fontFamily:T.font, fontSize:11, fontWeight:900, color:MH_YELLOW }}>{idea.n}</span>
                  <div style={{ height:1, flex:1, background:"rgba(255,255,255,0.08)" }}/>
                  <span style={{ fontFamily:T.font, fontSize:9, fontWeight:700, color:"rgba(255,255,255,0.25)",
                    letterSpacing:"0.16em", textTransform:"uppercase" }}>{tg.mh_ownInitiative}</span>
                </div>
                <h3 style={{ fontFamily:T.font, fontSize:"clamp(18px,2.2vw,24px)", fontWeight:900,
                  color:T.white, marginBottom:14, letterSpacing:"-0.02em" }}>{idea.title}</h3>
                <p style={{ fontFamily:T.font, fontSize:14, color:"rgba(255,255,255,0.4)", lineHeight:1.85 }}>{idea.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function MaphunterDecisions({ tg }) {
  return (
    <section style={{ background:T.light, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto" }}>
        <Reveal>
          <Label text={tg.mh_decisionsLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(26px,3.5vw,38px)", fontWeight:900,
            color:T.black, lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:12 }}>
            {tg.mh_decisionsTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:14, color:"#666", lineHeight:1.85,
            maxWidth:540, marginBottom:48 }}>{tg.mh_decisionsP}</p>
        </Reveal>
        <div style={{ display:"flex", flexDirection:"column", gap:2 }}>
          {tg.mh_decisions.map((d, i) => (
            <Reveal key={d.n} delay={i * 0.07}>
              <div style={{ display:"grid", gridTemplateColumns:"64px 1fr",
                gap:"clamp(20px,3vw,40px)", padding:"clamp(28px,4vw,40px) 0",
                borderTop:"1px solid rgba(0,0,0,0.08)" }}>
                <div>
                  <p style={{ fontFamily:T.font, fontSize:36, fontWeight:900,
                    color:"rgba(0,0,0,0.06)", lineHeight:1, margin:0 }}>{d.n}</p>
                </div>
                <div>
                  <p style={{ fontFamily:T.font, fontSize:"clamp(15px,1.6vw,18px)", fontWeight:800,
                    color:T.black, lineHeight:1.2, marginBottom:16,
                    letterSpacing:"-0.01em" }}>{d.head}</p>
                  <p style={{ fontFamily:T.font, fontSize:14, color:"#555",
                    lineHeight:1.9, maxWidth:600, margin:0 }}>{d.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MaphunterConclusions({ tg }) {
  return (
    <section style={{ background:T.light, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto", display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"clamp(40px,6vw,80px)" }}>
        <Reveal>
          <Label text={tg.mh_conclLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(26px,3.5vw,40px)", fontWeight:900,
            color:T.black, lineHeight:1.0, letterSpacing:"-0.02em", marginBottom:20 }}>
            {tg.mh_conclTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:14, color:"#555", lineHeight:1.9 }}>
            {tg.mh_conclP}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div style={{ display:"flex", flexDirection:"column" }}>
            {[
              { head:tg.mh_concl1Head||"", body:tg.mh_concl1Body||"" },
              { head:tg.mh_concl2Head||"", body:tg.mh_concl2Body||"" },
              { head:tg.mh_concl3Head||"", body:tg.mh_concl3Body||"" },
            ].map(({ head, body }, i) => (
              <div key={head} style={{ display:"flex", gap:20, paddingBottom:28,
                borderBottom:"1px solid rgba(0,0,0,0.08)", marginBottom:4 }}>
                <span style={{ fontFamily:T.font, fontSize:11, fontWeight:900, color:MH_ACCENT,
                  flexShrink:0, marginTop:1 }}>{String(i+1).padStart(2,"0")}</span>
                <div>
                  <p style={{ fontFamily:T.font, fontSize:11, fontWeight:700, color:T.black,
                    letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:8 }}>{head}</p>
                  <p style={{ fontFamily:T.font, fontSize:13, color:"#666", lineHeight:1.85 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Maphunter({ onBack, tg, lang, setLang }) {
  return (
    <>
      <style>{`
        html,body{overflow-x:hidden!important;}
        @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}
        @media (max-width:700px){
          [style*="repeat(auto-fit"]{grid-template-columns:1fr!important;}
          [style*="order:0"],[style*="order: 0"],[style*="order:1"],[style*="order: 1"]{order:unset!important;}
          section, div{max-width:100vw;}
        }
      `}</style>
      <CaseNav onBack={onBack} accent={MH_ACCENT} visible={true} tg={tg} lang={lang} setLang={setLang} />
      <MaphunterHero tg={tg} />
      <MaphunterBrief tg={tg} />
      <MaphunterBrand tg={tg} />
      <MaphunterWeb tg={tg} />
      <MaphunterMobile tg={tg} />
      <MaphunterBeyond tg={tg} />
      <MaphunterDecisions tg={tg} />
      <MaphunterConclusions tg={tg} />
      <CaseFooter onBack={onBack} accent={MH_ACCENT} tg={tg} />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ENCUENTRA CASE STUDY
// ─────────────────────────────────────────────────────────────────────────────
const EN_ACCENT = "#f5a623";
const EN_IMG    = "/Image/Encuentra/";

function EncuentraHero({ tg }) {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 200); return () => clearTimeout(t); }, []);
  return (
    <div style={{ position:"relative", width:"100vw", height:"100vh", minHeight:560,
      background:"#080c14", overflow:"hidden", display:"flex", alignItems:"flex-end" }}>
      <div style={{ position:"absolute", inset:0,
        background:"radial-gradient(ellipse at 30% 50%, rgba(245,166,35,0.06) 0%, transparent 55%)" }}/>
      <div style={{ position:"absolute", right:0, top:"50%", transform:"translateY(-50%)",
        display:"flex", flexDirection:"row-reverse", alignItems:"center", paddingRight:"clamp(40px,6vw,80px)" }}>
        {[
          { file:"Mockuphero1.png", blur:0, opacity:1, w:"clamp(120px,13vw,185px)" },
          { file:"Mockuphero2.png", blur:4, opacity:0.55, w:"clamp(100px,11vw,155px)" },
          { file:"Mockuphero3.png", blur:9, opacity:0.28, w:"clamp(80px,9vw,125px)" },
        ].map((p, i) => (
          <div key={i} style={{ width:p.w, flexShrink:0, marginLeft:i>0?"-8px":0,
            opacity:on?p.opacity:0, transition:`opacity ${1+i*0.15}s ease ${0.1+i*0.15}s`,
            borderRadius:18, overflow:"hidden", boxShadow:"0 20px 52px rgba(0,0,0,0.6)",
            border:"1px solid rgba(255,255,255,0.1)",
            filter:p.blur>0?`blur(${p.blur}px)`:"none", zIndex:3-i }}>
            <img src={EN_IMG+p.file} alt=""
              style={{ width:"100%", height:"auto", display:"block" }}
              onError={e=>e.target.style.display="none"} />
          </div>
        ))}
      </div>
      <div style={{ position:"absolute", inset:0,
        background:"radial-gradient(ellipse at 65% 40%, rgba(245,166,35,0.12) 0%, transparent 60%)" }}/>
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"75%",
        background:"linear-gradient(to top, #080c14 25%, transparent)" }}/>
      <div style={{ position:"relative", zIndex:2, width:"100%",
        padding:"0 clamp(40px,6vw,80px) clamp(48px,8vh,80px)",
        opacity:on?1:0, transform:on?"none":"translateY(24px)",
        transition:"opacity 1s ease, transform 1s ease" }}>
        <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.22em",
          textTransform:"uppercase", color:EN_ACCENT, marginBottom:14 }}>
          {tg.en_heroLabel}
        </p>
        <h1 style={{ fontFamily:T.font, fontSize:"clamp(52px,10vw,120px)", fontWeight:900,
          color:T.white, lineHeight:0.88, letterSpacing:"-0.03em", margin:"0 0 24px" }}>
          Encuentra
        </h1>
        <p style={{ fontFamily:T.font, fontSize:"clamp(14px,1.4vw,17px)", color:"rgba(255,255,255,0.45)",
          maxWidth:480, lineHeight:1.75, marginBottom:28 }}>
          {tg.en_heroDesc}
        </p>
        <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
          {tg.en_heroTags.map(t => (
            <span key={t} style={{ fontFamily:T.font, fontSize:10, fontWeight:600,
              padding:"6px 16px", border:`1px solid ${EN_ACCENT}44`,
              color:"rgba(255,255,255,0.5)", letterSpacing:"0.1em", borderRadius:3 }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function EncuentraWhat({ tg }) {
  return (
    <section style={{ background:T.light, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto", display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"clamp(40px,5vw,80px)" }}>
        <Reveal>
          <Label text={tg.en_whatLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(26px,3.5vw,38px)", fontWeight:900,
            color:T.black, lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:32 }}>
            {tg.en_whatTitle}
          </h2>
          <div style={{ display:"flex", flexDirection:"column" }}>
            {tg.en_whatRows.map(([k,v]) => (
              <div key={k} style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:"4px 16px", padding:"13px 0",
                borderBottom:"1px solid rgba(0,0,0,0.1)" }}>
                <span style={{ fontFamily:T.font, fontSize:10, fontWeight:700, color:T.mid,
                  letterSpacing:"0.12em", textTransform:"uppercase" }}>{k}</span>
                <span style={{ fontFamily:T.font, fontSize:13, color:T.black, fontWeight:500, textAlign:"right" }}>{v}</span>
              </div>
            ))}
            <div style={{ paddingTop:20 }}>
              <a href="https://www.figma.com/proto/fjO8DGoD83EPDDTdwblSjh/ENCUENTRA-APP?type=design&node-id=59-17305&viewport=850%2C599%2C0.04&t=6Bpwg8tL2CWJvzZH-1&scaling=min-zoom&starting-point-node-id=59%3A17305&page-id=2%3A15761"
                target="_blank" rel="noreferrer"
                style={{ display:"inline-flex", alignItems:"center", gap:10,
                  fontFamily:T.font, fontSize:12, fontWeight:700, color:EN_ACCENT,
                  textDecoration:"none", border:`1px solid ${EN_ACCENT}44`, borderRadius:4,
                  padding:"10px 20px", letterSpacing:"0.06em", transition:"all 0.18s" }}
                onMouseEnter={e=>{ e.currentTarget.style.background=EN_ACCENT; e.currentTarget.style.color="#fff"; }}
                onMouseLeave={e=>{ e.currentTarget.style.background="transparent"; e.currentTarget.style.color=EN_ACCENT; }}>
                {tg.en_viewPrototype}
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div style={{ paddingTop:44 }}>
            <p style={{ fontFamily:T.font, fontSize:15, color:"#555", lineHeight:1.9, marginBottom:18 }}>
              {tg.en_whatP1}
            </p>
            <p style={{ fontFamily:T.font, fontSize:15, color:"#555", lineHeight:1.9, marginBottom:18 }}>
              {tg.en_whatP2}
            </p>
            <p style={{ fontFamily:T.font, fontSize:15, color:"#555", lineHeight:1.9 }}>
              {tg.en_whatP3}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EncuentraResearch({ tg }) {
  const P = ({ children }) => (
    <p style={{ fontFamily:T.font, fontSize:13, color:"rgba(255,255,255,0.42)", lineHeight:1.8, margin:0 }}>{children}</p>
  );
  const Tag = ({ children, col }) => (
    <span style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.12em",
      textTransform:"uppercase", color:col, display:"block", marginBottom:8 }}>{children}</span>
  );
  return (
    <section style={{ background:T.dark, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto" }}>
        <Reveal>
          <Label text={tg.en_researchLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(26px,3.5vw,38px)", fontWeight:900,
            color:T.white, lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:12 }}>
            {tg.en_researchTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:14, color:"rgba(255,255,255,0.35)",
            lineHeight:1.85, maxWidth:640, marginBottom:48 }}>
            {tg.en_researchP}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
            textTransform:"uppercase", color:T.mid, marginBottom:16 }}>{tg.en_benchmarkLabel}</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:10, marginBottom:48 }}>
            {tg.en_benchmarks.map(b => (
              <div key={b.name} style={{ padding:"18px 20px", background:"rgba(255,255,255,0.04)",
                border:"1px solid rgba(255,255,255,0.07)", borderRadius:6 }}>
                <p style={{ fontFamily:T.font, fontSize:12, fontWeight:700, color:T.white, marginBottom:12 }}>{b.name}</p>
                <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                  <div style={{ display:"flex", gap:8 }}>
                    <span style={{ color:"#34d399", fontSize:10, flexShrink:0, marginTop:1 }}>+</span>
                    <p style={{ fontFamily:T.font, fontSize:12, color:"rgba(255,255,255,0.4)", lineHeight:1.6, margin:0 }}>{b.pro}</p>
                  </div>
                  <div style={{ display:"flex", gap:8 }}>
                    <span style={{ color:"#f87171", fontSize:10, flexShrink:0, marginTop:1 }}>-</span>
                    <p style={{ fontFamily:T.font, fontSize:12, color:"rgba(255,255,255,0.4)", lineHeight:1.6, margin:0 }}>{b.con}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:12, marginBottom:48 }}>
            <div style={{ padding:"24px", background:`${EN_ACCENT}08`, border:`1px solid ${EN_ACCENT}22`, borderRadius:6 }}>
              <Tag col={EN_ACCENT}>{tg.en_profileLabel}</Tag>
              {tg.en_profileRows.map(([k,v]) => (
                <div key={k} style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline",
                  gap:16, padding:"9px 0", borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
                  <span style={{ fontFamily:T.font, fontSize:11, color:"rgba(255,255,255,0.35)",
                    fontWeight:600, textTransform:"uppercase", letterSpacing:"0.08em", flexShrink:0 }}>{k}</span>
                  <span style={{ fontFamily:T.font, fontSize:12, color:T.white, fontWeight:500 }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ padding:"24px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:6 }}>
              <Tag col={T.mid}>{tg.en_responsesLabel}</Tag>
              {tg.en_responses.map((r, i) => (
                <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
                  <span style={{ color:EN_ACCENT, fontSize:10, marginTop:3, flexShrink:0, fontWeight:700 }}>—</span>
                  <P>{r}</P>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
            textTransform:"uppercase", color:T.mid, marginBottom:16 }}>{tg.en_personasLabel}</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:12, marginBottom:48 }}>
            {tg.en_personas.map(persona => (
              <div key={persona.name} style={{ background:"rgba(255,255,255,0.04)",
                border:"1px solid rgba(255,255,255,0.08)", borderRadius:6, overflow:"hidden" }}>
                <div style={{ background:"#0D3C6B", padding:"20px 24px", display:"flex", alignItems:"center", gap:16 }}>
                  <div style={{ width:44, height:44, borderRadius:"50%",
                    background:`${EN_ACCENT}33`, border:`2px solid ${EN_ACCENT}55`,
                    display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>👤</div>
                  <div>
                    <p style={{ fontFamily:T.font, fontSize:15, fontWeight:700, color:T.white, margin:0 }}>{persona.name}</p>
                    <p style={{ fontFamily:T.font, fontSize:12, color:"rgba(255,255,255,0.45)", margin:0 }}>{persona.role}</p>
                  </div>
                </div>
                <div style={{ padding:"20px 24px", display:"flex", flexDirection:"column", gap:16 }}>
                  <div>
                    <p style={{ fontFamily:T.font, fontSize:9, fontWeight:700, letterSpacing:"0.12em",
                      textTransform:"uppercase", color:"#34d399", marginBottom:8 }}>{tg.en_goalsLabel}</p>
                    {persona.goals.map(g => (
                      <div key={g} style={{ display:"flex", gap:8, marginBottom:6 }}>
                        <span style={{ color:"#34d399", fontSize:10, flexShrink:0 }}>·</span>
                        <P>{g}</P>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p style={{ fontFamily:T.font, fontSize:9, fontWeight:700, letterSpacing:"0.12em",
                      textTransform:"uppercase", color:"#f87171", marginBottom:8 }}>{tg.en_frustrationsLabel}</p>
                    {persona.frustrations.map(f => (
                      <div key={f} style={{ display:"flex", gap:8, marginBottom:6 }}>
                        <span style={{ color:"#f87171", fontSize:10, flexShrink:0 }}>·</span>
                        <P>{f}</P>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
            textTransform:"uppercase", color:T.mid, marginBottom:16 }}>{tg.en_empathyLabel}</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:8 }}>
            {tg.en_empathy.map(e => (
              <div key={e.label} style={{ padding:"18px", background:"rgba(255,255,255,0.04)",
                border:"1px solid rgba(255,255,255,0.07)", borderRadius:4 }}>
                <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, color:EN_ACCENT,
                  letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:10 }}>{e.label}</p>
                <P>{e.body}</P>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EncuentraDefinition({ tg }) {
  const IANode = ({ label, col = "#1d4ed8", w = 100 }) => (
    <div style={{ padding:"7px 14px", background:col, borderRadius:4,
      fontFamily:T.font, fontSize:11, fontWeight:700, color:"#fff",
      textAlign:"center", minWidth:w, whiteSpace:"nowrap" }}>{label}</div>
  );
  const IAChild = ({ label }) => (
    <div style={{ padding:"6px 12px", background:"#EE9649", borderRadius:3,
      fontFamily:T.font, fontSize:10, fontWeight:700, color:"#fff",
      textAlign:"center", whiteSpace:"nowrap" }}>{label}</div>
  );
  const Line = ({ h = 16 }) => (
    <div style={{ width:1, height:h, background:"rgba(0,0,0,0.15)", margin:"0 auto" }}/>
  );
  const FlowStep = ({ label, type = "step" }) => {
    const styles = {
      step:     { bg:"#0D3C6B", color:"#fff", radius:4 },
      start:    { bg:"#047E17", color:"#fff", radius:20 },
      end:      { bg:"#BF432A", color:"#fff", radius:20 },
      decision: { bg:"#F95939", color:"#fff", radius:4 },
    };
    const s = styles[type] || styles.step;
    return (
      <div style={{ padding:"6px 14px", background:s.bg, borderRadius:s.radius,
        fontFamily:T.font, fontSize:11, fontWeight:600, color:s.color,
        textAlign:"center", whiteSpace:"nowrap", flexShrink:0 }}>{label}</div>
    );
  };
  const Arr = () => <span style={{ color:"rgba(0,0,0,0.22)", fontSize:12, flexShrink:0 }}>→</span>;
  return (
    <section style={{ background:T.light, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto" }}>
        <Reveal>
          <Label text={tg.en_defLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(26px,3.5vw,38px)", fontWeight:900,
            color:T.black, lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:12 }}>
            {tg.en_defTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:14, color:"#555", lineHeight:1.85,
            maxWidth:600, marginBottom:56 }}>
            {tg.en_defP}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
            textTransform:"uppercase", color:T.mid, marginBottom:24 }}>{tg.en_iaLabel}</p>
          <div style={{ background:T.white, border:"1px solid rgba(0,0,0,0.08)",
            borderRadius:8, padding:"clamp(24px,4vw,40px)", marginBottom:48, overflowX:"auto" }}>
            <div style={{ display:"flex", justifyContent:"center", marginBottom:0 }}>
              <IANode label="Encuentra" col="#BF432A" w={110} />
            </div>
            <Line h={20}/>
            <div style={{ display:"flex", gap:8, justifyContent:"center", alignItems:"flex-start", minWidth:560 }}>
              {tg.en_iaTree.map(sec => (
                <div key={sec.label} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:0 }}>
                  <IANode label={sec.label} col="#345270" w={90}/>
                  <Line h={16}/>
                  <div style={{ display:"flex", flexDirection:"column", gap:6, alignItems:"center" }}>
                    {sec.children.map(c => <IAChild key={c} label={c}/>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
            textTransform:"uppercase", color:T.mid, marginBottom:16 }}>{tg.en_taskFlowsLabel}</p>
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            <div style={{ background:T.white, border:"1px solid rgba(0,0,0,0.08)", borderRadius:6, padding:"20px 24px" }}>
              <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.12em",
                textTransform:"uppercase", color:EN_ACCENT, marginBottom:14 }}>{tg.en_task1Label}</p>
              <div style={{ display:"flex", alignItems:"center", gap:6, flexWrap:"wrap", rowGap:6 }}>
                {tg.en_flow1.map((label, i) => (
                <span key={i} style={{display:"flex",alignItems:"center",gap:6}}>
                  {i > 0 && <Arr/>}
                  <FlowStep label={label} type={tg.en_flow1types[i]}/>
                </span>
              ))}
              </div>
            </div>
            <div style={{ background:T.white, border:"1px solid rgba(0,0,0,0.08)", borderRadius:6, padding:"20px 24px" }}>
              <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.12em",
                textTransform:"uppercase", color:EN_ACCENT, marginBottom:14 }}>{tg.en_task2Label}</p>
              <div style={{ display:"flex", alignItems:"center", gap:6, flexWrap:"wrap", rowGap:6 }}>
                {tg.en_flow2.map((label, i) => (
                <span key={i} style={{display:"flex",alignItems:"center",gap:6}}>
                  {i > 0 && <Arr/>}
                  <FlowStep label={label} type={tg.en_flow2types[i]}/>
                </span>
              ))}
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.14}>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
            textTransform:"uppercase", color:T.mid, marginBottom:8, marginTop:40 }}>{tg.en_wireframesLowLabel}</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))", gap:10, marginBottom:32 }}>
            {["CardLOW","LoginLOW","MenuLOW"].map(f => (
              <div key={f} style={{ borderRadius:6, overflow:"hidden", border:"1px solid rgba(0,0,0,0.08)", background:"#fafaf8" }}>
                <img src={`/Image/Encuentra/${f}.png`} alt={f}
                  style={{ width:"100%", height:"auto", display:"block" }}
                  onError={e=>e.target.style.display="none"} />
                <div style={{ padding:"8px 12px", borderTop:"1px solid rgba(0,0,0,0.06)" }}>
                  <p style={{ fontFamily:T.font, fontSize:9, fontWeight:700, color:T.mid,
                    letterSpacing:"0.1em", textTransform:"uppercase", margin:0 }}>
                    {f.replace("LOW","")} — sketch
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
            textTransform:"uppercase", color:T.mid, marginBottom:8 }}>{tg.en_wireframesMidLabel}</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))", gap:10 }}>
            {["CardMEDIUM","LoginMEDIUM","MenuMEDIUM"].map(f => (
              <div key={f} style={{ borderRadius:6, overflow:"hidden", border:"1px solid rgba(0,0,0,0.08)", background:"#fafaf8" }}>
                <img src={`/Image/Encuentra/${f}.png`} alt={f}
                  style={{ width:"100%", height:"auto", display:"block" }}
                  onError={e=>e.target.style.display="none"} />
                <div style={{ padding:"8px 12px", borderTop:"1px solid rgba(0,0,0,0.06)" }}>
                  <p style={{ fontFamily:T.font, fontSize:9, fontWeight:700, color:T.mid,
                    letterSpacing:"0.1em", textTransform:"uppercase", margin:0 }}>
                    {f.replace("MEDIUM","")} — digital lo-fi
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EncuentraPrototype({ tg }) {
  const AppScreen = ({ file, label }) => (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10 }}>
      <div style={{ borderRadius:12, overflow:"hidden",
        boxShadow:"0 8px 32px rgba(0,0,0,0.4)", border:"1px solid rgba(255,255,255,0.08)", background:"#111" }}>
        <img src={`/Image/Encuentra/${file}.png`} alt={label}
          style={{ width:"100%", height:"auto", display:"block" }}
          onError={e => e.target.style.display="none"} />
      </div>
      <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.12em",
        textTransform:"uppercase", color:"rgba(255,255,255,0.3)", margin:0 }}>{label}</p>
    </div>
  );
  return (
    <section style={{ background:T.dark, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto" }}>
        <Reveal>
          <Label text={tg.en_protoLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(26px,3.5vw,38px)", fontWeight:900,
            color:T.white, lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:12 }}>
            {tg.en_protoTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:14, color:"rgba(255,255,255,0.35)",
            lineHeight:1.85, maxWidth:540, marginBottom:48 }}>
            {tg.en_protoP}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:24, marginBottom:64 }}>
            <AppScreen file="Login" label="Login" />
            <AppScreen file="Pagina de inicio" label="Home feed" />
            <AppScreen file="Pagina de inicio2" label="Notifications" />
            <AppScreen file="Calendario" label="Calendar" />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
            gap:"clamp(24px,4vw,52px)", borderTop:"1px solid rgba(255,255,255,0.06)",
            padding:"clamp(36px,5vw,52px) 0", alignItems:"center" }}>
            <div><AppScreen file="Pagina de inicio" label="" /></div>
            <div>
              <span style={{ fontFamily:T.font, fontSize:52, fontWeight:900,
                color:"rgba(255,255,255,0.04)", lineHeight:1, display:"block",
                marginBottom:-8, letterSpacing:"-0.04em" }}>01</span>
              <h3 style={{ fontFamily:T.font, fontSize:"clamp(18px,2.2vw,24px)", fontWeight:900,
                color:T.white, marginBottom:14, letterSpacing:"-0.02em" }}>{tg.en_feedTitle}</h3>
              <p style={{ fontFamily:T.font, fontSize:14, color:"rgba(255,255,255,0.4)", lineHeight:1.85 }}>
                {tg.en_feedBody}
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
            gap:"clamp(24px,4vw,52px)", borderTop:"1px solid rgba(255,255,255,0.06)",
            padding:"clamp(36px,5vw,52px) 0", alignItems:"center" }}>
            <div style={{ order:1 }}><AppScreen file="MensajePop" label="" /></div>
            <div style={{ order:0 }}>
              <span style={{ fontFamily:T.font, fontSize:52, fontWeight:900,
                color:"rgba(255,255,255,0.04)", lineHeight:1, display:"block",
                marginBottom:-8, letterSpacing:"-0.04em" }}>02</span>
              <h3 style={{ fontFamily:T.font, fontSize:"clamp(18px,2.2vw,24px)", fontWeight:900,
                color:T.white, marginBottom:14, letterSpacing:"-0.02em" }}>{tg.en_msgTitle}</h3>
              <p style={{ fontFamily:T.font, fontSize:14, color:"rgba(255,255,255,0.4)", lineHeight:1.85 }}>
                {tg.en_msgBody}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EncuentraUI({ tg }) {
  const EN_PRIMARY = "#BF432A";
  const EN_NAVY    = "#0D3C6B";
  const EN_ORANGE  = "#F95939";

  // Colour swatch — full-height strip with hex + label on hover
  const Swatch = ({ hex, name, role, primary = false }) => (
    <div style={{ display:"flex", flexDirection:"column", borderRadius:8, overflow:"hidden",
      boxShadow: primary ? `0 8px 32px ${hex}44` : "none",
      flex: primary ? "1.6" : "1", minWidth:0 }}>
      <div style={{ background:hex, flex:1, minHeight: primary ? 140 : 100,
        border: hex === "#FEFBEF" ? "1px solid rgba(0,0,0,0.08)" : "none" }}/>
      <div style={{ background:"#fff", padding:"10px 12px", borderTop:"1px solid rgba(0,0,0,0.07)" }}>
        <p style={{ fontFamily:T.font, fontSize:10, fontWeight:800, color:T.black,
          letterSpacing:"0.04em", marginBottom:2 }}>{hex}</p>
        <p style={{ fontFamily:T.font, fontSize:10, color:T.mid }}>{name}</p>
        {role && <p style={{ fontFamily:T.font, fontSize:9, color:"#bbb", marginTop:2 }}>{role}</p>}
      </div>
    </div>
  );

  // Section divider with label
  const KitSection = ({ label, children, delay = 0 }) => (
    <Reveal delay={delay}>
      <div style={{ marginBottom:56 }}>
        <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:24 }}>
          <p style={{ fontFamily:T.font, fontSize:9, fontWeight:800, letterSpacing:"0.2em",
            textTransform:"uppercase", color:EN_PRIMARY, flexShrink:0, margin:0 }}>{label}</p>
          <div style={{ flex:1, height:1, background:"rgba(0,0,0,0.08)" }}/>
        </div>
        {children}
      </div>
    </Reveal>
  );

  // Component thumbnail — white card, image fills, label underneath with pill tag
  const UIImg = ({ file, label, span = 1, tall = false }) => (
    <div style={{ gridColumn:`span ${span}`, borderRadius:10, overflow:"hidden",
      border:"1px solid rgba(0,0,0,0.07)", background:"#fff",
      boxShadow:"0 2px 12px rgba(0,0,0,0.06)", display:"flex", flexDirection:"column" }}>
      <div style={{ flex:1, background:"#f9f9f7", display:"flex", alignItems:"center",
        justifyContent:"center", padding:"clamp(16px,2vw,28px)",
        minHeight: tall ? 200 : 130 }}>
        <img src={`/Image/Encuentra/${file}.png`} alt={label}
          style={{ width:"100%", height:"100%", objectFit:"contain", display:"block" }}
          onError={e => e.target.parentElement.style.display="none"} />
      </div>
      <div style={{ padding:"8px 14px 10px", borderTop:"1px solid rgba(0,0,0,0.06)",
        display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, color:"#333",
          letterSpacing:"0.03em", margin:0 }}>{label}</p>
      </div>
    </div>
  );

  return (
    <section style={{ background:T.light, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto" }}>

        {/* Header */}
        <Reveal>
          <div style={{ display:"grid", gridTemplateColumns:"1fr auto", alignItems:"end",
            gap:40, marginBottom:64, borderBottom:"2px solid rgba(0,0,0,0.08)", paddingBottom:40 }}>
            <div>
              <Label text={tg.en_uiLabel} col={T.mid} />
              <h2 style={{ fontFamily:T.font, fontSize:"clamp(28px,4vw,44px)", fontWeight:900,
                color:T.black, lineHeight:0.95, letterSpacing:"-0.03em", marginBottom:16 }}>
                {tg.en_uiTitle}
              </h2>
              <p style={{ fontFamily:T.font, fontSize:14, color:"#777", lineHeight:1.85, maxWidth:460, margin:0 }}>
                {tg.en_uiP}
              </p>
            </div>
            {/* System stats */}
            <div style={{ display:"flex", flexDirection:"column", gap:8, flexShrink:0 }}>
              {[["8","Colours"],["3","Typefaces"],["18+","Components"]].map(([n, l]) => (
                <div key={l} style={{ display:"flex", alignItems:"baseline", gap:8 }}>
                  <span style={{ fontFamily:T.font, fontSize:28, fontWeight:900,
                    color:EN_PRIMARY, lineHeight:1 }}>{n}</span>
                  <span style={{ fontFamily:T.font, fontSize:11, color:T.mid }}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Colour palette — horizontal strip */}
        <KitSection label={tg.en_colourLabel} delay={0.04}>
          <div style={{ display:"flex", gap:6, height:160, alignItems:"stretch" }}>
            <Swatch hex="#BF432A" name="Primary dark"       role="Destructive / CTA"  primary />
            <Swatch hex="#047E17" name="Success"            role="Confirmations"       />
            <Swatch hex="#F95939" name="Primary orange"     role="Main CTA"            primary />
            <Swatch hex="#345270" name="Slate blue"         role="Headers / Nav"       />
            <Swatch hex="#EE9649" name="Accent amber"       role="Highlights"          />
            <Swatch hex="#D4E1ED" name="Light blue"         role="Backgrounds"         />
            <Swatch hex="#FEFBEF" name="Background cream"   role="Page base"           />
            <Swatch hex="#0D3C6B" name="Dark navy"          role="Text / headings"     primary />
          </div>
        </KitSection>

        {/* Typography — three columns with real font rendering */}
        <KitSection label={tg.en_typographyLabel} delay={0.06}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10 }}>
            {[
              { family:"'Gelica','Georgia',serif",     name:"Gelica Bold",       role:"Headings & display",    sample:"Aa",  weight:700, size:64 },
              { family:"'Helvetica Neue',Arial,sans-serif", name:"Proxima Nova Bold", role:"UI labels & buttons",   sample:"Aa",  weight:800, size:64 },
              { family:"'Helvetica Neue',Arial,sans-serif", name:"Proxima Nova",      role:"Body text",             sample:"Aa",  weight:400, size:64 },
            ].map(f => (
              <div key={f.name} style={{ background:EN_NAVY, borderRadius:10, padding:"28px 24px",
                display:"flex", flexDirection:"column", justifyContent:"space-between", minHeight:180 }}>
                <p style={{ fontFamily:f.family, fontSize:f.size, fontWeight:f.weight,
                  color:"#fff", lineHeight:1, margin:0, letterSpacing:"-0.02em" }}>{f.sample}</p>
                <div style={{ marginTop:20 }}>
                  <p style={{ fontFamily:T.font, fontSize:13, fontWeight:700,
                    color:"#fff", margin:"0 0 4px" }}>{f.name}</p>
                  <p style={{ fontFamily:T.font, fontSize:11, color:"rgba(255,255,255,0.45)", margin:0 }}>{f.role}</p>
                </div>
              </div>
            ))}
          </div>
        </KitSection>

        {/* Navigation */}
        <KitSection label={tg.en_navLabel} delay={0.07}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10 }}>
            <UIImg file="Barras"   label="Bars"      />
            <UIImg file="Navbar"   label="Navbar"    />
            <UIImg file="Topbar"   label="Topbar"    />
            <UIImg file="MenuOpen" label="Menu open" />
          </div>
        </KitSection>

        {/* Cards — featured row + states row */}
        <KitSection label={tg.en_cardsLabel} delay={0.08}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10, marginBottom:10 }}>
            <UIImg file="Card1" label="Card 1" tall />
            <UIImg file="Card2" label="Card 2" tall />
            <UIImg file="Card3" label="Card 3" tall />
            <UIImg file="Card4" label="Card 4" tall />
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10 }}>
            <UIImg file="Estado=Front"   label="State — Front"   />
            <UIImg file="Estado=Gallery" label="State — Gallery" />
            <UIImg file="Estado=Reverse" label="State — Reverse" />
          </div>
        </KitSection>

        {/* Controls */}
        <KitSection label={tg.en_controlsLabel} delay={0.09}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:10 }}>
            <UIImg file="Actionables"  label="Actionables"         />
            <UIImg file="Botones"      label="Buttons"             />
            <UIImg file="Inputs"       label="Inputs"              />
            <UIImg file="Indicadores"  label="Progress"            />
            <UIImg file="Widgets"      label="Widgets"             />
          </div>
        </KitSection>

        {/* Content & data */}
        <KitSection label={tg.en_contentLabel} delay={0.1}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:10 }}>
            <UIImg file="Listas"          label="Lists"      />
            <UIImg file="Mapa"            label="Map"        />
            <UIImg file="MensajesDialogo" label="Dialogs"    />
            <UIImg file="Iconos"          label="Icons"      />
            <UIImg file="Ilustraciones"   label="Illust."    />
          </div>
        </KitSection>

      </div>
    </section>
  );
}

function EncuentraTesting({ tg }) {
  const SEV = { Critical:"#ef4444", Issue:"#f5a623", Minor:"#60a5fa" };
  const Rating = ({ n, max = 5, col = EN_ACCENT }) => (
    <div style={{ display:"flex", gap:3 }}>
      {Array.from({ length: max }).map((_, i) => (
        <div key={i} style={{ width:8, height:8, borderRadius:"50%",
          background: i < n ? col : "rgba(255,255,255,0.12)" }}/>
      ))}
    </div>
  );
  const tasks = tg.en_tasks;
  const findings = tg.en_findings;
  return (
    <section style={{ background:T.dark, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto" }}>
        <Reveal>
          <Label text={tg.en_testLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(26px,3.5vw,38px)", fontWeight:900,
            color:T.white, lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:12 }}>
            {tg.en_testTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:14, color:"rgba(255,255,255,0.35)",
            lineHeight:1.85, maxWidth:580, marginBottom:48 }}>
            {tg.en_testP}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
            textTransform:"uppercase", color:T.mid, marginBottom:16 }}>{tg.en_taskCompletion}</p>
          <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)",
            borderRadius:6, overflow:"hidden", marginBottom:48, overflowX:"auto" }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 60px 60px 60px",
              gap:"0 8px", padding:"12px 20px", borderBottom:"1px solid rgba(255,255,255,0.08)",
              background:"rgba(255,255,255,0.04)" }}>
              <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, color:T.mid, letterSpacing:"0.12em", textTransform:"uppercase", margin:0 }}>Task</p>
              {["U1","U2","U3"].map(u => (
                <p key={u} style={{ fontFamily:T.font, fontSize:10, fontWeight:700, color:T.mid, letterSpacing:"0.12em", textTransform:"uppercase", margin:0, textAlign:"center" }}>{u}</p>
              ))}
            </div>
            {tasks.map((t, i) => (
              <div key={t.task} style={{ display:"grid", gridTemplateColumns:"1fr 60px 60px 60px",
                gap:"0 8px", padding:"13px 20px",
                borderBottom: i < tasks.length-1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                alignItems:"center" }}>
                <div>
                  <p style={{ fontFamily:T.font, fontSize:12, color:T.white, margin:"0 0 3px" }}>{t.task}</p>
                  <p style={{ fontFamily:T.font, fontSize:11, color:"rgba(255,255,255,0.25)", margin:0, lineHeight:1.5 }}>{t.note}</p>
                </div>
                {[t.u1, t.u2, t.u3].map((pass, j) => (
                  <div key={j} style={{ display:"flex", justifyContent:"center" }}>
                    <div style={{ width:18, height:18, borderRadius:"50%",
                      background: pass ? "#16a34a" : "#dc2626",
                      display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <span style={{ color:"#fff", fontSize:10, fontWeight:700, lineHeight:1 }}>
                        {pass ? "✓" : "✕"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.18em",
            textTransform:"uppercase", color:T.mid, marginBottom:16 }}>{tg.en_findingsLabel}</p>
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {findings.map(p => (
              <div key={p.area} style={{ display:"grid",
                gridTemplateColumns:"8px minmax(120px,180px) 1fr 1fr",
                gap:"0 20px", padding:"18px 20px",
                background:"rgba(255,255,255,0.03)",
                border:"1px solid rgba(255,255,255,0.06)",
                borderRadius:4, alignItems:"start" }}>
                <div style={{ width:8, height:8, borderRadius:"50%", marginTop:3, background: SEV[p.sev] || T.mid }}/>
                <div>
                  <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, color:T.white, letterSpacing:"0.08em", textTransform:"uppercase", margin:"0 0 4px" }}>{p.area}</p>
                  <span style={{ fontFamily:T.font, fontSize:9, fontWeight:600, color: SEV[p.sev], letterSpacing:"0.08em", textTransform:"uppercase" }}>{p.sev}</span>
                </div>
                <p style={{ fontFamily:T.font, fontSize:12, color:"rgba(255,255,255,0.4)", lineHeight:1.75, margin:0 }}>{p.finding}</p>
                <div>
                  <p style={{ fontFamily:T.font, fontSize:9, fontWeight:700, color:"#16a34a", letterSpacing:"0.12em", textTransform:"uppercase", margin:"0 0 4px" }}>{tg.en_fixLabel}</p>
                  <p style={{ fontFamily:T.font, fontSize:12, color:"rgba(255,255,255,0.4)", lineHeight:1.75, margin:0 }}>{p.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div style={{ marginTop:40, display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:10 }}>
            {[
              { label:tg.en_satisfactionLabel, u1:4, u2:3, u3:4 },
              { label:tg.en_easeLabel, u1:3, u2:3, u3:4 },
              { label:tg.en_recommendLabel, u1:5, u2:4, u3:4 },
            ].map(m => (
              <div key={m.label} style={{ padding:"16px 18px", background:"rgba(255,255,255,0.03)",
                border:"1px solid rgba(255,255,255,0.06)", borderRadius:4 }}>
                <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, color:T.mid,
                  letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:14 }}>{m.label}</p>
                {[["User 1", m.u1], ["User 2", m.u2], ["User 3", m.u3]].map(([name, score]) => (
                  <div key={name} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                    <span style={{ fontFamily:T.font, fontSize:11, color:"rgba(255,255,255,0.35)" }}>{name}</span>
                    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                      <Rating n={score} />
                      <span style={{ fontFamily:T.font, fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.5)", minWidth:24 }}>{score}/5</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EncuentraConclusions({ tg }) {
  return (
    <section style={{ background:T.light, padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto", display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"clamp(40px,6vw,80px)" }}>
        <Reveal>
          <Label text={tg.en_conclLabel} col={T.mid} />
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(26px,3.5vw,40px)", fontWeight:900,
            color:T.black, lineHeight:1.0, letterSpacing:"-0.02em", marginBottom:20 }}>
            {tg.en_conclTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:14, color:"#555", lineHeight:1.9 }}>
            {tg.en_conclP}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div style={{ display:"flex", flexDirection:"column" }}>
            {[
              { head:tg.en_concl1Head||"", body:tg.en_concl1Body||"" },
              { head:tg.en_concl2Head||"", body:tg.en_concl2Body||"" },
              { head:tg.en_concl3Head||"", body:tg.en_concl3Body||"" },
            ].map(({ head, body }, i) => (
              <div key={head} style={{ display:"flex", gap:20, paddingBottom:28,
                borderBottom:"1px solid rgba(0,0,0,0.08)", marginBottom:4 }}>
                <span style={{ fontFamily:T.font, fontSize:11, fontWeight:900, color:EN_ACCENT,
                  flexShrink:0, marginTop:1 }}>{String(i+1).padStart(2,"0")}</span>
                <div>
                  <p style={{ fontFamily:T.font, fontSize:11, fontWeight:700, color:T.black,
                    letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:8 }}>{head}</p>
                  <p style={{ fontFamily:T.font, fontSize:13, color:"#666", lineHeight:1.85 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EncuentraPrototypeCTA({ tg }) {
  return (
    <section style={{ background:"#0D3C6B", padding:"clamp(64px,10vw,96px) clamp(24px,6vw,80px)" }}>
      <div style={{ maxWidth:1040, margin:"0 auto",
        display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center" }}>
        <Reveal>
          <p style={{ fontFamily:T.font, fontSize:10, fontWeight:700, letterSpacing:"0.22em",
            textTransform:"uppercase", color:`${EN_ACCENT}99`, marginBottom:20 }}>
            {tg.en_ctaLabel}
          </p>
          <h2 style={{ fontFamily:T.font, fontSize:"clamp(28px,4.5vw,52px)", fontWeight:900,
            color:T.white, lineHeight:1.0, letterSpacing:"-0.02em", marginBottom:16 }}>
            {tg.en_ctaTitle}
          </h2>
          <p style={{ fontFamily:T.font, fontSize:15, color:"rgba(255,255,255,0.45)",
            lineHeight:1.85, maxWidth:460, marginBottom:40 }}>
            {tg.en_ctaP}
          </p>
          <a href="https://www.figma.com/proto/fjO8DGoD83EPDDTdwblSjh/ENCUENTRA-APP?type=design&node-id=59-17305&viewport=850%2C599%2C0.04&t=6Bpwg8tL2CWJvzZH-1&scaling=min-zoom&starting-point-node-id=59%3A17305&page-id=2%3A15761"
            target="_blank" rel="noreferrer"
            style={{ display:"inline-flex", alignItems:"center", gap:12,
              fontFamily:T.font, fontSize:14, fontWeight:700,
              color:"#0D3C6B", background:EN_ACCENT,
              borderRadius:4, padding:"16px 36px",
              letterSpacing:"0.06em", textDecoration:"none", transition:"opacity 0.18s" }}
            onMouseEnter={e=>e.currentTarget.style.opacity="0.85"}
            onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
            {tg.en_ctaButton}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Encuentra({ onBack, tg, lang, setLang }) {
  return (
    <>
      <style>{`
        html,body{overflow-x:hidden!important;}
        @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}
        @media (max-width:700px){
          [style*="repeat(auto-fit"]{grid-template-columns:1fr!important;}
          [style*="order:0"],[style*="order: 0"],[style*="order:1"],[style*="order: 1"]{order:unset!important;}
          section, div{max-width:100vw;}
        }
      `}</style>
      <CaseNav onBack={onBack} accent={EN_ACCENT} visible={true} tg={tg} lang={lang} setLang={setLang} />
      <EncuentraHero tg={tg} />
      <EncuentraWhat tg={tg} />
      <EncuentraResearch tg={tg} />
      <EncuentraDefinition tg={tg} />
      <EncuentraPrototype tg={tg} />
      <EncuentraUI tg={tg} />
      <EncuentraTesting tg={tg} />
      <EncuentraConclusions tg={tg} />
      <EncuentraPrototypeCTA tg={tg} />
      <CaseFooter onBack={onBack} accent={EN_ACCENT} tg={tg} />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LANG TOGGLE
// ─────────────────────────────────────────────────────────────────────────────
function LangToggle({ lang, setLang }) {
  return (
    <div style={{ display:"flex", gap:24, alignItems:"center", flexShrink:0 }}>
      {["en","es"].map(l => (
        <button key={l} onClick={() => setLang(l)}
          style={{ fontFamily:"'Satoshi','Helvetica Neue',Arial,sans-serif",
            fontSize:"clamp(13px,1.5vw,18px)", fontWeight:700,
            padding:0, margin:0, background:"none", border:"none", outline:"none",
            boxShadow:"none", cursor:"pointer", letterSpacing:"0.01em",
            position:"relative",
            color: lang === l ? "#fff" : "rgba(255,255,255,0.38)",
            transition:"color 0.18s" }}>
          {l.toUpperCase()}
          <span style={{ position:"absolute", bottom:-3, left:0, right:0, height:"1px",
            background: lang === l ? "rgba(255,255,255,0.5)" : "transparent",
            transition:"background 0.15s" }}/>
        </button>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// APP ROUTER
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState(() => {
    const h = window.location.hash.replace("#","");
    return ["allyoucaneat","neo","maphunter","encuentra"].includes(h) ? h : "home";
  });

  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("portfolio_lang") || "en"; } catch { return "en"; }
  });
  useEffect(() => {
    try { localStorage.setItem("portfolio_lang", lang); } catch {}
  }, [lang]);

  useEffect(() => {
    const onPop = () => {
      const h = window.location.hash.replace("#","");
      setPage(["allyoucaneat","neo","maphunter","encuentra"].includes(h) ? h : "home");
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  function goHome() {
    window.history.pushState(null, "", "#");
    setPage("home");
    window.scrollTo(0,0);
  }
  function goProject(id) {
    window.history.pushState(null, "", "#"+id);
    setPage(id);
    window.scrollTo(0,0);
  }

  const tg = T18N[lang] || T18N.en;

  if (page === "allyoucaneat") return <AllYouCanEat onBack={goHome} tg={tg} lang={lang} setLang={setLang} />;
  if (page === "neo")          return <Neo          onBack={goHome} tg={tg} lang={lang} setLang={setLang} />;
  if (page === "maphunter")    return <Maphunter    onBack={goHome} tg={tg} lang={lang} setLang={setLang} />;
  if (page === "encuentra")    return <Encuentra    onBack={goHome} tg={tg} lang={lang} setLang={setLang} />;
  return <Home onProject={goProject} tg={tg} lang={lang} setLang={setLang} />;
}
