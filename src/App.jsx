import {useState} from 'react';
import './App.css';

import Navbar  from "./components/Navbar";
import Main from "./components/Main";


import { titles } from './Data';
import { contents } from './Data';

function App(){    

    let[title, setTitle] = useState(titles[0]);
    let[content, setContent] = useState(contents[0]);


    let handleClick = (idx)=>{  // 0
        setTitle(titles[idx]);
        setContent(contents[idx]);
    }

    return(
        <div>
            <Navbar> </Navbar>
            
            <div className="Sidebar-Main-Container">
                <Sidebar handleClick={handleClick}> </Sidebar>
                <Main title={title} content = {content}></Main>
            </div>
        </div>
    );
}

export default App;





 

