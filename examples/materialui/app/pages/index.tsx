import { Head } from "blitz"
import { makeStyles } from "@material-ui/core/styles"
import { Container, Box, Typography, Button } from "@material-ui/core"
import Link from "app/components/Link"

const useStyles = makeStyles({
  img: {
    width: 300,
    marginBottom: 20,
  },
  links: {
    listStyle: "none",
    display: "flex",
    padding: 0,
    "& > li": {
      padding: "0 1rem",
    },
  },
})

const Home = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="md">
      <Head>
        <title>Blitz | Material UI Example </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box paddingY={10} component="main" alignItems="center" display="flex" flexDirection="column">
        <img className={classes.img} src="/logo.png" alt="blitz.js" />

        <Box mb={4} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4" align="center" component="h1" gutterBottom>
            Material UI Example
          </Typography>
          <Box component="span" mt={3}>
            <Button color="primary" variant="contained">
              Click Me!
            </Button>
          </Box>
        </Box>

        <nav>
          <ul className={classes.links}>
            <li>
              <Link
                href="https://github.com/blitz-js/blitz/blob/master/USER_GUIDE.md?utm_source=blitz-new&utm_medium=app-template&utm_campaign=blitz-new"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link href="https://github.com/blitz-js/blitz" target="_blank" rel="noopener noreferrer">
                Github Repo
              </Link>
            </li>
            <li>
              <Link href="https://slack.blitzjs.com" target="_blank" rel="noopener noreferrer">
                Slack Community
              </Link>
            </li>
          </ul>
        </nav>
      </Box>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;700&display=swap");

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Libre Franklin", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          box-sizing: border-box;
        }
      `}</style>
    </Container>
  )
}

export default Home
