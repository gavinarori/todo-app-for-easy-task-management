import React, { useState } from 'react'


export const NewTask = () => {
  return (
    <section className="p-6 dark:dark:text-gray-100">
	<form  className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:dark:bg-gray-900">
		<h2 className="w-full text-3xl ">New task</h2>
		<div>
			<label htmlFor="name" className="block mb-1 ml-1">Title</label>
			<input id="name" type="text" placeholder="Your name" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:dark:bg-gray-800" />
		</div>
		<div>
			<label htmlFor="email" className="block mb-1 ml-1">Description</label>
			<input id="email" type="email" placeholder="Your email" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:dark:bg-gray-800" />
		</div>
		<div>
			<label htmlFor="message" className="block mb-1 ml-1">set your deadline</label>
			<textarea id="message"  className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri dark:dark:bg-gray-800"></textarea>
		</div>
		<div>
			<button  className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri  bg-black text-white">save</button>
		</div>
	</form>
</section>
  )
} 
export default NewTask;