import styled from 'styled-components';

const CardContact = ({ list }) => {
  return (
    <Wrapper>
      {list.map((person) => {
        const { id, img, name, jobTitle } = person;
        console.log(jobTitle);
        return (
          <div className="card" key={id}>
            <div className="img-con">{img && <img src={img} alt={name} />}</div>
            <aside>
              <h3>{name}</h3>
              {jobTitle.map((job, index) => {
                return <p key={index}>{job}</p>;
              })}
            </aside>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-top: 30px;
  .card {
    position: relative;
    width: 300px;
    height: 175px;
    background: var(--white);
    border-radius: 10px;
    display: flex;
    .img-con {
      position: relative;
      height: 100%;
      width: 120px;
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
    aside {
      position: relative;
      width: 180px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 15px;
      h3 {
        font-size: 18px;
        font-weight: 400;
      }
      p {
        margin-top: 5px;
        font-size: 12px;
      }
    }
  }
`;

export default CardContact;
