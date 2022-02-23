const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename:"images/[name][ext][query]",
        // publicPath: "/",
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"})],
    module: {
        rules: [
            {test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"]},
            {test: /\.(png|svg|jpg|jpeg|gif|webp)$/i, type: "asset/resource"},
        ],
    },
    mode: 'development',
    devServer: {
        open: true
      }
};