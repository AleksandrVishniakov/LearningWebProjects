const paintings = [
    // England
    {
        country: "England",
        author: "Пол Смит",
        name: "Дикий зверь",
        subtitle: "Акварель, бумага (50x80)",
        price: "19 500 руб",
        image: "./assets/images/paintings/WildBeast.png",
    },
    {
        country: "England",
        author: "Джон Уайт",
        name: "Скалистый берег",
        subtitle: "Цветная литография (40x60)",
        price: "17 500 руб",
        image: "./assets/images/paintings/RockyCoast.png",
    },
    {
        country: "England",
        author: "Джим Уотсон",
        name: "Река и горы",
        subtitle: "Акварель, бумага (50x80)",
        price: "20 500 руб",
        image: "./assets/images/paintings/RiverAndMountains.png",
    },
    {
        country: "England",
        author: "Юджин Зиллион",
        name: "Белый попугай",
        subtitle: "Цветная литография (40x60)",
        price: "15 500 руб",
        image: "./assets/images/paintings/WhiteParrot.png",
    },
    {
        country: "England",
        author: "Эрик Гиллман",
        name: "Ночная рыба",
        subtitle: "Бумага, акрил (50x80)",
        price: "12 500 руб",
        image: "./assets/images/paintings/NightFish.png",
    },
    {
        country: "England",
        author: "Альфред Барр",
        name: "Рыжий кот",
        subtitle: "Цветная литография (40x60)",
        price: "21 000 руб",
        image: "./assets/images/paintings/GingerCat.png",
    },

    // Germany
    {
        country: "Germany",
        author: "Курт Вернер",
        name: "Над городом",
        subtitle: "Цветная литография (40x60)",
        price: "16 000 руб",
        image: "./assets/images/paintings/AboveTheCity.png",
    },
    {
        country: "Germany",
        author: "Макс Рихтер",
        name: "Птенцы",
        subtitle: "Холст, масло (50x80)",
        price: "14 500 руб",
        image: "./assets/images/paintings/Chicks.png",
    },
    {
        country: "Germany",
        author: "Мартин Майер",
        name: "Среди листьев",
        subtitle: "Цветная литография (40x60)",
        price: "20 000 руб",
        image: "./assets/images/paintings/AmongLeaves.png",
    },
    {
        country: "Germany",
        author: "Герман Беккер",
        name: "Яркая птица",
        subtitle: "Цветная литография (40x60)",
        price: "13 000 руб",
        image: "./assets/images/paintings/BrightBird.png",
    },
    {
        country: "Germany",
        author: "Вульф Бауэр",
        name: "Дятлы",
        subtitle: "Бумага, акрил (50x80)",
        price: "20 000 руб",
        image: "./assets/images/paintings/Woodpeckers.png",
    },
    {
        country: "Germany",
        author: "Вальтер Хартманн",
        name: "Большие воды",
        subtitle: "Бумага, акрил (50x80)",
        price: "23 000 руб",
        image: "./assets/images/paintings/GreatWaters.png",
    },

    // France
    {
        country: "France",
        author: "Марсель Руссо",
        name: "Охота Амура",
        subtitle: "Холст, масло (50x80)",
        price: "14 500 руб",
        image: "./assets/images/paintings/AmurHunt.png",
    },
    {
        country: "France",
        author: "Анри Селин",
        name: "Дама с собачкой",
        subtitle: "Акрил, бумага (50x80)",
        price: "16 500 руб",
        image: "./assets/images/paintings/LadyWithDog.png",
    },
    {
        country: "France",
        author: "Франсуа Дюпон",
        name: "Процедура",
        subtitle: "Цветная литография (40x60)",
        price: "20 000 руб",
        image: "./assets/images/paintings/Procedure.png",
    },
    {
        country: "France",
        author: "Луи Детуш",
        name: "Роза",
        subtitle: "Бумага, акрил (50x80)",
        price: "12 000 руб",
        image: "./assets/images/paintings/Rose.png",
    },
    {
        country: "France",
        author: "Франсуа Дюпон",
        name: "Птичья трапеза",
        subtitle: "Цветная литография (40x60)",
        price: "22 500 руб",
        image: "./assets/images/paintings/BirdsFeast.png",
    },
    {
        country: "France",
        author: "Пьер Моранж",
        name: "Пейзаж с рыбой",
        subtitle: "Цветная литография (40x60)",
        price: "20 000 руб",
        image: "./assets/images/paintings/LandscapeWithFish.png",
    },
];


document.addEventListener("DOMContentLoaded", () => {
    const burgerButton = document.querySelector("#burgerButton");
    const closeDrawerButton = document.querySelector("#closeMobileDrawerButton");
    const mobileDrawer = document.querySelector("#mobileDrawer");
    const mobileMenuItems = document.querySelectorAll(".mobile-drawer__list-item");

    burgerButton.addEventListener('click', () => { mobileDrawer.showModal(); });
    closeDrawerButton.addEventListener('click', () => { mobileDrawer.close(); });
    mobileMenuItems.forEach(el => el.addEventListener('click', ()=>{ mobileDrawer.close(); }));


    const reproductionsList = document.querySelector("#reproductionsList")
    const reproductionsTemplate = document.querySelector("#reproductionTemplate")
    const reproductionChips = document.querySelectorAll(".reproductions__chip");
    reproductionChips.forEach((chip) => {
        chip.addEventListener('click', () => {
            reproductionChips.forEach((chip) => chip.classList.remove("chip--active"));
            chip.classList.add("chip--active");

            switch (chip.getAttribute("data-country")) {
                case "England":
                    setPaintings(reproductionsList, reproductionsTemplate, getEnglandPaintings());
                    break;
                case "Germany":
                    setPaintings(reproductionsList, reproductionsTemplate, getGermanyPaintings());
                    break;
                default:
                    setPaintings(reproductionsList, reproductionsTemplate, getFrancePaintings());
            }
        });
    });
    setPaintings(reproductionsList, reproductionsTemplate, getFrancePaintings());
})

const setPaintings = (listElement, template, list) => {
    listElement.textContent = "";

    list.forEach((painting) => {
        const node = template.content.cloneNode(true);
        const image = node.querySelector("img");
        image.setAttribute("src", painting.image);
        image.setAttribute("alt", painting.name);
        node.querySelector('.reproduction__author').textContent = painting.author;
        node.querySelector('.reproduction__name').textContent = painting.name;
        node.querySelector('.reproduction__subtitle').textContent = painting.subtitle;
        node.querySelector('.reproduction__price').textContent = painting.price;

        listElement.appendChild(node);
    })
}

const getFrancePaintings = () => {
    return paintings.filter((painting) => painting.country === "France")
}

const getGermanyPaintings = () => {
    return paintings.filter((painting) => painting.country === "Germany")
}

const getEnglandPaintings = () => {
    return paintings.filter((painting) => painting.country === "England")
}