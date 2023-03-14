import { api } from "../utils/api";
import {
  CalendarIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";

export default function Checklist() {
  const { status } = useSession();
  const { data: taskEntries, isLoading } = api.tasks.getAllTasks.useQuery();
  const utils = api.useContext();
  const [showNoti, setNoti] = useState(true);
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

  if (status === "unauthenticated") {
    return (
      <div className="rounded-md bg-yellow-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon
              className="h-5 w-5 text-yellow-400"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">
              Attention needed
            </h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>You need to sign in to access this service.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading || status === "loading") {
    return null;
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
        <h3 className="mt-2 text-sm font-semibold text-gray-900">No tasks</h3>
      </div>
    );
  }

  return (
    <>
      <>
        <div
          aria-live="assertive"
          className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
        >
          <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
            <Transition
              show={showNoti}
              as={Fragment}
              enter="transform ease-out duration-300 transition"
              enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
              enterTo="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <XCircleIcon
                        className="h-6 w-6 text-red-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                      <p className="text-sm font-medium text-gray-900">
                        Alert!
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        You have 6 unread notifications
                      </p>
                    </div>
                    <div className="ml-4 flex flex-shrink-0">
                      <button
                        type="button"
                        className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => {
                          setNoti(false);
                        }}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </>
      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {taskEntries?.map((entry) => (
            <li key={entry.id}>
              <span className="block hover:bg-gray-50">
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
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
