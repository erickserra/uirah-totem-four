import './index.scss'
import backgroundScreenOne from '../../assets/01_page.png'
import { ScreenComponent } from '../../constants'
import { useApp } from '../../contexts/AppContext'
import botaoImage from '../../assets/botao_confira.png'

export function ScreenOne() {
  const { updateScreen } = useApp()

  function next() {
    fetch('https://api4.convencaoraizen2023.com.br/checkintotem/', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 18,
      })
    });
    updateScreen(ScreenComponent.SCREEN_TWO)
  }

  return (
    <div className="screen-one-wrapper" style={{ backgroundImage: `url(${backgroundScreenOne})` }}>
      <button onClick={next} className="screen-one-botao">
        <img src={botaoImage} alt="Saco de dinheiro" />
      </button>
    </div>
  )
}