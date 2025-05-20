
import { Suspense } from "react";
import { LoadingPage } from "./layouts/components/LoadingPage";
import { RouterProvider } from "react-router";
import { routers } from "./layouts/Router";


function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
       
          <RouterProvider router={routers} />
       
      </Suspense>

  );
}

export default App;
