// Функция для удаления элементов
function removeEllChildren(arg = ".root") {
    let [...childrenRoot] = document.querySelector(arg).children;
    childrenRoot.forEach(e=>e.remove(e));

};
// Функция для получения итоговой стоимости
function getTotalPrise(arrProductOrder) {
    
    let getTotalPrise = 0;
    arrProductOrder.forEach(e => {
        if(e === undefined){
            return
        }
        getTotalPrise += (e.price * e.value);
    });

    document.querySelector(".total_cont-text-vall").textContent = "";
    appMain.sendOrder.totalPrice = "";
    if(getTotalPrise === 0){
        return document.querySelector(".total_cont-text-vall").textContent = 0
    }
    document.querySelector(".total_cont-text-vall").textContent = getTotalPrise + " " + arrProductOrder[0].currency;
    appMain.sendOrder.totalPrice = getTotalPrise + " " + arrProductOrder[0].currency;
};
// Функция проверки номера телефона
function validateInput(inputElement) {
    const inputValue = inputElement.value;
    const onlyDigitsRegex = /^\d+$/;
    
    if (!onlyDigitsRegex.test(inputValue)) {
      // Если введены не только цифры, то обнуляем строку
      inputElement.value = "";  
      return false;
    }
    
    // Если все цифры, то возвращаем true или выполняем нужные действия
    return true;
}

// Обработчик события клика на бургер меню
document.querySelector(".burger-menu").addEventListener("click", ()=>{
    document.querySelector(".burger-menu").classList.toggle("_active")
    document.querySelector(".header-nav-list").classList.toggle("_visible")
})