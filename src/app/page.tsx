"use client"
import { useState } from 'react';
import { demos } from '@/lib/demos';
import Link from 'next/link';
import { TaskEmptyPlaceholder } from '@/components/task-empty-placeholder';

export default function Page() {
  const [tasks, setTasks] = useState(demos);

  if (tasks.length === 0) {
    return <TaskEmptyPlaceholder onCreateTask={(newTask) => setTasks([...tasks, newTask])} />;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Your Lists of Tasks</h1>
      <div className="space-y-10 text-white">
            <div className="space-y-5">
              <div className="text-sm font-semibold tracking-wider text-gray-400">
                the tasks titles and their descriptions
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                  
                    <Link
                      href=''
                      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-gray-50">
                        name
                      </div>
                        <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                          description
                        </div>
                    </Link>
                 
              </div>
            </div>
         
      </div>
    </div>
  );
}
