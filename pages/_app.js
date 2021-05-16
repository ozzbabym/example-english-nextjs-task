import '../styles/globals.css'
import {reducer} from '../reducer/reducer'
import React from 'react'
import task1 from '../assets/audio/task1.mp3';


let items = [
  { id: 1,
    nameComponent: '/testing-page/TaskQuestions', 
    img: 'https://static.wixstatic.com/media/nsplsh_f2f76bed0097470ca14ff3682efbdcf2~mv2.jpg/v1/fill/w_348,h_451,al_c,q_80,usm_0.66_1.00_0.01/Image%20by%20Alexander%20Kaunas.webp',
    task: 1,
    level: 'Начальный',
    sound: task1,
    answer: [19, "40 minutes", "balcony", "tennis courts"],
    answer2: ['fish dishes', 'piano', 'helicopter', 'cretan garden', 'fireworks', 'cable car']
},
  { id: 2,
    nameComponent: '/testing-page/TaskQuestions2', 
    img: 'https://static.wixstatic.com/media/nsplsh_65767457747630692d3645~mv2.jpg/v1/fill/w_348,h_451,al_c,q_80,usm_0.66_1.00_0.01/Image%20by%20Jordan.webp',
    task: 2,
    level: 'Начальный',
    sound: task1,
    answer: [19, "40 minutes", "balcony", "tennis courts"]
},
  { id: 3,
    nameComponent: '/testing-page/TaskQuestions3', 
    img: 'https://static.wixstatic.com/media/15bb9b0600164d51a581fa0daa6e9cb0.jpg/v1/fill/w_348,h_451,al_c,q_80,usm_0.66_1.00_0.01/Stonehendge.webp',
    task: 3,
    level: 'Начальный',
    sound: task1,
    answer: [19, "40 minutes", "balcony", "tennis courts"]
}
]

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = React.useReducer(reducer,{
    items: items
  })

  return <Component {...pageProps} state={state} dispatch={dispatch}/>
}

export default MyApp
