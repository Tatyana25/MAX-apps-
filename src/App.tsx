import { type ChangeEvent, useEffect, useMemo, useState } from 'react';
import { Button, Container, Grid, Input, Panel, Typography } from '@maxhub/max-ui';
import { type Mood, type PulseEntry, loadPulse, savePulse } from './lib/storage';
import { getPlatformInfo, getStartParam, getWebApp, ready } from './lib/maxBridge';

const moods: Mood[] = ['🙂', '😐', '😫'];

const dateTimeFormatter = new Intl.DateTimeFormat('ru-RU', {
  dateStyle: 'short',
  timeStyle: 'medium'
});

function App() {
  const [mood, setMood] = useState<Mood>('🙂');
  const [comment, setComment] = useState('');
  const [lastEntry, setLastEntry] = useState<PulseEntry | null>(null);

  useEffect(() => {
    ready();
    setLastEntry(loadPulse());
  }, []);

  const inMax = useMemo(() => getWebApp() !== null, []);
  const startParam = useMemo(() => getStartParam(), []);
  const platformInfo = useMemo(() => getPlatformInfo(), []);
  const isSubmitDisabled = comment.trim().length === 0;

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
          <Typography variant="body1">start_param: {startParam ?? '—'}</Typography>
          <Typography variant="body1">
            platform/version: {platformInfo.platform ?? '—'} / {platformInfo.version ?? '—'}
          </Typography>

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

          <Typography variant="h4">Последняя отправка</Typography>
          {lastEntry ? (
            <Typography variant="body1">
              {lastEntry.mood} · {lastEntry.comment || 'без комментария'} ·{' '}
              {dateTimeFormatter.format(lastEntry.ts)}
            </Typography>
          ) : (
            <Typography variant="body1">Пока нет данных</Typography>
          )}
        </Grid>
      </Container>
    </Panel>
  );
}

export default App;
