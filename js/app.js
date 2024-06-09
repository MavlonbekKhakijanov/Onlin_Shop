const productList = document.querySelector("#product-list");
const mostPopular = document.querySelector("#most-popular");

const upDateUi = (data) => {
  productList.innerHTML = "";
  data.forEach((product) => {
    const mostPopularTemplate = mostPopular.content.cloneNode(true);
    const productTitle = mostPopularTemplate.querySelector(".product-title");
    const productImg = mostPopularTemplate.querySelector(".product-img");
    const myLink = mostPopularTemplate.querySelector(".my-link");
    const productDescription = mostPopularTemplate.querySelector(
      ".product-description"
    );
    productTitle.textContent = product.title;
    productImg.src = product.thumbnail;
    productList.appendChild(mostPopularTemplate);
  });

  console.log(data);
};

getData(API).then((data) => {
  upDateUi(data.products);
});
