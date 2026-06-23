import Head from 'next/head';
import Link from 'next/link';
var _comp = {"lendo-vs-sambla":{"nameA":"Lendo","urlA":"https://www.lendo.se","priceA":"från 4.95%","scoreA":"4.8","badgeA":"Bäst totalt","prosA":["Ansök hos 40+ banker på en gång","Svar direkt — utan UC-påverkan","Upp till 600 000 kr, 1–15 år"],"descA":"Jämför lån från 40+ banker på en ansökan","nameB":"Sambla","urlB":"https://www.sambla.se","priceB":"från 4.50%","scoreB":"4.7","badgeB":"Bäst ränta","prosB":["Lägst ränta — garanterat","Upp till 800 000 kr","Samlingslån och privatlån"],"descB":"Marknadens lägsta ränta — upp till 800 000 kr","winnerName":"Lendo","winnerUrl":"https://www.lendo.se","metaTitle":"Lendo vs Sambla 2026 — LåneguidenKollen","metaDescription":"Jämför Lendo vs Sambla 2026. Priser, betyg och vår rekommendation. Vilket är bäst för dig?"},"lendo-vs-zmarta":{"nameA":"Lendo","urlA":"https://www.lendo.se","priceA":"från 4.95%","scoreA":"4.8","badgeA":"Bäst totalt","prosA":["Ansök hos 40+ banker på en gång","Svar direkt — utan UC-påverkan","Upp till 600 000 kr, 1–15 år"],"descA":"Jämför lån från 40+ banker på en ansökan","nameB":"Zmarta","urlB":"https://www.zmarta.se","priceB":"från 5.20%","scoreB":"4.5","badgeB":"Bäst samlingslån","prosB":["Minska din månadskostnad","Samla flera lån till ett","Snabbt besked"],"descB":"Specialister på att samla dina lån","winnerName":"Lendo","winnerUrl":"https://www.lendo.se","metaTitle":"Lendo vs Zmarta 2026 — LåneguidenKollen","metaDescription":"Jämför Lendo vs Zmarta 2026. Priser, betyg och vår rekommendation. Vilket är bäst för dig?"},"lendo-vs-advisa":{"nameA":"Lendo","urlA":"https://www.lendo.se","priceA":"från 4.95%","scoreA":"4.8","badgeA":"Bäst totalt","prosA":["Ansök hos 40+ banker på en gång","Svar direkt — utan UC-påverkan","Upp till 600 000 kr, 1–15 år"],"descA":"Jämför lån från 40+ banker på en ansökan","nameB":"Advisa","urlB":"https://www.advisa.se","priceB":"från 5.80%","scoreB":"4.4","badgeB":"Snabbast svar","prosB":["Svar inom några minuter","Enkel digital ansökan","Upp till 600 000 kr"],"descB":"Snabbast svar på marknaden","winnerName":"Lendo","winnerUrl":"https://www.lendo.se","metaTitle":"Lendo vs Advisa 2026 — LåneguidenKollen","metaDescription":"Jämför Lendo vs Advisa 2026. Priser, betyg och vår rekommendation. Vilket är bäst för dig?"},"lendo-vs-credigo":{"nameA":"Lendo","urlA":"https://www.lendo.se","priceA":"från 4.95%","scoreA":"4.8","badgeA":"Bäst totalt","prosA":["Ansök hos 40+ banker på en gång","Svar direkt — utan UC-påverkan","Upp till 600 000 kr, 1–15 år"],"descA":"Jämför lån från 40+ banker på en ansökan","nameB":"Credigo","urlB":"https://www.credigo.se","priceB":"från 6.20%","scoreB":"4.3","badgeB":"Mest flexibel","prosB":["Flexibel återbetalningsplan","Ingen uppläggningsavgift","Anpassa efter din budget"],"descB":"Flexibla återbetalningstider","winnerName":"Lendo","winnerUrl":"https://www.lendo.se","metaTitle":"Lendo vs Credigo 2026 — LåneguidenKollen","metaDescription":"Jämför Lendo vs Credigo 2026. Priser, betyg och vår rekommendation. Vilket är bäst för dig?"},"sambla-vs-zmarta":{"nameA":"Sambla","urlA":"https://www.sambla.se","priceA":"från 4.50%","scoreA":"4.7","badgeA":"Bäst ränta","prosA":["Lägst ränta — garanterat","Upp till 800 000 kr","Samlingslån och privatlån"],"descA":"Marknadens lägsta ränta — upp till 800 000 kr","nameB":"Zmarta","urlB":"https://www.zmarta.se","priceB":"från 5.20%","scoreB":"4.5","badgeB":"Bäst samlingslån","prosB":["Minska din månadskostnad","Samla flera lån till ett","Snabbt besked"],"descB":"Specialister på att samla dina lån","winnerName":"Sambla","winnerUrl":"https://www.sambla.se","metaTitle":"Sambla vs Zmarta 2026 — LåneguidenKollen","metaDescription":"Jämför Sambla vs Zmarta 2026. Priser, betyg och vår rekommendation. Vilket är bäst för dig?"},"sambla-vs-advisa":{"nameA":"Sambla","urlA":"https://www.sambla.se","priceA":"från 4.50%","scoreA":"4.7","badgeA":"Bäst ränta","prosA":["Lägst ränta — garanterat","Upp till 800 000 kr","Samlingslån och privatlån"],"descA":"Marknadens lägsta ränta — upp till 800 000 kr","nameB":"Advisa","urlB":"https://www.advisa.se","priceB":"från 5.80%","scoreB":"4.4","badgeB":"Snabbast svar","prosB":["Svar inom några minuter","Enkel digital ansökan","Upp till 600 000 kr"],"descB":"Snabbast svar på marknaden","winnerName":"Sambla","winnerUrl":"https://www.sambla.se","metaTitle":"Sambla vs Advisa 2026 — LåneguidenKollen","metaDescription":"Jämför Sambla vs Advisa 2026. Priser, betyg och vår rekommendation. Vilket är bäst för dig?"},"sambla-vs-credigo":{"nameA":"Sambla","urlA":"https://www.sambla.se","priceA":"från 4.50%","scoreA":"4.7","badgeA":"Bäst ränta","prosA":["Lägst ränta — garanterat","Upp till 800 000 kr","Samlingslån och privatlån"],"descA":"Marknadens lägsta ränta — upp till 800 000 kr","nameB":"Credigo","urlB":"https://www.credigo.se","priceB":"från 6.20%","scoreB":"4.3","badgeB":"Mest flexibel","prosB":["Flexibel återbetalningsplan","Ingen uppläggningsavgift","Anpassa efter din budget"],"descB":"Flexibla återbetalningstider","winnerName":"Sambla","winnerUrl":"https://www.sambla.se","metaTitle":"Sambla vs Credigo 2026 — LåneguidenKollen","metaDescription":"Jämför Sambla vs Credigo 2026. Priser, betyg och vår rekommendation. Vilket är bäst för dig?"},"zmarta-vs-advisa":{"nameA":"Zmarta","urlA":"https://www.zmarta.se","priceA":"från 5.20%","scoreA":"4.5","badgeA":"Bäst samlingslån","prosA":["Minska din månadskostnad","Samla flera lån till ett","Snabbt besked"],"descA":"Specialister på att samla dina lån","nameB":"Advisa","urlB":"https://www.advisa.se","priceB":"från 5.80%","scoreB":"4.4","badgeB":"Snabbast svar","prosB":["Svar inom några minuter","Enkel digital ansökan","Upp till 600 000 kr"],"descB":"Snabbast svar på marknaden","winnerName":"Zmarta","winnerUrl":"https://www.zmarta.se","metaTitle":"Zmarta vs Advisa 2026 — LåneguidenKollen","metaDescription":"Jämför Zmarta vs Advisa 2026. Priser, betyg och vår rekommendation. Vilket är bäst för dig?"},"zmarta-vs-credigo":{"nameA":"Zmarta","urlA":"https://www.zmarta.se","priceA":"från 5.20%","scoreA":"4.5","badgeA":"Bäst samlingslån","prosA":["Minska din månadskostnad","Samla flera lån till ett","Snabbt besked"],"descA":"Specialister på att samla dina lån","nameB":"Credigo","urlB":"https://www.credigo.se","priceB":"från 6.20%","scoreB":"4.3","badgeB":"Mest flexibel","prosB":["Flexibel återbetalningsplan","Ingen uppläggningsavgift","Anpassa efter din budget"],"descB":"Flexibla återbetalningstider","winnerName":"Zmarta","winnerUrl":"https://www.zmarta.se","metaTitle":"Zmarta vs Credigo 2026 — LåneguidenKollen","metaDescription":"Jämför Zmarta vs Credigo 2026. Priser, betyg och vår rekommendation. Vilket är bäst för dig?"},"advisa-vs-credigo":{"nameA":"Advisa","urlA":"https://www.advisa.se","priceA":"från 5.80%","scoreA":"4.4","badgeA":"Snabbast svar","prosA":["Svar inom några minuter","Enkel digital ansökan","Upp till 600 000 kr"],"descA":"Snabbast svar på marknaden","nameB":"Credigo","urlB":"https://www.credigo.se","priceB":"från 6.20%","scoreB":"4.3","badgeB":"Mest flexibel","prosB":["Flexibel återbetalningsplan","Ingen uppläggningsavgift","Anpassa efter din budget"],"descB":"Flexibla återbetalningstider","winnerName":"Advisa","winnerUrl":"https://www.advisa.se","metaTitle":"Advisa vs Credigo 2026 — LåneguidenKollen","metaDescription":"Jämför Advisa vs Credigo 2026. Priser, betyg och vår rekommendation. Vilket är bäst för dig?"}};
var _paths = [{"params":{"slug":"lendo-vs-sambla"}},{"params":{"slug":"lendo-vs-zmarta"}},{"params":{"slug":"lendo-vs-advisa"}},{"params":{"slug":"lendo-vs-credigo"}},{"params":{"slug":"sambla-vs-zmarta"}},{"params":{"slug":"sambla-vs-advisa"}},{"params":{"slug":"sambla-vs-credigo"}},{"params":{"slug":"zmarta-vs-advisa"}},{"params":{"slug":"zmarta-vs-credigo"}},{"params":{"slug":"advisa-vs-credigo"}}];
var PC = '#1E90FF';
var SITE = 'LåneguidenKollen';
var BASE_URL = 'https://laneguiden-kollen.vercel.app';
var YEAR = 2026;
export function getStaticPaths() { return { paths: _paths, fallback: false }; }
export function getStaticProps({ params }) {
  var data = _comp[params.slug];
  if (!data) return { notFound: true };
  return { props: { compSlug: params.slug, ...data } };
}
export default function ComparisonPage({ compSlug, nameA, urlA, priceA, scoreA, badgeA, prosA, descA, nameB, urlB, priceB, scoreB, badgeB, prosB, descB, winnerName, winnerUrl, metaTitle, metaDescription }) {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={BASE_URL + '/jamfor/' + compSlug} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <nav style={{ background:'#fff', borderBottom:'1px solid #e2e8f0', padding:'0 20px', height:60, display:'flex', alignItems:'center', justifyContent:'space-between', position:'sticky', top:0, zIndex:100, fontFamily:'Inter,sans-serif' }}>
        <Link href="/" style={{ fontWeight:800, fontSize:18, color:PC, textDecoration:'none' }}>{SITE}</Link>
        <div style={{ fontSize:13, color:'#94a3b8' }}>
          <Link href="/" style={{ color:'#94a3b8', textDecoration:'none' }}>Hem</Link>
          <span style={{ margin:'0 6px' }}>›</span>
          <span>{nameA} vs {nameB}</span>
        </div>
      </nav>
      <section style={{ background:'linear-gradient(135deg,#f0f9ff 0%,#f8fafc 100%)', padding:'52px 20px 36px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:900, margin:'0 auto', textAlign:'center' }}>
          <p style={{ fontSize:12, color:'#94a3b8', marginBottom:14 }}><Link href="/" style={{ color:PC }}>Hem</Link> › Jämförelser › {nameA} vs {nameB}</p>
          <h1 style={{ fontSize:'clamp(24px,4vw,40px)', fontWeight:800, color:'#0f172a', lineHeight:1.2, marginBottom:14 }}>{nameA} vs {nameB} {YEAR} — Vilken är bäst?</h1>
          <p style={{ fontSize:16, color:'#475569', maxWidth:560, margin:'0 auto 28px' }}>Vi har jämfört {nameA} och {nameB} på pris, betyg och villkor. Se vår oberoende rekommendation.</p>
        </div>
      </section>
      <section style={{ maxWidth:900, margin:'0 auto', padding:'48px 20px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
          {[{ name:nameA, url:urlA, price:priceA, score:scoreA, badge:badgeA, pros:prosA, desc:descA },
            { name:nameB, url:urlB, price:priceB, score:scoreB, badge:badgeB, pros:prosB, desc:descB }].map(function(p, i) {
            var isWinner = p.name === winnerName;
            return (
              <div key={p.name} style={{ background:'#fff', border:isWinner?'2px solid '+PC:'1px solid #e2e8f0', borderRadius:16, padding:'24px', position:'relative', boxShadow:isWinner?'0 4px 20px '+PC+'18':'none' }}>
                {isWinner && <div style={{ position:'absolute', top:-12, left:50, background:PC, color:'#fff', fontSize:11, fontWeight:800, padding:'3px 12px', borderRadius:10 }}>⭐ VÅR REKOMMENDATION</div>}
                <div style={{ fontWeight:800, fontSize:20, color:'#0f172a', marginBottom:6 }}>{p.name}</div>
                <div style={{ fontSize:13, color:'#64748b', marginBottom:14 }}>{p.desc}</div>
                <div style={{ fontSize:22, fontWeight:800, color:PC, marginBottom:10 }}>{p.price}</div>
                <div style={{ background:'#f0fdf4', color:'#15803d', fontSize:12, fontWeight:700, padding:'3px 10px', borderRadius:8, display:'inline-block', marginBottom:14 }}>{p.badge}</div>
                {p.pros && p.pros.map && p.pros.map(function(pro, j) { return (
                  <div key={j} style={{ display:'flex', gap:6, fontSize:13, marginBottom:6 }}>
                    <span style={{ color:PC, fontWeight:700 }}>✓</span>
                    <span style={{ color:'#374151' }}>{pro}</span>
                  </div>
                ); })}
                <a href={p.url + '?ref=axiom'} target="_blank" rel="noopener noreferrer sponsored" style={{ display:'block', marginTop:18, background:isWinner?PC:'#0f172a', color:'#fff', padding:'11px 0', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none', textAlign:'center' }}>Välj {p.name} →</a>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop:36, background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:14, padding:'24px 28px' }}>
          <h2 style={{ fontSize:20, fontWeight:800, marginBottom:12, color:'#0f172a' }}>Vår rekommendation</h2>
          <p style={{ fontSize:15, color:'#374151', lineHeight:1.75, marginBottom:18 }}>
            Efter att ha jämfört {nameA} och {nameB} på pris, betyg och villkor rekommenderar vi <strong>{winnerName}</strong> för de flesta användare.
          </p>
          <a href={winnerUrl + '?ref=axiom'} target="_blank" rel="noopener noreferrer sponsored" style={{ display:'inline-block', background:PC, color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:15, textDecoration:'none' }}>Kom igång med {winnerName} →</a>
        </div>
        <p style={{ marginTop:16, fontSize:12, color:'#94a3b8' }}>* Vi kan erhålla provision via våra länkar. Det påverkar aldrig våra oberoende betyg.</p>
      </section>
      <footer style={{ background:'#0f172a', color:'#94a3b8', padding:'28px 20px', fontFamily:'Inter,sans-serif', textAlign:'center', fontSize:12 }}>
        <Link href="/" style={{ fontWeight:800, color:'#fff', textDecoration:'none', fontSize:16 }}>{SITE}</Link>
        <p style={{ marginTop:10 }}>&copy; {YEAR} {SITE}. <Link href="/om-oss" style={{ color:'#64748b' }}>Om oss</Link> · <Link href="/integritetspolicy" style={{ color:'#64748b' }}>Integritetspolicy</Link></p>
      </footer>
    </>
  );
}