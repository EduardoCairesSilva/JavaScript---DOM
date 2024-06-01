import App from './components/App.js';

let app = App();

if (app.then) {
    app.then((content) => {
        document.getElementById('app').innerHTML = content
    })
} else {
    document.getElementById('app').innerHTML = app;
}
