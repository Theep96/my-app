exports.config = {
    bundles: [
        { components: ['my-autoapp'] },
        { components: ['my-autos','my-mercedes'] }
    ],

    collections: [
        { name: '@stencil/router' }
    ]
};

exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
}