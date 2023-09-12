import React from "react";
import ReactDOM from "react-dom";
import CustomButton from "./CustomButton";

export default (editor, opt={}) => {
    const c =opt;

    editor.BlockManager.add('custom-button', {
        label: 'Custom Button',
        content: '<div class="custom-button" data-gjs-type="custom-button">ClickMe</div>'
    });

    editor.Components.addType('custom-button', {
        model: {
            defaults: {
                droppable: false,
                traits: []
            }
        },
        view: {
            init() {
                const {el} = this;
                const {content} = this.model.toJSON();
                this.$el.empty()
                ReactDOM.render(
                    <CustomButton text="Adec Button" onClick={()=>alert('adec infocomm')} />,
                    el
                )
            }
        }
    })
}