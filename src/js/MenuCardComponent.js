export default class MenuCardComponent {
  constructor(categoryName, isPlayMode) {
    this.categoryName = categoryName;
    this.root = document.createElement('div');
    // state
    this.isPlayMode = isPlayMode;
  }

  draw() {
    this.root.className = 'col-md-3 col-sm-6';
    const card = `<a href="/#/${this.categoryName}">
                    <div class="card category-list-color ${!this.isPlayMode ? 'play-mode' : ''}" id="${this.categoryName}">
                      <img class="card-img-top" src="images/${this.categoryName}.jpeg" alt="${this.categoryName}">
                      <div class="card-body">
                        <p class="card-text">${this.categoryName[0].toUpperCase() + this.categoryName.slice(1)}</p>
                      </div>
                    </div>
                  </a>`;
    this.root.insertAdjacentHTML('beforeend', card);
    return this.root;
  }

  togglePlayMode() {
    if(this.isPlayMode) {
      this.root.querySelector('.card').classList.add('play-mode');
    } else {
      this.root.querySelector('.card').classList.remove('play-mode');
    }
    this.isPlayMode = !this.isPlayMode;
  }
}
