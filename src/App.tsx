import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import InputField from './components/InputField'
import Todolist from './components/TodoList';

function App() {
    const [listTodo, setListTodo] = useState([]);

    let addList = (inputText: any) => {
        if (inputText !== '')
            setListTodo([...listTodo]);
    }

    const deleteListItem = (key: any) => {
        let newListTodo = [...listTodo];
        newListTodo.splice(key, 1)
        setListTodo([...newListTodo])
    }

    return (
        <main>
            <section className="todo-list-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="todo-box">
                                <h2>To Do List App</h2>
                                <div className="todo-wrapper">
                                    <InputField addList={addList}/>
                                    <ul className="list-group">
                                        {listTodo.map((listItem, i) => {
                                            return (
                                                <Todolist key={i} index={i} item={listItem}
                                                          deleteItem={deleteListItem}/>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
