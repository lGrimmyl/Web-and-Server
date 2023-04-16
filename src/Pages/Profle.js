import { UserInfo } from '../Components/api';
import { useQuery } from 'react-query'; 
import logcon from '../Images/log.png';
import imgcon from '../Images/DSC_3300.JPG';

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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <img src={logcon} style={{ width: 150, height: 150, marginRight: 10 }} />
      <div style={{ display: 'flex', flexDirection: 'column', margin: 0, padding: 0 }}>
      <h1 style={{ fontSize: 13, marginTop: 0, marginBottom: 5 }}>My Profile</h1>
        <h1 style={{ marginTop: 0, marginBottom: 0 }}>{data.first_name} {data.last_name}</h1>
        <p style={{ marginTop: 0, marginBottom: 0 }}>{data.email}</p>
        <p style={{ marginTop: 0, marginBottom: 0 }}>User ID: {data.id}</p>
      </div>
    </div>
  );
}
