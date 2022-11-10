const hiddenElemets = document.querySelectorAll('.hidden');
const links = document.querySelectorAll('.link');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');

        links.forEach( link => {
          const href = link.getAttribute('href').split('#')[1];
          const id = entry.target.id;

          if( href === id){
            link.classList.add("link--active")
          }else{
            link.classList.remove('link--active')
          }
        })
      } else {
        entry.target.classList.remove('show');
      }
    });
  },
  {
    threshold: 0.45,
  }
);

hiddenElemets.forEach((element) => observer.observe(element));
