import { AnimatePresence, motion } from "framer-motion";
import { ScreenComponent } from "../constants";
import { useApp } from "../contexts/AppContext"
import { ScreenOne } from "./screen-one";
import { ScreenTwo } from "./screen-two";
import { useIdleTimer } from 'react-idle-timer'


export function MatchScreen() {
  const { currentScreen, updateScreen } = useApp()

  const onIdle = () => {
    updateScreen(ScreenComponent.SCREEN_ONE)
  }

  useIdleTimer({
    onIdle,
    timeout: 1000 * 60 * 1,
    throttle: 500
  })

  function GetCurrentScreen() {
    switch (currentScreen) {
      case ScreenComponent.SCREEN_ONE:
        return (
          <ScreenOne />
        )
      case ScreenComponent.SCREEN_TWO:
        return (
          <ScreenTwo />
        )
      default:
        return (
          <ScreenOne />
        )
    }
  }

  return (
    <div style={{ height: '100%', backgroundColor: '#f5c807' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ height: '100%' }}
        >
          {GetCurrentScreen()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}