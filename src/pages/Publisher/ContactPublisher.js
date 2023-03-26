import styled from 'styled-components';
import contactImg from '../../images/contact-publisher.jpg';
import { InsidePortalButton } from '../../components/Buttons';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ContactPublisher = () => {
  return (
    <Wrapper>
      <div className="img-con">
        <img src={contactImg} alt="contact" />
      </div>
      <main>
        <h2>
          Contact our <span>Publisher Relations team</span> for more details on
          how we can work together.
        </h2>
        <InsidePortalButton className="btn">
          <Link to="contact">
            <AiOutlineArrowRight />
            Contact us
          </Link>
        </InsidePortalButton>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  margin-top: 350px;
  img {
    border-radius: 10px;
  }
  main {
    padding-left: 150px;
    h2 {
      max-width: 700px;
      font-size: 45px;
      font-weight: 400;
      line-height: 50px;
      span {
        font-weight: 700;
      }
    }
    .btn {
      margin-top: 30px;
    }
  }
`;

export default ContactPublisher;
