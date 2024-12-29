import { memo } from 'react';

import { LearningProvider } from '../../contexts/LearningContext';
import LearningComponent from '../../routes/Learning/Learning.component';

const LearningPage = memo(() => (
  <LearningProvider>
    <LearningComponent />
  </LearningProvider>
));

export default LearningPage; 