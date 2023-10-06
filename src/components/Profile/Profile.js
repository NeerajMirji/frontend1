import { useEffect, useState } from "react";
import { getMyProfile} from "../api";
import { useNavigate, Link } from "react-router-dom";
import './Profile.css'

const Profile = () =>
{
    const navigate = useNavigate();
    const [profile, setProfile] = useState({});
    

    useEffect(() => {
        return async () => {
          
          const userName = localStorage.getItem('userName');
          if(userName == null) {
            navigate("/");
          }else{
            console.log(userName)
            const response = await getMyProfile(userName);
            console.log(response);
            setProfile(response);
            console.log("profile", profile);
          }
          
          
        };
      }, []);


    return (
        <div className="profileCard" style={{width: 22 + 'rem'}}>
            <div className="img pt-4 pb-4"> 
               <img class="card-img-top " src="https://xsgames.co/randomusers/avatar.php?g=male" alt="Card image cap"/>
            </div>

            <div class="card-body">
                <h4 class="card-title pt-2 pb-2">{profile.employeeName}</h4>
                <p class="card-text pb-3">Program Associate @ ABC Company</p>
            </div>
            <ul class="list-group list-group-flush text-left">
                <li class="list-group-item"><span className="font-weight-bold">Employee Id     : </span>{profile.employeeId}</li>
                <li class="list-group-item"><span className="font-weight-bold">Age             : </span>{profile.age}</li>
                <li class="list-group-item"><span className="font-weight-bold">Date of joining : </span>{profile.doj}</li>
                <li class="list-group-item"><span className="font-weight-bold">Email           : </span>{profile.email}</li>
                <li class="list-group-item"><span className="font-weight-bold">Mobile No       : </span>{profile.mobile}</li>
                <li class="list-group-item"><span className="font-weight-bold">Gender          : </span>{profile.gender}</li>
                <li class="list-group-item"><span className="font-weight-bold">Salary          : </span>{profile.salary}</li>

            </ul>
            <div class="card-body">
                <Link type="button" to='/userdashboard' className="btn btn-outline-warning ml-3 mt-2 mb-3">Back to dashboard</Link>

            </div>
        </div>
    );
}

export default Profile;