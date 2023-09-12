import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import GrapeJSCustomButton from './GrapeJSCustomButton';

const GrapeJS = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: editorRef.current,
      components: '<div class="custom-button" data-gjs-type="custom-button">ClickMe</div>',
      plugins: [GrapeJSCustomButton]
      // Grape.js configuration options
    });
    
    editor.Panels.addPanel({
      id: 'badic-actions',
      buttons: [
        {
          id: 'save',
          className: 'btn-custom-button',
          label: 'Save',
          command: 'save-design',
          attributes: { title: 'Save Design' },
        }
      ]
    })

  }, []);

  return (
    <div className="grapejs" ref={editorRef}>
      {/* Grape.js editor content */}
    </div>
  );
};

export default GrapeJS;
