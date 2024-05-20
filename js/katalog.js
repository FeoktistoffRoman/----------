let originalOrder = [];

document.getElementById("sortByName").addEventListener("click", function () {
  const elements = document.querySelectorAll(".plast-case");
  const elementsArray = Array.from(elements);

  elementsArray.sort((a, b) => a.textContent.localeCompare(b.textContent));

  const caseGray1 = document.querySelector(".case-gray1");
  caseGray1.innerHTML = "";

  elementsArray.forEach((element) =>
    caseGray1.appendChild(element.cloneNode(true))
  );

  originalOrder = elementsArray.map((element) => element.cloneNode(true));
});

document.getElementById("cancel").addEventListener("click", function () {
  const caseGray1 = document.querySelector(".case-gray1");

  if (caseGray1.innerHTML !== "") {
    caseGray1.innerHTML = "";
    originalOrder.forEach((element) =>
      caseGray1.appendChild(element.cloneNode(true))
    );
  }

  // Функция для обновления страницы
  location.reload();
});
