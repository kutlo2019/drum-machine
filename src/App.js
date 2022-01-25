import React from 'react';
const useEffect = React.useEffect

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bank: bankOne
    };
    this.playAudio = this.playAudio.bind(this);
    this.bankOneSetup = this.bankOneSetup.bind(this);
    this.bankTwoSetup = this.bankTwoSetup.bind(this);
  };


  playAudio(trigger) {
    const sound = document.getElementById(trigger);
    sound.currentTime = 0;
    sound.play();
  };

  bankOneSetup() {
    this.setState({
      bank: bankOne
    })
  }

  bankTwoSetup() {
    this.setState({
      bank: bankTwo
    })
  }

  render() {
    return (
      <div id="drum-machine">
        <div className="keyWrapper">
          {this.state.bank.map((sound) => {
            return (
              <DrumPad
                key={sound.id}
                clipName={sound.id}
                innerText={sound.keyTrigger}
                url={sound.url}
                handleClick={this.playAudio}>
              </DrumPad>
            );
          })}
        </div>
        <Display
          bankOneSetup={this.bankOneSetup}
          bankTwoSetup={this.bankTwoSetup}
        />
      </div>
    );
  }
}

function Display(props) {
  const [clip, setClip] = React.useState('')

  const checkKeyDown = (event) => {

    const keyPressed = event.key.toUpperCase()
    let audio = ''

    switch (event.keyCode) {
      case 81:
        audio = document.getElementById(keyPressed);
        setClip(audio.closest('div').id)
        return;
      case 87:
        audio = document.getElementById(keyPressed);
        setClip(audio.closest('div').id)
        return;
      case 69:
        audio = document.getElementById(keyPressed);
        setClip(audio.closest('div').id)
        return;
      case 65:
        audio = document.getElementById(keyPressed);
        setClip(audio.closest('div').id)
        return;
      case 83:
        audio = document.getElementById(keyPressed);
        setClip(audio.closest('div').id)
        return;
      case 68:
        audio = document.getElementById(keyPressed);
        setClip(audio.closest('div').id)
        return;
      case 90:
        audio = document.getElementById(keyPressed);
        setClip(audio.closest('div').id)
        return;
      case 88:
        audio = document.getElementById(keyPressed);
        setClip(audio.closest('div').id)
        return;
      case 67:
        audio = document.getElementById(keyPressed);
        setClip(audio.closest('div').id)
        return;
    }
  }

  React.useEffect(() => {
    const clips = document.querySelectorAll('.drum-pad')
    clips.forEach(clip => {
      clip.addEventListener('click', () => {
        setClip(clip.id)
      })
    })
  })

  React.useEffect(() => {
    window.addEventListener('keydown', checkKeyDown);

    return () => {
      window.removeEventListener('keydown', checkKeyDown)
    }
  }, [])

  return (
    <div id="display">
      <h2>Sound Played: </h2>
      <p >{clip}</p>
      <div className='sound-bank'>
        <h2>Choose sound bank: </h2>
        <label for="bank1">Bank1</label>
        <input 
          type="radio"
          id="bank1"
          name='bank'
          onChange={() => props.bankOneSetup()}
          defaultChecked
        />
        <label for="bank1">Bank2</label>
        <input
          type="radio"
          id="bank2"
          name='bank'
          onChange={() => props.bankTwoSetup()}
        />
      </div>
    </div>
  );
}


function DrumPad(props) {
  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 81:
        props.handleClick('Q');
        return;
      case 87:
        props.handleClick('W');
        return;
      case 69:
        props.handleClick('E');
        return;
      case 65:
        props.handleClick('A');
        return;
      case 83:
        props.handleClick('S');
        return;
      case 68:
        props.handleClick('D');
        return;
      case 90:
        props.handleClick('Z');
        return;
      case 88:
        props.handleClick('X');
        return;
      case 67:
        props.handleClick('C');
        return;
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }


  }, []);

  return (
    <div
      className="drum-pad"
      id={props.clipName}
      onClick={() => props.handleClick(props.innerText)}
    >
      {props.innerText}
      <audio
        preload="auto"
        src={props.url}
        className="clip"
        id={props.innerText}
      ></audio>
    </div>
  );
}

export default App