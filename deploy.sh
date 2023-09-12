#!/usr/bin/env sh

# abort on errors
set -e

# build
cd ./frontend
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add .
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git remote add origin https://github.com/kninja99/kninja99.github.io.git
git push -u -f master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -