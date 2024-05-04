import React, { useState } from "react";
import MainScreen from "../../MainScreen";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import notes from "../../data/notes";
console.log("notes", notes);

const MyNotes = () => {
  const deleteHandler=(id)=>{
    alert("Are u sure wants to delete?")
  }
  const[opener,setopener]=useState(false)
  const[card,setCard]=useState()
  const handleOpener=(id)=>{
    if(opener && card !== id){
      setopener(true)
    setCard(id)
    }
    else{
      setopener(!opener)
      setCard(id)
    }
   

  }
  return (
    <div>
      <MainScreen title="My Notes">
        <Link to="createnote">
          <Button variant="primary" style={{ margin: "1em" }}>
            Create New Note
          </Button>
        </Link>
        {notes.map((item, i) => {
          return (
            <Card key={item.id} style={{ margin: 10 }} >
              <Card.Header style={{ display: "flex" }} >
                <span
                  style={{ color: "black", flex: "1", alignItems: "center" }}
                  onClick={()=>handleOpener(item._id)}
                >
                  {" "}
                  {item.title}
                </span>
                <div>
                  <Button className="mx-1" size="sm" href={`${item._id}`}>
                    Edit
                  </Button>
                  <Button variant="danger" className="mx-1" size="sm" onClick={()=>deleteHandler(item._id)}>
                    Delete
                  </Button>
                </div>
              </Card.Header>
              {(card===item._id && opener) &&<Card.Body>{item.content}</Card.Body>}
            </Card>
          );
        })}
      </MainScreen>
    </div>
  );
};

export default MyNotes;
