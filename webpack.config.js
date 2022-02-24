const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
	mode = "production";
	target = "browserslist";
}
module.exports = {
	mode: mode,
	target: target,
	
	output: {
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "images/[hash][ext][query]",
	},
	
	module: {
		rules: [
			{
				test: /\.html$/,
				use: 'html-loader' // important to use, images in HTML dont work without this loader
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: "asset/resource", // use /inline if dont work
				parser: {
					dataUrlCondition: {
						limit: 30 * 1024,
					},
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					         filename: 'fonts/[hash][ext][query]'
				    },
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: { publicPath: ""},
					},
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],	
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
	
	devtool: "source-map",
	devServer: {
		historyApiFallback: true,
		static: {
			directory: path.resolve(__dirname, './dist'),
		},
		open: true,
		compress: true,
		hot: true,
		port: 9000,
	},
};