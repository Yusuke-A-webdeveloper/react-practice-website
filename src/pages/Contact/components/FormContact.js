import styled from 'styled-components';
import contactImg from '../../../images/contact.webp';

const FormContact = ({ lead }) => {
  return (
    <Wrapper>
      <div className="img-con">
        <img src={contactImg} alt="contact" />
      </div>
      <article>
        <header>
          <h2>
            <span>Contact</span> us
          </h2>
          <p>{lead}</p>
        </header>
        <form>
          <div className="input-con">
            <label htmlFor="" className="label">
              company name*
            </label>
            <input type="text" />
          </div>
          <div className="input-con">
            <label htmlFor="">name*</label>
            <input type="text" />
          </div>
          <div className="input-con">
            <label htmlFor="">email address*</label>
            <input type="email" />
          </div>
          <div className="input-con">
            <label htmlFor="">phone number*</label>
            <input type="text" />
          </div>
          <div className="input-con">
            <label htmlFor="">your message</label>
            <textarea name=""></textarea>
          </div>
          <div className="submit" onClick={(e) => e.preventDefault()}>
            <button type="submit">send</button>
          </div>
        </form>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  margin-top: 100px;
  margin-bottom: 50px;
  .img-con {
    position: relative;
    width: 100%;
    height: 600px;
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
  article {
    width: 100%;
    padding: 0px 20px 0 150px;
    header {
      h2 {
        font-size: 45px;
        font-weight: 400;
        span {
          font-weight: 700;
        }
      }
      p {
        color: var(--p-hero);
        margin: 30px 0;
      }
    }
    form {
      max-width: 450px;
      margin-top: 100px;
      .input-con {
        position: relative;
        width: 100%;
        height: 40px;
        margin-bottom: 40px;
        &:focus-within label {
          font-size: 12px;
        }
        label {
          position: relative;
          bottom: 10px;
          color: var(--p-hero);
          text-transform: capitalize;
          font-size: 25px;
          font-weight: 300;
          transition: 0.3s ease-out;
        }
        input,
        textarea {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 100%;
          background: transparent;
          font-size: 18px;
          padding: 10px 0;
          border: none;
          border-bottom: 1px solid var(--light-grey);
          transition: 0.3s ease-out;
          &:focus {
            border: none;
            outline: none;
            border-bottom: 1px solid var(--black);
          }
        }
        textarea {
          resize: none;
        }
      }
      .submit {
        text-align: right;
        button {
          color: var(--white);
          background: var(--default-btn);
          padding: 15px 25px;
          border-radius: 30px;
          outline: none;
          border: none;
          text-transform: capitalize;
          font-size: 18px;
          font-weight: 400;
          cursor: pointer;
        }
      }
    }
  }
`;

export default FormContact;
