import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import * as functions from 'firebase-functions';
import * as express from 'express';
import { join } from 'path';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import * as fs from 'fs';

enableProdMode();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'browser');

const document = fs.readFileSync(__dirname + '/browser/index.html', 'utf8');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./server/main');
// const AppServerModuleNgFactory = require(__dirname + '/dist-server/main.bundle');

const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const app = express();

app.engine('html', (_, options, callback) => {
	const url = options.req.url;
	renderModuleFactory(AppServerModuleNgFactory, {
		document,
		url,
		extraProviders: [
			provideModuleMap(LAZY_MODULE_MAP)
		]
	}).then(html => {
		callback(null, html);
	});
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER));

app.get('*.*', express.static(join(DIST_FOLDER)));

app.get('*', (req, res) => {
	res.render(join(DIST_FOLDER, 'index.html'), { req });
});

app.get('**', function (req, res) {
	renderModuleFactory(AppServerModuleNgFactory, {
		url: req.path,
		document: document
	}).then(html => {
		res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
		res.status(200).send(html);
	});
});

export const ssrapp = functions.https.onRequest(app);

app.listen(PORT, () => {
	console.log(`Node server listening on http://localhost:${PORT}`);
});
