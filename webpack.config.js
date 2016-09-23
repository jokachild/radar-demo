var path = require("path");
var webpack = require("webpack");

module.exports = {

    entry: path.resolve(__dirname, "src/index.js"),

    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/static/",
        filename: "radar-demo.js"
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "babel", exclude: /node_modules/},
            { test: /\.css$/, loader: "style!css"},
            { test: /\.scss$/, loader: "style!css!sass"},
            { test: /\.png|\.gif$/, loader: "url?mimetype=image/png&limit=8192" },
            { test: /\.woff|\.woff2$/, loader: "url?mimetype=application/font-woff&limit=8192" },
            { test: /\.ttf$/, loader: "url?mimetype=application/octet-stream&limit=8192" },
            { test: /\.eot$/, loader: "file" },
            { test: /\.svg$/, loader: "url?mimetype=image/svg+xml&limit=8192" }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify("development")
        })
    ],

    devtool: "sourcemap"
};
