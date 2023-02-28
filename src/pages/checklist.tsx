import { api } from "../utils/api";
import {
  CalendarIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";

export default function Checklist() {
  const { data: taskEntries, isLoading } = api.tasks.getAllTasks.useQuery();
  const utils = api.useContext();
  const deleteTask = api.tasks.deleteTask.useMutation({
    onMutate: async (deletedEntry) => {
      await utils.tasks.getAllTasks.cancel();
      utils.tasks.getAllTasks.setData(undefined, (prevEntries) => {
        if (prevEntries) {
          return prevEntries.filter((entry) => entry.id !== deletedEntry.id);
        } else {
          return prevEntries;
        }
      });
    },
    onSettled: async () => {
      await utils.tasks.getAllTasks.invalidate();
    },
  });

  if (status === "loading" || isLoading) {
    return <></>;
  }

  if (taskEntries?.length === 0) {
    return (
      <div className="text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          />
        </svg>
        <h3 className="mt-2 text-sm font-semibold text-gray-900">
          No tasks
        </h3>
      </div>
    );
  }

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {taskEntries?.map((entry) => (
          <li key={entry.id}>
            <a href="#" className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div className="truncate">
                    <div className="flex text-sm">
                      <p className="truncate font-medium text-indigo-600">
                        {entry.name}
                      </p>
                    </div>
                    <div className="mt-2 flex">
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <p>
                          Due at{" "}
                          <time dateTime={entry.dueAt.toISOString()}>
                            {entry.dueAt.toLocaleString()}
                          </time>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    deleteTask.mutate({
                      id: entry.id,
                    });
                  }}
                  className="ml-5 flex-shrink-0"
                >
                  <XMarkIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
