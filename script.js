// header scroll state
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  // menu tabs
  const tabs = document.querySelectorAll('.menu-tab');
  const panels = document.querySelectorAll('.menu-grid');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector(`.menu-grid[data-panel="${tab.dataset.menu}"]`).classList.add('active');
    });
  });

  // reservation form (demo — no backend)
  document.getElementById('reserveForm').addEventListener('submit', function(e){
    e.preventDefault();
    const btn = this.querySelector('.form-submit');
    const original = btn.textContent;
    btn.textContent = 'Request sent';
    btn.style.background = '#4A5A3A';
    setTimeout(() => { btn.textContent = original; btn.style.background = ''; }, 2600);
    showToast("Sample only — no reservation was actually sent.");
  });

  // sample-site notice for links that don't go anywhere real
  const toast = document.getElementById('demoToast');
  const toastText = document.getElementById('demoToastText');
  let toastTimer;
  function showToast(message){
    toastText.textContent = message || "This is a sample website — this button isn't connected to anything.";
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
  }
  document.querySelectorAll('.demo-link').forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault();
      showToast("This is a sample website — \"" + this.textContent.trim() + "\" isn't a real page.");
    });
  });

  // visible confirmation for real in-page navigation buttons
  document.querySelectorAll('a[data-toast]').forEach(link => {
    link.addEventListener('click', function(){
      showToast(this.dataset.toast);
    });
  });
  document.querySelectorAll('.nav-links a, .footer-col a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(){
      showToast('Jumping to ' + this.textContent.trim());
    });
  });
  document.querySelector('.brand').addEventListener('click', function(){
    showToast('Back to top');
  });
