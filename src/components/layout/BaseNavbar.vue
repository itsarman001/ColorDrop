<template>
  <nav class="flex items-center justify-between p-4 bg-gray-800 text-white">
    <div>ColorDrop</div>
    <ul class="flex space-x-4 ml-auto mr-8">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
    <button class="bg-blue-500 px-4 py-1 rounded-full hover:bg-blue-600">CTA</button>
  </nav>
</template>
