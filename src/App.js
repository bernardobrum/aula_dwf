import './bootstrap/css/bootstrap.min.css'
import './App.css';
import Header from './header';
import Aside from './aside';
import Footer from './footer';

function App() {
  return (
    <html>
      <head>
        <title>Projeto Dia a Dia</title>
      </head>
      <body class="App">
        <div class="row">
          <div class="col-lg-12 header">
            <Header />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 aside">
            <Aside />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 footer">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

export default App;
