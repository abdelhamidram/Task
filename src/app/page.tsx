import Image from "next/image";
import AccordionM from "./components/AccordionM";
export default function Home() {
  return (
    <main className="m-3 flex flex-row justify-between">
      <AccordionM size="sm" display="active" bord="bottom" title="Slot component" paragraphe="Optional placeholder component. Replace it with any component using the “Component Instance” swapper, or delete if not needed."/>
      <AccordionM size="md" display="disabled" bord="top" title="Slot component" paragraphe="Optional placeholder component. Replace it with any component using the “Component Instance” swapper, or delete if not needed."/>
      <AccordionM size="lg" display="hover" title="Slot component" paragraphe="Optional placeholder component. Replace it with any component using the “Component Instance” swapper, or delete if not needed."/>
    </main>
  );
}
