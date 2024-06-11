import { TestComponent } from "./modules/components/TestComponent";
import { TEST } from "./modules/constants";

export default function TestPage() {
  return (
    <div>
      TestPage {TEST} <TestComponent />
    </div>
  );
}
