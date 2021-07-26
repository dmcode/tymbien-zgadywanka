import React from "react";
import './App.css';

const PUNKTOW_ZA_TRAFIENIE = 10
const BONUS = 20

const ZONK_URL = 'zonk.png'
const WIN_URL = 'win.gif'

const losujPole = (ilePol) => {
  return Math.floor(Math.random() * ilePol) + 1
}

const Pole = (props) => {
  const {nrPola=0, klikniete, gdzieSchowane, onClick} = props
  const className = ["pole", `pole-${nrPola}`]

  if (klikniete)
    className.push("obroc")

  // @todo: zadanie 4 - przy trafieniu za kazdym razem ma się wyświetlać inny animowany gif

  const src = gdzieSchowane ? WIN_URL : ZONK_URL;

  return (
      <div className={className.join(' ')} onClick={onClick}>
        <div className="flip">
          <div className="zaslona"><span className="">{nrPola}</span></div>
          <div className="przedmiot">
            <img src={`/${src}`} alt={gdzieSchowane ? "Wygrana!!!" : "Przegrana!!!"}/>
          </div>
        </div>
      </div>
  )
}

class App extends React.Component {

  constructor(props) {
    super(props);

    // @todo: zadanie 1. zainicjować stan komponentu
    // this.state = {
    // ...
    // ...
    // ...
    // ...
    // ...
    // ...
    // }

    this.ustawLiczbePol = (liczba) => {
      // @todo: Zadanie 6 - dopisać kod który ustawi zmienną `ilePol` na wartość parametru `liczba`
    }

    this.ustawLiczbeRund = (liczba) => {
      // @todo: Zadanie 8 - dopisać kod który ustawi zmienną `ileRund` na wartość parametru `liczba`
    }

    this.inicjujRuch = (nrRundy=1) => {
      const czyKoniec = nrRundy > this.state.ileRund
      const runda = czyKoniec ? 1 : nrRundy
      this.setState(() => ({
        gdzieSchowane: losujPole(this.state.ilePol),
        kliknietePole: null,
        blokada: false,
        runda,
        czyKoniec
      }))
    }

    this.kolejnyRuch = () => {
      this.setState(() => ({
        kliknietePole: null,
      }), () => {
        setTimeout(() => this.inicjujRuch(this.state.runda + 1), 1000)
      })
    }

    this.graj = (kliknietePole) => {
      if (this.state.blokada)
        return false

      //@todo: Zadanie 3 - poniżeszego kodu nie można wykonać jezeli zmienna czyKoniec jest równa true

        const wygrana = kliknietePole === this.state.gdzieSchowane
        const seriaTrafien = (wygrana ? this.state.seriaTrafien + 1 : 0)
        const punkty = this.obliczPunkty(wygrana)
        const reset = 1000 * (wygrana ? 4 : 2)
        this.setState(() => ({
          blokada: true,
          kliknietePole,
          seriaTrafien,
          punkty,
        }), () => {
          setTimeout(() => this.kolejnyRuch(), reset)
        })

    }

    this.obliczPunkty = (wygrana) => {
      if (!wygrana)
        return this.state.punkty
      const seria = this.state.seriaTrafien
      const punktowZaTrafienie = PUNKTOW_ZA_TRAFIENIE * (this.state.ilePol - 3 + 1)
      return this.state.punkty + punktowZaTrafienie + (seria * BONUS)
    }
  }

  componentDidMount() {
    this.inicjujRuch()
  }

  render() {
    const pola = [...Array(this.state.ilePol).keys()].map(e => ++e)
    return (
        <div className="App">

          <div className="gra">

            <header className="naglowek">
              <div>
                <span>Ustawienia</span>
                <div className="ustaw-kalfe">
                  <label>
                    Ile pól:
                      //@todo: Zadanie 5 - element select do wybierania liczby kafli
                  </label>
                </div>

                <div>
                  <label>
                    Ile rund:
                      //@todo: Zadanie 7 - element input [type=number] do wybierania liczby rund z zakresu 2-10
                  </label>
                </div>
              </div>
            </header>

            <div className="main">

              //@todo: element div w którym ma się wyświetlać numer rundy

              //@todo: element div w którym mają się wyświetlać liczba punktów

              <div className="plansza">
                {
                  pola.map(
                      nrPola => <Pole key={nrPola} nrPola={nrPola}
                                      klikniete={this.state.kliknietePole === nrPola}
                                      gdzieSchowane={this.state.gdzieSchowane === nrPola}
                                      onClick={() => null /*@todo: zadanie  2 - przy kliknieciu ma zostac wywołana odpowiednia metoda */}/>
                  )
                }
              </div>

              <div className="wyniki">

              </div>

            </div>

          </div>

        </div>
    );
  }
}

export default App;
