import { IconDivider } from './assets/images/pattern-divider-desktop.jsx'
import { IconDice } from './assets/images/icon-dice.jsx'
import { useEffect, useState } from 'react'
import './App.css'

const ADVISE_ENDPOINT_RANDOM_FACT = 'https://api.adviceslip.com/advice'

export function App () {
  const [advice, setAdvice] = useState()
  const [id, setId] = useState()

  const getRamdomAdvice = (params) => {
    fetch(ADVISE_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(({ slip }) => { // recupere el slip del data
        const { advice } = slip
        const { id } = slip

        setAdvice(advice)
        setId(id)
      })
  }

  useEffect(() => {
    getRamdomAdvice()
  }, [])

  return (
    <main>
      <section>
        {id && <p className='number-advise'>ADVICE #{id}</p>}
        {advice && <p className='message-advise'>
          "{advice}" </p>}
        <IconDivider />
        <button onClick={getRamdomAdvice}>
          <IconDice />
        </button>
      </section>
    </main>
  )
}
