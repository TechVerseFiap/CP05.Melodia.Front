document.addEventListener('DOMContentLoaded', () => {
  const btnMenu = document.getElementById('btn-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const header = document.getElementById('site-header');

  btnMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('backdrop-blur','bg-black/40', 'shadow-lg');
    } else {
      header.classList.remove('backdrop-blur','bg-black/40','shadow-lg');
    }
  });


  const form = document.getElementById('contact-form');
  const emailInput = document.getElementById('email');
  const nameInput = document.getElementById('name');
  const feedback = document.getElementById('form-feedback');

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    feedback.textContent = '';

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!name) {
      feedback.textContent = 'Por favor informe seu nome.';
      return;
    }
    if (!isValidEmail(email)) {
      feedback.textContent = 'Por favor informe um email válido.';
      return;
    }

    feedback.textContent = 'Obrigado! Recebemos seu contato.';
    form.reset();
  });
});
