import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <>
        <h1>Hello</h1>
        <img src={"https://avatars.mds.yandex.net/i?id=83d460d55d4461f92" +
            "fa28aee90760f444dcb4d20-9181195-images-thumbs&n=13"}
             alt={"Веселый смайл"}/>
    </>

);


// файл index.tsx - точка входа в проект
// Мы можем отрисовать любой известный из HTML тег

// Теперь отрисуем, оба тега, для этого нужно обязательно обернуть их каким-то
// общим тегом!  Подойдет и пустой тег "<></>"

