import styles from './Card.module.css'
import { useState, useEffect } from 'react'

export default function Card() {
  const [name, setname] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // LocalStorage dan malumotlarni olish
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    // LocalStorage ga malumotlarni saqlash
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = () => {
    // Yangi todo qo'shish
    if (name.trim() !== '') {
      setTodos([...todos, name]);
      setname('');
    }
  };
  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  const handleAlert = (index) =>{
    alert("button esildi")
  }
  return (
    <>
      <div className={styles.allcontainer}>
        <div className={styles.texts}>
          <div className={styles.textt}>
            <h2 className={styles.haj2}>Todos ({todos.length})</h2>
          </div>
          <div className="inputs">
            <div className={styles.inputt}>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter todo here"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
              <button className={styles.buton} onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
          <div className={styles.information}>
            {todos.map((todo, index) => (
              <div key={index} className={styles.oneinfo}>
                <input type="checkbox" />
                <h1 className={styles.informationtext}>{todo}</h1>
                <div className={styles.all}>
             <button className={styles.Update}>Update</button>
             <button className={styles.Delete} onClick={({handleAlert}) => handleDelete(index)}>
                Delete
              </button>    
            </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
