export const scrollTop = ({ top }: { top: number }) =>
  window.scrollTo({
    top: top,
    behavior: 'smooth',
  })
