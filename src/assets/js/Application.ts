import CozyCursor from "./CozyCursor";

export class Application {
  constructor() {
    this.init();
  }

  init() {
    const cursor = new CozyCursor({
      pointerColor: "#750c7e",
      ring: {
        size: 15,
        clickSize: 10,
      },
    });
  }
}

export default Application;
