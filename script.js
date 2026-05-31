const targetDate = new Date("2026-07-31T06:00:00");
const spans = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    Object.values(spans).forEach((el) => (el.textContent = "00"));
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  spans.days.textContent = String(days).padStart(2, "0");
  spans.hours.textContent = String(hours).padStart(2, "0");
  spans.minutes.textContent = String(minutes).padStart(2, "0");
  spans.seconds.textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();