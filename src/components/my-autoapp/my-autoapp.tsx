import { Component } from "@stencil/core";
import '@stencil/router';

console.log("autoapp ausgeführt");


@Component({
    tag: 'my-autoapp',
    styleUrl: 'my-autoapp.scss'
})

export class MyAutoapp {
    render() { 

        console.log("im render");

        return ( 
            <auto-app>

                <h1> AutoApp </h1>

                <stencil-route-link url='/'> Home </stencil-route-link>
                <stencil-route-link url='/my-mercedes'> Mercedes Details </stencil-route-link>
                <stencil-route-link url='/my-volkswagen'> Volkswagen Details </stencil-route-link>
                <stencil-route-link url='/my-audi'> Audi Details </stencil-route-link>

                <stencil-router id="main-nav">
                    <stencil-route url="/" component="my-autos" exact = {true}></stencil-route>
                    <stencil-route url="/my-mercedes" component="my-mercedes"></stencil-route>
                    <stencil-route url="/my-volkswagen" component="my-volkswagen"></stencil-route>
                    <stencil-route url="/my-audi" component="my-audi"></stencil-route>
                </stencil-router>

                

            </auto-app>
        )
    }
    
    showPrompt() {
        console.log("other");
    }
}

//<my-autos showPrompt={() => this.showPrompt()} autos={["marke", "test", "preis", 15]}></my-autos>