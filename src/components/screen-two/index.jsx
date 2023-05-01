import { useState } from 'react'
import './index.scss'
import { ScreenComponent } from '../../constants'
import { useApp } from '../../contexts/AppContext'
import { ArrowButtons } from '../arrow-buttons'
import geralBrasil from '../../assets/02_geral_brasil.png'
import geralSP from '../../assets/03_SP.png'
import geralSul from '../../assets/04_Sul.png'
import geralCose from '../../assets/05_cose.png'
import geralNone from '../../assets/06_none.png'

import botaoCose from '../../assets/botao_cose01.png'
import botaoCoseActive from '../../assets/botao_cose02.png'
import botaoBrasilActive from '../../assets/botao_geral_brasil_01.png'
import botaoBrasil from '../../assets/botao_geral_brasil02.png'
import botaoNoneActive from '../../assets/botao_none01.png'
import botaoNone from '../../assets/botao_none02.png'
import botaoSPActive from '../../assets/botao_sp01.png'
import botaoSP from '../../assets/botao_sp02.png'
import botaoSulActive from '../../assets/botao_sul01.png'
import botaoSul from '../../assets/botao_sul02.png'

const ImageStates = {
  BRASIL: 1,
  SP: 2,
  SUL: 3,
  COSE: 4,
  NONE: 5
}

export function ScreenTwo() {
  const [region, setRegion] = useState(ImageStates.BRASIL)
  const { updateScreen } = useApp()

  return (
    <div className="screen-two-wrapper">
      <div className="evaluations">
        {(region === ImageStates.BRASIL) ? (<img src={geralBrasil} />) : null}
        {(region === ImageStates.SP) ? (<img src={geralSP} />) : null}
        {(region === ImageStates.SUL) ? (<img src={geralSul} />) : null}
        {(region === ImageStates.COSE) ? (<img src={geralCose} />) : null}
        {(region === ImageStates.NONE) ? ( <img src={geralNone} /> ) : null}
      </div>
      <div className="states">
        <button onClick={() => setRegion(ImageStates.BRASIL)}>
          {(region !== ImageStates.BRASIL) ? (<img src={botaoBrasil} />) : null}
          {(region === ImageStates.BRASIL) ? (<img src={botaoBrasilActive} />) : null}
        </button>
        <button onClick={() => setRegion(ImageStates.SP)}>
          {(region !== ImageStates.SP) ? (<img src={botaoSPActive} />) : null}
          {(region === ImageStates.SP) ? (<img src={botaoSP} />) : null}
        </button>
        <button onClick={() => setRegion(ImageStates.SUL)}>
          {(region !== ImageStates.SUL) ? (<img src={botaoSulActive} />) : null}
          {(region === ImageStates.SUL) ? (<img src={botaoSul} />) : null}
        </button>
        <button onClick={() => setRegion(ImageStates.COSE)}>
          {(region !== ImageStates.COSE) ? (<img src={botaoCose} />) : null}
          {(region === ImageStates.COSE) ? (<img src={botaoCoseActive} />) : null}
        </button>
        <button onClick={() => setRegion(ImageStates.NONE)}>
          {(region !== ImageStates.NONE) ? (<img src={botaoNoneActive} />) : null}
          {(region === ImageStates.NONE) ? (<img src={botaoNone} />) : null}
        </button>
      </div>
      <ArrowButtons
        back={() => updateScreen(ScreenComponent.SCREEN_ONE)}
        hideBeginning
        hideNext
      />
    </div>
  )
}