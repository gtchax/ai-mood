import React from "react"
// import { KeycloakLogo } from "./icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const AuthLayout = ({ mode = "login" }: { mode?: "login" | "register" }) => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col">
      {/* Top Bar */}
      <header className="bg-black border-b border-[#1E1E1E] py-3 px-6">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* <KeycloakLogo className="h-6 w-6" /> */}
            <span className="font-medium text-white">AI-Mood</span>
          </div>
          <div className="text-sm text-[#A1A1A1]">
            Need help?{" "}
            <a href="#" className="text-[#3B82F6] hover:underline">
              Contact support
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-[400px]">
          <Card className="bg-[#111111] border-[#1E1E1E] shadow-lg">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-xl font-medium text-white text-center">
                {mode === "login"
                  ? "Sign in to your account"
                  : "Create new account"}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#D4D4D4] text-sm">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="bg-[#1A1A1A] border-[#333333] text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password" className="text-[#D4D4D4] text-sm">
                    Password
                  </Label>
                  {mode === "login" && (
                    <a
                      href="#"
                      className="text-xs text-[#3B82F6] hover:underline"
                    >
                      Forgot password?
                    </a>
                  )}
                </div>
                <Input
                  id="password"
                  type="password"
                  className="bg-[#1A1A1A] border-[#333333] text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {mode === "register" && (
                <div className="space-y-2">
                  <Label
                    htmlFor="confirm-password"
                    className="text-[#D4D4D4] text-sm"
                  >
                    Confirm password
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    className="bg-[#1A1A1A] border-[#333333] text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-2 px-4 rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#111111]"
              >
                {mode === "login" ? "Sign In" : "Create Account"}
              </Button>
            </CardContent>

            <CardFooter className="flex flex-col items-center pt-0">
              <p className="text-sm text-[#A1A1A1]">
                {mode === "login" ? (
                  <>
                    Don&#39;t have an account?{" "}
                    <a
                      href="/register"
                      className="text-[#3B82F6] hover:underline"
                    >
                      Sign up
                    </a>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <a href="/login" className="text-[#3B82F6] hover:underline">
                      Sign in
                    </a>
                  </>
                )}
              </p>
            </CardFooter>
          </Card>

          <div className="mt-6 text-center text-xs text-[#666666]">
            By continuing, you agree to our{" "}
            <a href="#" className="text-[#3B82F6] hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#3B82F6] hover:underline">
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-[#1E1E1E] py-4 px-6">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center text-sm text-[#A1A1A1]">
          <div>© {new Date().getFullYear()} AI-Mood. All rights reserved.</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white hover:underline">
              Terms
            </a>
            <a href="#" className="hover:text-white hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:text-white hover:underline">
              Docs
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AuthLayout
