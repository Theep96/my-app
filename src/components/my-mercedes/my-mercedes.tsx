import { Component, Prop } from "@stencil/core";



@Component({
    tag: 'my-mercedes',
    styleUrl: 'my-mercedes.scss'
})


export class MyMercedes {

    @Prop() marke: string;
    @Prop() preis: number;
    @Prop() istNeu: boolean;


    mercedes = [
        { marke: "Mercedes", preis: 100500, istNeu: true }
    ]


    render() {
        console.log("Im render");

        return (

            <div>
                <table class="merctable">
                    <caption>
                        <h1>Details zu Mercedes</h1>
                    </caption>

                    {this.mercedes.map((mercliste) =>

                        <tbody>
                            <th>{mercliste.marke}</th>
                            <th>{mercliste.preis}</th>

                            <tr>
                                <th>Neu</th>
                                <th>{mercliste.istNeu}</th>
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
