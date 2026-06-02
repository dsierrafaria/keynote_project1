// Sierra & Company — deck navigation
(function () {
  const deck = document.getElementById('deck');
  const dots = document.getElementById('dots');
  const counter = document.getElementById('counter');
  let current = 0;

  // render slides
  deck.innerHTML = SLIDES.join('');
  const slides = Array.from(deck.querySelectorAll('.slide'));

  // build dots
  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'dot';
    d.setAttribute('aria-label', 'Ir para o slide ' + (i + 1));
    d.addEventListener('click', () => go(i));
    dots.appendChild(d);
  });
  const dotEls = Array.from(dots.children);

  function go(n) {
    current = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach((s, i) => s.classList.toggle('active', i === current));
    dotEls.forEach((d, i) => d.classList.toggle('active', i === current));
    counter.textContent = (current + 1) + ' / ' + slides.length;
  }

  document.getElementById('next').addEventListener('click', () => go(current + 1));
  document.getElementById('prev').addEventListener('click', () => go(current - 1));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); go(current + 1); }
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(current - 1); }
    if (e.key === 'Home') go(0);
    if (e.key === 'End') go(slides.length - 1);
  });

  go(0);
})();
