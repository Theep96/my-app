import { Component } from "@stencil/core";




@Component({
    tag: 'my-buttons',
    styleUrl: 'my-buttons.scss'
})


export class MyButtons {

    render() {

        return (

            <div>
                <button class="mybutton" onClick={() => location.href = '/my-mercedes/'}> Details Mercedes </button>
                <button class="mybutton" onClick={() => location.href = '/my-volkswagen/'}> Details Volkswagen </button>
                <button class="mybutton" onClick={() => location.href = '/my-audi/'}>Details Audi</button>
            </div>
        )

    }

}