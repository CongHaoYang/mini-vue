import { h, ref } from "../../packages/runtime-dom/lib/guide-mini-vue.esm.js";

const prevChildren = "oldChildren";
const nextChildren = [h("div", {}, "A"), h("div", {}, "B")];

export default {
    name: "TextToText",
    setup() {
        const isChange = ref(false);
        window.isChange = isChange;

        return {
            isChange
        }
    },
    render() {
        const self = this;

        return self.isChange === true ?
            h("div", {}, nextChildren) :
            h("div", {}, prevChildren)
    }
}