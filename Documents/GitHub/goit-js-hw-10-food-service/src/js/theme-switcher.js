
import localStorage from "./local-storage";
const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const themeSwitchInput = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

themeInitializator();
themeSwitchInput.addEventListener('change', themeSwitcher);

function themeSwitcher(event) {
   
    bodyRef.classList.toggle(theme.DARK);
    if (event.target.checked) {
        localStorage.save('theme', theme.DARK);
    } else {
        localStorage.save('theme', theme.LIGHT)
        bodyRef.classList.toggle(theme.LIGHT);
    }
};
function themeInitializator() {
if (localStorage.load('theme') === theme.DARK){
    bodyRef.classList = theme.DARK;
    themeSwitchInput.checked = true;
}
};