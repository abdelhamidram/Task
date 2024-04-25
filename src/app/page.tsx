import Image from "next/image";
import AccordionM from "./components/AccordionM";
export default function Home() {
  return (
      <>
        <AccordionM size="lg" display="disabled" bord="bottom" title="Slot component" paragraphe="Optional placeholder component. Replace it with any component using the “Component Instance” swapper, or delete if not needed."/>
        {/* <AccordionM size="md" display="active" bord="bottom" title="Slot component" paragraphe="Optional placeholder component. Replace it with any component using the “Component Instance” swapper, or delete if not needed."/> */}
        {/* <AccordionM size="lg" display="hover" bord="bottom" title="Slot component" paragraphe="Optional placeholder component. Replace it with any component using the “Component Instance” swapper, or delete if not needed."/> */}
      </>
  );
}





