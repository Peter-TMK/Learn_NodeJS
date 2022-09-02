//node_modules

// After installing so many dependencies, the node_modules file gets bigger in size and not ideal to be moved to github,
// so we hide it so as to be ignored by the source control and won't be pushing the giant files to github.

// Here's how we achieve that:

// - We create a .gitignore file
// - write /node_modules in it and save
// - do these before git init, git add . , git commit

// As long as you have your package.json file, whoever goes to your repo and clone the entire project, will not have the node_modules cloned,
// but will get it by running npm install(run this after cloning the project) 