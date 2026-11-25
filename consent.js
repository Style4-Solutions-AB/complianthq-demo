// Samtyckesruta: Google Analytics laddas först när besökaren har godkänt.
(function () {
  var NYCKEL = 'samtycke-statistik';

  function laddaAnalytics() {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-K7D3QX2M9P';
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', 'G-K7D3QX2M9P', { cookie_domain: 'demo.complianthq.ai' });
  }

  var val = null;
  try { val = localStorage.getItem(NYCKEL); } catch (e) {}

  if (val === 'ja') { laddaAnalytics(); return; }
  if (val === 'nej') return;

  function visaRuta() {
    var ruta = document.createElement('div');
    ruta.className = 'samtycke';
    ruta.setAttribute('role', 'dialog');
    ruta.setAttribute('aria-label', 'Cookies');
    ruta.innerHTML =
      '<p>Vi vill använda cookies för besöksstatistik (Google Analytics). ' +
      'De sätts bara om du godkänner. <a href="integritetspolicy.html">Läs mer</a></p>' +
      '<div class="samtycke-knappar">' +
      '<button type="button" data-val="nej">Neka</button>' +
      '<button type="button" data-val="ja">Godkänn</button>' +
      '</div>';
    ruta.addEventListener('click', function (e) {
      var v = e.target.getAttribute && e.target.getAttribute('data-val');
      if (!v) return;
      try { localStorage.setItem(NYCKEL, v); } catch (err) {}
      if (v === 'ja') laddaAnalytics();
      ruta.remove();
    });
    document.body.appendChild(ruta);
  }

  if (document.body) visaRuta();
  else document.addEventListener('DOMContentLoaded', visaRuta);
})();
