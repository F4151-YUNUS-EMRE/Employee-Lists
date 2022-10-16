import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Person = (data) => {
    const {age,email,image,name}=data
    const personStyle={
        display:"flex",
        marginTop:"1rem",
        padding:"1rem",
    }
  return (
    <Container style={personStyle}>
      <Container>
        <Image className="rounded-circle" src={image}></Image>
      </Container>
      <Container style={{padding:"1rem"}}>
        <h5> {name} </h5>
        <p> {email} </p>
        <p> {age} </p>
      </Container>
    </Container>
  );
};

export default Person;
