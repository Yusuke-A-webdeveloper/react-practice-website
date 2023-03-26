import styled from 'styled-components';
import { exampleWorkList } from '../../data';
import Piechart from './Piechart';

const ExampleWork = () => {
  return (
    <Wrapper>
      <article>
        <div className="title">
          <h2>
            Examples <span>of work across CDJ.</span>
          </h2>
          <p>
            GSG has been pioneering partnerships with the media that encourage
            the full integration of our commerce content services.
          </p>
        </div>
        <div className="sliders">
          {exampleWorkList.map((list) => {
            const { id, img, title, info } = list;
            return (
              <div className="single-list" key={id}>
                <div className="img-con">
                  <img src={img} alt={title} />
                </div>
                <main>
                  <h3>{title}</h3>
                  <p>
                    {info}
                    <br />
                    and more...
                  </p>
                </main>
              </div>
            );
          })}
        </div>
      </article>
      <Piechart />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  margin-bottom: 300px;
  article {
    width: 50%;
    .title {
      h2 {
        font-size: 45px;
        font-weight: 400;
        max-width: 450px;
        line-height: 50px;
        span {
          font-weight: 700;
        }
      }
      p {
        color: var(--p-hero);
        max-width: 450px;
        margin-top: 50px;
      }
    }
    .sliders {
      position: relative;
      margin-top: 50px;
      .single-list {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 250px;
        display: flex;
        align-items: flex-end;
        .img-con {
          position: relative;
          width: 300px;
          height: 250px;
          img {
            position: absolute;
            top: 0;
            left: 0;
            width: auto;
            height: 100%;
            /* object-fit: cover; */
            border-radius: 10px;
          }
        }
        main {
          background: var(--white);
          border-radius: 10px;
          padding: 25px 50px 25px 120px;
          h3 {
            font-size: 28px;
            font-weight: 400;
            text-transform: capitalize;
          }
          p {
            margin-top: 10px;
          }
        }
      }
    }
  }
`;

export default ExampleWork;
