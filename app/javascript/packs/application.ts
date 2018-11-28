import * as Rails from 'rails-ujs'
Rails.start()

window.onload = () => {
  const hiNode = document.createElement('h1')
  hiNode.textContent = 'Hello, TypeScript'
  document.body.append(hiNode)
}

require('./stylesheets/application.scss')
