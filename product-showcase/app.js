class Item {
    constructor(title, imageUri) {
        this.title = title;
        this.imageUri = imageUri;
    }
}

class ItemCard {
    constructor(item) {
        this.element = "div";
        this.class = "item"
        this.item = item;
    }

    render() {
        let element = document.createElement(this.element);
        element.classList.add(this.class);

        let image = document.createElement("img");
        image.src = this.item.imageUri;
        image.classList.add("product-image");
        element.appendChild(image);

        let title = document.createElement("span");
        title.classList.add("item-title");
        title.innerText = this.item.title;
        element.appendChild(title);

        return element;
    }
}

const inventory = 15;
for (let i = 0; i < inventory; i++) {
    let item = new Item("Item Title", "android.png");
    let itemCard = new ItemCard(item);
    let grid = document.getElementById("products");
    grid.appendChild(itemCard.render());
}