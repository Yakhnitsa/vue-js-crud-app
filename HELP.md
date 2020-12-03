# Заметки и подсказки по реализации

## Изначальный запуск
   создание приложения `vue create vue-js-crud-app`
   редактирование портов в package.json `vue-cli-service serve --port 8082`
   запуск приложения `npm run serve`
   сборка `npm run build`
   `npm install -g serve` установка сервера готовой сборки
   `serve -s dist` - запуск раздачи статичных файлов
   
## Установка необходимых зависимостей:
  `vue add router` - установка router, vue cli все сделает сам
  `npm install vuex --save` - установка vuex
        создаем сам файл src/store/index.js

        import Vue from 'vue';
        import Vuex from 'vuex';
        Vue.use(Vuex);
    
        export default new Vuex.Store({
        
   Добавляем файл в main.js
    import store from './store'
  `npm install bootstrap jquery popper.js` - установка bootstrap
  Добавляем в main.js
    import 'bootstrap'
    import 'bootstrap/dist/css/bootstrap.min.css'
  
  `` - 
  `` - 
  `` - 
    
    
   