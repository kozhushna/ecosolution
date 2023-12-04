import { Cases } from 'components/Cases/Cases';
import { ContactUs } from 'components/ContactUs/ContactUs';
import { Electricity } from 'components/Electricity/Electricity';
import { Faq } from 'components/Faq/Faq';
import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { Values } from 'components/Values/Values';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Values />
        <Electricity />
        <Cases />
        <Faq />
        <ContactUs />
      </main>
    </>
  );
}

export default App;
