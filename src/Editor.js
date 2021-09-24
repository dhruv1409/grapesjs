import { useEffect, useState } from 'react';

// IntroJS
import introSteps from './config/introSteps';
import { Steps } from 'intro.js-react';
import 'intro.js/introjs.css';

// GrapesJS
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './css/grapes.css';

// GrapesJS configs
import panelManager from './config/panelManager';
import grapesConfig from './config/grapesConfig';

function Editor() {
  const [stepsEnabled, setStepsEnabled] = useState(false);

  // Initialize GrapesJS editor on page load
  useEffect(() => {
    const editor = grapesjs.init(grapesConfig);
    editor.Panels.removeButton('devices-c', 'block-editor');
    panelManager(editor);
    // editor.Panels.removePanel('gjs-devices-c');
    // Start InroJS once Editor is initialized
    setStepsEnabled(true);
  }, []);

  const onExit = () => {
    setStepsEnabled(false);
  };

  return (
    <div>
      {/* <Steps
        enabled={stepsEnabled}
        steps={introSteps ? introSteps : ''}
        initialStep={0}
        onExit={onExit}
      /> */}
      <div id='gjs'></div>
    </div>
  );
}

export default Editor;
