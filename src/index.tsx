import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <img src={"https://avatars.mds.yandex.net/i?id=83d460d55d4461f92fa28aee" +
        "90760f444dcb4d20-9181195-images-thumbs&n=13"} alt={"Веселый смайл"}/>
);


// файл index.tsx - точка входа в проект
// Мы можем отрисовать любой известный из HTML тег

// Теперь отрисуем, тэг image. В атрибуте source я прописал ссылку. Она
// берется если кликнуть п.к.м. на картинке, а затем выбрать "Copy image
// address"
// Важный момент, что если у нас имеется одиночный тег, то в реакте его
// нужно все равно закрывать!
