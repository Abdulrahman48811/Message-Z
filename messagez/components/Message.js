import styled from "styled-components";
import { auth } from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth"; 
import moment from "moment";

function Message({ user, message }) {
  const [userLoggedIn] = useAuthState(auth);

  const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver;


  return (
    <Container >
      <TypeOfMessage>
        {message.message}
        <TypeOfMessage> {message.timestamp ? moment(message.timestamp).format('LT') : "..."}</TypeOfMessage>
        </TypeOfMessage>
    </Container >
  );
}
export default Message;

const Container = styled.div``;

const MessageElement = styled.p`
width: fit-content;
padding: 10px;
border-radius: 20px;
margin:10px;
min-width: 60px;
padding-bottom: 6px;
position: relative;
text-align: right;
`;

const Sender = styled(MessageElement)`
  margin-left: auto;
  background-color: #C3B1E1

`;

const Receiver = styled(MessageElement)`
background-color: whitesmoke;
text-align: left;

`;

const Timestamp = styled.span`
color: gray;
padding: 10px;
font-size: 9px;
position: absolute;
bottom: 0;
text-align: right;
right: 0;
`;