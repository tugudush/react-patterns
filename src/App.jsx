import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <AccordionItem className="accordion-item" title="We got 20 years of experience">
            <article>
              <p>You can't go wrong with us.</p>
              <p>We are in the business of p</p>
            </article>
          </AccordionItem>

          <AccordionItem className="accordion-item" title="We're working with the local guides">
            <article>
              <p>Exercitation amet et quis enim aute amet amet eu sint.</p>
              <p>
                Officia anim dolore cupidatat elit elit id id duis laboris nisi.
              </p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
