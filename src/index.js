import "./styles.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class='nav'>
    <button class='nav-toggler'>
      <span class='navbar-toggler-icon'></span>
    </button>
    <ul class='nav-list'>
      <li class='nav-item'><span>One</span></li>
      <li class='nav-item'><span>Two</span></li>
      <li class='nav-item'><span>Three</span></li>
      <li class='nav-item'><span>Four</span></li>
      <li class='nav-item'><span>Five</span></li>
      <li class='nav-item'><span>Six</span></li>
      <li class='nav-item'><span>Seven</span></li>
      <li class='nav-item'><span>Eight</span></li>
    </ul>
  </div>
`;

const nav = document.querySelector(".nav");
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
  nav.classList.contains("opened")
    ? nav.classList.remove("opened")
    : nav.classList.add("opened");
});
