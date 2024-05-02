import { Checkbox } from "@/components/ui/checkbox";
import { twMerge } from 'tailwind-merge';

type Checkboxprops = {
  className: string;
}

export default function CheckboxDemo({className}:Checkboxprops) {
  return (
    <div className={twMerge("flex items-center space-x-2", className)}>
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}

 
