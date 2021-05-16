import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../../styles/Questions.module.scss'

function Part1({props}) {
    const router = useRouter({})
    const id = router.pathname
    const dataQuestions = props.state.items.filter(item=>item.nameComponent === id)
    const data = dataQuestions[0]

   

    const [quest1, setQuest1] = useState('')
    const [quest2, setQuest2] = useState('')
    const [quest3, setQuest3] = useState('')
    const [quest4, setQuest4] = useState('')

    const [color1, setColor1] = useState('')
    const [color2, setColor2] = useState('')
    const [color3, setColor3] = useState('')
    const [color4, setColor4] = useState('')
    
    const [percent, setPercent] = useState(0)

    const [count, setCount] = useState(0)

    useEffect(() => {
        setPercent(count*(100/(data && data.answer.length)))
    }, [count])

    if(!data) return <Link href={"/"}>404 back to menu</Link>
    

    const checkButton = () => {
        setCount(0)

        if(data.answer[0] == quest1){
            setCount(prev => prev+1)
            setColor1('green')
        }else{
            setColor1('red')
        }
        if(data.answer[1] == quest2){
            setCount(prev => prev+1)
            setColor2('green')
        }else{
            setColor2('red')
        }
        if(data.answer[2] == quest3){
            setCount(prev => prev+1)
            setColor3('green')
        }else{
            setColor3('red')
        }
        if(data.answer[3] == quest4){
            setCount(prev => prev+1)
            setColor4('green')
        }else{
            setColor4('red')
        }
    }
    
    const showButton = () => {
        setQuest1(data.answer[0])
        setQuest2(data.answer[1])
        setQuest3(data.answer[2])
        setQuest4(data.answer[3])
        setColor1('red')
        setColor2('red')
        setColor3('red')
        setColor4('red')
    }
    const clearButton = () => {
        setQuest1('')
        setQuest2('')
        setQuest3('')
        setQuest4('')
        setColor1('')
        setColor2('')
        setColor3('')
        setColor4('')
        setCount(0)
        setPercent(0)
    }
    return (
        <div>
           <div style={{marginTop: 50}}>
                    <h2>Question 1 – 4</h2>
                    <div style={{width: '50%'}}>Play ► and Listen the audio, complete the notes below by filling the gaps.
                        Write no more than two words and/or a number for each answer.
                    </div>
                </div>
                <div style={{marginTop: 50}}>

                    <div className={styles.title}>
                         <b>NOTES ON ISLAND HOTEL</b>
                    </div>
                    <div className={styles.description}>
                        Type of room required <span style={{textDecoration: 'underline'}}>Double room</span>
                    </div>

                    <div className={styles.title}>
                         <b>Time</b>
                    </div>
                    <div className={styles.description}>
                        ・The length of stay: approximately 2 weeks
                    </div>
                    <div className={styles.description}>
                        ・Starting date: 25th April
                    </div>

                    <div className={styles.title}>
                         <b>Temperature</b>
                    </div>
                    <div className={styles.description}>
                        ・Up to <input onChange={e=>setQuest1(e.currentTarget.value)} value={quest1} className={styles.input} style={{color: color1, fontWeight: 'bold'}}></input> °C
                    </div>
                    <div className={styles.description}>
                        ・Erratic weather
                    </div>

                    <div className={styles.title}>
                         <b>Transport</b>
                    </div>
                    <div className={styles.description}>
                         ✔︎ Pick-up service is provided
                    </div>
                    <div className={styles.description}>
                        ✔︎ Normally transfer to the airport takes about<input onChange={e=>setQuest2(e.currentTarget.value)} value={quest2} className={styles.input} style={{color: color2, fontWeight: 'bold'}}></input>
                    </div>

                    <div className={styles.title}>
                         <b>Facilities</b>
                    </div>
                    <div className={styles.description}>
                        ✔︎ En-suite facilities and a<input onChange={e=>setQuest3(e.currentTarget.value)} value={quest3} className={styles.input} style={{color: color3, fontWeight: 'bold'}}></input>
                    </div>
                    <div className={styles.description}>
                        ✔︎ Gym and spa facilities
                    </div>
                    <div className={styles.description}>
                        ✔︎ A large outdoor swimming pool
                    </div>
                    <div className={styles.description}>
                        ✔︎ Three standard<input onChange={e=>setQuest4(e.currentTarget.value)} value={quest4} className={styles.input} style={{color: color4, fontWeight: 'bold'}}></input>
                    </div>
                </div>
                {count!=0 &&
                <div style={{marginTop: 30}}>
                    You have scored {percent} % ( {count} / {data && data.answer.length} )
                </div>}
                <div style={{display: 'flex', marginTop: 50}}>
                    <div onClick={checkButton} className={styles.buttonCheck} style={{background: '#4c87c7', color: 'white'}}><b>Check</b></div>
                    <div onClick={showButton} className={styles.button} style={{color: '#4c87c7'}}><b>Show</b></div>
                    <div onClick={clearButton} className={styles.button} style={{color: '#4c87c7'}}><b>Clear</b></div>
                </div>
        </div>
    )
}

export default Part1
