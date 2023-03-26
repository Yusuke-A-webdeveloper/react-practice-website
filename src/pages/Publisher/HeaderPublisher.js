import styled from 'styled-components';

const HeaderPublisher = () => {
  return (
    <Wrapper>
      <h2>
        We empower <span>news publishers.</span>
      </h2>
      <p>
        By providing readers with shopping inspiration and commerce content, we
        support publishers in acquiring new users and driving additional
        monetisation.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h2 {
    font-size: 45px;
    font-weight: 400;
    span {
      font-weight: 700;
    }
  }
  p {
    color: var(--p-hero);
    max-width: 660px;
    margin-top: 30px;
  }
`;

export default HeaderPublisher;
