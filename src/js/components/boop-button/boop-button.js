const template = document.createElement('template')
template.innerHTML = `
  <form>
    <input type="submit" value="Boop">
  </form>
`
customElements.define('boop-button',
  /**
   * Represents a boop-button element.
   */
  class extends HTMLElement {
    #form
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#form = this.shadowRoot.querySelector('form')

      this.#listenForSubmit()
    }

    /**
     * Listens for a submit of the form.
     */
    #listenForSubmit () {
      this.#form.addEventListener('submit', (event) => {
        event.preventDefault()
      })
    }
  }
)
