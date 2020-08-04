import 'bootstrap';
import * as Rails from 'rails-ujs'
const Turbolinks = require('turbolinks')

Rails.start()
Turbolinks.start()

// window.onload = () => {
//
// }

require.context('../images', true)
require('../stylesheets/application.scss')


document.addEventListener("turbolinks:load", () => {
  let hubSpotScript = document.createElement("script");
  hubSpotScript.setAttribute("src", "//js.hs-scripts.com/6898069.js");
  hubSpotScript.setAttribute("type", "text/javascript");
  hubSpotScript.setAttribute("async", "");
  hubSpotScript.setAttribute("defer", "");
  hubSpotScript.setAttribute("id", "hs-script-loader");
  document.body.appendChild(hubSpotScript);
});
