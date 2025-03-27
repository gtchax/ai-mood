"use client"
import React from "react"
import { SignIn } from "@clerk/nextjs"
// import { FormProvider, useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import * as z from "zod"
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator"
// import { GitHubLogoIcon } from "react-icons"
// import { FaGoogle } from "react-icons/fa"
// Form schema
// const formSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(8, "Password must be at least 8 characters"),
// })

const SignInPage = () => {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   })

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     
//   }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center p-4">
      {/* Glowing background elements */}
      {/* <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div> */}
      {/* <Card className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-lg relative overflow-hidden">
    
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Welcome to AI-Mood
          </CardTitle>
          <p className="text-sm text-center text-gray-400">
            Sign in to access your mood journal
          </p>
        </CardHeader>

        <CardContent className="grid gap-4">
          <Button
            variant="outline"
            className="bg-gray-800 hover:bg-gray-700 border-gray-700 text-gray-200"
          >
            <FaGoogle className="mr-2 h-4 w-4" />
            Continue with Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full border-t border-gray-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-800 px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="you@example.com"
                        className="bg-gray-800 border-gray-700 text-gray-200 focus:ring-2 focus:ring-cyan-500/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-gray-300">Password</FormLabel>
                      <a
                        href="#"
                        className="text-sm text-cyan-400 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        className="bg-gray-800 border-gray-700 text-gray-200 focus:ring-2 focus:ring-cyan-500/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg hover:shadow-cyan-500/20 transition"
              >
                Sign In
              </Button>
            </form>
          </FormProvider>

          <p className="text-sm text-center text-gray-500">
            Don&#39;t have an account?{" "}
            <a href="/sign-up" className="text-cyan-400 hover:underline">
              Sign up
            </a>
          </p>
        </CardContent>
      </Card> */}
      <SignIn />
    </div>
  )
}

export default SignInPage
