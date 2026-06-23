export async function getServerSideProps({ res }) {
  const base = process.env.NEXT_PUBLIC_URL || 'https://laneguiden-kollen.vercel.app';
  const pages = [{"path":"","priority":"1.0","changefreq":"daily"},{"path":"/om-oss","priority":"0.5","changefreq":"monthly"},{"path":"/kontakt","priority":"0.4","changefreq":"monthly"},{"path":"/integritetspolicy","priority":"0.3","changefreq":"yearly"},{"path":"/utan-uc","priority":"0.8","changefreq":"weekly"},{"path":"/med-betalningsanmarkning","priority":"0.8","changefreq":"weekly"},{"path":"/snabbt","priority":"0.8","changefreq":"weekly"},{"path":"/lagrad-ranta","priority":"0.8","changefreq":"weekly"},{"path":"/samlingslan","priority":"0.8","changefreq":"weekly"},{"path":"/jamfor/lendo-vs-sambla","priority":"0.7","changefreq":"weekly"},{"path":"/jamfor/lendo-vs-zmarta","priority":"0.7","changefreq":"weekly"},{"path":"/jamfor/lendo-vs-advisa","priority":"0.7","changefreq":"weekly"},{"path":"/jamfor/lendo-vs-credigo","priority":"0.7","changefreq":"weekly"},{"path":"/jamfor/sambla-vs-zmarta","priority":"0.7","changefreq":"weekly"},{"path":"/jamfor/sambla-vs-advisa","priority":"0.7","changefreq":"weekly"},{"path":"/jamfor/sambla-vs-credigo","priority":"0.7","changefreq":"weekly"},{"path":"/jamfor/zmarta-vs-advisa","priority":"0.7","changefreq":"weekly"},{"path":"/jamfor/zmarta-vs-credigo","priority":"0.7","changefreq":"weekly"},{"path":"/jamfor/advisa-vs-credigo","priority":"0.7","changefreq":"weekly"}];
  const xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    pages.map(function(p) { return '<url><loc>'+base+p.path+'</loc><lastmod>2026-06-23</lastmod><changefreq>'+p.changefreq+'</changefreq><priority>'+p.priority+'</priority></url>'; }).join('') +
    '</urlset>';
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.write(xml); res.end();
  return { props: {} };
}
export default function Sitemap() { return null; }