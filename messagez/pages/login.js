import { Button } from '@material-ui/core';
import Head from 'next/head';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login() {

  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  }


  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo
         src='https://lh3.googleusercontent.com/V3lOQY-1L-0T0U6bo4wiojKZkRMKe8_Ru0yO70he1Hc0dWD17Tb2nYbHGMpHtxhzyVhFv8MiQRmjE6LdpP1Hn5_Gze2GzQ7PZhCwmc5bCBpfa3dwwoelPlectBQsurvorODc_p3gIg=w2400'
        />
        <Button onClick={signIn} variant="outlined">Sign in with Google</Button>
    </LoginContainer>

    </Container>
  )
}

export default Login


const Container = styled.div`
display: grid;
place-items: center;
height: 100vh;
background-color: whitesmoke;
`;

const LoginContainer = styled.div`
display: flex;
flex-direction: column;
padding: 100px;
align-items: center;
background-color: white;
border-radius: 5px;
box-shadow: 0px 4px 14px -3px;
`;

const Logo = styled.img`
height= 200px;
width= 200px;
margin-bottom= 50px;
`;