import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./NotFoundPage";
import JobDetailPage, { jobLoader } from "./pages/JobDetailPage";
import AddJobPage from "./pages/AddJobPage";
import JobDetailsEdit from "./pages/JobDetailsEdit";

const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const deleteJob = async (id) => {
    console.log(id);
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/edit/:id" element={<JobDetailsEdit />} />

        <Route
          path="/jobs/:id"
          element={<JobDetailPage deleteJobFunc={deleteJob} />}
          loader={jobLoader}
        />

        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
