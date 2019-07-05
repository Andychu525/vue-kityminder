interface Window {
  HotBox: any;
  kityminder: any;
}

declare module "@/core/editor" {
  export default class KMEditor {
    constructor(selector: any);
  }
}
