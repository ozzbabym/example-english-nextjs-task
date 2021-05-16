import Link from 'next/link'
import styles from '../styles/Menu.module.scss'

function Menu(props) {
    
    return (
        <div className={styles.menuWrapper}>
            <h1>My items</h1>
            <div className={styles.itemContainer}>
                {props.state.items.map(item=><div key={item.id}>
                    <div>
                        <img src={item.img} alt="picture" />
                    </div>
                    <br />
                    <div>
                        Задание <b>{item.task}</b>
                    </div>
                    <br />
                    <div>IELTS / {item.level} / Listening</div>
                    <br/>
                    <Link href={`${item.nameComponent}`}><div className={styles.buttonMore}>Read More</div></Link>
                </div>)}
            </div>
        </div>
    )
}



export default Menu

