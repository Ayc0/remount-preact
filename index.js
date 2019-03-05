import { h, Fragment } from "preact";

import { define } from "remount";

import Input from "./Input";
import InputGroup from "./InputGroup";
import PreactAdapter from "./PreactAdapter";

global.React = {
  createElement: h,
  Fragment
};

define({
  "x-input": {
    component: Input
  },
  "x-inputgroup": {
    component: InputGroup
  }
}, {
  adapter: PreactAdapter,
  attributes: ["defaultValue", "id"]
});
