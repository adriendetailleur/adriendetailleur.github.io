// On récupère la racine <html> et ton interrupteur
const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');

// Fonction utilitaire : applique un thème et coche/décoche le switch
function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  toggle.checked = (theme == 'dark');
}

// 1. Lire le choix sauvegardé
const saved = localStorage.getItem('theme');

// 2. Sinon détecter la préférence système
const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// 3. Choisir le thème initial
const initial = saved ?? systemPref;

// 4. Appliquer le thème choisi
setTheme(initial);

// 5. Quand l'utilisateur clique sur le switch
toggle.addEventListener('change', () => {
  const next = toggle.checked ? 'dark' : 'light';
  setTheme(next);
  localStorage.setItem('theme', next);
});

// lit le aria-controls du bouton,
const toggles = document.querySelectorAll('.exp-toggle');
toggles.forEach(btn => {
  btn.addEventListener('click', () => {
    const btnId = btn.getAttribute('aria-controls');
    const element = document.getElementById(btnId);
    if (btn.getAttribute('aria-expanded') === "true") {
        element.style.maxHeight = 0;
        btn.setAttribute('aria-expanded', "false");
        btn.textContent = "Afficher plus";
    }
    else {
        element.style.maxHeight = element.scrollHeight + "px";
        btn.setAttribute('aria-expanded', "true");
        btn.textContent = "Afficher moins";
    }
  });
});
// calcule scrollHeight du bloc,

// met max-height en px pour ouvrir, 0 pour fermer,

// met à jour aria-expanded.

