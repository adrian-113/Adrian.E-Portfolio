export default function CarmenSandiego() {
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", background: "#0e0e0e", color: "#f0f0f0", minHeight: "100vh", width: "100%" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { width: 100%; min-height: 100vh; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .fade { animation: fadeUp 0.7s ease both; }
        .d1{animation-delay:.1s} .d2{animation-delay:.3s} .d3{animation-delay:.5s}
        @media (max-width: 680px) {
          .mechanic { flex-direction: column !important; }
          .mechanic img { width: 100% !important; }
          .grid2 { flex-direction: column !important; }
          .grid2 img { width: 100% !important; }
        }
      `}</style>

      {/* HERO */}
      <div style={{ background: "#1a1a2e", borderBottom: "3px solid #e94560", padding: "80px 48px 64px", width: "100%" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div className="fade d1" style={{ display: "inline-block", background: "rgba(233,69,96,0.2)", color: "#e94560", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 4, marginBottom: 24 }}>
            Game Redesign · 2023
          </div>
          <h1 className="fade d2" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(36px, 6vw, 72px)", color: "white", lineHeight: 1.05, marginBottom: 24 }}>
            Where is Carmen<br />Sandiego?
          </h1>
          <p className="fade d2" style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "rgba(255,255,255,0.6)", lineHeight: 1.85, maxWidth: 600, marginBottom: 48 }}>
            Modernising an iconic educational game series created in 1985 — updating the UI and introducing new mechanics while preserving its detective soul and cultural legacy.
          </p>
          <div className="fade d3" style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            {[["Role", "UX/UI Designer"], ["Year", "2023"], ["Tools", "Figma · Miro"]].map(([l, v]) => (
              <div key={l}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 6 }}>{l}</p>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BODY */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "72px 48px 100px", width: "100%" }}>

        <div style={{ marginBottom: 48 }}>
          <SectionTitle title="Context" accent="#e94560" />
          <p style={{ fontSize: "clamp(14px, 1.6vw, 16px)", color: "#aaa", lineHeight: 1.9 }}>
            Carmen Sandiego is an iconic series of educational games created in 1985 by Broderbund Software, designed to teach geography through a detective narrative. Players assume the role of agents from the ACME Detective Agency, chasing Carmen Sandiego and her gang of thieves who steal cultural artefacts and treasures from around the world.
          </p>
        </div>

        {/* Original screenshots */}
        <div className="grid2" style={{ display: "flex", gap: 16, marginBottom: 64 }}>
          <img src="/Image/Carmen/hqdefault.jpg" alt="Original 1" style={{ width: "50%", borderRadius: 8, display: "block" }} />
          <img src="/Image/Carmen/maxresdefault.jpg" alt="Original 2" style={{ width: "50%", borderRadius: 8, display: "block" }} />
        </div>

        <div style={{ marginBottom: 64 }}>
          <SectionTitle title="Goals" accent="#e94560" />
          <p style={{ fontSize: "clamp(14px, 1.6vw, 16px)", color: "#aaa", lineHeight: 1.9 }}>
            Attract a new generation of players while preserving the series legacy as an interactive learning tool. The improvements add graphical updates, expanded educational content and a deeper narrative through new mechanics — drawing visual inspiration from detective games like Disco Elysium.
          </p>
        </div>

        <div style={{ margin: "64px 0 48px" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(20px, 2.5vw, 28px)", color: "white", paddingBottom: 16, borderBottom: "2px solid #e94560" }}>Re-design & New Mechanics</h2>
        </div>

        <div className="mechanic" style={{ display: "flex", gap: 48, alignItems: "center", marginBottom: 72 }}>
          <div style={{ flex: 1 }}>
            <MiniTitle title="City UI" accent="#e94560" />
            <p style={{ fontSize: "clamp(13px, 1.5vw, 15px)", color: "#999", lineHeight: 1.85 }}>
              The interface for when the player is in a city has been modernised while retaining the original structure. Greater emphasis on the city's descriptive text highlights the educational aspect. The aesthetic evokes 1990s police games with a distinctive noir touch.
            </p>
          </div>
          <img src="/Image/Carmen/Frame%202Carmen%20Sandiego%20reowrk.jpg" alt="City UI" style={{ flex: 1, width: "50%", borderRadius: 10, border: "1px solid #2a2a2a", display: "block" }} />
        </div>

        <div className="mechanic" style={{ display: "flex", gap: 48, alignItems: "center", marginBottom: 72, flexDirection: "row-reverse" }}>
          <div style={{ flex: 1 }}>
            <MiniTitle title="Places UI" accent="#e94560" />
            <p style={{ fontSize: "clamp(13px, 1.5vw, 15px)", color: "#999", lineHeight: 1.85 }}>
              The design of city points of interest has also been modernised. A picture-in-picture video on the map allows the user to move freely. A series of questions has been incorporated to capture the criminal — available questions on the left, conversation review on the right.
            </p>
          </div>
          <img src="/Image/Carmen/Frame%201Carmen%20Sandiego%20reowrk.jpg" alt="Places UI" style={{ flex: 1, width: "50%", borderRadius: 10, border: "1px solid #2a2a2a", display: "block" }} />
        </div>

        <div className="mechanic" style={{ display: "flex", gap: 48, alignItems: "center", marginBottom: 72 }}>
          <div style={{ flex: 1 }}>
            <MiniTitle title="World Map UI" accent="#e94560" />
            <p style={{ fontSize: "clamp(13px, 1.5vw, 15px)", color: "#999", lineHeight: 1.85 }}>
              New features include more descriptive text to enhance educational value, and an event mechanic to notify when new clues or updates arrive. Some mechanics are designed to mislead the player — increasing difficulty as the case advances.
            </p>
          </div>
          <img src="/Image/Carmen/Frame%203Carmen%20Sandiego%20reowrk.jpg" alt="World Map" style={{ flex: 1, width: "50%", borderRadius: 10, border: "1px solid #2a2a2a", display: "block" }} />
        </div>

        <div className="mechanic" style={{ display: "flex", gap: 48, alignItems: "center", marginBottom: 72, flexDirection: "row-reverse" }}>
          <div style={{ flex: 1 }}>
            <MiniTitle title="Interrogation Mechanic" accent="#e94560" />
            <p style={{ fontSize: "clamp(13px, 1.5vw, 15px)", color: "#999", lineHeight: 1.85 }}>
              At the end of each case the player interrogates the criminal using information gathered during the investigation. Depending on the outcome, the player uncovers another key member of the organisation — or loses track of them entirely.
            </p>
          </div>
          <img src="/Image/Carmen/Frame%2024Carmen%20Sandiego%20reowrk.jpg" alt="Interrogation" style={{ flex: 1, width: "50%", borderRadius: 10, border: "1px solid #2a2a2a", display: "block" }} />
        </div>

        <div className="mechanic" style={{ display: "flex", gap: 48, alignItems: "center", marginBottom: 72 }}>
          <div style={{ flex: 1 }}>
            <MiniTitle title="Campaign Mechanic" accent="#e94560" />
            <p style={{ fontSize: "clamp(13px, 1.5vw, 15px)", color: "#999", lineHeight: 1.85 }}>
              The primary objective is to capture the leader of the organisation. As the player progresses, interrogations become more complex. The player can even converse with criminals already in prison to extract additional leads.
            </p>
          </div>
          <img src="/Image/Carmen/Frame%207Carmen%20Sandiego%20reowrk%201.jpg" alt="Campaign" style={{ flex: 1, width: "50%", borderRadius: 10, border: "1px solid #2a2a2a", display: "block" }} />
        </div>

        <div style={{ margin: "64px 0 48px" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(20px, 2.5vw, 28px)", color: "white", paddingBottom: 16, borderBottom: "2px solid #e94560" }}>Conclusions</h2>
        </div>
        <p style={{ fontSize: "clamp(14px, 1.6vw, 16px)", color: "#aaa", lineHeight: 1.9, marginBottom: 80 }}>
          The redesign modernises the gaming experience while preserving the essence that made the series a classic. More immersive descriptive text, the police investigation element, and the new campaign mechanics add depth and challenge — while maintaining the educational value and attracting a new generation of players.
        </p>

        <div style={{ paddingTop: 40, borderTop: "1px solid #222", textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", marginBottom: 12 }}>Next project</p>
          <p style={{ fontFamily: "Georgia, serif", fontSize: 32, color: "white" }}>Encuentra →</p>
          <p style={{ fontSize: 13, color: "#666", marginTop: 6 }}>UX Case Study · 2024</p>
        </div>

      </div>
    </div>
  );
}

function SectionTitle({ title, accent }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
      <div style={{ width: 4, height: 28, borderRadius: 2, background: accent, flexShrink: 0 }} />
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(18px, 2.5vw, 24px)", color: "white" }}>{title}</h2>
    </div>
  );
}

function MiniTitle({ title, accent }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
      <div style={{ width: 3, height: 20, borderRadius: 2, background: accent, flexShrink: 0 }} />
      <h3 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(16px, 2vw, 20px)", color: "white" }}>{title}</h3>
    </div>
  );
}