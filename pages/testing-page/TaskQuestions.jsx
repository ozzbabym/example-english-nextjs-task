import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Questions.module.scss'
import Part1 from '../../components/Task1/Part1';
import Part2 from '../../components/Task1/Part2';

function TaskQuestions(props) {
    const [part, setPart] = useState(true)

    const router = useRouter()
    const id = router.pathname
    const dataQuestions = props.state.items.filter(item=>item.nameComponent === id)
    const data = dataQuestions[0]

    const buttonPart1 = () => {
        setPart(true)
    }
    const buttonPart2 = () => {
        setPart(false)
    }


    return (
        <div>
            
            {data && <div style={{background: `url("${data.img}")`, backgroundRepeat: "no-repeat",backgroundSize: "100% 100%", height: 300}}>
                <div style={{padding: '200px 50px', color: 'white'}}>
                    
                    <div>IELTS / Начальный / Listening</div>
                    <div style={{fontSize: 30}}><b>Задание {data.task}</b></div>
                </div>
            </div>}
            <div style={{width: '90%', margin: '50px auto'}}>
                <div style={{position:'sticky',top: 0, height: 150, backgroundColor: 'white'}}>
                    Play the audio - Listening
                    {data && <audio src={data.sound} controls style={{width: '100%'}}></audio>}
                    <div  className={styles.buttonContainer}>
                        <div onClick={buttonPart1}>Part 1</div>
                        <div onClick={buttonPart2}>Part 2 </div>
                    </div>
                </div>{part 
                        ?<Part1 props={props} data={data}/>
                        :<Part2 props={props} data={data}/>
                }
            </div>
        </div>
    )
}


export default TaskQuestions
