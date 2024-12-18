import { memo } from 'react';
import { useChapters } from '../../hooks/useChapters.hook';
import ChapterAccordion from './ChapterAccordion/ChapterAccordion.component';


const VideoSidebar = () => {
  const { chapters, activeChapterId, handleChapterClick } = useChapters();

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Spis treści</h2>
      <div className="space-y-2">
        {chapters.map(chapter => (
          <ChapterAccordion
            key={chapter.id}
            chapter={chapter}
            isActive={chapter.id === activeChapterId}
            onClick={() => handleChapterClick(chapter.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(VideoSidebar); 