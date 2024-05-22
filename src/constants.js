import { SiTicktick } from "react-icons/si";
import { MdErrorOutline, MdInfoOutline, MdWarning } from "react-icons/md";

const VARIANTS = {
  success: "success",
  info: "info",
  warning: "warning",
  error: "error",
};

const POSITIONS = {
  topLeft: "top-left",
  topRight: "top-right",
  bottomRight: "bottom-right",
  bottomLeft: "bottom-left",
};

const ANIMATION = {
  pop: "pop",
  slide: "slide",
};

const colorIconMapper = {
  [VARIANTS.success]: {
    bg: "green",
    icon: SiTicktick,
  },
  [VARIANTS.warning]: {
    bg: "rgb(215, 215, 0)",
    icon: MdWarning,
  },
  [VARIANTS.error]: {
    bg: "red",
    icon: MdErrorOutline,
  },
  [VARIANTS.info]: {
    bg: "blue",
    icon: MdInfoOutline,
  },
};

export { VARIANTS, POSITIONS, ANIMATION, colorIconMapper };
