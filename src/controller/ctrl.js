import someJSON from "../models/info";
import view from "../view/engine";

let controller;
export default controller = {
    model: someJSON,
    view,
    work: function() {
        return this.model.init().then(() => {
            let data = this.model.data;
            this.markUp = data;

        });
    },
    render: function() {
        this.work()
            .then(() => {
                this.view.render(this.markUp);
            })
    },
    markUp: []
};
controller.render();