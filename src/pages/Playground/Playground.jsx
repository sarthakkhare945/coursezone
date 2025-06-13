import React from 'react'
import Editor from '@monaco-editor/react';
import CodeEditor from '../../components/Playground/CodeEditor';

const Playground = () => {
  return (
    <div className=''>
        <div className='bg-red-500'/>
<CodeEditor height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />;
</div>
  )
}

export default Playground