const template = document.createElement('template')
template.innerHTML = `
<style>
    #boopContainer {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  </style>
  <form>
    <input type="submit" value="Boop">
  </form>
  <div id="boopContainer">
    <img id="boopGif" src="./images/boop1.gif" alt="boop">
  </div>
`
customElements.define('boop-button',
  /**
   * Represents a boop-button element.
   */
  class extends HTMLElement {
    #form
    #boopContainer
    #boopGif
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#form = this.shadowRoot.querySelector('form')
      this.#boopContainer = this.shadowRoot.querySelector('#boopContainer')
      this.#boopGif = this.shadowRoot.querySelector('#boopGif')

      this.#listenForSubmit()
    }

    /**
     * Listens for a submit of the form.
     */
    #listenForSubmit () {
      this.#form.addEventListener('submit', (event) => {
        event.preventDefault()
        this.#displayBoop()
      })
    }

    /**
     * Plays the boop animation once.
     */
    #displayBoop () {
      this.#boopGif.currentTime = 0
      this.#boopContainer.style.display = 'block'

      setTimeout(() => {
        this.#boopContainer.style.display = 'none'
      }, 1700) // Hide after 1 second
    }
  }
)
