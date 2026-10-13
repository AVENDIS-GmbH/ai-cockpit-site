// Opens and closes the navigation on small screens.
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Lets the blocks of a page come in as they are scrolled to. Without this script, and for
// visitors who prefer reduced motion, everything is simply there.
const blocks = document.querySelectorAll(
  '.section-head, .card, .split > *, .terms > div, .diagram .box, .nots > div, .stage, .band .wrap, .prose > *'
);
if ('IntersectionObserver' in window && blocks.length > 0) {
  document.documentElement.classList.add('js');
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px' }
  );
  blocks.forEach((block, index) => {
    block.classList.add('reveal');
    block.style.transitionDelay = `${(index % 4) * 70}ms`;
    observer.observe(block);
  });
}
