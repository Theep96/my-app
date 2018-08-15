import { Component, Prop } from "@stencil/core";



@Component({
    tag: 'my-audi',
    styleUrl: 'my-audi.scss'
})


export class MyAudi {

    @Prop() marke: string;
    @Prop() preis: number;
    @Prop() istNeu: boolean;


    audi = [
        { marke: "Audi", preis: 500100, istNeu: true }
    ]


    render() {
        console.log("Im render");

        return (

            <div>
                <table class="merctable">
                    <caption>
                        <h1>Details zu Audi</h1>
                    </caption>

                    {this.audi.map((audiliste) =>

                        <tbody>
                            <th>{audiliste.marke}</th>
                            <th>{audiliste.preis}</th>

                            <tr>
                                <th>Neu</th>
                                <th>{audiliste.istNeu}</th>
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
