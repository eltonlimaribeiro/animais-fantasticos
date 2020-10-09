export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"');
  const window50 = (window.innerHeight * 0.5);

  function animaScrol() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - window50) < 0;

      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    animaScrol();
    window.addEventListener('scroll', animaScrol);
  }
}
