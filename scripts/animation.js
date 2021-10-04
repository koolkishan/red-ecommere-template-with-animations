// Scroll Reveal Animations
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: false,
});

sr.reveal(
  `.top__bar,
  .search__bar,
  .navbar,
  .hero,
  .services,
  .deals,
  .recent__products,
  .recent__posts,
  .newsletter,
  footer`,
  {
    interval: 200,
  }
);
