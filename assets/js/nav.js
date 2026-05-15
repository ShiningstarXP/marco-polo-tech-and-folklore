// Xanthan navbar: mobile collapse + dropdown menus (no Bootstrap required)
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.querySelector('.top-nav-toggler');
    var collapse = document.querySelector('.top-nav-collapse');

    // Hamburger toggle
    if (toggler && collapse) {
      toggler.addEventListener('click', function () {
        var isOpen = collapse.classList.toggle('show');
        toggler.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    // Dropdown menus
    document.querySelectorAll('.top-nav-dropdown-toggle').forEach(function (toggle) {
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        var menu = this.nextElementSibling;
        var isOpen = menu.classList.contains('show');

        // Close any other open dropdowns
        document.querySelectorAll('.top-nav-dropdown.show').forEach(function (m) {
          m.classList.remove('show');
          m.previousElementSibling.setAttribute('aria-expanded', 'false');
        });

        // Toggle this one
        if (!isOpen) {
          menu.classList.add('show');
          this.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Close dropdowns and mobile nav on outside click
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.has-dropdown')) {
        document.querySelectorAll('.top-nav-dropdown.show').forEach(function (m) {
          m.classList.remove('show');
          m.previousElementSibling.setAttribute('aria-expanded', 'false');
        });
      }
      if (collapse && !e.target.closest('.top-nav') && collapse.classList.contains('show')) {
        collapse.classList.remove('show');
        if (toggler) toggler.setAttribute('aria-expanded', 'false');
      }
    });

    // Close mobile nav when a link is clicked
    if (collapse) {
      collapse.querySelectorAll('a:not(.top-nav-dropdown-toggle)').forEach(function (link) {
        link.addEventListener('click', function () {
          collapse.classList.remove('show');
          if (toggler) toggler.setAttribute('aria-expanded', 'false');
        });
      });
    }
  });
})();
