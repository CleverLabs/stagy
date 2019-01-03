import axios from './ajax'

interface IGetServerResponse {
  data: ISecret[]
}

interface IPostServerResponse {
  data: ISecret
}

interface ISecret {
  id: number
  repo_id: number
  key: string
  value: string
}

export default class ReposPage {
  private secretsNode = document.getElementById('secrets')
  private secretsButton = document.getElementById('secret-add')

  constructor () {
    this.loadSecrets()
    if (this.secretsButton) {
      this.secretsButton.addEventListener('click', this.postSecrets.bind(this))
    }
  }

  private postSecrets (event: Event): void {
    event.preventDefault()

    const secretKey = document.getElementById('secret-key') as HTMLInputElement
    const secretValue = document.getElementById('secret-value') as HTMLInputElement

    axios
      .post(this.secretsUrl(), {
        key: secretKey ? secretKey.value : '',
        value: secretValue ? secretValue.value : ''
      })
      .then((response: IPostServerResponse) => {
        secretKey.value = ''
        secretValue.value = ''
        this.render(response.data)
      })
  }

  private loadSecrets (): void {
    axios
      .get(this.secretsUrl())
      .then((response: IGetServerResponse) => {
        response.data.forEach((value) => { this.render(value) })
      })
  }

  private render (secret: ISecret): void {
    const secretNode = document.createElement('p')
    secretNode.textContent = `"${secret.key}" = "${secret.value}"`

    if (this.secretsNode) {
      this.secretsNode.append(secretNode)
    } else {
      throw new Error('Can\'t find Secrets node')
    }
  }

  private secretsUrl (): string {
    if (this.secretsNode) {
      return `/repos/${this.secretsNode.dataset.repoId}/secrets`
    } else {
      throw new Error('Can\'t find Secrets node')
    }
  }
}
