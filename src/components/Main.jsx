import React from 'react'
import './Main.css'
// import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const Main = ( {activeNote, onUpdateNote} ) => {
    const onEditNote = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            modDate: Date.now(),
        })
    }
  
  if (!activeNote) {
      return <div className='no-active-note'>ノートが選択されていません</div>
  }
  return (
    <div className='app-main'>
        <div className="app-main-note-edit">
            <input type="text"
             id='title'
             value={activeNote.title}
             placeholder='タイトル'
             onChange={(e) => onEditNote('title', e.target.value)}
             />
            <textarea id="content"
             value={activeNote.content}
             placeholder='ノート内容'
             onChange={(e) => onEditNote('content', e.target.value)}
             >
             </textarea>
             {/* <p>期日</p>
            <input className='date'
             type="datetime-local" 
             id='deadline' 
             value={activeNote.deadline}/> */}
        </div>
        {/* <div className="app-main-note-preview">
            <h1 className="preview-title">{activeNote.title}</h1>
            <ReactMarkdown className="markdown-preview">{activeNote.content}
            </ReactMarkdown>
        </div> */}
    </div>
  )
}

export default Main