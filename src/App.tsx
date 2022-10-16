import Icon from "@mdi/react";
import { mdiEmoticonExcitedOutline } from "@mdi/js";

export const App = () => {
  return (
    <div className="h-screen w-full bg-blue-900">
      <h1 className="mx-auto text-center pt-[40vh] text-white text-3xl">Hello world!</h1>
      <Icon path={ mdiEmoticonExcitedOutline } size='2rem' className="text-white text-center mx-auto mt-4" />
    </div>
  );
};
