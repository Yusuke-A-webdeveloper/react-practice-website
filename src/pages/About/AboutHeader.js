import styled from 'styled-components';

const AboutHeader = () => {
  return (
    <Wrapper>
      <h2>
        <span>Our</span>vision
      </h2>
      <p>
        We believe in create rewarding moments for consumers and empower them to
        make the best shopping decisions in a smart, fair, and enjoyable way.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h2 {
    font-size: 50px;
    font-weight: 400;
    span {
      font-weight: 700;
    }
  }
  p {
    color: var(--p-hero);
    max-width: 650px;
    margin-top: 30px;
  }
`;

export default AboutHeader;
