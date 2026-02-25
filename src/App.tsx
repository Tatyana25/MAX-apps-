import { Button, Container, Grid, Input, Panel, Typography } from '@maxhub/max-ui';

function App() {
  return (
    <Panel>
      <Container>
        <Grid>
          <Typography variant="h3">MAX Mini App</Typography>
          <Typography variant="body1">Базовый экран на MAX UI.</Typography>
          <Input placeholder="Введите текст" aria-label="demo-input" />
          <Button>Продолжить</Button>
        </Grid>
      </Container>
    </Panel>
  );
}

export default App;
