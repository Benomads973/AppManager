const { readdirSync, readFileSync } = require('fs');
const { join } = require('path');
const yaml = require('js-yaml');

const YAML_CONFIG_FILENAME = '/src/container-as-a-service/';

//console.log(join(process.cwd(), YAML_CONFIG_FILENAME))
const confPath = readdirSync(join(process.cwd(), YAML_CONFIG_FILENAME), {
  withFileTypes: true,
});

let deploy = [];

confPath.forEach((file) => {
    let manifest;
    if (file.name.endsWith('.json')) {
        manifest = readFileSync(
            join(process.cwd(), YAML_CONFIG_FILENAME, file.name), 'utf-8'
        )
        manifest=JSON.parse(manifest)
    } else if (file.name.endsWith('.yaml') || file.name.endsWith('.yml')) {
        manifest = readFileSync(
            join(process.cwd(), YAML_CONFIG_FILENAME, file.name), 'utf-8'
        )
        manifest=yaml.load(manifest)
    }
    if (manifest) deploy.push(manifest);
});

module.exports = { deploy }