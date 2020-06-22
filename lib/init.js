const fs = require('fs');
const path = require('path');

const GIT_DIR = '.git';
const OBJECT_DIR = 'objects';
const REFS_DIR = 'refs';
const TAGS_DIR = 'tags';
const HEADS_DIR = 'heads';
const HOOKS_DIR = 'hooks';
const INFO_DIR = 'info';

const BASE_DIRECTORIES = [
    [REFS_DIR],
    [REFS_DIR, TAGS_DIR],
    [REFS_DIR, HEADS_DIR],
    [HOOKS_DIR],
    [INFO_DIR],
    [OBJECT_DIR],
];

module.exports = () => {
    console.log('Create new tig repository');

    const rootDir = path.join('.', GIT_DIR);
    if (!fs.existsSync(rootDir)) {
        fs.mkdirSync(rootDir);
    }

    BASE_DIRECTORIES.forEach((pathArray) => {
        const dir = path.join(GIT_DIR, ...pathArray);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    });
};
