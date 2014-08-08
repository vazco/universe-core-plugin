Package.describe({
    summary: 'Universe CMS Plugin package'
});

Package.on_use(function (api) {
    api.use([
        'universe-core',
        'underscore',
        'simple-schema'
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