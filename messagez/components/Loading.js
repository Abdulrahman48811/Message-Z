import { Circle } from "better-react-spinkit";


function Loading() {
  return (
    <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <div>
        <img
          src='https://lh3.googleusercontent.com/V3lOQY-1L-0T0U6bo4wiojKZkRMKe8_Ru0yO70he1Hc0dWD17Tb2nYbHGMpHtxhzyVhFv8MiQRmjE6LdpP1Hn5_Gze2GzQ7PZhCwmc5bCBpfa3dwwoelPlectBQsurvorODc_p3gIg=w2400'
          alt=''
          style={{marginBottom:10}}
          height={100}
        />
        <Circle color="#CF9FFF" size={60}/>
      </div>
      </center>
  )
}

export default Loading;