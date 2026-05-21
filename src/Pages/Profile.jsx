
import { useParams } from "react-router-dom";


export const Profile = () => {
  const {id} = useParams()



  console.log(id);
  


  const users = [
    {
        id: 1,
        name: "favour",
        location: "American"
    },
      {
        id: 2,
        name: "Ayo",
        location: "Lagos"
    },
      {
        id: 3,
        name: "Mayowa",
        location: "Pakistan"
    }
    
]
console.log(id);

const profile = users.find(u=> u.id == id)
console.log(profile);


  return (
    <div>
        <h1>Profile Page</h1>
      
        <div>
          {/* {user.find(user=>user.id === id.id)? .name} */}
          {/* {user.map(user=>user.id.name  )} */}
          {/* {profile.name} */}
        
            <ul >
              <li>{profile.id}</li>
              <li>{profile.name}</li>
              <li>{profile.location}</li>
            </ul>
        
      
        </div>
    </div>
  )
}
