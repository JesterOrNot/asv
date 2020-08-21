// import Confstructor from "@vottuscode/confstructor";

type CozyCursorOptions = {
  pointerColor: string; // can be any CSS-accepted color value, eg. #fff, white, rgb(255, 255, 255)
  ring: {
    size: number;
    clickSize: number;
  };
};

type CozyCursorState = {
  mouseX: number;
  mouseY: number;
  ringX: number;
  ringY: number;
  isHover: boolean;
  mouseDown: boolean;
};

const CozyCursorOptionsTemplate = {
  pointerColor: {
    required: true,
    default: "#750c7e",
  },
  ring: {
    required: true,
    default: {},
    children: {
      size: {
        required: true,
        default: 15,
      },
      clickSize: {
        required: true,
        default: 15,
      },
    },
  },
};

export class CozyCursor {
  options: CozyCursorOptions;

  pointer: HTMLDivElement;
  ring: HTMLDivElement;

  state: CozyCursorState;

  constructor(options: CozyCursorOptions) {
    // this.options = new Confstructor(CozyCursorOptionsTemplate, options)
    //   .validate()
    //   .return() as CozyCursorOptions;

    this.options = options;

    this.pointer = document.createElement("div");
    this.pointer.id = "pointer";

    this.ring = document.createElement("div");
    this.ring.id = "ring";

    this.state = {
      mouseX: -100,
      mouseY: -100,
      ringX: -100,
      ringY: -100,
      isHover: false,
      mouseDown: false,
    };

    this.doStuff();
  }

  doStuff() {
    this.addEvents();
    requestAnimationFrame(this.render);
  }

  trace(a: number, b: number, n: number) {
    return (1 - n) * a + n * b;
  }

  addEvents() {
    window.addEventListener("mousemove", (mouse) => {
      this.state.mouseX = mouse.clientX;
      this.state.mouseY = mouse.clientY;
    });

    window.addEventListener("mousedown", () => (this.state.mouseDown = true));
    window.addEventListener("mouseup", () => (this.state.mouseDown = false));
  }

  render() {
    this.state.ringX = this.trace(this.state.ringX, this.state.mouseX, 0.2);
    this.state.ringY = this.trace(this.state.ringY, this.state.mouseY, 0.2);

    if (document.querySelector(".p-action-click:hover")) {
      this.pointer.style.borderColor = this.options.pointerColor;
      this.state.isHover = true;
    } else {
      this.pointer.style.borderColor = "white";
      this.state.isHover = false;
    }

    this.ring.style.borderColor = this.options.pointerColor;
    this.ring.style.padding = this.state.mouseDown
      ? `${this.options.ring.clickSize}px`
      : `${this.options.ring.size}px`;

    this.pointer.style.transform = `translate(${this.state.mouseX}px, ${this.state.mouseY}px)`;
    this.ring.style.transform = `translate(${this.state.ringX -
      (this.state.mouseDown
        ? this.options.ring.clickSize
        : this.options.ring.size)}px, ${this.state.ringY -
      (this.state.mouseDown
        ? this.options.ring.clickSize
        : this.options.ring.size)}px)`;

    requestAnimationFrame(this.render);
  }
}

export default CozyCursor;
