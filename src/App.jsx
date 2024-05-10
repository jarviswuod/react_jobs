import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import JobsPage from "./pages/JobsPage";
import AddJobPage from "./pages/AddJobPage";
import JobDetailsPage, { jobLoader } from "./pages/JobDetailsPage";
import EditJobDetails from "./EditJobDetails";

const App = () => {
  const updatejob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: { "Content-Type": "appliaion/json" },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<JobDetailsPage />}
          loader={jobLoader}
        />
        <Route
          path="/jobs/:id/edit"
          element={<EditJobDetails jobUpdatefunc={updatejob} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJobPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
