import { Component, Prop } from "@stencil/core";



@Component({
    tag: 'my-volkswagen',
    styleUrl: 'my-volkswagen.scss'
})


export class MyVolkswagen {

    @Prop() marke: string;
    @Prop() preis: number;
    @Prop() istNeu: boolean = false;


    volkswagen = [
        { marke: "Volkswagen", preis: 200000, istNeu: false }
    ]


    render() {
        console.log("Im render");

        return (

            <div>
                <table class="merctable">
                    <caption>
                        <h1>Details zu Volkswagen</h1>
                    </caption>

                    {this.volkswagen.map((vwliste) =>

                        <tbody>
                            <th>{vwliste.marke}</th>
                            <th>{vwliste.preis}</th>

                            <tr>
                                <th>Neu</th>
                                <th>{vwliste.istNeu}</th>
                            </tr>
                        </tbody>
                    )}
                </table>

                <div>
                    <my-buttons></my-buttons>
                </div>
            </div>
        )
    }
}
