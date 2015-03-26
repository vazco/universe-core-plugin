'use strict';

Package.describe({
    name: 'vazco:universe-core-plugin',
    summary: 'Universe CMS Plugin package -- DEPRECATED',
    version: '0.0.3'
});

Package.on_use(function (api) {
    api.use([
        'underscore@1.0.1',
        'vazco:universe-core@1.5.2',
        'aldeed:collection2@2.2.0',
        'iron:router@1.0.0'
    ]);

    api.use(['templating@1.0.9', 'ui@1.0.4'], 'client');

    api.imply([
        'vazco:universe-core@1.5.2',
    ]);

    api.add_files([
        'Plugin.js',
        'collections.js',
        'routes.js',
        'methods.js'
    ]);

    api.add_files([
        'templates.html',
        'templates.js',
        'eventsAndHelpers.js'
    ], 'client');

    api.add_files([
        'publications.js'
    ], 'server');

    api.export([
        'UniPlugin'
    ]);
});
