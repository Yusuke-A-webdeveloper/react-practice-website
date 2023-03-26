import styled from 'styled-components';
import NavContact from './components/NavContact';
import TopNavContact from './components/TopNavContact';
import TitleContact from './components/TitleContact';
import CardContact from './components/CardContact';
import { pressContactList } from '../../data';
import FormContact from './components/FormContact';

const ForPress = () => {
  return (
    <Wrapper>
      <TopNavContact
        title="about us"
        title2="contacts page for about us"
        page="about"
      />
      <TitleContact
        bolded="Our leadership"
        header="are interested in discovering new ways"
      />
      <NavContact />
      <CardContact list={pressContactList} />
      <FormContact
        lead={`Our leadership believe in knowledge and innovation, and its ability to power e-commerce from discovery to purchase. They’re always looking for smart ideas and concepts that will not only bring GSG forward, but the whole industry too.`}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background: var(--bg);
  z-index: 1;
`;

export default ForPress;
