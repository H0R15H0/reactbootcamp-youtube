run:
	docker run --rm -it -v $(CURDIR):/myapp -p 3000:3000 node:16.6.1-alpine sh -c 'cd myapp && npm run start'