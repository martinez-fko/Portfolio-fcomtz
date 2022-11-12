export function modeDark() {
  const iconTheme = document.querySelector('.iconTheme');

  iconTheme.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('darkTheme');
    if (isDark) return (iconTheme.textContent = '☀️');
    iconTheme.textContent = '🌙';
  });
}
