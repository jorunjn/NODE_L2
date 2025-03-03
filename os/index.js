require('dotenv').config(); // Читаем переменные окружения из .env
const os = require('os');   // Встроенный модуль для работы с операционной системой

function printOSInfo() {
    console.log('ОС-платформа:', os.platform());        // darwin, win32, linux и т.д.
    console.log('Свободная память:', os.freemem());     // в байтах
    console.log('Главная директория (homedir):', os.homedir());
    console.log('Информация о пользователе:', os.userInfo()); 
    console.log('Сетевые интерфейсы:', os.networkInterfaces());
  }

  function checkFreeMemory() {
    const free = os.freemem();                 // свободная память в байтах
    const fourGB = 4 * 1024 * 1024 * 1024;     // 4GB в байтах
  
    if (free > fourGB) {
      console.log('Свободно более 4GB памяти');
    } else {
      console.log('Меньше 4GB свободной памяти');
    }
  }
  // вывод инфы только при "mode" от админа 
  function runIfAdmin() {
    if (process.env.MODE === 'admin') {
      printOSInfo();
    } else {
      console.log('У вас нет прав для просмотра подробной информации об ОС (MODE !== admin).');
    }
  }

checkFreeMemory();
runIfAdmin();

  