import { Cases } from 'components/Cases/Cases';
import { Electricity } from 'components/Electricity/Electricity';
import { Faq } from 'components/Faq/Faq';
import { Hero } from 'components/Hero/Hero';
import { Values } from 'components/Values/Values';

function App() {
  return (
    <>
      <main>
        <Hero />
        <Values />
        <Electricity />
        <Cases />
        <Faq />
      </main>
    </>
  );
}

export default App;
