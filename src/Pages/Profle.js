import { UserInfo } from '../Components/api';
import { useQuery } from 'react-query'; 
import logcon from '../Images/log1.png';


export default function Profile() {
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
    <div style={{ backgroundColor: '#425c59', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <img src={logcon} style={{ width: 350, height: 350, marginRight: 10 }} />
      <div style={{ display: 'flex', flexDirection: 'column', margin: 0, padding: 0 }}>
      <h1 style={{marginTop: -30, marginLeft: -10 ,color: '#ffcc9f', fontSize: 80 }}>User Profile</h1>
        <h1 style={{ color: '#ffcc9f',marginTop: -50, marginBottom: 0,  }}>{data.first_name} {data.last_name}</h1>
        <p style={{ color: '#ffcc9f', marginTop: 0, marginBottom: 0 }}>{data.email}</p>
        <p style={{ color: '#ffcc9f',marginTop: 0, marginBottom: 0 }}>User ID: {data.id}</p>
      </div>
    </div>
  );
}
