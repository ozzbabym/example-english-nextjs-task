import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../../styles/Questions.module.scss'

function Part2({props}) {
    const router = useRouter({})
    const id = router.pathname
    const dataQuestions = props.state.items.filter(item=>item.nameComponent === id)
    const data = dataQuestions[0]
   

    const [quest1, setQuest1] = useState('')
    const [quest2, setQuest2] = useState('')
    const [quest3, setQuest3] = useState('')
    const [quest4, setQuest4] = useState('')
    const [quest5, setQuest5] = useState('')
    const [quest6, setQuest6] = useState('')

    const [color1, setColor1] = useState('')
    const [color2, setColor2] = useState('')
    const [color3, setColor3] = useState('')
    const [color4, setColor4] = useState('')
    const [color5, setColor5] = useState('')
    const [color6, setColor6] = useState('')
    
    const [percent, setPercent] = useState(0)

    const [count, setCount] = useState(0)

    useEffect(() => {
        setPercent(count*(100/(data && data.answer2.length)))
    }, [count])

    if(!data) return <Link href={"/"}>404 back to menu</Link>
    

    const checkButton = () => {
        setCount(0)

        if(data.answer2[0] == quest1){
            setCount(prev => prev+1)
            setColor1('green')
        }else{
            setColor1('red')
        }
        if(data.answer2[1] == quest2){
            setCount(prev => prev+1)
            setColor2('green')
        }else{
            setColor2('red')
        }
        if(data.answer2[2] == quest3){
            setCount(prev => prev+1)
            setColor3('green')
        }else{
            setColor3('red')
        }
        if(data.answer2[3] == quest4){
            setCount(prev => prev+1)
            setColor4('green')
        }else{
            setColor4('red')
        }
        if(data.answer2[4] == quest5){
            setCount(prev => prev+1)
            setColor5('green')
        }else{
            setColor5('red')
        }
        if(data.answer2[5] == quest6){
            setCount(prev => prev+1)
            setColor6('green')
        }else{
            setColor6('red')
        }
    }
    
    const showButton = () => {
        setQuest1(data.answer2[0])
        setQuest2(data.answer2[1])
        setQuest3(data.answer2[2])
        setQuest4(data.answer2[3])
        setQuest5(data.answer2[4])
        setQuest6(data.answer2[5])
        setColor1('red')
        setColor2('red')
        setColor3('red')
        setColor4('red')
        setColor5('red')
        setColor6('red')
    }
    const clearButton = () => {
        setQuest1('')
        setQuest2('')
        setQuest3('')
        setQuest4('')
        setQuest5('')
        setQuest6('')

        setColor1('')
        setColor2('')
        setColor3('')
        setColor4('')
        setColor5('')
        setColor6('')
        setCount(0)
        setPercent(0)
    }

    return (
        <div>
            <div style={{marginTop: 50}}>
                    <h2>Question 5 – 10</h2>
                    <div style={{width: '50%'}}>Play ► and Listen the audio, complete the notes below by filling the gaps.
                        Write no more than two words and/or a number for each answer.
                    </div>
            </div>
            <div className={styles.cardContainer}>
                <div >
                    <div className={styles.titleYellow}>
                        <b>Tuesdays</b>
                    </div>
                    <div className={styles.title}>
                        <b>Entertainment activities</b>
                    </div>
                    
                    <div className={styles.description}>
                        <div>
                            ・Learning to make <input onChange={e=>setQuest1(e.currentTarget.value)} value={quest1} className={styles.input} style={{color: color1, fontWeight: 'bold'}}></input> dishes
                        </div>
                        <div>
                            ・Having a <input onChange={e=>setQuest2(e.currentTarget.value)} value={quest2} className={styles.input} style={{color: color2, fontWeight: 'bold', width: 'auto'}}></input> concert
                        </div>
                    </div>

                    <div className={styles.title}>
                        <b>Transportation</b>
                    </div>
                    <div className={styles.description}>
                        ・mini bus
                    </div>
                </div>

                <div>
                    <div className={styles.titleYellow}>
                        <b>Wednesdays</b>
                    </div>
                    <div className={styles.title}>
                        <b>Entertainment activities</b>
                    </div>
                    
                    <div className={styles.description}>
                        <div>
                            ・Enjoying mountain view
                        </div>
                        <div>
                            ・Exploring a tropical <input onChange={e=>setQuest3(e.currentTarget.value)} value={quest3} className={styles.input} style={{color: color3, fontWeight: 'bold', width: 'auto'}}></input>
                        </div>
                    </div>

                    <div className={styles.title}>
                        <b>Transportation</b>
                    </div>
                    <div className={styles.description}>
                        <div>
                            ・Exploring a tropical <input onChange={e=>setQuest4(e.currentTarget.value)} value={quest4} className={styles.input} style={{color: color4, fontWeight: 'bold', width: 'auto'}}></input>
                        </div>
                        <div>
                            ・shuttle bus
                        </div>
                    </div>
                </div>

                <div>
                    <div className={styles.titleYellow}>
                        <b>Thursdays</b>
                    </div>
                    <div className={styles.title}>
                        <b>Entertainment activities</b>
                    </div>
                    
                    <div className={styles.description}>
                        <div>
                            ・Having a fancy dinner
                        </div>
                        <div>
                            ・Watching a spectacular display of <input onChange={e=>setQuest5(e.currentTarget.value)} value={quest5} className={styles.input} style={{color: color5, fontWeight: 'bold', width: 'auto'}}></input>
                        </div>
                    </div>

                    <div className={styles.title}>
                        <b>Transportation</b>
                    </div>
                    <div className={styles.description}>
                        <div>
                            ・ <input onChange={e=>setQuest6(e.currentTarget.value)} value={quest6} className={styles.input} style={{color: color6, fontWeight: 'bold', width: 'auto'}}></input>
                        </div>
                    </div>
                </div>
                <div>
                    {count!=0 && <div style={{marginTop: 30}}>
                        You have scored {Math.ceil(percent)} % ( {count} / {data && data.answer2.length} )
                    </div>}
                    <div style={{display: 'flex', marginTop: 50}}>
                        <div onClick={checkButton} className={styles.buttonCheck} style={{background: '#4c87c7', color: 'white'}}><b>Check</b></div>
                        <div onClick={showButton} className={styles.button} style={{color: '#4c87c7'}}><b>Show</b></div>
                        <div onClick={clearButton} className={styles.button} style={{color: '#4c87c7'}}><b>Clear</b></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Part2
