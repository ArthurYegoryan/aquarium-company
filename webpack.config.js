const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    performance: {
        hints: false // make warnings comment
    },
    mode: "production", // "development"
    entry: {
        main: path.resolve(__dirname, "src/index.js")
    },
    output: {
        filename: "[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "index.html"),
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[hash].css"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"], // "style-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            // {
            //     test: /\.(png|jpg|gif|svg|webp)$/i,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 8192,
            //             },
            //         },
            //     ],
            // },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     type: "asset",
            // },
        ],
    },
    // optimization: {
    //     minimizer: [
    //         "...",
    //         new ImageMinimizerPlugin({
    //             minimizer: {
    //                 implementation: ImageMinimizerPlugin.imageminMinify,
    //                 options: {
    //                     plugins: [
    //                         ["gifsicle", { interlaced: true }],
    //                         ["jpegtran", { progressive: true }],
    //                         ["optipng", { optimizationLevel: 5 }],
    //                         [
    //                             "svgo",
    //                             {
    //                                 plugins: [
    //                                     {
    //                                         name: "preset-default",
    //                                         params: {
    //                                             overrides: {
    //                                                 removeViewBox: false,
    //                                                 addAttributesToSVGElement: {
    //                                                     params: {
    //                                                         attributes: [
    //                                                             { xmlns: "http://www.w3.org/2000/svg" },
    //                                                         ],
    //                                                     },
    //                                                 },
    //                                             },
    //                                         },
    //                                     },
    //                                 ],
    //                             },
    //                         ],
    //                     ],
    //                 },
    //             },
    //         }),
    //     ],
    // },
}