import { GalleryVerticalEnd } from "lucide-react";

import ForgotPasswordPage from "@/components/forgot-password";

export default function ForgetPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted pt-4 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          ProGardget Inc.
        </a>
        <ForgotPasswordPage />
      </div>
    </div>
  );
}
