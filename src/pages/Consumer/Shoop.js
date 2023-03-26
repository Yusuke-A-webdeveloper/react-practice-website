import styled from 'styled-components';
import { InsidePortalButton } from '../../components/Buttons';
import { AiOutlineArrowRight } from 'react-icons/ai';
import shoopImg from '../../images/shoop.jpg';
import shoopVideo from '../../videos/shoop.mp4';

const Shoop = () => {
  return (
    <Wrapper id="shoop">
      <div className="title">
        <h2>
          <span>Shoop.</span> Germany's No.1 Cashback platform.
        </h2>
      </div>
      <article>
        <main>
          <p>
            The Berlin-based loyalty platform offers customers cash rewards with
            its network of more than 2,000 online merchants and top-tier brands.
            The platform’s members have saved 21+ million EUR in 2021 in
            Cashback with Shoop.
          </p>
          <InsidePortalButton className="btn">
            <a href="https://www.shoop.de/" target="_blank" rel="noreferrer">
              <AiOutlineArrowRight />
              learn more
            </a>
          </InsidePortalButton>
          <div className="video-con">
            <video muted autoPlay loop>
              <source src={shoopVideo} type="video/mp4" />
            </video>
          </div>
        </main>
        <aside>
          <div className="left">
            <div className="single-card img-con">
              <img src={shoopImg} alt="card" />
            </div>
            <div className="single-card">
              <h3>Market leader in Cashback in Germany</h3>
            </div>
          </div>
          <div className="right">
            <div className="single-card tall">
              <h3>
                Offers Cashback to millions of members in{' '}
                <span>France, Germany, and Spain.</span>
              </h3>
            </div>
          </div>
        </aside>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  margin-top: 150px;
  padding-bottom: 100px;
  .title {
    h2 {
      font-size: 60px;
      font-weight: 400;
      max-width: 900px;
      line-height: 60px;
      span {
        font-weight: 700;
      }
    }
  }
  article {
    position: relative;
    width: 100%;
    display: flex;
    margin-top: 100px;
    main {
      position: relative;
      width: 50%;
      p {
        font-size: 20px;
        color: var(--p-hero);
        padding-right: 50px;
      }
      .btn {
        margin: 80px 0;
      }
      .video-con {
        position: relative;
        width: 90%;
        height: 380px;
        border-radius: 10px;
        margin-right: 20px;
        margin-top: 142px;
        video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
      }
    }
    aside {
      position: relative;
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      .left {
        display: flex;
        flex-direction: column;
        gap: 40px;
      }
      .single-card {
        position: relative;
        width: 300px;
        height: 320px;
        background: var(--white);
        border-radius: 10px;
        padding: 40px 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3 {
          font-size: 30px;
          font-weight: 400;
          span {
            font-weight: 700;
          }
        }
      }
      .single-card.img-con {
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
      .single-card.tall {
        height: 682px;
      }
    }
  }
`;

export default Shoop;
