import clsx from "clsx"
import style from './todo.module.scss'
import Input from "../input"
function Todo(){
    return(
        <div className={clsx('grid wide')}>
            <Input />
        </div>
    )
}

export default Todo