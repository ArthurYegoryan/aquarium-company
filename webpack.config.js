const path = require("path");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src/index.js")
    },
    output: {
        filename: "[hash].js",
        path: path.resolve(__dirname, "dist")
    }
}