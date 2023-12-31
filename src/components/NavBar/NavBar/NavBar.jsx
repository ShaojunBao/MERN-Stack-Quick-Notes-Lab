import { Link } from 'react-router-dom';
import * as userService from '../../../utilities/users-service';

export default function NavBar({user, setUser}) {

  function handleLogOut(){
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/notes">Note</Link>
      &nbsp; | &nbsp;
      Hi {user.name}
      &nbsp;&nbsp; <Link to="" onClick = {handleLogOut}>Lot Out</Link>
    </nav>
  );
}