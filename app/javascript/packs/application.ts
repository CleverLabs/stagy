import 'bulma';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import * as Rails from 'rails-ujs'
const Turbolinks = require('turbolinks')

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';


import ReactOnRails from 'react-on-rails';
import EnvVarFields from '../bundles/RepositoryForm/components/EnvVarFields';
import ProcessesFields from '../bundles/RepositoryForm/components/ProcessesFields';

ReactOnRails.register({
  EnvVarFields,
  ProcessesFields,
});


Rails.start()
Turbolinks.start()


const handler = () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        if ($target != null) {
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        }

      });
    });
  }



  const projectSelector = document.getElementById("projectSelector");
  const projectsList = document.getElementById("projectsList");

  if (projectSelector && projectsList) {
    projectSelector.addEventListener('click', () => {
      projectsList.classList.toggle('is-active');
    });
  }



  const $modalLinks = Array.prototype.slice.call(document.querySelectorAll('.open-modal-link'), 0);
  const $html = document.querySelector('html');

  if ($html) {
    $modalLinks.forEach(modalLink => {
      const $target = document.getElementById(modalLink.dataset.target);
      const $targetBackground = $target?.querySelector('.modal-background');
      const $closeIcons = Array.prototype.slice.call(document.querySelectorAll('.modal-close-icon'), 0);


      if ($target && $targetBackground) {
        modalLink.addEventListener('click', (event: any) => {
          event.preventDefault();

          $target.classList.add('is-active');
          $html.classList.add('is-clipped');
        });

        $targetBackground.addEventListener('click', (event: any) => {
          event.preventDefault();

          $target.classList.remove('is-active');
          $html.classList.remove('is-clipped');
        });

        $closeIcons.forEach(closeIcon => {
          closeIcon.addEventListener('click', (event: any) => {
            event.preventDefault();

            $target.classList.remove('is-active');
            $html.classList.remove('is-clipped');
          });
        });
      }
    });
  }



  const processSelector = document.getElementById('process_for_logs_selector');

  if (processSelector) {
    processSelector.addEventListener('change', (event: any) => {
      window.location = event.target.value;
    });
  }



  const buildTypeSelector = <HTMLInputElement>document.getElementById('repository_build_type');

  if (buildTypeSelector) {
    const dockerForm = document.getElementById('dockerForm');
    const privateGemForm = document.getElementById('privateGemForm');

    if (dockerForm && privateGemForm) {
      if (buildTypeSelector.value == 'docker') {
        privateGemForm.style.display = 'none';
      } else if (buildTypeSelector.value == 'private_gem') {
        dockerForm.style.display = 'none';
      } else {
        privateGemForm.style.display = 'none';
        dockerForm.style.display = 'none';
      }

      buildTypeSelector.addEventListener('change', (event: any) => {
        if (event.target.value === 'docker') {
          dockerForm.style.display = 'block';
          privateGemForm.style.display = 'none';
        }

        if (event.target.value === 'private_gem') {
          dockerForm.style.display = 'none';
          privateGemForm.style.display = 'block';
        }
      })
    }
  }

  tippy('.has-tooltip');
};


window.onload = handler;
document.addEventListener('turbolinks:load', handler);





require.context('../images', true)
require('../stylesheets/application.scss')


