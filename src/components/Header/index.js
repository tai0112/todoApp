import style from './header.module.scss'
function Header() {
    return(
        <div className={style.header}>
            <h1 className ={style.logo}>TODO</h1> 
        </div>
    )
}

export default Header