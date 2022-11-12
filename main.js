const hiddenElemets = document.querySelectorAll('.hidden');
const links = document.querySelectorAll('.link');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');

        links.forEach((link) => {
          const href = link.getAttribute('href').split('#')[1];
          const id = entry.target.id;

          if (href === id) {
            link.classList.add('link--active');
          } else {
            link.classList.remove('link--active');
          }
        });
      } else {
        entry.target.classList.remove('show');
      }
    });
  },
  {
    threshold: 0.5,
  }
);

hiddenElemets.forEach((element) => observer.observe(element));

// menu

const iconShowMenu = document.querySelector('.iconShowMenu');
const navbarLinks = document.querySelector('.navbar__links');

iconShowMenu.addEventListener('click', () => {
  const isVisible = navbarLinks.classList.toggle('navbar__links--show');
  if (isVisible) return iconShowMenu.classList.add('bx-x');

  iconShowMenu.classList.remove('bx-x');
});

links.forEach((link) => {
  close(link);
});

function close(elementHTML) {
  elementHTML.addEventListener('click', () => {
    const isVisible = navbarLinks.classList.toggle('navbar__links--show');
    if (isVisible) return iconShowMenu.classList.add('bx-x');

    iconShowMenu.classList.remove('bx-x');
  });
}

//ModeDark

const iconTheme = document.querySelector('.iconTheme');

iconTheme.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('darkTheme');
  if (isDark) return (iconTheme.textContent = '☀️');
  iconTheme.textContent = '🌑';
});
