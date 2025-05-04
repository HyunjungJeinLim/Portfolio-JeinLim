document.addEventListener("DOMContentLoaded", () => {
  const text = "Hello, I'm Jein";
  const target = document.getElementById("animatedText");
  let i = 0;
  function typeLetter() {
    if (i < text.length) {
      target.innerHTML += text[i];
      i++;
      setTimeout(typeLetter, 150);
    }
  }
  typeLetter();

  window.dispatchEvent(new Event('scroll')); // reveal 강제 트리거
});

window.addEventListener("scroll", () => {
  const intro = document.getElementById("intro");
  const navbar = document.getElementById("navbar");
  const indicator = document.querySelector(".scroll-indicator");

  // navbar + glow box
  if (window.scrollY > 30) {
    intro.classList.add("show-box");
    navbar.classList.add("show");
  } else {
    intro.classList.remove("show-box");
    navbar.classList.remove("show");
  }

  // scroll indicator
  if (window.scrollY > 10) {
    indicator.classList.add("hide");
  } else {
    indicator.classList.remove("hide");
  }

  // reveal 다시 작동하도록 수정
  document.querySelectorAll(".reveal").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible"); // 뷰포트 벗어나면 다시 제거
    }
  });
});
