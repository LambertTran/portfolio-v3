
export default function isElementInView() {
  const rect = this.getBoundingClientRect();
  return rect.bottom * 1.1 <= (window.innerHeight || document.documentElement.clientHeight);
}
