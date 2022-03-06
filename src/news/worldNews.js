  import React from 'react';
  import Button from '@material-ui/core/Button';
  import Card from '@material-ui/core/Card';
  import CardActions from '@material-ui/core/CardActions';
  import CardContent from '@material-ui/core/CardContent';
  import CardMedia from '@material-ui/core/CardMedia';
  import CssBaseline from '@material-ui/core/CssBaseline';
  import Grid from '@material-ui/core/Grid';
  import Typography from '@material-ui/core/Typography';
  import { makeStyles } from '@material-ui/core/styles';
  import Container from '@material-ui/core/Container';
  import Divider from '@mui/material/Divider';

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

  const cards = [1, 2];

  export default function Album() {
    const classes = useStyles();

    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="lg">
              <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                Art of the World
              </Typography>
              <Container maxWidth="sm">
              <Typography variant="h8" align="center"  paragraph>
                The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, 
                producing works to be appreciated primarily for their beauty or emotional power.
                <Divider variant="center" component="p"/>
              </Typography>
              </Container>
           
              <Container maxWidth="lg">
              
              <Grid container spacing={4}>
              <Grid item  xs={8}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://static01.nyt.com/images/2022/03/06/arts/06russian-artists1/merlin_73637635_90f2a08b-0404-4f7a-96bb-28965d5a1e9f-superJumbo.jpg"
                    title="Sara Krulwich/The New York Times"
                  />
              </Grid>
              <Grid item xs={4}>
              <Typography variant="h8" align="justify"  paragraph>
                The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, 
                producing works to be appreciated primarily for their beauty or emotional power. The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, 
                producing works to be appreciated primarily for their beauty or emotional power. The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, 
                producing works to be appreciated primarily for their beauty or emotional power. The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, 
                producing works to be appreciated primarily for their beauty or emotional power. 
              </Typography>
              </Grid>
              <Grid item xs={4}>
              <Typography variant="h8" align="justify"  paragraph>
                The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, 
                producing works to be appreciated primarily for their beauty or emotional power. The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, 
                producing works to be appreciated primarily for their beauty or emotional power. The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, 
                producing works to be appreciated primarily for their beauty or emotional power. The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, 
                producing works to be appreciated primarily for their beauty or emotional power. The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, 
                producing works to be appreciated primarily for their beauty or emotional power.
              </Typography>
              </Grid>
              <Grid item xs={4}>
              <Typography variant="h8" align="justify"  paragraph>
                The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, 
                producing works to be appreciated primarily for their beauty or emotional power. The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, 
                producing works to be appreciated primarily for their beauty or emotional power. The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, 
                producing works to be appreciated primarily for their beauty or emotional power. The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, 
                producing works to be appreciated primarily for their beauty or emotional power. The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, 
                producing works to be appreciated primarily for their beauty or emotional power.
              </Typography>
              </Grid>
              <Grid item xs={4}>
              <Typography variant="h8" align="justify"  paragraph>
                The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, 
                producing works to be appreciated primarily for their beauty or emotional power. The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, 
                producing works to be appreciated primarily for their beauty or emotional power. The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, 
                producing works to be appreciated primarily for their beauty or emotional power. The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, 
                producing works to be appreciated primarily for their beauty or emotional power. The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, 
                producing works to be appreciated primarily for their beauty or emotional power.
              </Typography>
              </Grid>
        
          </Grid>
              </Container>
              
            </Container>
          </div>
        </main>
        
      </React.Fragment>
    );
  }