import styled from 'styled-components';

const expertImg =
  'https://www.global-savings-group.com/wp-content/uploads/2022/02/publisher-relations.jpg';

const Expert = () => {
  return (
    <Wrapper>
      <div className="line"></div>
      <article>
        <div className="img-con">
          <img src={expertImg} alt="expert" />
        </div>
        <main>
          <h2>
            Expert advice that turns data and knowledge{' '}
            <span>into lasting consumer connections.</span>
          </h2>
          <p>
            Our team consists of top experts with strategic knowledge and
            understanding of real-time GSG data in the global e-commerce
            marketplace.
          </p>
          <p>
            We leverage our data and knowledge to analyse consumer behaviour and
            anticipate trends, providing insights and opportunities to connect
            brands and retailers to hundreds of millions of people worldwide.
          </p>
          <p>
            Contact our team of experts for more details on how we can work
            together.
          </p>
        </main>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 100px;
  .line {
    width: 100%;
    height: 2px;
    background: var(--p-hero);
  }
  article {
    position: relative;
    width: 100%;
    display: flex;
    margin-top: 70px;
    .img-con {
      position: relative;
      width: 50%;
      height: 550px;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
    }
    main {
      width: 50%;
      padding: 0 30px 0 100px;
      h2 {
        font-size: 50px;
        font-weight: 400;
        line-height: 50px;
        margin-bottom: 30px;
        span {
          font-weight: 700;
        }
      }
      p {
        color: var(--p-hero);
        margin-bottom: 20px;
        max-width: 400px;
      }
    }
  }
`;

export default Expert;
