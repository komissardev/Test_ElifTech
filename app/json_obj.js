// JSON объект с сервера
const JSON_OBJ = JSON.stringify([
    {
        shopName: "Mc Donny",
        shopId: "mc_donny",
        shopMenu: [
            {
                name: "Big Big Burger",
                productId: 1,
                price: 10,
                currency: "USD",
                imgUrl: "https://papa-joe.com.ua/wp-content/uploads/2020/09/IMG_5167.jpg"
            },
            {
                name: "Big Big Cheeseburger",
                price: 12,
                productId: 2,
                currency: "USD",
                imgUrl: "https://melrose.dp.ua/images/virtuemart/product/dabl_chisburger.jpg"
            },
            {
                name: "Big Oklahoma Burger",
                price: 14,
                productId: 3,
                currency: "USD",
                imgUrl: "https://maximum.fm/uploads/media_news/2021/05/60a0fabd1495a291933953.jpg?w=1200&h=675&il&q=90&output=jpg"
            },
            {
                name: "Big See Burger",
                price: 11,
                productId: 4,
                currency: "USD",
                imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/16/07/6b/1d/caption.jpg"
            },
            {
                name: "Big Mama Burger",
                price: 11,
                productId: 5,
                currency: "USD",
                imgUrl: "https://st3.depositphotos.com/1364913/12993/i/450/depositphotos_129939922-stock-photo-fish-burger-on-wooden-background.jpg"
            },
            {
                name: "French Fries Maxi",
                price: 7,
                productId: 6,
                currency: "USD",
                imgUrl: "https://instafood.com.ua/images/full_blog/free-5e6b514f597b4.jpg?1609925666"
            },
            {
                name: "French Fries Mini",
                price: 5,
                productId: 7,
                currency: "USD",
                imgUrl: "https://images.unian.net/photos/2020_06/thumb_files/1000_545_1592287480-4739.jpg"
            },
            {
                name: "Nuggets Maxi",
                price: 18,
                productId: 8,
                currency: "USD",
                imgUrl: "https://panianka.com.ua/wp-content/uploads/2020/09/47.jpg"
            },
            {
                name: "Nuggets Middle",
                price: 14,
                productId: 9,
                currency: "USD",
                imgUrl: "https://krainau.com/images/21/nag0.jpg"
            },
            {
                name: "Nuggets Mini",
                price: 10,
                productId: 10,
                currency: "USD",
                imgUrl: "https://assets.dots.live/misteram-public/3a2594eca7c372943193668a42403871-826x0.png"
            },
        ]
    },
    {
        shopName: "KFC",
        shopId: "kfc",
        shopMenu: [
            {
                name: "Big Pig Burger",
                price: 13,
                productId: 1,
                currency: "USD",
                imgUrl: "https://myastoriya.com.ua/upload/medialibrary/5e5/5e516f176c240d84beba54354fd93dcd.png"
            },
            {
                name: "Big Chicken Burger",
                price: 14,
                productId: 2,
                currency: "USD",
                imgUrl: "https://www.food24.com/wp-content/uploads/2022/04/Header-2022-04-29T132105.636.jpg"
            },
            {
                name: "Cow-boy Burger",
                price: 15,
                productId: 3,
                currency: "USD",
                imgUrl: "https://i.pinimg.com/736x/07/28/05/072805df5640ee7f8be5b0c07b667850--heroes-burgers.jpg"
            },
            {
                name: "Tuna Burger",
                price: 17,
                productId: 4,
                currency: "USD",
                imgUrl: "https://kartinkin.net/uploads/posts/2022-09/1662179431_59-kartinkin-net-p-burger-s-chernoi-bulkoi-oboi-72.jpg"
            },
            {
                name: "French Fries Maxi",
                price: 7,
                productId: 5,
                currency: "USD",
                imgUrl: "https://instafood.com.ua/images/full_blog/free-5e6b514f597b4.jpg?1609925666"
            },
            {
                name: "French Fries Mini",
                price: 5,
                productId: 6,
                currency: "USD",
                imgUrl: "https://images.unian.net/photos/2020_06/thumb_files/1000_545_1592287480-4739.jpg"
            },
            {
                name: "Nuggets Maxi",
                price: 18,
                productId: 7,
                currency: "USD",
                imgUrl: "https://panianka.com.ua/wp-content/uploads/2020/09/47.jpg"
            },
            {
                name: "Nuggets Middle",
                price: 14,
                productId: 8,
                currency: "USD",
                imgUrl: "https://krainau.com/images/21/nag0.jpg"
            },
            {
                name: "Nuggets Mini",
                price: 10,
                productId: 9,
                currency: "USD",
                imgUrl: "https://assets.dots.live/misteram-public/3a2594eca7c372943193668a42403871-826x0.png"
            },
            {
                name: "Strawberry chicken Roll",
                price: 12,
                productId: 10,
                currency: "USD",
                imgUrl: "https://zavernulli.com.ua/files/product/4/3/1/431_s.jpg"
            }
        ]
    }
])
// Обработка JSON объект с сервера
const json_obj = JSON.parse(JSON_OBJ);
// Переменная которая будет содержать заказ
let gettingOrder;
// Логика добавления заказа в переменную, в будущем здесь можно описать отправку на сервер.
if(localStorage.gettingOrder) {
    gettingOrder = JSON.parse(localStorage.gettingOrder)
}