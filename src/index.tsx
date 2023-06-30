import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <App />
);


// Итак, стартую!
// Я выбрал папку в которой будет находиться мой проект (ii) и открыл в ней Git
// Bash Here.
// Прописал: 'yarn create react-app todolist-course-d --template typescript'.
// И примерно через 50 сек мне пожелали: 'Happy hacking'  :)

// Далее, я открыл папку с проектом (todolist-course-d) в Webstorm.
// Создал папку info с файлами. В них я буду записывать информацию, чтобы
// повторять ее и со временем усвоить или запомнить.
// Эту папку, а также папку .idea, прописал в .gitignore
