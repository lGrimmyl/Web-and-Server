import { UserInfo } from '../Components/api';
import { useQuery } from 'react-query'; 
import logcon from '../Images/log1.png';
import bg from '../Images/bg1.png';
import map from '../Images/map.png';
import chat from '../Images/chat.png';
import org from '../Images/Org.png';
import eve from '../Images/Events.png'
import { Card,ButtonBase,CardContent,FormControl, Divider } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate('/other-link'); // Replace '/other-link' with the desired route path
  };

  const { data, isLoading, error } = useQuery("user", UserInfo, {
    retry: 0,
    onSuccess: (data) => console.log(data),
  });
  if (isLoading && !error) {
    return (
      <p style={{ fontSize: 25 } }>
        Loading...
      </p>
    );
  } else if (error) {
    return (
      <p style={{ fontSize: 25 } }>
        Error has occurred...
      </p>
    );
  }
  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <img src={logcon} style={{ width: 150, height: 150,marginLeft:1150,marginBottom:-20}} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1 style={{marginRight:1300,marginBottom:500,marginTop:-100,color: '#FFF', fontSize: 80 }}>Hello, {data.first_name}</h1>
        <h1 style={{ color: '#FFF', marginLeft:1550,marginTop:-600  }}>{data.first_name} {data.last_name}</h1>
        <p style={{ color: '#FFF', marginLeft:1570, marginTop: -10}}>{data.email}</p>
        <p style={{ color: '#FFF',marginLeft:1590 , marginTop: -55 }}>User ID: {data.id}</p>
      </div>
      
      <ButtonBase onClick={() => {navigate('/CampusMap')}}>
          <Card style={{ borderRadius:30,width: 281, height: 247, margin: '10px', backgroundColor: '#2B59A2',marginLeft:-1100, marginBottom:-400 }}>
            <CardContent>
              <FormControl>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{  color: 'white', fontSize: 20, marginTop: 80}}>Campus Map</span>
                  <img src={map} style={{ width: 400, height: 400, marginTop: -70,marginLeft:-50 }} alt="Map Image" />
                </div>
              </FormControl>
            </CardContent>
          </Card>
        </ButtonBase>

  <ButtonBase onClick={() => {navigate('/Chat')}}>
  <Card style={{borderRadius:30,width: 281, height: 247, margin: '10px', backgroundColor: '#FAD567',marginLeft:-500,marginBottom: -400 }}>
    <CardContent>
      <FormControl>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
            <span style={{ color: 'white', fontSize: 20, marginTop: 100, display: 'inline-block', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Chat</span>
          </div>
          <div style={{ marginRight: '10px' }}>
            <img src={chat} style={{  width: 250, height: 225,marginBottom:70,marginLeft:-20 }} alt="Map Image" />
          </div>
        </div>
      </FormControl>
    </CardContent>
  </Card>
</ButtonBase>

<ButtonBase onClick={() => {navigate('/Organizations')}}>
  <Card style={{borderRadius:30,width: 281, height: 247, margin: '10px', backgroundColor: '#42AEB0' ,marginBottom:-940, marginLeft:-1100}}>
    <CardContent>
      <FormControl>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
            <span style={{ color: 'white', fontSize: 20, marginTop: 100, display: 'inline-block', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Organizations</span>
          </div>
          <div style={{ marginRight: '10px' }}>
            <img src={org} style={{  width: 200, height: 200,marginBottom:120,marginLeft:-75 }} alt="Map Image" />
          </div>
        </div>
      </FormControl>
    </CardContent>
  </Card>
</ButtonBase>

<ButtonBase onClick={() => {navigate('/EventUp')}}>
  <Card style={{borderRadius:30,width: 281, height: 247, margin: '10px', backgroundColor: '#FA7470' ,marginBottom:-940,marginLeft:-500}}>
    <CardContent>
      <FormControl>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
            <span style={{ color: 'white', fontSize: 20, marginTop: 100, display: 'inline-block', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Events</span>
          </div>
          <div style={{ marginRight: '10px' }}>
            <img src={eve} style={{  width: 300, height: 250,marginLeft:-80,marginTop:-30,marginBottom:100 }} alt="Map Image" />
          </div>
        </div>
      </FormControl>
    </CardContent>
  </Card>
</ButtonBase>

<ButtonBase onClick={() => {navigate('/EventUp')}}>
  <Card style={{borderRadius:30,width: 605, height: 512, margin: '10px', backgroundColor: '#FFF' ,marginBottom:-670,marginRight:-700}}>
    <CardContent>
      <FormControl>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
            <span style={{ color: '#3BC98D', fontSize: 30, marginTop: 5, display: 'inline-block',  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>My Upcoming Events</span>
            
          </div>
          
        </div>
      </FormControl>
      <Divider />
    </CardContent>
  </Card>
</ButtonBase>


      
    </div>
  );
}
