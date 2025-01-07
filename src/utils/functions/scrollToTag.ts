export function scrollToTag(tag: string) {
  const element = document.querySelector(tag);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  return;
}
