
const urlParams = new URLSearchParams(window.location.search);
const accessAllowed = urlParams.get('devam') === 'yes';
const today = new Date();
const unlockDate = new Date('June 20, 2025');

if (!accessAllowed && today < unlockDate) {
  document.body.innerHTML = `
    <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;background:linear-gradient(to right, #ffe0f0, #e0c3fc);font-family:'Poppins',sans-serif;text-align:center;">
      <h1 style="font-size:2.5rem;color:#800080;">Not Available Yet 🌙</h1>
      <h2 style="margin-top:10px;font-size:2rem;color:#b30059;">Happy Birthday, Tiya 💖</h2>
      <p style="margin-top:10px;color:#5c0066;font-style:italic;">“In a world full of blinding lights...”</p>
    </div>
  `;
}
