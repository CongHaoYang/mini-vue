import { h, ref } from "../../packages/runtime-dom/lib/guide-mini-vue.esm.js";
import Child from "./Child.js";

export const App = {
    name: "App",
    setup() {
        const msg = ref("123");
        const count = ref(1);

        window.msg = msg;

        const changeChildProps = () => {
            msg.value = "456";
        }

        const changeCount = () => {
            count.value++;
        }

        return {
            msg,
            changeChildProps,
            changeCount,
            count
        }
    },
    render() {
        return h(
            "div",
            {
                id: "root"
            },
            [
                h("div", {}, "您好"),
                h("button", {
                    onClick: this.changeChildProps
                }, "change child props"),
                h(Child, {
                    msg: this.msg
                }),
                h(
                    "button",
                    {
                        onClick: this.changeCount
                    },
                    "change self count"
                ),
                h("p", {}, "count" + this.count)
            ],
        )
    }
}