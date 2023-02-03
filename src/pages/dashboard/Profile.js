import { useState } from "react";
import { FormInput, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const Profile = () => {
  const { user, showAlert, displayAlert, isLoading, updateUser } =
    useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const submitHandler = (e) => {
    e.preventDefault();
    if(!name||!email||!lastName||!location){
      displayAlert();
      return;
    }
    console.log("user updated handler");
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={submitHandler}>
        <h3>Profile!</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormInput
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormInput
            type="text"
            name="lastName"
            labelText={`Last Name`}
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormInput
            type="text"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="text"
            name="location"
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>{isLoading?'Saving...':'Save Changes'}</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
