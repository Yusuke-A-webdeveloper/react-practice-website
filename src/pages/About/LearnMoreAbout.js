import styled from 'styled-components';
import { BrandContactButton } from '../../components/Buttons';
import { AiOutlineArrowRight } from 'react-icons/ai';

const LearnMoreAbout = () => {
  return (
    <Wrapper>
      <h3>
        Learn more about our company at <span>GSG Blog</span>
      </h3>
      <BrandContactButton className="btn">
        <a href="https://www.global-savings-group.com/news/category/company-news/">
          <AiOutlineArrowRight />
          learn more
        </a>
      </BrandContactButton>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 50%;
  height: 250px;
  background: var(--pure-black);
  border-radius: 10px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  h3 {
    color: var(--white);
    font-size: 23px;
    font-weight: 400;
    max-width: 350px;
    span {
      font-weight: 700;
    }
  }
  .btn {
    margin-top: 50px;
  }
`;

export default LearnMoreAbout;
