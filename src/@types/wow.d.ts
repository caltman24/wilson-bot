export interface QuoteData {
  movie: string;
  year: number;
  character: string;
  timestamp: string;
  full_line: string;
  current_wow_in_movie: number;
  total_wow_in_movie: number;
  poster: string;
  video: {
    "1080p": string;
    "720p": string;
  };
  audio: string;
}
