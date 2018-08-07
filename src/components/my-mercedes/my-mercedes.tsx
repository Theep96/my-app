import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'my-mercedes',
    styleUrl: 'my-mercedes.scss'

})

export class MyAuto {

    @Prop() marke: string;
    @Prop() preis: number;


    autos = [
        { marke: "Mercedes", preis: 100500 },
        { marke: "Volkswagen", preis: 200000 },
        { marke: "Audi", preis: 500100 }
    ]


    render() {
        /*console.log("Im render");
        let automarke = this.autos.map((autos) => autos.marke);
        console.log("Automarke Zuweisung passiert", automarke);

        let autopreis = this.autos.map((autos) => autos.preis);
        console.log("Preis Zuweisung passiert", autopreis);*/


        return (

            /*<p>
                
                {this.marke}
                {this.preis}
    
                {automarke[0]}
                {autopreis[0]}
            </p>*/

            <div>
                {this.autos.map((autoliste) =>

                    <table class="mytable">

                        <thead>
                            <tr>
                                <th>Marke</th>
                                <th>Preis</th>
                            </tr>
                        </thead>

                        <tbody>
                            <th>{autoliste.marke}</th>
                            <th>{autoliste.preis}</th>
                        </tbody>
                    </table>
                )}

            </div >




        );
    }
}