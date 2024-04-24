import Image from "next/image";
import AccordionM from "./components/AccordionM";
export default function Home() {
  return (
    <main className="m-3">
      <AccordionM  size="sm" display="disabled" title="Slot component" paragraphe="Optional placeholder component. Replace it with any component using the “Component Instance” swapper, or delete if not needed."/>
    </main>
  );
}
