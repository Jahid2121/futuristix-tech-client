import { useEffect, useState } from "react";

const BackToTop = () => {
    const [visible, setIsvisible] = useState(false)

    const toggleVisibility = () => {
        if(window.scrollY > 500){
            setIsvisible(true)
        }
        else{
            setIsvisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    },[])
    
    return (
        <div className={`${visible ? 'visible': 'hidden'}     justify-end `} onClick={scrollToTop}>
             <img src={'https://i.ibb.co/SQLnqrr/icons8-double-up.gif'} alt="" />
        </div>
    )




  
};

export default BackToTop;