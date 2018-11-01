# evotor-node
JS обёртка для REST API облака Evotor

Документация к REST API:

https://api.evotor.ru/docs/

### Использование

Установка:

```
$ npm i evotor-node
```

Использование:

```JavaScript
const Evotor = require('evotor-node');
const evotor = new Evotor('TOKEN');

evotor.stores().then((stores) => {
    console.log(stores);
});
```
