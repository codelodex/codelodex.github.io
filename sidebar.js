// Sidebar open/close toggle
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const mainContent = document.querySelector('.main-content');

sidebarToggle.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    // On mobile, slide sidebar in/out
    sidebar.classList.toggle('open');
  } else {
    sidebar.classList.toggle('close');
    // Optionally adjust main content margin for desktop
    if (sidebar.classList.contains('close')) {
      mainContent.style.marginLeft = '60px';
    } else {
      mainContent.style.marginLeft = '260px';
    }
  }
});

// Submenu open/close
document.querySelectorAll('.has-submenu .submenu-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const parent = toggle.closest('.has-submenu');
    parent.classList.toggle('open');
  });
});

// Responsive sidebar behavior on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    sidebar.classList.remove('close');
    sidebar.classList.remove('open');
    mainContent.style.marginLeft = '0';
  } else {
    sidebar.classList.remove('open');
    sidebar.classList.add('close');
    mainContent.style.marginLeft = sidebar.classList.contains('close') ? '60px' : '260px';
  }
});

// Initialize sidebar state
if (window.innerWidth > 768) {
  sidebar.classList.add('close');
  mainContent.style.marginLeft = '60px';
} else {
  sidebar.classList.remove('close');
  sidebar.classList.remove('open');
  mainContent.style.marginLeft = '0';
}