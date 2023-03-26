import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <h2>
        Our Consumer Portals. <span>Three brands trusted by millions.</span>
      </h2>
      <p>
        GSG’s own consumer portals provide millions of members with
        personalised, exclusive rewards and offers that fit their own unique
        lifestyles. At the same time, they also deliver brands and retailers a
        real, lasting way to directly connect with a targeted, loyal audience
        that loves to shop, and moreover trusts and values the rewards, and
        offers we recommend.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h2 {
    text-transform: capitalize;
    font-size: 45px;
    span {
      font-weight: 400;
    }
  }
  p {
    max-width: 650px;
    margin: 30px 0;
    color: var(--p-hero);
  }
`;

export default Header;
