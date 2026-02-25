
=======

=======

=======

=======





import { type ChangeEvent, useEffect, useMemo, useState } from 'react';
import { Button, Container, Grid, Input, Panel, Typography } from '@maxhub/max-ui';
import { type Mood, type PulseEntry, loadPulse, savePulse } from './lib/storage';
import { getPlatformInfo, getStartParam, getWebApp, ready } from './lib/maxBridge';

const moods: Mood[] = ['🙂', '😐', '😫'];

const dateTimeFormatter = new Intl.DateTimeFormat('ru-RU', {
  dateStyle: 'short',
  timeStyle: 'medium'
});


=======

=======

=======

=======
=======

import { type ChangeEvent, useEffect, useState } from 'react';
import { Button, Container, Grid, Input, Panel, Typography } from '@maxhub/max-ui';
import { type Mood, type PulseEntry, loadPulse, savePulse } from './lib/storage';

const moods: Mood[] = ['🙂', '😐', '😫'];






function App() {
  const [mood, setMood] = useState<Mood>('🙂');
  const [comment, setComment] = useState('');
  const [lastEntry, setLastEntry] = useState<PulseEntry | null>(null);

  useEffect(() => {

=======

=======

=======

=======





    ready();
    setLastEntry(loadPulse());
  }, []);

  const inMax = useMemo(() => getWebApp() !== null, []);
  const startParam = useMemo(() => getStartParam(), []);
  const platformInfo = useMemo(() => getPlatformInfo(), []);
  const isSubmitDisabled = comment.trim().length === 0;


=======

=======

=======

=======
=======
    setLastEntry(loadPulse());
  }, []);






  const handleSubmit = () => {
    const entry: PulseEntry = {
      mood,
      comment: comment.trim(),
      ts: Date.now()
    };

    savePulse(entry);
    setLastEntry(entry);
    setComment('');
  };

  return (
    <Panel>
      <Container>
        <Grid className="app-shell">
          <Typography variant="h3">Pulse MVP</Typography>
          <Typography variant="body1">Выберите настроение и отправьте короткий комментарий.</Typography>

          <Typography variant="body1">В MAX: {inMax ? 'да' : 'нет'}</Typography>

          {!inMax && (
            <Typography variant="body1">Откройте внутри клиента MAX</Typography>
          )}
=======

=======

=======

=======




          <Typography variant="body1">В MAX: {inMax ? 'да' : 'нет'}</Typography>

          <Typography variant="body1">start_param: {startParam ?? '—'}</Typography>
          <Typography variant="body1">
            platform/version: {platformInfo.platform ?? '—'} / {platformInfo.version ?? '—'}
          </Typography>


=======

=======

=======

=======
=======





          <Grid>
            {moods.map((item) => (
              <Button
                key={item}
                className={mood === item ? 'mood-active' : ''}
                onClick={() => setMood(item)}
              >
                {item}
              </Button>
            ))}
          </Grid>

          <Input
            value={comment}
            placeholder="Комментарий"
            aria-label="pulse-comment"
            onChange={(event: ChangeEvent<HTMLInputElement>) => setComment(event.target.value)}
          />


          <Button onClick={handleSubmit} disabled={isSubmitDisabled}>
            Отправить
          </Button>
=======

          <Button onClick={handleSubmit} disabled={isSubmitDisabled}>
            Отправить
          </Button>
=======

          <Button onClick={handleSubmit} disabled={isSubmitDisabled}>
            Отправить
          </Button>
=======

          <Button onClick={handleSubmit} disabled={isSubmitDisabled}>
            Отправить
          </Button>
=======

          <Button onClick={handleSubmit} disabled={isSubmitDisabled}>
            Отправить
          </Button>
=======
          <Button onClick={handleSubmit}>Отправить</Button>





          <Typography variant="h4">Последняя отправка</Typography>
          {lastEntry ? (
            <Typography variant="body1">
              {lastEntry.mood} · {lastEntry.comment || 'без комментария'} ·{' '}

              {dateTimeFormatter.format(lastEntry.ts)}
=======

              {dateTimeFormatter.format(lastEntry.ts)}
=======

              {dateTimeFormatter.format(lastEntry.ts)}
=======

              {dateTimeFormatter.format(lastEntry.ts)}
=======

              {dateTimeFormatter.format(lastEntry.ts)}
=======
              {new Date(lastEntry.ts).toLocaleString()}





            </Typography>
          ) : (
            <Typography variant="body1">Пока нет данных</Typography>
          )}

=======

=======

=======

=======

=======
=======
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
