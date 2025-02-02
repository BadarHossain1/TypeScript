var player = {
    song: 'Tumi Ashbe Bole',
    singer: 'Nahid Hasan',
    duration: 4,
    playNext: function () {
        console.log('Playing next song');
    },
    playPrevious: function () {
        console.log('Playing previous song');
    }
};
console.log(player.song);
var AudioPlayer1 = /** @class */ (function () {
    function AudioPlayer1() {
        this.song = "Ahh Ahh Ahh";
    }
    AudioPlayer1.prototype.playNext = function () {
        console.log('Playing next song');
    };
    AudioPlayer1.prototype.playPrevious = function () {
        console.log('Playing previous song');
    };
    return AudioPlayer1;
}());
var newPlayer1 = new AudioPlayer1();
console.log(newPlayer1.song);
var AudioPlayer = /** @class */ (function () {
    function AudioPlayer(song, singer, duration) {
        this.song = song;
        this.singer = singer;
        this.duration = duration;
    }
    return AudioPlayer;
}());
var newPlayer = new AudioPlayer('Tumi Ashbe Bole', 'Nahid Hasan', 4);
console.log(newPlayer.song);
