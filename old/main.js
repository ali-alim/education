
// show/hide FAQ answers

const faqs = document.querySelectorAll(".faq");


faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
  });

});
