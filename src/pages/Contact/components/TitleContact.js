import styled from 'styled-components';

const TitleContact = ({ bolded, header }) => {
  return (
    <Wrapper>
      <h2>
        <span>{bolded}</span> {header}
      </h2>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h2 {
    font-size: 45px;
    font-weight: 400;
    line-height: 50px;
    span {
      font-weight: 700;
    }
  }
`;

export default TitleContact;
