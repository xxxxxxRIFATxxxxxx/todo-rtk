import React, { useState } from 'react';

const Modal = ({todo, setShowModal, handleUpdateTodo}) => {
    const {id, text, completed, color} = todo;
    const [ todoId, setTodoId ] = useState(id);
    const [ todoText, setTodoText ] = useState(text);
    const [ todoCompleted, setTodoCompleted ] = useState(completed);
    const [ todoColor, setTodoColor ] = useState(color);

    return (
        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                <div class="grid gap-6 mb-6 md:grid-cols-2">
                                    <div>
                                        <label for="id" class="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300">Id</label>
                                        <input 
                                            type="text" 
                                            id="id" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={id} 
                                            value={id}
                                            onChange={(e) => setTodoId(e.target.value)}
                                            required 
                                        />
                                    </div>

                                    <div>
                                        <label for="title" class="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300">Title</label>
                                        <input 
                                            type="text" 
                                            id="title" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={text} 
                                            value={text}
                                            onChange={(e) => setTodoText(e.target.value)}
                                            required 
                                        />
                                    </div>

                                    <div>
                                        <label for="color" class="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300">Color</label>
                                        <input 
                                            type="text" 
                                            id="color" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={color} 
                                            value={color}
                                            onChange={(e) => setTodoColor(e.target.value)}
                                            required 
                                        />
                                    </div>

                                    <div>
                                        <label for="completed" class="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300">Completed</label>
                                        <input 
                                            type="text" 
                                            id="completed" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={completed ? "true" : "false"} 
                                            value={completed}
                                            onChange={(e) => setTodoCompleted(e.target.value)}
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button 
                                type="button" 
                                class="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={handleUpdateTodo}
                            >
                                    Update
                            </button>

                            <button 
                                type="button" 
                                class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => setShowModal(false)}
                            >
                                    Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
     </div>
    );
};

export default Modal;