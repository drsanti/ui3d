rm -rf node_modules/.cache/gh-pages
npm run gh-pages


git branch -d ui3d-pages 
git push origin --delete ui3d-pages  
npm run gh-pages

git checkout main
git checkout -b ui3d-pages


git checkout gh-pages