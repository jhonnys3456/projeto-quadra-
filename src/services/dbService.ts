import { AppState } from '../types';

export const dbService = {
  async getState(): Promise<AppState> {
    const res = await fetch('/api/db');
    return res.json();
  },

  async saveState(state: AppState): Promise<void> {
    await fetch('/api/db', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state),
    });
  }
};
