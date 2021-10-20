import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: 350,
    margin: 10,
    borderRadius: 10,
    border: "1px solid #d3cede",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& > *": {
      padding: "0 5px 5px 5px",
    },
  },
  image: {
    height: 150,
    width: "100%",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: 600,
  },
  detail: {
    fontSize: 14,
    wordBreak: "break-word",
  },
});

const Post = () => {
  const classes = useStyles();
  const url =
    "https://images.unsplash.com/photo-1633596348191-6e023dd82787?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  return (
    <Box className={classes.container}>
      <img src={url} alt="image" className={classes.image} />
      <Typography className={classes.text}>Music</Typography>
      <Typography className={classes.heading}>bibekdev</Typography>
      <Typography className={classes.text}>Author: Bibek Chaudhary</Typography>
      <Typography>I am god</Typography>
    </Box>
  );
};

export default Post;
