/* global app */

// Test app.Todo in console:
var todo = new app.Todo({title: 'Learn Backbone.js', completed: false}); // create object with the attributes specified.
todo.get('title'); // "Learn Backbone.js"
todo.get('completed'); // false
todo.get('created_at'); // undefined
todo.set('created_at', Date());
todo.get('created_at'); // "Wed Sep 12 2012 12:51:17 GMT-0400 (EDT)"

// Test app.TodoList in console:
var todoList = new app.TodoList();
todoList.create({title: 'Learn Backbone\'s Collection'}); // notice: that `completed` will be set to false by default.
var lmodel = new app.Todo({title: 'Learn Models', completed: true});
todoList.add(lmodel);
todoList.pluck('title');     // ["Learn Backbone's Collection", "Learn Models"]
todoList.pluck('completed'); // [false, true]
JSON.stringify(todoList);    // "[{"title":"Learn Backbone's Collection","completed":false,"id":"d9763e99-2267-75f5-62c3-9d7e40742aa6"},{"title":"Learn Models","completed":true}]"
