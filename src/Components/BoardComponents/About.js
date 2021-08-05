import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Avatar } from '@material-ui/core';
import mona from '../../Images/landingSection/mona.jpg'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '72vw',
    minWidth: '30vw',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  medium: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    border: '1px darkGrey solid',
  },
}));

const ElementalPoker = () => {

  const heading = (
    <div style={styles.gameHeading}>
      <h1>Elemental Poker</h1>
      <div>Images</div>
    </div>
  );

  const gameContent = (
    <div style={styles.gameText}>
      <div>
        Elemental Poker is a single player game where the user competes with the
        computer. Win by playing all the cards in your hand.
      </div>
      <div>
        It is based on a traditional chinese card game. Traditionally chinese
        poker is usually played with 2-4 players with a deck of 52 cards.
      </div>

      <div style={styles.aboutMintBean}>
        <h3 style={{ border: '1px solid black' }}>Mintbean</h3>
        <p style={{ border: '1px solid black' }}>
          Elemental Poker was created during a weekly hackathon hosted by
          MintBean. Mintbean provides a supportive community for software
          developers. Learn more about this{' '}
          <span>
            <a href='https://mintbean.io/meets/7e2331fb-1e0d-4b31-86b9-a46acad877af'>
              event!
            </a>
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <div style={styles.aboutGame}>
      {heading}

      <div style={styles.gameContent}>
        {gameContent}
        <div style={styles.gameDemo}>Demo Video</div>
      </div>
    </div>
  );
}

const Developer = (props) => {
  const classes = props.classes
  return (
    <div style={styles.aboutDeveloper}>
      <h1>Mona Zheng</h1>
      <div style={styles.image}>
        <Avatar
          alt='Mona'
          variant='rounded'
          src={mona}
          className={classes.medium}
        />
        <div style={styles.devText}>JKFJDKSFJKFJDKSFJKDLFJKSFJFDKFJDSKFJKDSFJDSKFJKDSFJKDSFJ</div>
      </div>
    </div>
  );
}

export default function Info() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={styles.container} className={classes.paper}>
      <ElementalPoker />
        <Developer classes={classes} />

    </div>
  );

  return (
    <div>
      <button type='button' style={styles.buttons} onClick={handleOpen}>
        About the creator
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
}


let styles = {
  buttons: {
    width: 100,
    height: 50,
    borderRadius: 8,
    margin: 5,
    backgroundColor: 'tan',
  },
  container: {
    top: '11vh',
    left: '10vw',
    flexDirection: 'column',
  },
  aboutDeveloper: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: '2vw',
    // marginTop: 0
  },
  image: {},
  devText: {
    padding: '1vw',
    marginLeft: '4vw',
  },
  aboutGame: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: '2vw',
  },
  gameContent: {},
  gameText: {
    flex: 3,
    flexDirection: 'column',
  },
  gameDemo: {
    flex: 2,
  },
  gameHeading: {
    justifyContent: 'space-between',
  },
  aboutMintBean: {
    flexDirection: 'column',
    border: '1px solid black',
  },
};