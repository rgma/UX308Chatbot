class XHighlight extends HTMLElement {

  connectedCallback() {

    this.innerHTML = `
      <style>
        .highlight {
          background-color: yellow;
          padding: 5px;
          border-radius: 5px;
          font-weight: bold;
        }
      </style>

      <div class="highlight">
        ${this.innerHTML}
      </div>
    `;
  }
}

customElements.define("x-highlight", XHighlight);