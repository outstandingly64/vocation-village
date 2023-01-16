import navlogo from "../assets/images/navlogo.svg";
import main from "../assets/images/main.svg";
import styled from "styled-components";
//TODO: ADJUST the nav logo svg image
const LandingPage = () => {
  return (
    <Wrapper>
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
          <button className="btn btn-hero">Log In / Sign Up</button>
        </div>
        {/*Image (disappears for small screens)*/}
        <img src={main} alt="main" className="img main-img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -1rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default LandingPage;
