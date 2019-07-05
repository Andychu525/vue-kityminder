import $____runtime_container from "./runtime/container";
import $____runtime_fsm from "./runtime/fsm";
import $____runtime_minder from "./runtime/minder";
import $____runtime_receiver from "./runtime/receiver";
import $____runtime_hotbox from "./runtime/hotbox";
import $____runtime_input from "./runtime/input";
import $____runtime_clipboard_mimetype from "./runtime/clipboard-mimetype";
import $____runtime_clipboard from "./runtime/clipboard";
import $____runtime_drag from "./runtime/drag";
import $____runtime_node from "./runtime/node";
import $____runtime_history from "./runtime/history";
import $____runtime_jumping from "./runtime/jumping";
import $____runtime_priority from "./runtime/priority";
import $____runtime_progress from "./runtime/progress";

/**
 * 运行时
 */
var runtimes = [];

function assemble(runtime) {
  runtimes.push(runtime);
}

function KMEditor(selector) {
  this.selector = selector;
  for (var i = 0; i < runtimes.length; i++) {
    if (typeof runtimes[i] == "function") {
      runtimes[i].call(this, this);
    }
  }
}

KMEditor.assemble = assemble;

assemble($____runtime_container);
assemble($____runtime_fsm);
assemble($____runtime_minder);
assemble($____runtime_receiver);
assemble($____runtime_hotbox);
assemble($____runtime_input);
assemble($____runtime_clipboard_mimetype);
assemble($____runtime_clipboard);
assemble($____runtime_drag);
assemble($____runtime_node);
assemble($____runtime_history);
assemble($____runtime_jumping);
assemble($____runtime_priority);
assemble($____runtime_progress);

export default KMEditor;
