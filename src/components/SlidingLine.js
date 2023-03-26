import styled, { keyframes } from 'styled-components';

const SlidingLine = () => {
  return (
    <Wrapper>
      <div className="line-con">
        <div className="line one"></div>
        <div className="line two"></div>
        <div className="line three"></div>
      </div>
    </Wrapper>
  );
};

const blackSlideline = keyframes`
0%, 10%{left:-100%}
20%,100%{left:0%}
`;
const blackSlidelineTwo = keyframes`
0%, 43%{left:-100%}
53%,100%{left:0%}
`;
const blackSlidelineThree = keyframes`
0%, 76%{left:-100%}
86%,100%{left:0%}
`;

const Wrapper = styled.section`
  .line-con {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
    .line {
      position: relative;
      width: 80px;
      height: 4px;
      background: #e6e6e6;
      overflow-x: hidden;
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 4px;
        background: var(--pure-black);
      }
    }
    .line.one::after {
      animation: ${blackSlideline} 15s linear infinite;
    }
    .line.two::after {
      animation: ${blackSlidelineTwo} 15s linear infinite;
    }
    .line.three::after {
      animation: ${blackSlidelineThree} 15s linear infinite;
    }
  }
`;

export default SlidingLine;
