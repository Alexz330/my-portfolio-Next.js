import React,{useState,useEffect,useRef} from 'react'
import styles from './styles.module.css'
const FadeInSection = ({children}) => {
  const [isVisible, setVisible] = useState(true);
  const domReferencie = useRef();
  
  useEffect(()=>{
      const observer =  new IntersectionObserver((entries)=>{
          entries.forEach(entry => setVisible(entry.isIntersecting))
      })
      observer.observe(domReferencie.current);
      return ()=> observer.unobserve(domReferencie.current)
  },[]);

  return (
    <div
      className={`${styles['fade-in-section']} ${isVisible ? styles['is-visible'] : ''}`}
      ref={domReferencie}
    >
      {children}
    </div>
  )
}

export default FadeInSection