import "./App.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Person from "./component/Person";
import data from "./component/Data/data";
import { useState } from "react";


const App = () => {
  const [page, setPage] = useState(0)
    
    let text;

    const handleClick=(e)=>{
      text=e.target.innerText
      
      if(text=="Next"){
        if (page < data.length - 5){
          return setPage(page+5)
        }else if(page==15){
          return setPage(page-15)
        }
      }else if(text=="Prev"){
        if (page > 1){
          return setPage(page - 5)
        }else if(page==0){
          return setPage(page+15)
        }
        
      }
    }

    return ( 
    <Container className = "mt-4 p-4 text-center" style = {{background: "aqua",justifyContent:"center"}}>

      <Container>
        <h2 className = "display-4 fw-bold"
        style = {{letterSpacing: "0.3rem"}}>Employee List</h2>
        < h3 > (Employess {page+1} to {page+5}) </h3> 
      </Container >


      {data.slice(page,page+5).map((item, index) => < Person {...item}key = {index}/>)}


      <Container className="d-flex mt-4 p-2" style={{justifyContent:"space-around"}}>
        <Button onClick={handleClick} className="btn-lg p2">Prev</Button>
        <Button onClick={handleClick} className="btn-lg p2">Next</Button>
      </Container>


    </Container>
            )
        }


export default App;
