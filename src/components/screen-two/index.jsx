import './index.scss'
import backgroundScreenOne from '../../assets/02.png'
import { ScreenComponent } from '../../constants'
import { useApp } from '../../contexts/AppContext'
import { ArrowButtons } from '../arrow-buttons'

export function ScreenTwo() {
  const { updateScreen } = useApp()

  return (
    <div className="screen-two-wrapper" style={{ backgroundImage: `url(${backgroundScreenOne})` }}>
      <ArrowButtons
        back={() => updateScreen(ScreenComponent.SCREEN_ONE)}
        hideBeginning
        hideNext
      />
    </div>
  )
}