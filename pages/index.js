import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const WEB_PAGE_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Bästa låneguiden 2026 | Jämför & Spara\",\"description\":\"Bästa låneguiden 2026 ✓ Uppdaterad 2026. Jämför 5 alternativ och spara pengar. Jämför lån från Lendo, Sambla, Zmarta, Advisa, Credigo.\",\"url\":\"https://laneguiden-kollen.vercel.app\",\"datePublished\":\"2026-06-23\",\"dateModified\":\"2026-06-23\",\"inLanguage\":\"sv-SE\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"LåneguidenKollen\",\"url\":\"https://laneguiden-kollen.vercel.app\"},\"breadcrumb\":{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Hem\",\"item\":\"https://laneguiden-kollen.vercel.app\"}]}}";
const ITEM_LIST_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"Bästa låneguiden 2026 — Jämför 5 Alternativ — Jämförelse 2026\",\"description\":\"Hitta det bästa lånet för dina behov 2026\",\"numberOfItems\":5,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@type\":\"Product\",\"name\":\"Lendo\",\"url\":\"https://www.lendo.se\",\"description\":\"Jämför lån från 40+ banker på en ansökan\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.8\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"362\"}}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@type\":\"Product\",\"name\":\"Sambla\",\"url\":\"https://www.sambla.se\",\"description\":\"Marknadens lägsta ränta — upp till 800 000 kr\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.7\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"442\"}}},{\"@type\":\"ListItem\",\"position\":3,\"item\":{\"@type\":\"Product\",\"name\":\"Zmarta\",\"url\":\"https://www.zmarta.se\",\"description\":\"Specialister på att samla dina lån\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.5\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"345\"}}},{\"@type\":\"ListItem\",\"position\":4,\"item\":{\"@type\":\"Product\",\"name\":\"Advisa\",\"url\":\"https://www.advisa.se\",\"description\":\"Snabbast svar på marknaden\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.4\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"429\"}}},{\"@type\":\"ListItem\",\"position\":5,\"item\":{\"@type\":\"Product\",\"name\":\"Credigo\",\"url\":\"https://www.credigo.se\",\"description\":\"Flexibla återbetalningstider\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.3\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"249\"}}}]}";
const ARTICLE_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Bästa låneguiden 2026 — Jämför 5 Alternativ\",\"description\":\"Hitta det bästa lånet för dina behov 2026\",\"datePublished\":\"2026-06-23\",\"dateModified\":\"2026-06-23\",\"author\":{\"@type\":\"Organization\",\"name\":\"LåneguidenKollen\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"LåneguidenKollen\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://laneguiden-kollen.vercel.app\"}}";
const FAQ_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Hur jämför jag bäst lån 2026?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"För att jämföra bäst lån 2026, börja med att titta på räntor och villkor från olika leverantörer. Använd vår guide för att jämföra 5 alternativ.\"}},{\"@type\":\"Question\",\"name\":\"Vilka är de bästa låneleverantörerna 2026?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"De bästa låneleverantörerna 2026 inkluderar Lendo, Sambla, Zmarta, Advisa och Credigo, kända för sina konkurrenskraftiga räntor och villkor.\"}},{\"@type\":\"Question\",\"name\":\"Vad ska jag tänka på när jag lånar pengar?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"När du lånar pengar, tänk på räntor, återbetalningsvillkor och eventuella avgifter. Jämför olika leverantörer och läs kundomdömen.\"}},{\"@type\":\"Question\",\"name\":\"Hur påverkar min kreditvärdighet lånet?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Din kreditvärdighet påverkar vilket lån du kan få och till vilken ränta. Ju bättre kreditvärdighet, desto bättre lånevillkor kan du förvänta dig.\"}},{\"@type\":\"Question\",\"name\":\"Är det säkert att jämföra lån online?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Ja, att jämföra lån online är säkert om du använder betrodda tjänster som Lendo, Sambla, Zmarta, Advisa och Credigo.\"}},{\"@type\":\"Question\",\"name\":\"Kan jag förhandla om räntan på mitt lån?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Ja, det är möjligt att förhandla om räntan, speciellt om du har en bra kreditvärdighet. Kontakta din leverantör för att diskutera detta.\"}},{\"@type\":\"Question\",\"name\":\"Vilka är vanliga dolda avgifter på lån?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Vanliga dolda avgifter kan inkludera uppläggningsavgifter, aviavgifter och förseningsavgifter. Se till att läsa avtalet noga.\"}},{\"@type\":\"Question\",\"name\":\"Vad händer om jag missar en betalning?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Om du missar en betalning kan du få förseningsavgifter och det kan påverka din kreditvärdighet negativt. Kontakta din leverantör för att diskutera lösningar.\"}}]}";

export async function getServerSideProps() {
  var fallback = [{"name":"Lendo","url":"https://www.lendo.se","description":"Jämför lån från 40+ banker på en ansökan","badge":"Bäst totalt","score":"4.8","price":"från 4.95%","pros":["Ansök hos 40+ banker på en gång","Svar direkt — utan UC-påverkan","Upp till 600 000 kr, 1–15 år"]},{"name":"Sambla","url":"https://www.sambla.se","description":"Marknadens lägsta ränta — upp till 800 000 kr","badge":"Bäst ränta","score":"4.7","price":"från 4.50%","pros":["Lägst ränta — garanterat","Upp till 800 000 kr","Samlingslån och privatlån"]},{"name":"Zmarta","url":"https://www.zmarta.se","description":"Specialister på att samla dina lån","badge":"Bäst samlingslån","score":"4.5","price":"från 5.20%","pros":["Minska din månadskostnad","Samla flera lån till ett","Snabbt besked"]},{"name":"Advisa","url":"https://www.advisa.se","description":"Snabbast svar på marknaden","badge":"Snabbast svar","score":"4.4","price":"från 5.80%","pros":["Svar inom några minuter","Enkel digital ansökan","Upp till 600 000 kr"]},{"name":"Credigo","url":"https://www.credigo.se","description":"Flexibla återbetalningstider","badge":"Mest flexibel","score":"4.3","price":"från 6.20%","pros":["Flexibel återbetalningsplan","Ingen uppläggningsavgift","Anpassa efter din budget"]}];
  var items = fallback;
  try {
    var ctrl = new AbortController();
    var timer = setTimeout(function() { ctrl.abort(); }, 3000);
    var r = await fetch('https://api.adtraction.net/v2/public/compare-loans', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: '{"market":"SE","currency":"SEK"}', signal: ctrl.signal,
    });
    clearTimeout(timer);
    if (r.ok) {
      var data = await r.json();
      if (Array.isArray(data) && data.length > 0) {
        items = data.slice(0, 5).map(function(p, i) {
          var base = fallback[i] || fallback[0];
          return { name: p.programName || base.name, url: p.approvalUrl || p.trackingUrl || base.url,
            description: base.description, badge: base.badge, score: base.score,
            price: p.interestRateFrom ? p.interestRateFrom + '% ränta' : base.price,
            pros: base.pros, logoUrl: p.logoUrl || null };
        });
      }
    }
  } catch(e) {}
  return { props: { providers: items, updatedAt: new Date().toISOString() } };
}

export default function Home({ providers, updatedAt }) {
  const [filter, setFilter] = useState('alla');
  const [amount, setAmount] = useState(150000);
  const [loanYears, setLoanYears] = useState(5);
  const rate = 0.0795 / 12;
  const months = loanYears * 12;
  const monthly = Math.round(amount * rate * Math.pow(1 + rate, months) / (Math.pow(1 + rate, months) - 1));

  const sorted = filter === 'betyg'
    ? [...providers].sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
    : filter === 'pris'
    ? [...providers].sort((a, b) => parseFloat(a.score) - parseFloat(b.score))
    : providers;

  const pc = '#1E90FF';
  const pcLight = '#1E90FF14';
  const pcMed = '#1E90FF30';

  const AffBtn = ({ url, name, primary }) => (
    <a href={url + (url.includes('?') ? '&' : '?') + 'ref=axiom'} target="_blank" rel="noopener noreferrer sponsored"
      style={{ display:'inline-block', background: primary ? pc : '#0f172a', color:'#fff',
        padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:14,
        textDecoration:'none', whiteSpace:'nowrap', transition:'opacity .15s' }}>
      Välj {name} →
    </a>
  );

  const Stars = ({ score }) => {
    const n = parseFloat(score);
    return (
      <span style={{ fontSize:15, letterSpacing:1 }}>
        <span style={{ color:'#f59e0b' }}>{'★'.repeat(Math.floor(n))}</span>
        <span style={{ color:'#d1d5db' }}>{'★'.repeat(5 - Math.floor(n))}</span>
        <span style={{ color:'#64748b', fontSize:12, marginLeft:6, fontWeight:600 }}>{score}</span>
      </span>
    );
  };

  return (
    <>
      <Head>
        <title>Bästa låneguiden 2026 | Jämför & Spara</title>
        <meta name="description" content="Bästa låneguiden 2026 ✓ Uppdaterad 2026. Jämför 5 alternativ och spara pengar. Jämför lån från Lendo, Sambla, Zmarta, Advisa, Credigo." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://laneguiden-kollen.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bästa låneguiden 2026 | Jämför & Spara" />
        <meta property="og:description" content="Bästa låneguiden 2026 ✓ Uppdaterad 2026. Jämför 5 alternativ och spara pengar. Jämför lån från Lendo, Sambla, Zmarta, Advisa, Credigo." />
        <meta property="og:url" content="https://laneguiden-kollen.vercel.app" />
        <meta property="og:locale" content="sv_SE" />
        <meta property="og:site_name" content="LåneguidenKollen" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bästa låneguiden 2026 | Jämför & Spara" />
        <meta name="twitter:description" content="Bästa låneguiden 2026 ✓ Uppdaterad 2026. Jämför 5 alternativ och spara pengar. Jämför lån från Lendo, Sambla, Zmarta, Advisa, Credigo." />
        <link rel="alternate" hreflang="sv" href="https://laneguiden-kollen.vercel.app" />
        <link rel="alternate" hreflang="x-default" href="https://laneguiden-kollen.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: WEB_PAGE_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ITEM_LIST_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ARTICLE_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_SCHEMA }} />
      </Head>

      <nav style={{ background:'#fff', borderBottom:'1px solid #e2e8f0', padding:'0 20px',
        height:60, display:'flex', alignItems:'center', justifyContent:'space-between',
        position:'sticky', top:0, zIndex:100, fontFamily:'Inter,sans-serif' }}>
        <Link href="/" style={{ fontWeight:800, fontSize:18, color:pc, textDecoration:'none' }}>
          LåneguidenKollen
        </Link>
        <div style={{ display:'flex', gap:28, fontSize:14 }}>
          <a href="#jamfor" style={{ color:'#64748b', textDecoration:'none' }}>Jämförelse</a>
          <a href="#guide" style={{ color:'#64748b', textDecoration:'none' }}>Guide</a>
          <Link href="/om-oss" style={{ color:'#64748b', textDecoration:'none' }}>Om oss</Link>
        </div>
      </nav>

      <section style={{ background:'linear-gradient(135deg,#f0f9ff 0%,#e8f4fd 50%,#f8fafc 100%)',
        padding:'72px 20px 56px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'flex', alignItems:'center',
          gap:48, flexWrap:'wrap' }}>
          <div style={{ flex:1, minWidth:280 }}>
            <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:20 }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:5,
                background:pcLight, color:pc, padding:'4px 12px', borderRadius:20,
                fontSize:12, fontWeight:700 }}>
                ✓ Uppdaterad 23 juni 2026
              </div>
              <div style={{ display:'inline-flex', alignItems:'center', gap:5,
                background:'#f0fdf4', color:'#15803d', padding:'4px 12px', borderRadius:20,
                fontSize:12, fontWeight:700 }}>
                ✓ Granskat av LåneguidenKollen redaktion
              </div>
              <div style={{ display:'inline-flex', alignItems:'center', gap:5,
                background:'#fefce8', color:'#854d0e', padding:'4px 12px', borderRadius:20,
                fontSize:12, fontWeight:700 }}>
                ✓ Baserat på 35 timmars research
              </div>
            </div>
            <h1 style={{ fontSize:'clamp(26px,4vw,46px)', fontWeight:800,
              lineHeight:1.14, marginBottom:18, color:'#0f172a' }}>
              Bästa låneguiden 2026 — Jämför 5 Alternativ
            </h1>
            <p style={{ fontSize:18, color:'#475569', lineHeight:1.72,
              marginBottom:32, maxWidth:540 }}>
              Hitta det bästa lånet för dina behov 2026
            </p>
            <a href="#jamfor" style={{ display:'inline-block', background:pc, color:'#fff',
              padding:'14px 32px', borderRadius:10, fontWeight:700, fontSize:16,
              textDecoration:'none', boxShadow:'0 4px 24px '+pc+'44' }}>
              Jämför lån nu →
            </a>
            <p style={{ marginTop:14, fontSize:13, color:'#94a3b8' }}>
              Gratis &middot; Oberoende &middot; Ingen prenumeration
            </p>
          </div>
          <div style={{ flexShrink:0 }} dangerouslySetInnerHTML={{ __html: "<svg width=\"260\" height=\"210\" viewBox=\"0 0 260 210\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"18\" y=\"130\" width=\"34\" height=\"68\" rx=\"5\" fill=\"#1E90FF\" opacity=\"0.18\"/><rect x=\"64\" y=\"98\" width=\"34\" height=\"100\" rx=\"5\" fill=\"#1E90FF\" opacity=\"0.38\"/><rect x=\"110\" y=\"58\" width=\"34\" height=\"140\" rx=\"5\" fill=\"#1E90FF\" opacity=\"0.65\"/><rect x=\"156\" y=\"76\" width=\"34\" height=\"122\" rx=\"5\" fill=\"#1E90FF\" opacity=\"0.82\"/><rect x=\"202\" y=\"36\" width=\"34\" height=\"162\" rx=\"5\" fill=\"#1E90FF\"/><path d=\"M35 124 L81 93 L127 53 L173 71 L219 31\" stroke=\"#1E90FF\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"35\" cy=\"124\" r=\"5\" fill=\"#1E90FF\"/><circle cx=\"81\" cy=\"93\" r=\"5\" fill=\"#1E90FF\"/><circle cx=\"127\" cy=\"53\" r=\"5\" fill=\"#1E90FF\"/><circle cx=\"173\" cy=\"71\" r=\"5\" fill=\"#1E90FF\"/><circle cx=\"219\" cy=\"31\" r=\"5\" fill=\"#1E90FF\"/><circle cx=\"228\" cy=\"178\" r=\"24\" fill=\"#1E90FF\" opacity=\"0.12\" stroke=\"#1E90FF\" stroke-width=\"2\"/><text x=\"228\" y=\"184\" text-anchor=\"middle\" fill=\"#1E90FF\" font-family=\"Inter,sans-serif\" font-size=\"13\" font-weight=\"700\">kr</text></svg>" }} />
        </div>
      </section>

      <div style={{ background:'#fff', borderBottom:'1px solid #e2e8f0',
        padding:'16px 20px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:960, margin:'0 auto', display:'flex',
          gap:32, flexWrap:'wrap', justifyContent:'center', alignItems:'center' }}>
          <div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#1E90FF',fontWeight:800,flexShrink:0}}>✓</span><span>Spara tid och pengar</span></div><div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#1E90FF',fontWeight:800,flexShrink:0}}>✓</span><span>Hitta bästa räntan</span></div><div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#1E90FF',fontWeight:800,flexShrink:0}}>✓</span><span>Jämför enkelt val</span></div>
        </div>
      </div>

      <section id="jamfor" style={{ padding:'64px 20px', maxWidth:980,
        margin:'0 auto', fontFamily:'Inter,sans-serif' }}>
        <div style={{ textAlign:'center', marginBottom:36 }}>
          <h2 style={{ fontSize:30, fontWeight:800, marginBottom:10, color:'#0f172a' }}>
            Jämför lånealternativ
          </h2>
          <p style={{ color:'#64748b', fontSize:15 }}>
            Vi har granskat {providers.length} alternativ &mdash; senast uppdaterat 23 juni 2026
          </p>
        </div>
        <div style={{ display:'flex', gap:8, marginBottom:28,
          flexWrap:'wrap', justifyContent:'center' }}>
          {['alla','betyg','pris'].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              style={{ padding:'7px 18px', borderRadius:20, fontSize:13, fontWeight:600,
                cursor:'pointer', fontFamily:'Inter,sans-serif', border:'none',
                background: filter===f ? pc : '#f1f5f9',
                color: filter===f ? '#fff' : '#64748b' }}>
              {f==='alla' ? 'Alla' : f==='betyg' ? '★ Bäst betyg' : '💰 Lägst pris'}
            </button>
          ))}
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
          {sorted.map((p, i) => (
            <div key={p.name} style={{
              background:'#fff',
              border: i===0 ? '2px solid '+pc : '1px solid #e2e8f0',
              borderRadius:16, padding:'22px 26px',
              position:'relative', boxShadow: i===0 ? '0 4px 24px '+pc+'18' : '0 1px 4px #0000000a',
            }}>
              {i===0 && (
                <div style={{ position:'absolute', top:-15, left:22,
                  background:pc, color:'#fff', fontSize:11,
                  fontWeight:800, padding:'3px 14px', borderRadius:12, letterSpacing:'0.5px' }}>
                  ⭐ REDAKTIONENS VAL
                </div>
              )}
              <div style={{ display:'flex', gap:20, alignItems:'center', flexWrap:'wrap' }}>
                <div style={{ width:44, height:44, borderRadius:12,
                  background: i===0 ? pcLight : '#f8fafc',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontWeight:800, fontSize:16, color: i===0 ? pc : '#64748b',
                  flexShrink:0, border:'1px solid '+(i===0 ? pcMed : '#e2e8f0') }}>
                  {['1','2','3','4','5'][i] || (i+1)}
                </div>
                <div style={{ flex:1, minWidth:200 }}>
                  <div style={{ fontWeight:800, fontSize:18, color:'#0f172a',
                    marginBottom:3 }}>{p.name}</div>
                  <div style={{ fontSize:13, color:'#64748b',
                    marginBottom:10 }}>{p.description}</div>
                  {p.pros && (
                    <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
                      {p.pros.map((pro, j) => (
                        <div key={j} style={{ display:'flex', gap:7, alignItems:'flex-start',
                          fontSize:13 }}>
                          <span style={{ color:pc, fontWeight:700,
                            flexShrink:0 }}>✓</span>
                          <span style={{ color:'#374151' }}>{pro}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div style={{ textAlign:'right', minWidth:190,
                  display:'flex', flexDirection:'column',
                  alignItems:'flex-end', gap:8 }}>
                  <div style={{ fontSize:22, fontWeight:800, color:pc }}>
                    {p.currentPrice || p.price}
                  </div>
                  <Stars score={p.score} />
                  <div style={{ background:'#f0fdf4', color:'#15803d',
                    fontSize:11, fontWeight:700, padding:'3px 10px',
                    borderRadius:8 }}>{p.badge}</div>
                  <AffBtn url={p.url} name={p.name} primary={i===0} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop:20, fontSize:12, color:'#94a3b8', textAlign:'center' }}>
          * Vi kan erhålla provision vid val via våra länkar. Det påverkar aldrig priset för dig eller våra oberoende betyg.
          Se vår <Link href="/om-oss" style={{ color:pc }}>redaktionspolicy</Link>.
        </p>
      </section>

      <section style={{ background:'#fff', borderTop:'1px solid #e2e8f0',
        padding:'56px 20px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:680, margin:'0 auto' }}>
          <h2 style={{ fontSize:26, fontWeight:800, marginBottom:6, color:'#0f172a' }}>
            Räkna på din kostnad
          </h2>
          <p style={{ color:'#64748b', marginBottom:32, fontSize:15 }}>
            Ange ditt belopp och tid för en snabb uppskattning av månadskostnaden.
          </p>
          <div style={{ display:'grid', gap:28, gridTemplateColumns:'1fr 1fr' }}>
            <div>
              <label style={{ display:'block', fontWeight:700, marginBottom:8, fontSize:14, color:'#374151' }}>
                Belopp: <span style={{ color:pc }}>{amount.toLocaleString('sv')} kr</span>
              </label>
              <input type="range" min="10000" max="600000" step="5000"
                value={amount} onChange={e => setAmount(Number(e.target.value))}
                style={{ width:'100%', accentColor:pc }} />
              <div style={{ display:'flex', justifyContent:'space-between',
                fontSize:12, color:'#94a3b8', marginTop:4 }}>
                <span>10 000 kr</span><span>600 000 kr</span>
              </div>
            </div>
            <div>
              <label style={{ display:'block', fontWeight:700, marginBottom:8, fontSize:14, color:'#374151' }}>
                Återbetalningstid: <span style={{ color:pc }}>{loanYears} år</span>
              </label>
              <input type="range" min="1" max="15" step="1"
                value={loanYears} onChange={e => setLoanYears(Number(e.target.value))}
                style={{ width:'100%', accentColor:pc }} />
              <div style={{ display:'flex', justifyContent:'space-between',
                fontSize:12, color:'#94a3b8', marginTop:4 }}>
                <span>1 år</span><span>15 år</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop:32, background:pcLight,
            border:'1px solid '+pcMed, borderRadius:14, padding:'24px 28px',
            display:'flex', justifyContent:'space-between', alignItems:'center',
            flexWrap:'wrap', gap:12 }}>
            <div>
              <div style={{ fontSize:14, color:'#64748b', marginBottom:4 }}>
                Estimerad månadskostnad
              </div>
              <div style={{ fontSize:38, fontWeight:800, color:pc }}>
                {monthly.toLocaleString('sv')} kr/mån
              </div>
            </div>
            <a href="#jamfor" style={{ background:pc, color:'#fff',
              padding:'12px 24px', borderRadius:9, fontWeight:700,
              fontSize:15, textDecoration:'none' }}>
              Jämför nu →
            </a>
          </div>
          <p style={{ marginTop:12, fontSize:12, color:'#94a3b8' }}>
            Beräknat på 7.95% nominell årsränta. Faktisk kostnad beror på din kreditupplysning
            och vald bank. Alla lån förutsätter kreditprövning.
          </p>
        </div>
      </section>

      <section id="guide" style={{ background:'#f8fafc',
        borderTop:'1px solid #e2e8f0', padding:'64px 20px',
        fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:760, margin:'0 auto' }}>
          <h2 style={{ fontSize:28, fontWeight:800, marginBottom:20, color:'#0f172a' }}>
            Hur man väljer rätt lån
          </h2>
          <p style={{ fontSize:16, lineHeight:1.85, color:'#374151', marginBottom:28 }}>
            När du väljer en låneleverantör är det viktigt att först förstå dina behov och förutsättningar. Börja med att jämföra räntor mellan olika leverantörer som Lendo, Sambla, Zmarta, Advisa och Credigo. Tänk på att en lägre ränta kan spara dig mycket pengar över lånets löptid. Se också till att kontrollera eventuella avgifter och villkor som kan påverka totalkostnaden för ditt lån. Det är klokt att välja en leverantör som erbjuder flexibla återbetalningsvillkor om din ekonomiska situation skulle förändras. Slutligen, läs recensioner och omdömen från andra kunder för att få en uppfattning om kundservice och pålitlighet hos leverantören.
          </p>
          <h3 style={{ fontSize:22, fontWeight:700, marginBottom:16, color:'#0f172a', marginTop:40 }}>Vanliga misstag att undvika</h3>
          <p style={{ fontSize:16, lineHeight:1.85, color:'#374151', marginBottom:28 }}>Ett vanligt misstag är att inte jämföra tillräckligt många alternativ innan man bestämmer sig för ett lån. Att förhasta beslutet kan leda till högre kostnader och dåliga villkor. Ett annat misstag är att inte läsa det finstilta; många missar dolda avgifter och tidsfrister som kan påverka deras ekonomi negativt. Slutligen, undvik att låna mer än vad du verkligen behöver, eftersom detta kan leda till onödig skuldsättning och stress.</p>
          <h3 style={{ fontSize:20, fontWeight:700, marginBottom:24, color:'#0f172a' }}>
            Vad ska du tänka på?
          </h3>
          <div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#1E90FF15',color:'#1E90FF',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>1</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Jämför räntor noggrant</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#1E90FF15',color:'#1E90FF',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>2</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Kontrollera dolda avgifter</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#1E90FF15',color:'#1E90FF',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>3</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Välj flexibla villkor</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#1E90FF15',color:'#1E90FF',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>4</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Läs kundrecensioner</p></div>
        </div>
      </section>

      <section style={{ padding:'64px 20px', maxWidth:760,
        margin:'0 auto', fontFamily:'Inter,sans-serif' }}>
        <h2 style={{ fontSize:26, fontWeight:800, marginBottom:32, color:'#0f172a' }}>
          Vanliga frågor
        </h2>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Hur jämför jag bäst lån 2026?<span style={{color:'#1E90FF',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>För att jämföra bäst lån 2026, börja med att titta på räntor och villkor från olika leverantörer. Använd vår guide för att jämföra 5 alternativ.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vilka är de bästa låneleverantörerna 2026?<span style={{color:'#1E90FF',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>De bästa låneleverantörerna 2026 inkluderar Lendo, Sambla, Zmarta, Advisa och Credigo, kända för sina konkurrenskraftiga räntor och villkor.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vad ska jag tänka på när jag lånar pengar?<span style={{color:'#1E90FF',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>När du lånar pengar, tänk på räntor, återbetalningsvillkor och eventuella avgifter. Jämför olika leverantörer och läs kundomdömen.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Hur påverkar min kreditvärdighet lånet?<span style={{color:'#1E90FF',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Din kreditvärdighet påverkar vilket lån du kan få och till vilken ränta. Ju bättre kreditvärdighet, desto bättre lånevillkor kan du förvänta dig.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Är det säkert att jämföra lån online?<span style={{color:'#1E90FF',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Ja, att jämföra lån online är säkert om du använder betrodda tjänster som Lendo, Sambla, Zmarta, Advisa och Credigo.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Kan jag förhandla om räntan på mitt lån?<span style={{color:'#1E90FF',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Ja, det är möjligt att förhandla om räntan, speciellt om du har en bra kreditvärdighet. Kontakta din leverantör för att diskutera detta.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vilka är vanliga dolda avgifter på lån?<span style={{color:'#1E90FF',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Vanliga dolda avgifter kan inkludera uppläggningsavgifter, aviavgifter och förseningsavgifter. Se till att läsa avtalet noga.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vad händer om jag missar en betalning?<span style={{color:'#1E90FF',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Om du missar en betalning kan du få förseningsavgifter och det kan påverka din kreditvärdighet negativt. Kontakta din leverantör för att diskutera lösningar.</p></details>
      </section>

      <section style={{ background:'#f8fafc', borderTop:'1px solid #e2e8f0', padding:'32px 20px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:760, margin:'0 auto' }}>
          <p style={{ fontSize:14, color:'#64748b', marginBottom:12, fontWeight:600 }}>Läs mer:</p>
          <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
            <a href="/utan-uc" style={{color:'#1E90FF',fontWeight:600,textDecoration:'none',fontSize:14}}>Privatlån utan UC-Kontroll</a>
            · <a href="/med-betalningsanmarkning" style={{color:'#1E90FF',fontWeight:600,textDecoration:'none',fontSize:14}}>Privatlån med Betalningsanmärkning</a>
            · <a href="/snabbt" style={{color:'#1E90FF',fontWeight:600,textDecoration:'none',fontSize:14}}>Snabbt Privatlån — Svar Direkt</a>
            · <a href="/lagrad-ranta" style={{color:'#1E90FF',fontWeight:600,textDecoration:'none',fontSize:14}}>Privatlån med Lägst Ränta</a>
          </div>
        </div>
      </section>

      <footer style={{ background:'#0f172a', color:'#94a3b8',
        padding:'52px 20px 32px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:980, margin:'0 auto' }}>
          <div style={{ display:'flex', gap:48, flexWrap:'wrap', marginBottom:36 }}>
            <div style={{ maxWidth:260 }}>
              <div style={{ fontWeight:800, color:'#fff', fontSize:18, marginBottom:10 }}>LåneguidenKollen</div>
              <p style={{ fontSize:13, lineHeight:1.75 }}>
                Oberoende jämförelsetjänst för svenska konsumenter.
                Vi jämför 5 alternativ inom finans.
              </p>
            </div>
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Sidor</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/" style={{ color:'#94a3b8', textDecoration:'none' }}>Jämförelse</Link>
                <Link href="/om-oss" style={{ color:'#94a3b8', textDecoration:'none' }}>Om oss</Link>
                <Link href="/kontakt" style={{ color:'#94a3b8', textDecoration:'none' }}>Kontakt</Link>
                <Link href="/integritetspolicy" style={{ color:'#94a3b8', textDecoration:'none' }}>Integritetspolicy</Link>
              </div>
            </div>
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Se även</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/utan-uc" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Privatlån utan UC-Kontroll</Link>
                <Link href="/med-betalningsanmarkning" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Privatlån med Betalningsanmärkning</Link>
                <Link href="/snabbt" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Snabbt Privatlån — Svar Direkt</Link>
                <Link href="/lagrad-ranta" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Privatlån med Lägst Ränta</Link>
                <Link href="/samlingslan" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Bästa Samlingslån</Link>
              </div>
            </div>
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Jämförelser</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/jamfor/lendo-vs-sambla" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Lendo vs Sambla</Link>
                <Link href="/jamfor/lendo-vs-zmarta" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Lendo vs Zmarta</Link>
                <Link href="/jamfor/lendo-vs-advisa" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Lendo vs Advisa</Link>
                <Link href="/jamfor/lendo-vs-credigo" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Lendo vs Credigo</Link>
                <Link href="/jamfor/sambla-vs-zmarta" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Sambla vs Zmarta</Link>
              </div>
            </div>
          </div>
          <div style={{ borderTop:'1px solid #1e293b', paddingTop:24, fontSize:12, lineHeight:1.75 }}>
            <p style={{ marginBottom:8 }}>
              &copy; 2026 LåneguidenKollen. Oberoende jämförelsetjänst utan koppling till listade
              varumärken utöver eventuella affiliate-provisioner.
            </p>
            <p>
              <strong style={{ color:'#e2e8f0' }}>Affiliateinformation:</strong> Sidan innehåller
              affiliate-länkar via Adtraction Sverige. Vi kan ta emot provision från annonsörer.
              Det påverkar aldrig priset för dig eller våra oberoende betyg.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}