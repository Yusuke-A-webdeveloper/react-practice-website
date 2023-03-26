import styled from 'styled-components';
import SlidingLine from '../../components/SlidingLine';
import SlidingLogo from '../../components/SlidingLogo';

const SlideLogoPublisher = () => {
  return (
    <Wrapper>
      <SlidingLogo />
      <SlidingLine />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  margin: 150px 0;
  display: flex;
  flex-direction: column;
  .line-con {
    margin-top: 80px;
  }
`;

export default SlideLogoPublisher;
