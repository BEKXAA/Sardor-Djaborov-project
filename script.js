const translations = {
  ru: {
    about: 'Обо мне',
    portfolio: 'Портфолио',
    contact: 'Контакты',
    name: 'Сардор Джабаров',
    profession: 'Инженер-строитель',
    bio: 'Я — строительный блогер, делюсь опытом и  советами по современному строительству и ремонту.',
    name_placeholder: 'Имя',
    email_placeholder: 'Email',
    message_placeholder: 'Сообщение',
    send: 'Отправить',
    portfolio_title: 'Портфолио',
    contact_title: 'Контакты',
    copyright: 'Все  права защищены.'
  },
  uz: {
    about: 'Men haqimda',
    portfolio: 'Portfolio',
    contact: 'Aloqa',
    name: 'Sardor Djabarov',
    profession: 'Injener-quruvchi',
    bio: 'Men qurilish blogeriman, zamonaviy qurilish va ta\'mirlash bo\'yicha tajriba va maslahatlarimni ulashaman.',
    name_placeholder: 'Ism',
    email_placeholder: 'Email',
    message_placeholder: 'Xabar',
    send: 'Yuborish',
    portfolio_title: 'Portfolio',
    contact_title: 'Aloqa',
    copyright: 'Barcha huquqlar himoyalangan.'
  },
  en: {
    about: 'About',
    portfolio: 'Portfolio',
    contact: 'Contact',
    name: 'Sardor Djabarov',
    profession: 'Civil Engineer',
    bio: 'I am a construction blogger sharing experience and tips on modern building and renovation.',
    name_placeholder: 'Name',
    email_placeholder: 'Email',
    message_placeholder: 'Message',
    send: 'Send',
    portfolio_title: 'Portfolio',
    contact_title: 'Contact',
    copyright: 'All rights reserved.'
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  // Footer copyright
  const footer = document.querySelector('footer p');
  if (footer) {
    footer.innerHTML = `&copy; 2025 Sardor Djabarov. ${translations[lang].copyright}`;
  }
}

document.querySelectorAll('.lang-switcher button').forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.getAttribute('data-lang'));
  });
});

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('a.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Default language
setLanguage('ru');

// Dark/Light mode toggle
const themeToggle = document.getElementById('theme-toggle');
function setTheme(mode) {
  if (mode === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '☀️';
  } else {
    document.body.classList.remove('light-mode');
    themeToggle.textContent = '🌙';
  }
  localStorage.setItem('theme', mode);
}
themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-mode');
  setTheme(isLight ? 'light' : 'dark');
});
// On load, set theme from localStorage
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'light' ? 'light' : 'dark');
