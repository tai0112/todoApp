import { useState, useRef, useEffect, useCallback } from "react"
import style from './input.module.scss'
import clsx from "clsx"
import List from "../list"
function Input() {
    let jsonJobs
    const [jobs, setJobs ] = useState(JSON.parse(localStorage.getItem('Jobs')) !== [] ? JSON.parse(localStorage.getItem('Jobs')) : [])
    const [job, setJob ] = useState('')
    const [, upDateState] = useState()
    const inputRef = useRef()
    const makeEnter = useRef()
    const handleSubmit = () => {
        if(job.trim() !== ''){
            setJobs(prev => [...prev, job])
            setJob('')
            inputRef.current.focus()
        }
    }

    const handleClearTodo = () => {
        setJobs(prev => [])
    }

    useEffect(() => {
        (inputRef.current).addEventListener('keypress',function(handleSubmit){
            if(handleSubmit.key === 'Enter'){
                handleSubmit.preventDefault()
                makeEnter.current.click()
            }
        })
    },[])


    
    useEffect(() => {
        jsonJobs = JSON.stringify(jobs)
        localStorage.setItem('Jobs',jsonJobs)
    },[jobs])
    
    const handleDelete = index => {
        let newJobs = jobs
        newJobs.splice(index,1)
        setJobs(prev => [...newJobs])
        upDateState({})
    }

    return (
        <div className = {clsx('d-flex',style.spaceTop)}>
            <div className={style.mAuto}>
                <input 
                className={style.inputBtn}
                ref={inputRef}
                value ={job}
                onChange = {e => setJob(e.target.value)}
                placeholder="Enter input..."
                />
                <button 
                ref={makeEnter}
                className={clsx(style.Btn,style.add)}
                onClick = {handleSubmit}>Add</button>
                <button
                className={clsx(style.Btn,style.delete)}
                onClick = {handleClearTodo}
                >Clear</button>
                <List 
                handleDelete = {handleDelete}
                jobs = {jobs}
                />
                
            </div>
        </div>
    )
}

export default Input