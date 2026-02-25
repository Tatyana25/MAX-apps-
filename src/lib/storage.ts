export type Mood = '🙂' | '😐' | '😫';

export type PulseEntry = {
  mood: Mood;
  comment: string;
  ts: number;
};

const PULSE_STORAGE_KEY = 'max-mini-app:pulse:last';

export function loadPulse(): PulseEntry | null {
  const raw = localStorage.getItem(PULSE_STORAGE_KEY);

  if (!raw) {
    return null;
  }

  try {
    const parsed: unknown = JSON.parse(raw);

    if (
      typeof parsed === 'object' &&
      parsed !== null &&
      'mood' in parsed &&
      'comment' in parsed &&
      'ts' in parsed
    ) {
      const candidate = parsed as { mood: unknown; comment: unknown; ts: unknown };

      if (
        (candidate.mood === '🙂' || candidate.mood === '😐' || candidate.mood === '😫') &&
        typeof candidate.comment === 'string' &&
        typeof candidate.ts === 'number'
      ) {
        return {
          mood: candidate.mood,
          comment: candidate.comment,
          ts: candidate.ts
        };
      }
    }
  } catch {
    return null;
  }

  return null;
}

export function savePulse(entry: PulseEntry): void {
  localStorage.setItem(PULSE_STORAGE_KEY, JSON.stringify(entry));
}
