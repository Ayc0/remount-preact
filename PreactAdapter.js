import { h, render } from "preact";

const Preact = {
  mount({ component }, mountPoint, props) {
    console.log("mount");
    render(h(component, props), mountPoint);
  },
  update({ component }, mountPoint, props) {
    console.log("update");
    render(h(component, props), mountPoint);
  },
  unmount({ component }, mountPoint) {
    console.log("unmount");
    render(null, mountPoint);
  }
};

export default Preact;
