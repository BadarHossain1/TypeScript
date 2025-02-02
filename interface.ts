interface Player {
    song: string;
    singer: string;
    duration: number;
    playNext: () => void;
    playPrevious: () => void;

}

const player: Player = {
    song: 'Tumi Ashbe Bole',
    singer: 'Nahid Hasan',
    duration: 4,
    playNext() {
        console.log('Playing next song');
    },
    playPrevious() {
        console.log('Playing previous song');
    }
}

console.log(player.song);

class AudioPlayer1 implements Player {
    song = "Ahh Ahh Ahh";
    singer =  "John";
    duration = 45_000;
    playNext() {
        console.log('Playing next song');
    }
    playPrevious() {
        console.log('Playing previous song');
    }
}

const newPlayer1 = new AudioPlayer1();
console.log(newPlayer1.song);

class AudioPlayer {
    song: string;
    singer: string;
    duration: number;
    playNext: () => void;
    playPrevious: () => void;

    constructor(song: string, singer: string, duration: number) {
        this.song = song;
        this.singer = singer;
        this.duration = duration;
    }

}

const newPlayer = new AudioPlayer('Tumi Ashbe Bole', 'Nahid Hasan', 4);
console.log(newPlayer.song);