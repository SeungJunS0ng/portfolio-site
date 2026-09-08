export function scrollToSection(id: string, behavior: ScrollBehavior) {
  const target = document.getElementById(id);
  if (!target) return;

  const contactOffset = id === "contact" ? 72 : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - contactOffset;

  window.scrollTo({ top: Math.max(0, top), behavior });
}
