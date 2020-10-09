export default function outSideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutSideClick(e) {
    if (!element.contains(e.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvents) => {
        html.removeEventListener(userEvents, handleOutSideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutSideClick));
    });
    element.setAttribute(outside, '');
  }
}
