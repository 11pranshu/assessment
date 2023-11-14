import React, { useRef, useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import HighchartsBlock from './Highcharts';

class Chart {
  static get toolbox() {
    return {
      title: 'Chart',
      icon: '<svg width="17" height="15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="4" height="12" x="2" y="11" fill="#4285F4"/><rect width="4" height="18" x="8" y="5" fill="#34A853"/><rect width="4" height="8" x="14" y="15" fill="#FBBC05"/><rect width="4" height="22" x="20" y="1" fill="#EA4335"/></svg>'
    };
  }
  

  render(){
    return document.getElementById('input');
  }

  save(blockContent){
    return {
      url: blockContent.value
    }
  }
}

const Editor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    // Create an instance of the Editor.js
    const editor = new EditorJS({
      holder: 'editorjs',
      autofocus: true,
      tools: {
        header: Header,
        highcharts: Chart,
      },
      
    });

    editorRef.current = editor;

  }, []);


  return (
    <div>
      <div id="editorjs"></div>
      <div id='input'>
        <HighchartsBlock/>
      </div>
    </div>
  );
};

export default Editor;