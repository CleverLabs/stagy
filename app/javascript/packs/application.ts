import 'bootstrap';
import * as Rails from 'rails-ujs'
import ReposPage from './repos'

Rails.start()

window.onload = () => {
  // const hiNode = document.createElement('h1')
  // hiNode.textContent = 'Hello, TypeScript'
  // document.body.append(hiNode)
  // if (document.getElementById('repos-page')) {
  //   const _repos = new ReposPage()
  // }
}

require('./stylesheets/application.scss')
