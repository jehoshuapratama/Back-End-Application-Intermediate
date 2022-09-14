const notesPlugin = require('./notesPlugin');
const otherPlugin = require('./otherPlugin');
const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server();
    //single plugins
    await server.register({
        plugin: notesPlugin,
        options: { notes: [] },
    });
    //multiple plugins
    await server.register([
        {
            plugin: notesPlugin,
            options: { notes: [] },
        },
        {
            plugin: otherPlugin,
            options: {}
        }
    ]);
    await server.start();
}