import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    background: `url(${"https://images.unsplash.com/photo-1633383718081-22ac93e3db65?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDgxfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}) center/55% repeat-x #000`,
    width: "100%",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& :first-child": {
      fontSize: 66,
      color: "#fff",
      lineHeight: 1,
    },
    "& :last-child": {
      fontSize: 20,
      background: "#fff",
    },
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.image}>
      <Typography>BLOG</Typography>
      <Typography>bibekDev</Typography>
    </Box>
  );
};

export default Banner;
