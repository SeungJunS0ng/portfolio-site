export function scrollToSection(id: string, behavior: ScrollBehavior) {
  const target = document.getElementById(id);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({ top: Math.max(0, top), behavior });
}
