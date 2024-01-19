unlayer.registerTool({
    name: "my_tool",
    label: "My Tool",
    icon: "fa-smile",
    supportedDisplayModes: ["web", "email"],
    options: {},
    values: {},
    renderer: {
        Viewer: unlayer.createViewer({
            render: e => "<div>I am a custom tool.</div>"
        }),
        exporters: {
            web: function(e) {
                return "<div>I am a custom tool.</div>"
            },
            email: function(e) {
                return "<div>I am a custom tool.</div>"
            }
        },
        head: {
            css: function(e) {},
            js: function(e) {}
        }
    }
});
