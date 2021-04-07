4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
	
// Получаем элемент чата
let chat = document.querySelector("#divMessages")
// Получаем строку ввода сообщения
let input = document.querySelector("#inputMessage")
// Получаем кнопку для ввода сообщения
let btnSubmit = document.querySelector("#btnSend")
 
// Подключаем WebSocket
const webSocket = new WebSocket('ws://localhost:8081');
 
// Получаем сообщение от сервера
webSocket.onmessage = function(e) {
    // Парсим полученные данные
    const data = JSON.parse(e.data);
    // Выводим в блог сообщение от сервера
    chat.innerHTML += '<div class="msg">' + data.message + '</div>'
};
 
// Отслеживаем нажатие мыши
btnSubmit.addEventListener("click", () => {
    // Получаем текст из формы для ввода сообщения
    message = input.value;
    // Отправка сообщения через WS
    webSocket.send(JSON.stringify({
        'message': message
    }));
    // Очищаем поле для ввода текста
    input.value = '';
})