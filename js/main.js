/* ============================================================
   MAIN.JS
   Currently does one job: when a user clicks a link in the top
   navigation (anchor like "#about"), smooth-scroll to that
   section instead of doing the default instant jump, and
   offset by 60px so the section heading doesn't hide behind
   the fixed navigation bar.
   ============================================================ */

document.querySelectorAll('nav.top .links a').forEach(link => {
  link.addEventListener('click', event => {
    const id = link.getAttribute('href');

    // Bail out if this link isn't an in-page anchor.
    if (!id || id[0] !== '#') return;

    const target = document.querySelector(id);
    if (!target) return;

    event.preventDefault();
    window.scrollTo({
      top: target.offsetTop - 60,   // 60px = roughly the height of the fixed nav
      behavior: 'smooth',
    });
  });
});
