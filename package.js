Package.describe({
    name: 'vazco:universe-core-plugin',
    summary: 'Universe CMS Plugin package'
});

Package.on_use(function (api) {
    api.use([
        'vazco:universe-core',
        'underscore',
        'aldeed:simple-schema'
    ]);

    api.imply([
        'universe-core'
    ]);

    api.add_files([
        'Plugin.js',
        'collections.js',
        'routes.js',
        'methods.js'
    ]);

    api.add_files([
        'templates.js',
        'eventsAndHelpers.js'
    ], 'client');

    api.add_files([
        'publications.js'
    ], 'server');
});