export function menu() {
  const iconShowMenu = document.querySelector('.iconShowMenu');
  const navbarLinks = document.querySelector('.navbar__links');
  const links = document.querySelectorAll('.link');

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
}
