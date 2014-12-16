build: node_modules
	node build.js

node_modules: package.json
	npm install

# Simple deploy push
deploy: build
	cd build && \
	git init . && \
	git add . && \
	git commit -m "Update build."; \
	git push "git@github.com:qup/bare13.git" master:gh-pages --force && \
	rm -rf .git

.PHONY: build
