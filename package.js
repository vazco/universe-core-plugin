'use strict';

Package.describe({
    name: 'vazco:universe-core-plugin',
    summary: 'Universe CMS Plugin package -- DEPRECATED',
    version: '0.0.4'
});

Package.on_use(function (api) {
    api.use([
        'underscore',
        'vazco:universe-core',
        'iron:router'
    ]);

    api.use(['templating', 'ui'], 'client');

    api.imply([
        'vazco:universe-core'
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
