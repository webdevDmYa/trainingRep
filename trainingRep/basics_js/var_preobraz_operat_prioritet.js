// Start test Variable

//function ara5(){
//    console.log(ara,ara2) // 1, undefined
//    console.log(typeof(ara), typeof(ara2)); // number , undefinder
//    console.log(ara+ara2); // NaN !!! if + (number+undefinder), 1undefined !!! if + ( string + undefined)
//    console.log(typeof(NaN), typeof(null), typeof(undefined)) // number , object , undefined
//}
//let ara = '1';
// if LET down alert fucntion its ERROR and STOP CODE. if VAR its UNDEFINED and GO CODE NEXT but VAR = INDEFINED 
//console.log(typeof(NaN+null)); // number
//console.log(typeof(NaN+undefined)) // number
//console.log(typeof(NaN+NaN)); // number
//console.log(typeof(Object+NaN)); // string
//console.log(typeof(Object+undefined));// string
//console.log(typeof(Object+null));// string
//console.log(typeof(Object+Number));// string
//console.log(typeof(Object+String));// string
//console.log(typeof(Object));// function
//console.log(typeof(Number));// function
//console.log(typeof(String));// function
//console.log(typeof(BigInt));// function
//console.log(typeof(Function));// function
//ara5();
//var ara2 = 4;
// Object type is OCOBENUY , all is primitive
// Done test Variable


// 1- boolean - true or false
// 2- symbol
// 3- bigInt
// 4- string
// 5- number
// 6- undefined
// 7- null
// примитивние типи данних
// 8- object - для более сложних структур данних
// NaN - ошибка связана з цифрами і текстами ілі еще з чем то явно не понятная ситуація ...
//console.log(typeof 5), console.log(typeof(5)) // number , number

// ПРЕОБРАЗОВАНИЕ 
// Booleadn(0,"",indefined,null,NaN) - false
//alert( Number("   123   ") ); // 123
//alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
//alert( Number(true) );        // 1
//alert( Number(false) );       // 0

// ШАБЛОННІ СТРОКИ
//let ara = 'Hello'
//let ara2 = 'Dmytro'
//console.log(`Dmytro ${ara}`), console.log(ara2, ara) , console.log(`${ara} ${ara2}`)

// PROMPT Модальное окно для вопроса. Отввет запишеться в переменную. Если нет - в переменную запишеться или присвоиться null
//let test = prompt('Hello, will you do play with me?', 'YES')
//console.log(test)

// CONFIRM модальное окно для вопроса з двумя вариантами ответа ДА или НЕТ. Ответ в переменой True or Fasle (boolean)
//let test = confirm('Are you boy?')
//console.log(test)


//2 * 5 , где 2 і 5 Операнди или (аргументи) , * - бинарний оператор .
// -x , где - унарний оператор.

//Инкремент ++ увеличивает переменную на 1:
//let counter = 2;
//counter++;        // работает как counter = counter + 1, просто запись короче
//alert( counter ); // 3

//Декремент -- уменьшает переменную на 1:
//let counter = 2;
//counter--;        // работает как counter = counter - 1, просто запись короче
//alert( counter ); // 1


//Значения разных типов при сравнении приводятся к числу.
//Исключением является сравнение с помощью операторов строгого равенства/неравенства.
//Значения null и undefined равны == друг другу и не равны любому другому значению.
//Будьте осторожны при использовании операторов сравнений вроде > и < с переменными, 
//которые могут принимать значения null/undefined. 
//Хорошей идеей будет сделать отдельную проверку на null/undefined.
//alert( true == 1 ); // true
//alert( false == 0 ); // true
//alert( true != 0 ); // true
//alert( false != 1 ); // true
//alert( 0 === false ); // false, так как сравниваются разные типы
//Использование обычного сравнения == может вызывать проблемы. Например, оно не отличает 0 от false
//Это происходит из-за того, что операнды разных типов преобразуются оператором == к числу.
//Оператор строгого равенства === проверяет равенство без приведения типов.
//Другими словами, если a и b имеют разные типы, то проверка a === b немедленно возвращает false
//без попытки их преобразования.
//alert( 0 === false ); // false, так как сравниваются разные типы
//alert( null === undefined ); // false
//alert( null == undefined ); // true
//При использовании математических операторов и других операторов сравнения < > <= >=
//Значения null/undefined преобразуются к числам: null становится 0, а undefined – NaN.
//Посмотрим, какие забавные вещи случаются, когда мы применяем эти правила.
//И, что более важно, как избежать ошибок при их использовании.
//Странный результат сравнения null и 0
//Сравним null с нулём:
//alert( null > 0 );  // (1) false
//alert( null == 0 ); // (2) false
//alert( null >= 0 ); // (3) true
//С точки зрения математики это странно. Результат последнего сравнения говорит о том, что "null больше или равно нулю",
//тогда результат одного из сравнений выше должен быть true, но они оба ложны.
//Причина в том, что нестрогое равенство и сравнения > < >= <= работают по-разному. Сравнения преобразуют null в число, рассматривая его как 0.
//Поэтому выражение (3) null >= 0 истинно, а null > 0 ложно.
//С другой стороны, для нестрогого равенства == значений undefined и null действует особое правило: 
//эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому (2) null == 0 ложно.
//Несравненное значение undefined
//Значение undefined несравнимо с другими значениями:
//alert( undefined > 0 ); // false (1)
//alert( undefined < 0 ); // false (2)
//alert( undefined == 0 ); // false (3)
//На это есть следующие причины:
//Сравнения (1) и (2) возвращают false, потому что undefined преобразуется в NaN,
//а NaN – это специальное числовое значение, которое возвращает false при любых сравнениях.
//Нестрогое равенство (3) возвращает false, потому что undefined равно только null, undefined и ничему больше.


// ТЕРНАРНИЙ ОПЕРАТОР
//let age = prompt('Возраст?', 18);
//let message = (age < 3) ? 'Здравствуй, малыш!' :
//(age < 18) ? 'Привет!' :
  //(age < 100) ? 'Здравствуйте!' :
  //'Какой необычный возраст!';
//alert( message );

//Оператор ||(или) выполняет следующие действия:
//alert( true || true );   // true
//alert( false || true );  // true
//alert( true || false );  // true
//alert( false || false ); // false
//Вычисляет операнды слева направо.
//Каждый операнд конвертирует в логическое значение. Если результат true, останавливается и возвращает исходное значение этого операнда.
//Если все операнды являются ложными (false), возвращает последний из них.
//Значение возвращается в исходном виде, без преобразования.
//Другими словами, цепочка ИЛИ || возвращает первое истинное значение или последнее, если такое значение не найдено.

//Оператор (&&) И :
//Оператор && выполняет следующие действия:
//Вычисляет операнды слева направо.
//Каждый операнд преобразует в логическое значение. Если результат false, останавливается и возвращает исходное значение этого операнда.
//Если все операнды были истинными, возвращается последний.
//Другими словами, И возвращает первое ложное значение. Или последнее, если ничего не найдено.
//Вышеуказанные правила схожи с поведением ИЛИ. Разница в том, что И возвращает первое ложное значение, а ИЛИ –  первое истинное.
//alert( true && true );   // true
//alert( false && true );  // false
//alert( true && false );  // false
//alert( false && false ); // false

//Оператор ||= принимает два операнда и выполняет следующие действия:
//Вычисляет операнды слева направо.
//Конвертирует a в логическое значение.
//Если a ложно, присваивает a значение b.

// a &&= b;
//Принцип действия &&= практически такой же, как и у оператора логического присваивания ИЛИ ||=. 
//Единственное отличие заключается в том, что &&= присвоит a значение b только в том случае, если a истинно.

//Оператор ! (НЕ) принимает один аргумент и выполняет следующие действия:
//Сначала приводит аргумент к логическому типу true/false.
//Затем возвращает противоположное значение.
//Например:
//alert( !true ); // false
//alert( !0 ); // true
//В частности, двойное НЕ !! используют для преобразования значений к логическому типу:
//alert( !!"непустая строка" ); // true
//alert( !!null ); // false

//Оператор нулевого слияния (??)
//Оператор нулевого слияния представляет собой два вопросительных знака ??.
//Так как он обрабатывает null и undefined одинаковым образом, то для этой статьи мы введём специальный термин.
//Для краткости будем говорить, что значение «определено», если оно не равняется ни null, ни undefined.
//Результат выражения a ?? b будет следующим:
//если a определено, то a,
//если a не определено, то b.
//Иначе говоря, оператор ?? возвращает первый аргумент, если он не null/undefined, иначе второй.
//Оператор нулевого слияния не является чем-то принципиально новым.
//Это всего лишь удобный синтаксис, как из двух значений получить одно, которое «определено».
//Вот как можно переписать выражение result = a ?? b, используя уже знакомые нам операторы:
//result = (a !== null && a !== undefined) ? a : b;

//Оператор ??= присвоит x значение y только в том случае, если x не определено (null/undefined).

// ПРИОРИТЕТ !!!
// унарний плюс(мінус). возведение в степень, умножение(деление). сложение(вичитание). присвоєние.
//Приоритет оператора && больше, чем у ||
//Приоритет НЕ ! является наивысшим из всех логических операторов, 
//поэтому он всегда выполняется первым, перед && или ||.
//По соображениям безопасности JavaScript запрещает использование оператора ?? вместе с && и ||,
//если приоритет явно не указан при помощи круглых скобок.
