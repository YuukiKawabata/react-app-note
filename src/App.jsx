import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from 'react-uuid'
import { useEffect } from 'react'

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  const [activeNote, setactiveNote] = useState(false)
  const [visible, setVisible] = useState(true)


  useEffect(() => {
    //ローカルストレージにノートを保存する
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  // useEffect(() => {
  //   setactiveNote(notes[0].id)
  // }, [])

  const onAddNote = () => {    
    const newNote = {
      id: uuid(),
      title: '新しいノート',
      content: '',
      modDate: Date.now(),
    }
    setNotes([...notes, newNote])
  }

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id)
    setNotes(filterNotes)
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  const onUpdateNote = (updateNote) => {
    //修正された新しいノートの配列を返す。
    const updateNotesArray = notes.map((note) => {
      if(note.id === updateNote.id){
        return updateNote
      } else {
        return note
      }
    })
    setNotes(updateNotesArray)
  }

  return <div className="App">
    
    <>
      {visible &&     <Sidebar 
      onAddNote={onAddNote}
      notes={notes}
      onDeleteNote={onDeleteNote}
      activeNote={activeNote}
      setactiveNote={setactiveNote}
      />}
      <button className='visibleButton' onClick={() => setVisible(!visible)}>
        {visible ? "閉じる ⬅️" : "追加 or 一覧 ➡️"}
      </button>
    </>
    
    <Main 
      activeNote={getActiveNote()}
      onUpdateNote={onUpdateNote}
      />
  </div>
}

export default App
