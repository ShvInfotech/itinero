import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

/**
 * Centralized route definitions with lazy-loaded pages.
 * Add new routes here as features are built.
 *
 * Pattern:
 *   1. Lazy-import the page component
 *   2. Add a <Route> element below
 *   3. Use the feature's barrel export (index.js)
 */

// ── Lazy-loaded Page Components ──────────────────────────
const HomePage = lazy(() => import("@/features/home"));
// const FlightsPage = lazy(() => import("@/features/flights"));
// const HotelsPage = lazy(() => import("@/features/hotels"));
// const DestinationsPage = lazy(() => import("@/features/destinations"));
// const DealsPage = lazy(() => import("@/features/deals"));
// const BookingPage = lazy(() => import("@/features/booking"));
// const LoginPage = lazy(() => import("@/features/auth"));
// const ProfilePage = lazy(() => import("@/features/profile"));
// const VeroPage = lazy(() => import("@/features/vero"));

/**
 * Loading fallback displayed while lazy chunks load.
 */
function PageLoader() {
  return (
    <div className="page-loader">
      <div className="page-loader__spinner" />
    </div>
  );
}

/**
 * Application routes wrapped in Suspense for code-splitting.
 */
export default function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Uncomment routes as features are built:
        <Route path="/flights" element={<FlightsPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/destinations/:id" element={<DestinationDetailPage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/booking/:type/:id" element={<BookingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/my-trips" element={<MyTripsPage />} />
        <Route path="/vero" element={<VeroPage />} />
        <Route path="*" element={<NotFoundPage />} />
        */}
      </Routes>
    </Suspense>
  );
}
