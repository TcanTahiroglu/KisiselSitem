import data from '../data.json';
const Profile = ()=> {
    return (<div>
       <h1>{data.user[0].profilTr}</h1>
       <div>
        <h2>{data.user[0].profileh1Tr}</h2>
        <ul>
          {Object.entries(data.user[0].ProfilInfo[0]).map(([key, value], index) => (
            <li key={index}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
        <h2>{data.user[0].hakkımdaTr}</h2>
        <div >{data.user[0].hakkımdaBenTr}</div>
        </div>
        </div>
      );
    }

export default Profile;