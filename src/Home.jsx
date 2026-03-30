import { useState } from "react";

const PROJECTS = [
  { id: "carmen", title: "Where is Carmen Sandiego?", tag: "Game Redesign", year: "2023", color: "#1a1a2e", accent: "#e94560", desc: "Modernising an iconic educational game series — new mechanics, updated UI, same detective soul." },
  { id: "encuentra", title: "Encuentra", tag: "UX Case Study", year: "2024", color: "#0f3460", accent: "#f5a623", desc: "A social network for Spanish speakers in Germany. Jobs, housing, events — all in one place." },
  { id: "maphunter", title: "Maphunter", tag: "App Redesign", year: "2023", color: "#1e0a3c", accent: "#7b2fff", desc: "Urban exploration app with a bold new brand identity and refreshed mobile experience." },
  { id: "neo", title: "NEO", tag: "AI Product Design", year: "2023", color: "#111", accent: "#a259ff", desc: "An AI assistant designed for small-town people — accessible, friendly, human." },
  { id: "allyoucaneat", title: "All You Can Eat", tag: "Gamification", year: "2023", color: "#0a1628", accent: "#ffd700", desc: "Hellmann's meets Fortnite. A battle royale where food is the weapon." },
];

export default function Home({ onProject }) {
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", background: "#fff", color: "#111", minHeight: "100vh" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { width: 100%; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        .au { animation: fadeUp 0.7s ease both; }
        .d1{animation-delay:.1s} .d2{animation-delay:.25s} .d3{animation-delay:.4s} .d4{animation-delay:.55s} .d5{animation-delay:.7s}
        .card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.15) !important; }
        .card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .navlink { font-size:15px; font-weight:500; color:#555; padding:8px 14px; border-radius:20px; text-decoration:none; transition:background 0.15s; }
        .navlink:hover { background:#f5f5f3; color:#111; }
        .skill { font-size:13px; font-weight:600; padding:6px 16px; border-radius:20px; background:#f5f5f3; color:#333; }
        @media(max-width:700px) {
          .hero-grid { flex-direction:column !important; align-items:flex-start !important; }
          .work-grid { grid-template-columns:1fr !important; }
          .about-inner { flex-direction:column !important; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ position:"fixed", top:16, left:"50%", transform:"translateX(-50%)", zIndex:200, width:"calc(100% - 40px)", maxWidth:1000, background:"white", borderRadius:50, boxShadow:"0 4px 24px rgba(0,0,0,0.1)", padding:"10px 20px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <a href="#hero" style={{ display:"flex", alignItems:"center", gap:10, fontWeight:700, fontSize:15, textDecoration:"none", color:"#111" }}>
          <div style={{ width:38, height:38, borderRadius:"50%", background:"#e8e8e8", overflow:"hidden", flexShrink:0 }}>
            <img src="/Image/avatar.png" alt="Adrián" style={{ width:"100%", height:"100%", objectFit:"cover" }} onError={e => { e.target.style.display="none"; }} />
          </div>
          Adrián Etopa
        </a>
        <div style={{ display:"flex", alignItems:"center", gap:4 }}>
          <a className="navlink" href="#work">Work</a>
          <a className="navlink" href="#about">About</a>
          <a href="https://linkedin.com/in/adrianetopa" target="_blank" rel="noreferrer" className="navlink" style={{ display:"flex", alignItems:"center", gap:6 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#0077b5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" style={{ minHeight:"100vh", display:"flex", alignItems:"center", padding:"120px 40px 80px", maxWidth:1000, margin:"0 auto", position:"relative" }}>
        <div className="hero-grid" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:60, width:"100%" }}>
          <div style={{ flex:"1 1 300px" }}>
            <div className="au d1" style={{ fontSize:"clamp(13px,1.5vw,15px)", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"#bbb", marginBottom:16 }}>
              UX/UI Designer · Berlin
            </div>
            <h1 className="au d2" style={{ fontFamily:"Georgia, serif", fontSize:"clamp(40px,6vw,80px)", lineHeight:1.0, marginBottom:24, fontWeight:400 }}>
              Hey,<br />I'm Adrián<br /><em style={{ color:"#F5A623" }}>Etopa.</em>
            </h1>
            <p className="au d3" style={{ fontSize:"clamp(15px,1.7vw,18px)", color:"#777", lineHeight:1.75, maxWidth:400, marginBottom:40 }}>
              I design products that feel good to use — from AI assistants to game interfaces and social apps. Based in Europe, thinking globally.
            </p>
            <div className="au d4" style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              <a href="#work" style={{ background:"#111", color:"white", fontWeight:700, fontSize:14, padding:"13px 28px", borderRadius:50, textDecoration:"none" }}
                onMouseEnter={e=>e.currentTarget.style.transform="translateY(-2px)"}
                onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}
              >See my work</a>
              <a href="#about" style={{ background:"#f5f5f3", color:"#111", fontWeight:700, fontSize:14, padding:"13px 28px", borderRadius:50, textDecoration:"none" }}>About me</a>
            </div>
          </div>

          <div className="au d3" style={{ flexShrink:0, display:"flex", flexDirection:"column", alignItems:"center", gap:20 }}>
            <div style={{ width:200, height:200, borderRadius:"50%", background:"#b3b3b3", overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,0.12)", animation:"float 4s ease-in-out infinite" }}>
              <img src="/Image/avatar.png" alt="Adrián Etopa" style={{ width:"100%", height:"100%", objectFit:"cover" }} onError={e=>{ e.target.style.display="none"; }} />
            </div>
            <div style={{ display:"flex", gap:8 }}>
              {["UX","UI","Research"].map(s => <span key={s} className="skill">{s}</span>)}
            </div>
          </div>

          <div className="au d4" style={{ display:"flex", flexDirection:"column", gap:4, flexShrink:0 }}>
            {PROJECTS.map(p => (
              <button key={p.id} onClick={() => onProject(p.id)}
                style={{ background:"none", border:"none", cursor:"pointer", textAlign:"left", fontSize:15, fontWeight:500, color:"#aaa", padding:"8px 12px", borderRadius:8, transition:"background 0.15s, color 0.15s" }}
                onMouseEnter={e=>{ e.currentTarget.style.background="#f5f5f3"; e.currentTarget.style.color="#111"; }}
                onMouseLeave={e=>{ e.currentTarget.style.background="none"; e.currentTarget.style.color="#aaa"; }}
              >{p.title}</button>
            ))}
          </div>
        </div>

        <div className="au d5" style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", display:"flex", alignItems:"center", gap:8, color:"#ccc", fontSize:13, fontWeight:600 }}>
          <span>Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="#ddd" strokeWidth="1.5"/>
            <rect x="7" y="4" width="2" height="5" rx="1" fill="#ddd">
              <animate attributeName="y" values="4;10;4" dur="1.5s" repeatCount="indefinite"/>
            </rect>
          </svg>
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ padding:"100px 40px", background:"#fafafa" }}>
        <div style={{ maxWidth:1000, margin:"0 auto" }}>
          <p style={{ fontSize:11, fontWeight:700, letterSpacing:"0.12em", color:"#bbb", textTransform:"uppercase", marginBottom:8 }}>Selected work</p>
          <h2 style={{ fontFamily:"Georgia, serif", fontSize:"clamp(36px,5vw,62px)", lineHeight:1.05, marginBottom:56, fontWeight:400 }}>
            Things I've<br /><em>designed.</em>
          </h2>
          <div className="work-grid" style={{ display:"grid", gridTemplateColumns:"7fr 5fr", gap:14 }}>
            <ProjectCard p={PROJECTS[0]} onClick={() => onProject("carmen")} big />
            <ProjectCard p={PROJECTS[1]} onClick={() => onProject("encuentra")} />
            <div style={{ gridColumn:"1 / -1", display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
              <ProjectCard p={PROJECTS[2]} onClick={() => onProject("maphunter")} />
              <ProjectCard p={PROJECTS[3]} onClick={() => onProject("neo")} />
            </div>
            <div style={{ gridColumn:"1 / -1" }}>
              <ProjectCard p={PROJECTS[4]} onClick={() => onProject("allyoucaneat")} wide />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding:"100px 40px", background:"white" }}>
        <div className="about-inner" style={{ maxWidth:1000, margin:"0 auto", display:"flex", gap:72, alignItems:"center" }}>
          <div style={{ width:280, height:320, borderRadius:24, background:"#e8e8e8", overflow:"hidden", flexShrink:0, boxShadow:"0 20px 60px rgba(0,0,0,0.08)" }}>
            <img src="/Image/avatar.png" alt="Adrián" style={{ width:"100%", height:"100%", objectFit:"cover" }} onError={e=>{ e.target.style.display="none"; }} />
          </div>
          <div>
            <p style={{ fontSize:11, fontWeight:700, letterSpacing:"0.12em", color:"#bbb", textTransform:"uppercase", marginBottom:12 }}>About me</p>
            <h2 style={{ fontFamily:"Georgia, serif", fontSize:"clamp(28px,4vw,48px)", fontWeight:400, marginBottom:20, lineHeight:1.1 }}>Adrián Etopa</h2>
            <p style={{ fontSize:17, color:"#666", lineHeight:1.8, marginBottom:14 }}>UX/UI Designer with a passion for solving real problems through thoughtful design. I care about the details — from the logic of a user flow to the weight of a typeface.</p>
            <p style={{ fontSize:17, color:"#666", lineHeight:1.8, marginBottom:32 }}>My work spans game redesigns, AI products, social apps and brand identities. Based in Europe, always looking for the honest solution over the obvious one.</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
              {["UX Research","UI Design","Prototyping","Figma","User Testing","Design Systems","Interaction Design"].map(s => (
                <span key={s} className="skill">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background:"#0a0a0a", color:"white", padding:"100px 40px", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(245,166,35,0.08) 0%,transparent 70%)", pointerEvents:"none" }} />
        <h2 style={{ fontFamily:"Georgia, serif", fontSize:"clamp(40px,7vw,88px)", lineHeight:1, marginBottom:20, fontWeight:400, position:"relative" }}>Thanks for<br /><em>viewing.</em></h2>
        <p style={{ fontSize:16, color:"#666", marginBottom:40, position:"relative" }}>Want to work together or just say hi?</p>
        <a href="https://linkedin.com/in/adrianetopa" target="_blank" rel="noreferrer"
          style={{ display:"inline-block", background:"white", color:"#0a0a0a", fontWeight:700, fontSize:15, padding:"14px 32px", borderRadius:50, textDecoration:"none", position:"relative" }}
          onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 12px 32px rgba(255,255,255,0.15)"; }}
          onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}
        >Let's connect →</a>
        <p style={{ fontSize:12, color:"#444", marginTop:60, position:"relative" }}>© 2025 Adrián Etopa · UX/UI Designer</p>
      </footer>
    </div>
  );
}

function ProjectCard({ p, onClick, big, wide }) {
  const [hov, setHov] = useState(false);
  return (
    <div className="card" onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ background: p.color, borderRadius: 20, overflow:"hidden", cursor:"pointer", position:"relative", padding: wide ? "40px 48px" : "28px", minHeight: big ? 420 : wide ? 180 : 320, display:"flex", flexDirection: wide ? "row" : "column", justifyContent: wide ? "space-between" : "flex-end", alignItems: wide ? "center" : "flex-start", boxShadow:"0 4px 20px rgba(0,0,0,0.08)" }}>
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.0) 60%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:20, right:20, width:36, height:36, borderRadius:"50%", background:"rgba(255,255,255,0.15)", backdropFilter:"blur(8px)", display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontSize:16, transform: hov ? "rotate(45deg)" : "rotate(0)", transition:"transform 0.25s", zIndex:2 }}>↗</div>
      <div style={{ position:"relative", zIndex:1, flex: wide ? 1 : "unset" }}>
        <div style={{ fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(255,255,255,0.45)", marginBottom:8 }}>{p.tag} · {p.year}</div>
        <h3 style={{ fontFamily:"Georgia, serif", fontSize: big ? "clamp(20px,2.5vw,30px)" : "clamp(18px,2vw,24px)", color:"white", lineHeight:1.15, marginBottom:10 }}>{p.title}</h3>
        {!wide && <p style={{ fontSize:13, color:"rgba(255,255,255,0.55)", lineHeight:1.65, maxWidth:340 }}>{p.desc}</p>}
      </div>
      {wide && <p style={{ fontSize:14, color:"rgba(255,255,255,0.55)", lineHeight:1.7, maxWidth:400, position:"relative", zIndex:1 }}>{p.desc}</p>}
    </div>
  );
}