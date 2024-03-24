import { QuestionMarkCircleIcon } from "@heroicons/react/16/solid";

export const EmptyTimelineSection = () => (
  <div className="w-full p-4 text-center max-w-96">
    <QuestionMarkCircleIcon className="h-20 w-20 text-gray-300 mx-auto" />
    <div className="mt-4 text-center font-medium">First time? No problem!</div>
    <div className="mt-2 text-center text-sm text-gray-700">
      Not sure what to start with? Let us generate an example on the spot for
      you, using the button below.
    </div>
    <div className="mt-6">
      <button
        type="button"
        className="bg-indigo-600 text-white rounded-md px-4 py-2"
      >
        Generate example
      </button>
    </div>
  </div>
);
