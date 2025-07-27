'server only';

import { cache } from 'react';
import { UserStats, WakaTimeAllTimeStats } from './types';

const WAKATIME_ENDPOINT = 'https://wakatime.com/api/v1';

const getWakatimeToken = cache(() => {
  const secret_key = process.env.WAKATIME_SECRET_KEY;

  if (!secret_key) {
    return null;
  }

  const encodedKey = Buffer.from(`${secret_key} :`).toString('base64');

  return encodedKey;
});

const token = getWakatimeToken();

// https://wakatime.com/developers#all_time_since_today
export const getAllTimeStats = cache(
  async (): Promise<WakaTimeAllTimeStats> => {
    if (!token) {
      // Return mock data when token is not available
      return {
        text: '0 hrs 0 mins',
        total_seconds: 0,
        daily_average: 0,
        decimal: '0.00',
        digital: '0:00',
        is_up_to_date: true,
        percent_calculated: 100,
        range: {
          end: new Date().toISOString(),
          end_date: new Date().toISOString().split('T')[0],
          end_text: 'Today',
          start: new Date().toISOString(),
          start_date: new Date().toISOString().split('T')[0],
          start_text: 'Today',
          timezone: 'UTC',
        },
        timeout: 15,
      };
    }

    const response = await fetch(
      `${WAKATIME_ENDPOINT}/users/current/all_time_since_today`,
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      },
    );

    if (!response.ok) {
      console.error('Error:', response.status, await response.text());
    }

    const result = await response.json();

    return result.data;
  },
);

// https://wakatime.com/developers#stats
export const getStatsThisWeek = cache(async (): Promise<UserStats> => {
  if (!token) {
    // Return mock data when token is not available
    return {
      best_day: {
        date: new Date().toISOString().split('T')[0],
        text: 'Today',
        total_seconds: 0,
      },
      human_readable_daily_average: '0 mins',
      human_readable_total: '0 mins',
      daily_average: 0,
      total_seconds: 0,
      total_seconds_including_other_language: 0,
      projects: [
        {
          name: 'No data',
          total_seconds: 0,
          percent: 0,
          decimal: '0.00',
          digital: '0:00',
          text: '0 mins',
        },
      ],
    };
  }

  const response = await fetch(
    `${WAKATIME_ENDPOINT}/users/current/stats/last_7_days`,
    {
      headers: {
        Authorization: `Basic ${token}`,
      },
    },
  );

  if (!response.ok) {
    console.error('Error:', response.status, await response.text());
  }

  const result = await response.json();

  return result.data;
});
