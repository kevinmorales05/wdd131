window.addEventListener("DOMContentLoaded", () => {
  // Increment review count
  let reviewCount = localStorage.getItem("reviewCount") || 0;
  reviewCount = parseInt(reviewCount) + 1;
  localStorage.setItem("reviewCount", reviewCount);

  // Display count
  const message = document.getElementById("reviewCountMessage");
  message.textContent = `You have submitted ${reviewCount} review(s).`;
});
