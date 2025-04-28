let yes = document.querySelector(".yes");
let no = document.querySelector(".no");
let allPage = document.querySelector("main");

yes.addEventListener("click", function () {
  allPage.innerHTML = "";
  allPage.innerHTML = `
    <div class="textYes">
    <p>Ура!</p><br>
    <p>Будем счастливы разделить с Тобой наш день 💖</p>
    <button class="about">Узнать подробности</button>
    </div>
    `;

  let about = document.querySelector(".about");

  about.addEventListener("click", function () {
    allPage.innerHTML = "";
    allPage.innerHTML = `
      <div class="aboutText">
<p>🍃 Начало церемонии в 15:30!  Но мы настоятельно рекомендуем быть в 15:00, так как специально для тебя будет организован фуршет и живая музыка!
</p>
<p>🍃 Информация по дресс-коду: 
Его нет! Будем рады видеть тебя в любом наряде, который ты себе придумаешь!
</p>
<p>🍃 Если желаешь поздравить нас по случаю праздника, мы будем благодарны денежным подаркам и обещаем, что найдем им самое лучшее применение!
</p>
<p>🍃 Вскоре после свадьбы мы уезжаем в путешествие, поэтому просим не дарить нам цветы, ведь мы просто не успеем насладиться их красотой до вылета, но какая-нибудь бутылочка с удовольствием дождется нашего возвращения!
</p>
<p>🍃 Если остались вопросы, пиши нам!</p>
      </div>
      `;
  });
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
    <p>Пожалуйста, напиши нам об этом в личном сообщении</p>
    </div>
    `;
  });
});
