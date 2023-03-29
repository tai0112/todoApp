import style from './list.module.scss'
import { useState } from 'react'
import clsx from 'clsx'

function List({jobs,handleDelete}) {
    return (
        <ul className={style.list}>
            {jobs.map((job,index) => <li key={index} className={clsx(style.listItem)}> <span>👉 {job}</span> <span>
            <i onClick = {e => handleDelete(index)} className={clsx(" fa-solid fa-rectangle-xmark",style.delete)}></i><i onClick ={e => {
                const parentClass = (e.target).parentElement.parentElement.className
                if(parentClass.indexOf(style.isDone) !== -1){
                    (e.target).parentElement.parentElement.className = style.listItem
                }else{
                    (e.target).parentElement.parentElement.className = style.listItem + ' ' + style.isDone
                }
                
            }} className={clsx("fa-solid fa-check",style.done)}></i>
                </span> </li>)}
        </ul>
    )
}

export default List