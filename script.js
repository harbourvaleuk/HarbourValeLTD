/* ------------------------------------------------------------
   EDIT THESE VALUES. Anything left empty is hidden from the page.
   ------------------------------------------------------------ */
var SITE = {
  email: "hello@harbourvale.co.uk",   // shown in the Contact section
  amazon: "",         // your Amazon storefront URL, when live
  ebay: ""            // your eBay store URL, when live
};

(function () {
  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Optional links and email: show only when a value is set
  document.querySelectorAll('[data-cfg]').forEach(function (el) {
    var key = el.getAttribute('data-cfg');
    var value = SITE[key];
    if (!value) { el.hidden = true; return; }
    if (key === 'email') {
      var a = document.getElementById('emailLink');
      a.href = 'mailto:' + value;
      a.textContent = value;
    } else if (el.tagName === 'A') {
      el.href = value;
    }
  });

  // Contact form
  var form = document.getElementById('contactForm');
  var btn = document.getElementById('sendBtn');
  var status = document.getElementById('status');
  if (!form) return;

  function validate() {
    var ok = true;
    form.querySelectorAll('[required]').forEach(function (el) {
      var v = el.value.trim();
      var valid = v !== '' && (el.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
      el.closest('.field').classList.toggle('invalid', !valid);
      if (!valid) ok = false;
    });
    return ok;
  }

  form.addEventListener('input', function (e) {
    var f = e.target.closest('.field');
    if (f && f.classList.contains('invalid')) validate();
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.className = 'status';
    status.textContent = '';
    if (!validate()) {
      var first = form.querySelector('.invalid input, .invalid select, .invalid textarea');
      if (first) first.focus();
      return;
    }
    btn.disabled = true;
    btn.textContent = 'Sending...';
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function (r) {
      if (!r.ok) throw new Error('Request failed');
      form.reset();
      status.textContent = 'Thanks, your message has been sent. We will reply as soon as we can.';
      status.className = 'status ok';
    }).catch(function () {
      status.textContent = 'Your message could not be sent. Please try again, or call +44 7985 455513.';
      status.className = 'status fail';
    }).finally(function () {
      btn.disabled = false;
      btn.textContent = 'Send message';
    });
  });
})();
