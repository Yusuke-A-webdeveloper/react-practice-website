import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BrandContactButton, InnerLinkButton } from '../../components/Buttons';
import { AiOutlineArrowRight } from 'react-icons/ai';

const contactImg =
  'https://www.global-savings-group.com/wp-content/uploads/2022/06/18_04_17_GlobalSavingsGroup_0453-scaled.jpg';

const BrandsContact = () => {
  return (
    <Wrapper>
      <div className="title">
        <h2>
          <span>Contact</span> us for more advice.
        </h2>
      </div>
      <article>
        <div className="left">
          <div className="img-con">
            <img src={contactImg} alt="contact" />
          </div>
          <main>
            <h3>
              Our commercial experts are ready to advise on a partnership.
            </h3>
            <p>Contact our experts</p>
            <InnerLinkButton className="btn">
              <Link to="contact">
                <AiOutlineArrowRight />
                contact us
              </Link>
            </InnerLinkButton>
          </main>
        </div>
        <div className="right">
          <h3>
            Learn more on how we are connecting brands and consumers on our
            blog.
          </h3>
          <BrandContactButton className="btn">
            <a href="https://www.global-savings-group.com/news/category/advertising-trends/">
              <AiOutlineArrowRight />
              learn more
            </a>
          </BrandContactButton>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 100px;
  .title {
    h2 {
      font-size: 45px;
      font-weight: 400;
      span {
        font-weight: 700;
      }
    }
  }
  article {
    position: relative;
    width: 100%;
    display: flex;
    gap: 30px;
    margin: 30px 0 100px;
    .left {
      width: 50%;
      height: 250px;
      background: var(--white);
      border-radius: 10px;
      display: flex;
      .img-con {
        position: relative;
        width: 250px;
        height: 250px;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-bottom-left-radius: 10px;
          border-top-left-radius: 10px;
        }
      }
      main {
        width: 70%;
        display: flex;
        flex-direction: column;
        padding: 40px 30px;
        h3 {
          font-size: 23px;
          font-weight: 500;
        }
        p {
          margin-top: 10px;
          font-size: 15px;
        }
        .btn {
          margin-top: 50px;
        }
      }
    }
    .right {
      width: 50%;
      height: 250px;
      background: var(--pure-black);
      border-radius: 10px;
      padding: 40px 30px;
      display: flex;
      flex-direction: column;
      h3 {
        color: var(--white);
        font-size: 23px;
        font-weight: 500;
      }
      .btn {
        margin-top: 50px;
      }
    }
  }
`;

export default BrandsContact;
