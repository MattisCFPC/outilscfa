import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Assurez-vous que la base de données est correctement exportée
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import "./ToDoWidget.css";

function ToDoWidget() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Référence à la collection Firestore
  const tasksCollectionRef = collection(db, "tasks");

  // Charger les tâches au démarrage en temps réel
  useEffect(() => {
    const unsubscribe = onSnapshot(tasksCollectionRef, (snapshot) => {
      const tasksData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tasksData);
    });

    // Nettoyage du listener Firestore
    return () => unsubscribe();
  }, []);

  // Ajouter une tâche dans Firestore
  const addTask = async () => {
    if (newTask.trim() !== "") {
      await addDoc(tasksCollectionRef, { text: newTask, completed: false });
      setNewTask(""); // Réinitialiser le champ
    }
  };

  // Supprimer une tâche dans Firestore
  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
  };

  return (
    <div className="todo-widget">
      <h2 className="todo-title">Liste des Tâches</h2>
      <div className="todo-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Ajouter une nouvelle tâche..."
        />
        <button onClick={addTask}>Ajouter</button>
      </div>
      <ul className="todo-list">
        {tasks.map((task) => (
          <li key={task.id} className="todo-item">
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoWidget;
