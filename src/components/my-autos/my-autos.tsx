import { Component, Prop, Method } from '@stencil/core';


@Component({
    tag: 'my-autos',
    styleUrl: 'my-autos.scss',


})

export class MyAuto {

    @Prop() marke: string;
    @Prop() preis: number;

    @Method()
    showPrompt() {
        console.log("click");
    }

    
    @Prop() 
    autos = [
        { marke: "Mercedes", preis: 100500 },
        { marke: "Volkswagen", preis: 200000 },
        { marke: "Audi", preis: 500100 }
    ]


    render() {
        console.log("autos", this.autos);
        console.log("preis", this.preis);

       
        return (

            <div>

                <table class="mytable">

                    <thead>
                        <tr>
                            <th>Marke</th>
                            <th>Preis</th>
                        </tr>
                    </thead>
                    {this.autos.map((autoliste) =>

                        <tbody>
                            <th>{autoliste.marke}</th>
                            <th>{autoliste.preis}</th>
                        </tbody>
                    )}
                </table>

                <div>
                    <my-buttons></my-buttons>  
                </div>
            </div>
        );
    }
}


//{document.location.href = "C:/Carat/app/my-app/src/components/my-mercedes/my-mercedes.html"}

/*function openWin() {
    myWin= open("bla.htm");
  }*/