export default function initToolTip() {
  const tooltips = document.querySelectorAll('[data-tooltip');

  const onMouseMove = {
    handleEvent(e) {
      this.tooltipBox.style.top = `${e.pageY + 20}px`;
      this.tooltipBox.style.left = `${e.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mouseleave', onMouseMove);
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');

    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this);

    onMouseLeave.tooltipBox = tooltipBox;
    this.addEventListener('mouseleave', onMouseLeave);
    onMouseLeave.element = this;

    this.addEventListener('mousemove', onMouseMove);
    onMouseMove.tooltipBox = tooltipBox;
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
