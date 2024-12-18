export type Video = {
  id: number;
  title: string;
  url: string;
  duration: number;
  completed: boolean;
};

export type Chapter = {
  id: number;
  title: string;
  videos: Video[];
  progress: number;
}; 