const API = "https://dummyjson.com/products";

const overlayEl = document.querySelector("#overlay");
const loaderEl = document.querySelector("#loader");

const getData = async (data) => {
  const request = await fetch(data);
  const response = await request.json();
  overlayEl.classList.add("hidden");
  loaderEl.classList.add("hidden");
  return response;
};
