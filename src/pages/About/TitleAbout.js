import styled from 'styled-components';

const TitleAbout = ({ title1, title2, title3, author }) => {
  return (
    <Wrapper>
      <h2>
        {title1} <span>{title2}</span> {title3}
      </h2>
      <h4>{author}</h4>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 100px;
  h2 {
    font-size: 85px;
    font-weight: 300;
    line-height: 80px;
    span {
      font-weight: 700;
    }
  }
  h4 {
    margin-top: 50px;
    font-weight: 400;
  }
`;

export default TitleAbout;
