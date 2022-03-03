const template = document.createElement("template");

template.innerHTML = `
<div class="medium-blogpost">
<div part="articles" class="medium-blogpost-articles">
</div>
</div>
`;

class MediumBlogpost extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
  async fetchPosts(username) {
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
    );
    const data = await response.json();
    return data;
  }
  connectedCallback() {
    this.username = this.getAttribute("username");
    this.render();
  }

  renderArticles(data = []) {
    var i = 0;
    data.forEach((data) => {
      if (i < 4) {
        this._shadowRoot.querySelector(
          ".medium-blogpost-articles"
        ).innerHTML += `<a part="single" style="background: linear-gradient(to bottom,rgba(0,0,0,0.38), rgba(0,0,0,0.38)), url('${
          data.thumbnail
        }');"class="medium-blogpost-single-article" href="${
          data.link
        }" target="_blank"><h3 part="h3">${
          data.title
        }</h3><p part="p">${this.parseDate(data.pubDate)}</p></a>`;
      }
      i++;
    });
  }
  parseDate(date) {
    const IsoStringToDate = new Date(date);
    const parsedDate = IsoStringToDate.toUTCString().slice(5).slice(0, -13);
    return parsedDate;
  }

  async render() {
    const data = await this.fetchPosts(this.username);
    this.renderArticles(data.items);
  }
}

customElements.define("medium-blogpost", MediumBlogpost);
