function updateCountdown(id, targetDate) {
    const timer = document.getElementById(id);
    setInterval(() => {
      const now = new Date();
      const diff = new Date(targetDate) - now;
  
      if (diff <= 0) {
        timer.textContent = "🎉 It's today!";
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
  
        timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }, 1000);
  }
  
  updateCountdown("bdayTimer", "June 20, 2025 00:00:00");
  updateCountdown("anniTimer", "June 21, 2025 00:00:00");
  