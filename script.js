let yes = document.querySelector(".yes");
let no = document.querySelector(".no");
let allPage = document.querySelector("main");

yes.addEventListener("click", function () {
  allPage.innerHTML = "";
  allPage.innerHTML = `
    <div class="textYes">
    <p>Ура!</p><br>
    <p>Будем счастливы разделить с Тобой наш день  💖</p>
    </div>
    `;
});

no.addEventListener("click", function () {
  allPage.innerHTML = "";
  allPage.innerHTML = `
    <div class="textYes">
    <p>Такие ответы не принимаются...</p><br>
    <button class="noo">Ну правда никак...</button>
    </div>
    `;

  let noo = document.querySelector(".noo");

  noo.addEventListener("click", function () {
    allPage.innerHTML = "";
    allPage.innerHTML = `
    <div class="textYes">
    <p>Очень жаль 😢</p><br>
    <p>Пожалуйста, напиши нам об этом в личные сообщения 🙏</p>
    </div>
    `;
  });
});
