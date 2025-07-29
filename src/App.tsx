import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MatchingListPage from "./pages/MatchingListPage";
import MatchingDetailPage from "./pages/MatchingDetailPage";
import IntegratedManagementPage from "./pages/IntegratedManagementPage";
import RequestDetailPage from "./pages/RequestDetailPage";
import { LoginForm } from "./components/auth/login-form";
import { TermsAgreementForm } from "./components/auth/terms-agreement";
import { SignUpForm } from "./components/auth/signup-form";
import { EmailVerification } from "./components/auth/email-verification";
import { SignUpComplete } from "./components/auth/signup-complete";
import { FindIdResult } from "./components/auth/find-id-result";
import { PasswordReset } from "./components/auth/password-reset";
import { PasswordResetComplete } from "./components/auth/password-reset-complete";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<TermsAgreementForm />} />
          <Route path="/signup/form" element={<SignUpForm />} />
          <Route path="/signup/email-verify" element={<EmailVerification mode="signup" />} />
          <Route path="/signup/complete" element={<SignUpComplete />} />
          <Route path="/find-id" element={<EmailVerification mode="find-id" />} />
          <Route path="/find-id/result" element={<FindIdResult />} />
          <Route path="/find-password" element={<EmailVerification mode="find-password" />} />
          <Route path="/find-password/reset" element={<PasswordReset />} />
          <Route path="/password-reset/complete" element={<PasswordResetComplete />} />
          <Route path="/home" element={<Index />} />
          <Route path="/matching" element={<MatchingListPage />} />
          <Route path="/matching/:id" element={<MatchingDetailPage />} />
          <Route path="/management" element={<IntegratedManagementPage />} />
          <Route path="/management/request/:id" element={<RequestDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
