import "./App.css";
import useToaster from "./hooks/useToaster";
import { ANIMATION, POSITIONS, VARIANTS } from "./constants";

function App() {
  const { toasterComponent, triggerToaster } = useToaster(POSITIONS.bottomRight);
  return (
    <div className="flex">
      {toasterComponent}

      <button
        onClick={() =>
          triggerToaster({
            position: POSITIONS.bottomRight,
            animation: ANIMATION.slide,
            variant: VARIANTS.success,
            message: "Message sent successfully.",
          })
        }
      >
        Trigger success
      </button>
      <button
        onClick={() =>
          triggerToaster({
            animation: ANIMATION.slide,
            variant: VARIANTS.error,
            message: "Something wrong.",
          })
        }
      >
        Trigger error
      </button>
      <button
        onClick={() =>
          triggerToaster({
            animation: ANIMATION.slide,
            variant: VARIANTS.warning,
            message: "This is warning.",
          })
        }
      >
        Trigger warning
      </button>
      <button
        onClick={() =>
          triggerToaster({
            animation: ANIMATION.slide,
            variant: VARIANTS.info,
            message: "This is Info.",
          })
        }
      >
        Trigger Info
      </button>
    </div>
  );
}

export default App;
