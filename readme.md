# Demeanor:

Demeanor is a MEAN project generator. It's goal is to minimize writing boilerplate code so that you can get to work faster.

## Installation:

Make sure you have node and npm installed. You can then install demeanor globally:

<code>npm install -g demeanor@latest</code>

## Commands:

* <code>demeanor new yourApp</code> - Generates a new project, installing dependencies via <code>npm install</code>.
* <code>demeanor model yourModel</code> - Generates a Mongoose Model for use with MongoDB.
* <code>demeanor view yourView</code> - demeanor uses <code>.ejs</code> by default.
* <code>demeanor controller yourController</code> - Generates a controller and Full CRUD methods. This command assumes you've made a model with the same name as your controller, so it imports this model for use within your new controller.

## ToDo:

Demeanor does not support Full MEAN project generation at the moment, but it will soon. For now, you'll have to <code>ng new client</code>, within your project and point your static folder within your <code>Server.js</code> to the <code>dist</code> folder that <code>ng build</code> outputs.