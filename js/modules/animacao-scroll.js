
export default function initAnimacaoScroll(){
   const sections = document.querySelectorAll('[data-anime="scroll"')

   if(sections.length){

      const window50 = window.innerHeight * .5

      function animaScrol(){
         sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top
            const isSectionVisible = (sectionTop - window50) < 0

            if(isSectionVisible){
               section.classList.add('ativo')
            } else if(section.classList.contains('ativo')){
               section.classList.remove('ativo')
            }
         })
      }

      animaScrol()

      window.addEventListener('scroll', animaScrol)
   }
}