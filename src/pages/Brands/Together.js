import styled from 'styled-components';
import togetherImg from '../../images/brandsTogether.jpg';
import togetherImg2 from '../../images/brandsTogether2.jpg';
import togetherImg3 from '../../images/brandsTogether3.jpg';

const Together = () => {
  return (
    <Wrapper>
      <div className="line"></div>
      <article>
        <header>
          <h2>
            Together we can do <span>good things.</span>
          </h2>
          <p>
            GSG believes that by putting the consumer at the heart of what we
            do, we are able to evolve e-commerce in a positive way for all. This
            isn’t something we can change overnight but instead something we
            must work on day by day. Here are a few of our recent achievements
            as we aim towards an even better tomorrow.
          </p>
        </header>
        <div className="card">
          <div className="img-con">
            <img src={togetherImg} alt="together" />
          </div>
          <p>
            With the launch of Closed Group Certification, GSG provides a smart
            way to personalise our discounts. We can now help brands tailor
            offers to strategic and relevant customer segments such as
            healthcare, students, teachers, any age group and more.
          </p>
        </div>
        <div className="card">
          <div className="img-con">
            <img src={togetherImg2} alt="together" />
          </div>
          <p>
            GSG and ASICS won Best Brand Engagement Campaign at ‘The Performance
            Marketing Awards 2021’. The campaign worked with mental health
            charity ‘Mind’ to promote psychological well being through sport.
          </p>
        </div>
        <div className="card">
          <div className="img-con">
            <img src={togetherImg3} alt="together" />
          </div>
          <p>
            GSG’s Kortingscode.nl has partnered with ‘Wilderness International’
            to protect the climate, and unique wilderness areas! With every
            transaction made via the site we made a small donation which will
            protect an area of precious forest for the years to come.
          </p>
        </div>
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
    margin-top: 100px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    header {
      width: 300px;
      h2 {
        font-size: 45px;
        font-weight: 400;
        line-height: 45px;
        span {
          font-weight: 700;
        }
      }
      p {
        margin-top: 30px;
        color: var(--p-hero);
      }
    }
    .card {
      width: 300px;
      background: var(--white);
      border-radius: 10px;
      .img-con {
        position: relative;
        width: 100%;
        img {
          width: 100%;
          object-fit: cover;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
      }
      p {
        padding: 30px 20px;
      }
    }
  }
`;

export default Together;
