import { useAccordionContext } from "./Accordion.jsx";

export default function AccordionContent({ id, className, children }) {
  const { openItemId } = useAccordionContext();

  const isOpen = openItemId === id;

  return (
    <div className={`${className ?? ""} ${isOpen ? "open" : "close"}`}>
      {children}
    </div>
  );
}
