import styled from 'styled-components';

const BrandsHeader = () => {
  return (
    <Wrapper>
      <h2>
        We connect <span>brands and consumers.</span>
      </h2>
      <p>
        We go beyond discounting by offering brands and retailers a broad range
        of valuable services and solutions that support their business goals.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h2 {
    font-size: 60px;
    font-weight: 400;
    span {
      font-weight: 700;
    }
  }
  p {
    color: var(--p-hero);
    font-size: 20px;
    max-width: 950px;
    margin-top: 30px;
  }
`;

export default BrandsHeader;
