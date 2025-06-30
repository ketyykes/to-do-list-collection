<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  type Todo = {
    id: number;
    text: string;
    done: boolean;
  };

  let todos: Todo[] = [];
  let newTodo = '';

  // 只在瀏覽器環境中從 localStorage 加載待辦事項
  onMount(() => {
    if (browser) {
      const saved = localStorage.getItem('todos');
      if (saved) {
        todos = JSON.parse(saved);
      }
    }
  });

  // 當 todos 變化時保存到 localStorage (只在瀏覽器環境)
  $: {
    if (browser && todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  function addTodo() {
    if (newTodo.trim() === '') return;
    
    todos = [...todos, {
      id: Date.now(),
      text: newTodo,
      done: false
    }];
    
    newTodo = '';
  }

  function toggleTodo(id: number) {
    todos = todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
  }

  function deleteTodo(id: number) {
    todos = todos.filter(todo => todo.id !== id);
  }
</script>

<div class="max-w-md mx-auto p-4">
  <h1 class="text-2xl font-bold mb-6">Svelte 待辦事項</h1>
  
  <div class="flex gap-2 mb-4">
    <input
      type="text"
      bind:value={newTodo}
      placeholder="新增待辦事項..."
      class="flex-1 p-2 border rounded"
      on:keydown={(e) => e.key === 'Enter' && addTodo()}
    />
    <button
      on:click={addTodo}
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      新增
    </button>
  </div>

  <ul class="space-y-2">
    {#each todos as todo (todo.id)}
      <li class="flex items-center p-3 border-b">
        <input
          type="checkbox"
          checked={todo.done}
          on:change={() => toggleTodo(todo.id)}
          class="mr-3 h-5 w-5"
        />
        <span class:line-through={todo.done} class:text-gray-500={todo.done}>
          {todo.text}
        </span>
        <button
          on:click={() => deleteTodo(todo.id)}
          class="ml-auto px-2 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
        >
          刪除
        </button>
      </li>
    {/each}
  </ul>
</div>
