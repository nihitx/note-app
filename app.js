console.log('starting app..');

const fs = require('fs');
const _ = require('lodash');
/* makes terminal parsing into objects */
const yargs = require('yargs');
const argv = yargs.argv;

const notes = require('./note.js');

var command = argv._[0];
console.log('Command: ' , command);
console.log('Yargs', argv);

if(command ==='add'){
	var note = notes.addNote(argv.title, argv.body);
	if(note){
		console.log(`Title created ${note.title}` );
	}else{
		console.log('Note exist');
	}
}else if(command ==='list'){
 	var allNotes = notes.getAll();
 	allNotes.forEach((note) => {
 		console.log(`${note.title}`);
 		console.log(`${note.body}`);
 		console.log('--');
 	});
}else if(command ==='read'){
 	var note = notes.getNote(argv.title);
 	if(note){
 		console.log('Note found');
 		console.log(`Title : ${note.title}`);
 		console.log(`Body : ${note.body}`);
 	}else{
 		console.log('Note not found');
 	}

}else if(command ==='remove'){
 	var noteRemoved = notes.removeNote(argv.title);
 	var message = noteRemoved ? 'Note removed' : 'Note did not get removed';
 	console.log(message);
}else{
	console.log('Command not recognised');
}