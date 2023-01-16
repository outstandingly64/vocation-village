import navlogo from "../assets/images/navlogo.svg";
import main from "../assets/images/main.svg";

const LandingPage = () => {
  return (
    <main>
      <nav>
        <img src={navlogo} alt="vv" className="logo" />
      </nav>
      <div className="container page">
        {/*info div*/}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Helvetica kickstarter lyft mixtape kale chips street art ethical
            kombucha iceland thundercats. Air plant normcore gentrify, big mood
            man braid af flexitarian succulents ugh activated charcoal roof
            party.
          </p>
          <button className="btn btn-hero">Log In/Sign Up</button>
        </div>
        <img src={main} alt="main" className="img main-img"/>
      </div>
    </main>
  );
};

export default LandingPage;
