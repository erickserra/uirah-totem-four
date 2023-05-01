import './index.scss'
import backgroundScreenOne from '../../assets/01.png'
import { ScreenComponent } from '../../constants'
import { useApp } from '../../contexts/AppContext'
import moneyBag from '../../assets/money_bag.png'
import { ArrowButtons } from '../../components/arrow-buttons'

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
        id: 19,
      })
    });
    updateScreen(ScreenComponent.SCREEN_TWO)
  }

  return (
    <div className="screen-one-wrapper" style={{ backgroundImage: `url(${backgroundScreenOne})` }}>
      <img className="money-bag" src={moneyBag} alt="Saco de dinheiro" />
      <ArrowButtons
        hidePrevious
        hideBeginning
        next={next}
      />
    </div>
  )
}