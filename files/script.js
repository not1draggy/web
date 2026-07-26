/**
 * Odhalenie sekcií pri scrolle.
 * IntersectionObserver namiesto scroll listenera — beží mimo hlavného
 * vlákna a nespúšťa layout na každom pixeli. Pri prefers-reduced-motion
 * sa nespustí vôbec, obsah je viditeľný z CSS.
 */
(function () {
  "use strict";

  var nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var unsupported = !("IntersectionObserver" in window);

  // Fallback: radšej všetko viditeľné než prázdna stránka.
  if (reduced || unsupported) {
    nodes.forEach(function (n) {
      n.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px" }
  );

  nodes.forEach(function (n, i) {
    n.style.transitionDelay = Math.min(i % 3, 2) * 80 + "ms";
    observer.observe(n);
  });
})();
