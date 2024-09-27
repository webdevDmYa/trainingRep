// Function Expression
// Функция в JavaScript – это не магическая языковая структура, а особого типа значение.

// Cинтаксис, который мы использовали до этого, называется Function Declaration (Объявление Функции):
//
// function sayHi() {
//  alert( "Привет" );
// }
//
// Существует ещё один синтаксис создания функций, 
// который называется Function Expression (Функциональное Выражение).
// Данный синтаксис позволяет нам создавать новую функцию в середине любого выражения.
//
// let sayHi = function() {
//  alert( "Привет" );
// };
//
// Поскольку создание функции происходит в контексте выражения присваивания
// (с правой стороны от =), это Function Expression.
//
// Функция может быть создана и немедленно вызвана, или запланирована для дальнейшего выполнения,
// нигде не сохраняясь, таким образом, оставаясь анонимной.
//
// Функция – это значение
//
// Независимо от того, как создаётся функция – она является значением. 
// В обоих приведённых выше примерах функция хранится в переменной sayHi.
//
// В JavaScript функция – это значение, поэтому мы можем обращаться с ней как со значением. 
// Приведённый выше код показывает её строковое представление, которое является её исходным кодом.
//
// Конечно, функция – это особое значение, в том смысле, что мы можем вызвать её как sayHi().
// Но всё же это значение. Поэтому мы можем работать с ней так же, как и с другими видами значений.
// Мы можем скопировать функцию в другую переменную:
//
// function sayHi() {   // (1) создаём
//  alert( "Привет" );
// }
// let func = sayHi;    // (2) копируем
// func(); // Привет     // (3) вызываем копию (работает)!
// sayHi(); // Привет    //     эта тоже все ещё работает (почему бы и нет)
//
// Объявление Function Declaration (1) создаёт функцию и помещает её в переменную с именем sayHi.
// В строке (2) мы скопировали её значение в переменную func. 
// Обратите внимание (ещё раз): нет круглых скобок после sayHi. 
// Если бы они были, то выражение func = sayHi() записало бы результат вызова sayHi() в переменную func,
// а не саму функцию sayHi.
// Теперь функция может вызываться как sayHi(), так и func().
//
// Мы также могли бы использовать Function Expression для объявления sayHi:
//
// let sayHi = function() { // (1) создаём
//  alert( "Привет" );
// };
// let func = sayHi;
// 
// Всё будет работать так же.

// в Function Expression ставится точка с запятой ; на конце, а в Function Declaration нет:
//
// function sayHi() {
//  ...
// }
//
// let sayHi = function() {
// ...
// };
//
// Точка с запятой нужна там для более простого присваивания,
// такого как let sayHi = 5;, а также для присваивания функции.

// Функции-«колбэки»
//
// function ask(question, yes, no) {
//  if (confirm(question)) yes()
//  else no();
// }
//
// function showOk() {
//  alert( "Вы согласны." );
// }
//
// function showCancel() {
//  alert( "Вы отменили выполнение." );
// }
//
// использование: функции showOk, showCancel передаются в качестве аргументов ask
// ask("Вы согласны?", showOk, showCancel);
//
// Аргументы showOk и showCancel функции ask называются функциями-колбэками или просто колбэками.
//
// Ключевая идея в том, что мы передаём функцию и ожидаем, что она вызовется обратно 
// (от англ. «call back» – обратный вызов) когда-нибудь позже, если это будет необходимо.
// В нашем случае, showOk становится колбэком для ответа «yes», а showCancel – для ответа «no».
//
// Мы можем переписать этот пример значительно короче, используя Function Expression:
//
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
//  
// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );
//
// Здесь функции объявляются прямо внутри вызова ask(...).
// У них нет имён, поэтому они называются анонимными.
// Такие функции недоступны снаружи ask (потому что они не присвоены переменным),
// но это как раз то, что нам нужно.

// Функция – это значение, представляющее «действие»
// Обычные значения, такие как строки или числа представляют собой данные.
// Функции, с другой стороны, можно воспринимать как действия.
// Мы можем передавать их из переменной в переменную и запускать, когда захотим.

// Function Expression в сравнении с Function Declaration
//
// Во-первых, синтаксис: как отличить их друг от друга в коде
//
// Function Declaration: функция объявляется отдельной конструкцией «function…» в основном потоке кода.
// function sum(a, b) {
//  return a + b;
// }
//
// Function Expression: функция, созданная внутри другого выражения или синтаксической конструкции. 
// В данном случае функция создаётся в правой части «выражения присваивания» =:
// let sum = function(a, b) {
//  return a + b;
// };
//
// Более тонкое отличие состоит в том, когда создаётся функция движком JavaScript.
//
// Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.
// После того, как поток выполнения достигнет правой части выражения присваивания let sum = function… 
// – с этого момента, функция считается созданной и может быть использована 
// (присвоена переменной, вызвана и т.д.)
//
// Function Declaration может быть вызвана раньше, чем она объявлена.
// Другими словами, когда движок JavaScript готовится выполнять скрипт или блок кода,
// прежде всего он ищет в нём Function Declaration и создаёт все такие функции.
// Можно считать этот процесс «стадией инициализации».
// И только после того, как все объявления Function Declaration будут обработаны, продолжится выполнение.
// В результате функции, созданные как Function Declaration, 
// могут быть вызваны раньше своих определений.
//
// sayHi("Вася"); // Привет, Вася
// function sayHi(name) {
//   alert( `Привет, ${name}` );
// }
// 
// Функция sayHi была создана, когда движок JavaScript подготавливал скрипт к выполнению,
// и такая функция видна повсюду в этом скрипте.
//
// sayHi("Вася"); // ошибка!
// let sayHi = function(name) {  // (*) магии больше нет
//   alert( `Привет, ${name}` );
// };
//
// Функции, объявленные при помощи Function Expression, создаются тогда, когда выполнение доходит до них.
// Это случится только на строке, помеченной звёздочкой (*). Слишком поздно.
//
// Ещё одна важная особенность Function Declaration заключается в их блочной области видимости.
// В строгом режиме, когда Function Declaration находится в блоке {...}, функция доступна везде внутри блока.
// Но не снаружи него.
//
// let age = prompt("Сколько Вам лет?", 18);
// в зависимости от условия объявляем функцию
// if (age < 18) {
//  function welcome() {
//    alert("Привет!");
//  }
// } else {
//  function welcome() {
//    alert("Здравствуйте!");
//  }
// }
//
// ...не работает
// welcome(); // Error: welcome is not defined
//
// Объявление Function Declaration видимо только внутри блока кода, в котором располагается.
//
// let age = 16; // возьмём для примера 16
// if (age < 18) {
//  welcome();               // \   (выполнится)
                           //  |
//  function welcome() {     //  |
//    alert("Привет!");      //  |  Function Declaration доступно
//  }                        //  |  во всём блоке кода, в котором объявлено
                           //  |
//  welcome();               // /   (выполнится)

// } else {

//  function welcome() {
//    alert("Здравствуйте!");
//  }
// }

// здесь фигурная скобка закрывается,
// поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.

// welcome(); // Ошибка: welcome is not defined

// Что можно сделать, чтобы welcome была видима снаружи if?
//
// let age = prompt("Сколько Вам лет?", 18);
// let welcome;
// if (age < 18) {
//  welcome = function() {
//    alert("Привет!");
//  };
// } else {
//  welcome = function() {
//    alert("Здравствуйте!");
//  };
// }
// welcome(); // теперь всё в порядке
//
// Используя условный оператор ?:
//
// let age = prompt("Сколько Вам лет?", 18);
// let welcome = (age < 18) ?
//  function() { alert("Привет!"); } :
//  function() { alert("Здравствуйте!"); };
// welcome(); // теперь всё в порядке

// Когда использовать Function Declaration, а когда Function Expression?
// Как правило, если нам понадобилась функция, 
// в первую очередь нужно рассматривать синтаксис Function Declaration,
// который мы использовали до этого. Он даёт нам больше свободы в том, как мы можем организовывать код. 
// Функции, объявленные таким образом, можно вызывать до их объявления.
//
// Также функции вида function f(…) {…} чуть более заметны в коде, 
// чем let f = function(…) {…}. Function Declaration легче «ловятся глазами».
//
// …Но если Function Declaration нам не подходит по какой-то причине, 
// или нам нужно условное объявление (мы рассмотрели это в примере выше), 
// то следует использовать Function Expression.
