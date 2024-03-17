import React, { useState } from 'react';
import MainLayout from '../../layout/MainLayout';

import {
  Modal,
  Notfound,
  Popover,
  Progress,
  SpeedDial,
  Table,
  Timeline,
  Toast
} from '../../shared/components';
import {
  BorderButton,
  DangerButton,
  PrimaryButton
} from '../../shared/components/Button';

const Task_1 = () => {
  const [textBoxes, setTextBoxes] = useState([{ id: 1, value: '' }]);
  const [warning, setWarning] = useState(false);

  const addTextBox = () => {
    const newTextBoxes = [
      ...textBoxes,
      { id: textBoxes.length + 1, value: '' }
    ];
    setTextBoxes(newTextBoxes);
  };

  const deleteTextBox = (id) => {
    const updatedTextBoxes = textBoxes.filter((textBox) => textBox.id !== id);
    setTextBoxes(updatedTextBoxes);
  };

  const handleChange = (id, value) => {
    if (!isNaN(value) || value === '') {
      const updatedTextBoxes = textBoxes.map((textBox) =>
        textBox.id === id ? { ...textBox, value: value } : textBox
      );
      setTextBoxes(updatedTextBoxes);
      setWarning(false);
    } else {
      setWarning(true);
    }
  };

  const total = textBoxes.reduce(
    (acc, textBox) => acc + parseFloat(textBox.value || 0),
    0
  );
  return (
    <>
      <h1 className="font-bold text-[32px] text-center">
        Task One - Reduce to Sum
      </h1>
      <PrimaryButton
        onPress={addTextBox}
        label="Add Text Box"
        className="w-[100%]"
      />
      {textBoxes.map((textBox) => (
        <div key={textBox.id} className='flex justify-between gap-[20px] items-center mb-[10px]'>
          <input
            type="text"
            value={textBox.value}
            onChange={(e) => handleChange(textBox.id, e.target.value)}
            className="bg-gray-6 bg-opacity-10 border border-gray-4 text-black  placeholder-[#e7e7e7] text-sm rounded-lg focus:ring-brand focus:border-brand block w-full p-2.5"
          />
          <DangerButton onPress={() => deleteTextBox(textBox.id)} label="Delete"/>
        </div>
      ))}
      {warning && (
        <div style={{ color: 'red' }}>Please enter numbers only!</div>
      )}
      <div className="w-[100%]"></div>
      <div>Total: {total}</div>
    </>
  );
};

const Task_2 = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: '',
      subtitle: '',
      value: '',
      editing: true // Automatically enter editing mode when adding a new task
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleEditing = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, editing: !task.editing } : task
    );
    setTasks(updatedTasks);
  };

  const handleChange = (id, field, value) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, [field]: value } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="my-[100px] border-t-[1px] border-[#e7e7e7] pt-[40px]">
      <h1 className="font-bold text-[32px] text-center">
        Task Two - Task Manager
      </h1>
      <PrimaryButton onPress={addTask} label="Add Task" />
      {tasks.map((task) => (
        <div className="flex mb-[10px] justify-between items-center border-[1px] border-[#e7e7e7] px-[20px] py-[10px] rounded-md">
          <div className={`${task.editing? 'flex gap-[10px]':''}`}>
            {task.editing ? (
              <input
                type="text"
                value={task.title}
                onChange={(e) => handleChange(task.id, 'title', e.target.value)}
                placeholder="Title"
                className="bg-gray-6 bg-opacity-10 border border-gray-4 text-black  placeholder-[#e7e7e7] text-sm rounded-lg focus:ring-brand focus:border-brand block w-full p-2.5"
              />
            ) : (
              <h3 className="text-[20px] font-bold">{task.title}</h3>
            )}
            {task.editing ? (
              <input
                type="text"
                value={task.subtitle}
                onChange={(e) =>
                  handleChange(task.id, 'subtitle', e.target.value)
                }
                placeholder="Subtitle"
                className="bg-gray-6 bg-opacity-10 border border-gray-4 text-black  placeholder-[#e7e7e7] text-sm rounded-lg focus:ring-brand focus:border-brand block w-full p-2.5"
              />
            ) : (
              <p className="text-[14px] text-black/50">{task.subtitle}</p>
            )}
          </div>
          <div className="flex gap-[10px] items-center">
            {task.editing ? (
              <PrimaryButton onPress={() => toggleEditing(task.id)} label="Save"/>
            ) : (
              <>
                <BorderButton
                  onPress={() => toggleEditing(task.id)}
                  label="Edit"
                />
                <DangerButton
                  onPress={() => deleteTask(task.id)}
                  label="Delete"
                />
              </>
            )}
          </div>
        </div>
        // )}
        // </div>
      ))}
    </div>
  );
};
const Home = (props) => {
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <Task_1 />
        <Task_2 />
      </div>
    </MainLayout>
  );
};

const styles = {
  wrapper: 'mx-auto py-[100px] px-[100px]  my-[100px] '
};

export default Home;
