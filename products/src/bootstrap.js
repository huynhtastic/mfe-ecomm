import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Context/Situation #1
// running file in development in isolation
// using local index.html
// which has element with id='dev-products'
// render app into element
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  // assuming our contianer doesn't have an el w/ id='dev-products
  if (el) {
    // prob running in isolation
    mount(el);
  }
}

// Context/Situation #2
// running file in development for prod
// through container app
// no gaurantee of element with id='dev-products'
// do not want to immediately render the app

export { mount };
