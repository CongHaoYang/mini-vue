// vue3
import { createApp } from "../../packages/runtime-dom/lib/guide-mini-vue.esm.js";
import { App } from "./App.js";

const rootContainer = document.querySelector("#app"); 
createApp(App).mount(rootContainer);