#  Принцип работы приложения

> Вид входящего *JSON* объекта:
```[{shopName: "", shopId: "", shopMenu: [{name:"Big Big Burger", productId: 0, price: 10, currency: "USD", imgUrl: "https://.jpg"},...]},{}..]```
где *shopName* - название Магазина, тип данных *string*
где *shopId* - *id* магазина, тип данных *string*
где *shopMenu* - массив содержащий все товары магазина в виде объектов
>> *name* - наименование товара, тип данных *string*
*productId* - *id* товара, тип данных *number*
*price* - цена товара, тип данных *number*
*currency* - валюта цены товара, тип данных *string*
*imgUrl* - *url* адрес на картину товара,  тип данных *string*
**!Важно соблюдать структура водящего объета *JSON*!**

***

> Конечный итог заказа содержится в переменной *gettingOrder* в документе *json_obj.js*
>> Остальную информацию вы можете найти в комментариях к коду

**[Мой LinkedIn:](https://www.linkedin.com/in/viktor-komissarov-66269b252/)**
