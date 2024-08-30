import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const QrGenerator = lazy(() => import('./common/Generate/QrGenerator.jsx'))
const QrScanner = lazy(() => import('./common/Scan/QrScanner.jsx'))
const Navigate = lazy(() => import('./common/Navigate/Navigate.jsx'))
const History = lazy(() => import('./common/History/History.jsx'))

const Fallback = () => (<div>123</div>)

const LazyLoader = (props) => (
  <Suspense
    fallback = {<Fallback/>}
  >
    {props.children}
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyLoader><Navigate/></LazyLoader>,
  },
  {
    path: "/generate-qr",
    element: <LazyLoader><QrGenerator/></LazyLoader>,
  },
  {
    path: "/scan-qr",
    element: <LazyLoader><QrScanner/></LazyLoader>,
  },
  {
    path: "/history-qr",
    element: <LazyLoader><History/></LazyLoader>,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
