import React from 'react';
// import '../styles.css';
import background from './images/head5.jpg';
import TodoList from './components/TodoList';
import {motion} from 'framer-motion';
import { Parallax } from 'react-parallax';
import {pageAnimation,titleAnim} from "./animation";
function App() {
  const titleanimation ={
    hidden:{opacity:0},
    show:{opacity:1,transition:{duration:2}},
        }
    
        const containerr={
            hidden:{x:100},
            show:{x:0,transition:{duration:0.75,ease:"easeOut",staggerChildren:1,when:'beforeChildren'}},
            
        }
  return (
    <Parallax strength={600} bgImage={background} >

    <motion.div className='todo-app' variants={pageAnimation} initial="hidden" animate="show">
      <TodoList />
    </motion.div>
    </Parallax>
  );
}

export default App;