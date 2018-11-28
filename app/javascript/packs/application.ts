require('./stylesheets/application.scss')

window.onload = () => {
  const hiNode = document.createElement('h1')
  hiNode.textContent = 'Hello, TypeScript'
  document.body.append(hiNode)
}
