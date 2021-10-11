import logo from './logo.svg';
import './App.css';

//Компонент "АВТОРИЗАЦИЯ НА САЙТЕ"
function App() {
  return (
    <>
    <div id="login-form">
      <h1>Авторизация на сайте</h1>

      <fieldset>
        <form action="javascript:void(0);" method="get">
          <h4>Логин</h4>
          <input type="email" ></input>

          <h4>Пароль</h4>
          <input className="password_value" type="password"></input>
          <input className="button_enter" type="submit" value="ВОЙТИ"></input>

          <footer className="clearfix">
            <p>
              <span className="info">?</span>
              <a href="#">Забыли пароль?</a>
            </p>
          </footer>
        </form>
      </fieldset>
    </div>
    </>
  );
}

export default App;
