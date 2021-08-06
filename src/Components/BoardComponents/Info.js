import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  return {
    top: '11vh',
    left: '10vw',
    flexDirection: 'column',
  };
}

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
}));

export default function Info() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id='simple-modal-title'>Rules</h2>
      <p id='simple-modal-description'>Under Construction</p>
    </div>
  );

  return (
    <div>
      <button type='button' style={styles.buttons} onClick={handleOpen}>
        Rules
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
    backgroundColor: 'rgba(210, 180, 140, 0.7)',
  },
};
