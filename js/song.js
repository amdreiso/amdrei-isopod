

class Song {
	constructor(name, file) {
		this.name = name;
		this.src = "./src/songs/"+file;
	}
}

songs = [];


songs.push(new Song("I sink", "isink.wav"));
songs.push(new Song("friends", "friends.mp3"));
songs.push(new Song("0x01", "ambient guitar 1.mp3"));
songs.push(new Song("0x31", "ambient guitar 2.mp3"));
songs.push(new Song("0x09", "ambient guitar 3.mp3"));
songs.push(new Song("0x04", "ambient guitar 4.mp3"));
songs.push(new Song("0x09", "ambient guitar 5.mp3"));
songs.push(new Song("2x01", "ambient guitar 6.mp3"));
songs.push(new Song("2x81", "ambient guitar 7.mp3"));
songs.push(new Song("seenwhatIseen", "seenwhatiseen.mp3"));

function setSong() {
	var index = Math.floor(Math.random() * songs.length);
	document.getElementById("song-title").innerHTML 			= songs[index].name;
	document.getElementById("audio-source").src 					= songs[index].src;
	document.getElementById("song-source").src 						= songs[index].src;
}

setSong();

console.log(document.getElementById("song-source"));


document.getElementById("song-button").onclick = () => {
	setSong();
}



