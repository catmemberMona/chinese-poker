import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Avatar } from '@material-ui/core';
import mona from '../../Images/landingSection/mona.jpg';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'relative',
    width: '72vw',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  medium: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    border: '1px darkGrey solid',
  },
}));

const ElementalPoker = () => {
  const heading = (
    <div style={styles.gameHeading}>
      <h1>Elemental Poker</h1>
      {/* <div>Images</div> */}
    </div>
  );

  const gameContent = (
    <div style={styles.gameText}>
      <p>
        Elemental Poker is a single player game where the user competes with the
        computer. Win by playing all the cards in your hand.
      </p>
      <p>
        It is based on a traditional chinese card game. Traditionally chinese
        poker is usually played with 2-4 players with a deck of 52 cards.
      </p>
      <div style={styles.aboutMintBean}>
        <h3 style={{ marginTop: 5, marginBottom: 1 }}>Mintbean</h3>
        <p>
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
      <div style={styles.used}>
        <p>
          <span
            style={{
              fontWeight: 800,
              fontSize: '1.1em',
              fontFamily: 'Roboto, sansSerif',
            }}
          >
            Created using:
          </span>{' '}
          Create-React-App, Redux, React-Redux, Material-UI
        </p>
        <p>
          <span
            style={{
              fontWeight: 800,
              fontSize: '1.1em',
              fontFamily: 'Roboto, sansSerif',
            }}
          >
            Deployed on:
          </span>{' '}
          Github Pages
        </p>
      </div>
    </div>
  );

  return (
    <div style={styles.aboutGame}>
      {heading}

      <div style={styles.gameContent}>
        {gameContent}

        <div style={styles.gameDemo}>
          <iframe
            display='block'
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/z35qjrkX_CY'
            title='Demo'
            frameBorder='0'
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const Developer = (props) => {
  const classes = props.classes;
  return (
    <div style={styles.aboutDeveloper}>
      <h1>Mona Zheng</h1>
      <div style={styles.devContent}>
        <Avatar
          alt='Mona'
          variant='rounded'
          src={mona}
          className={classes.medium}
        />
        <div style={styles.devText}>
          <p>Hello visitors!</p>
          <p>
            Developing this game was a really enjoyable experience! I decided to
            create this based on chinese poker because it was a game the I
            played with my family when I was younger. It's still a game I enjoy
            playing.
          </p>
        </div>
      </div>
    </div>
  );
};

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
        About
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        style={{ overflowY: 'auto' }}
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
    backgroundColor: 'rgba(210, 180, 140, 0.7)',
  },
  container: {
    margin: 'auto',
    flexDirection: 'column',
  },
  aboutDeveloper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderTop: '.5px solid lightgrey',
    marginTop: 2,
  },
  devContent: {
    flexWrap: 'wrap',
  },
  devText: {
    padding: '1vw',
    marginLeft: '4vw',
    width: '40vw',
    maxWidth: '50vw',
    flexDirection: 'column',
  },
  aboutGame: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: '2vw',
  },
  gameContent: {
    flexWrap: 'wrap',
  },
  gameText: {
    flex: 2,
    flexDirection: 'column',
    marginRight: '4vw',
    minWidth: 200,
  },
  gameDemo: {
    flex: 2,
    minWidth: 300,
  },
  gameHeading: {
    justifyContent: 'space-between',
  },
  aboutMintBean: {
    flexDirection: 'column',
  },
  used: {
    flexDirection: 'column',
  },
};
