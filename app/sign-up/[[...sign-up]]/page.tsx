"use client"
import React from "react"
import { SignUp } from "@clerk/nextjs"
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
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card"
// import { FaGoogle, FaGithub } from "react-icons/fa"
// Form schema
// const formSchema = z
//   .object({
//     name: z.string().min(2, "Name must be at least 2 characters"),
//     email: z.string().email("Invalid email address"),
//     password: z
//       .string()
//       .min(8, "Password must be at least 8 characters")
//       .regex(/[A-Z]/, "Must contain at least one uppercase letter")
//       .regex(/[0-9]/, "Must contain at least one number"),
//     confirmPassword: z.string(),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords don't match",
//     path: ["confirmPassword"],
//   })

const Page = () => {
  //   const form = useForm<z.infer<typeof formSchema>>({
  //     resolver: zodResolver(formSchema),
  //     defaultValues: {
  //       name: "",
  //       email: "",
  //       password: "",
  //       confirmPassword: "",
  //     },
  //   })

  //   function onSubmit(values: z.infer<typeof formSchema>) {
  //     console.log(values)
  //   }

  return (
    <div className="min-h-screen bg-grid-gray-900/[0.04] bg-[#191919] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div> */}

      {/* <Card className="w-full max-w-md bg-gray-900/80 backdrop-blur-sm border border-gray-800 shadow-xl relative z-10">
       
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Create your AI-Mood account
          </CardTitle>
          <CardDescription className="text-gray-400">
            Track your emotional journey with AI-powered insights
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4">
        
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              className="bg-gray-800 hover:bg-gray-700 border-gray-700 text-gray-200"
            >
              <FaGithub className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button
              variant="outline"
              className="bg-gray-800 hover:bg-gray-700 border-gray-700 text-gray-200"
            >
              <FaGoogle className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-800"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-900 px-2 text-gray-500">
                OR CONTINUE WITH EMAIL
              </span>
            </div>
          </div>

          
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
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
                    <FormLabel className="text-gray-300">Password</FormLabel>
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

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">
                      Confirm Password
                    </FormLabel>
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

              <div className="text-xs text-gray-500">
                By signing up, you agree to our{" "}
                <a href="#" className="text-cyan-400 hover:underline">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-cyan-400 hover:underline">
                  Privacy Policy
                </a>
                .
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg hover:shadow-cyan-500/20 transition"
              >
                Create Account
              </Button>
            </form>
          </FormProvider>

          <div className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <a href="/sign-in" className="text-cyan-400 hover:underline">
              Sign in
            </a>
          </div>
        </CardContent>
      </Card>

     
      <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} AI-Mood. All rights reserved.
      </div> */}
      <SignUp
        afterSignUpUrl="/journal"
        appearance={{
          elements: {
            rootBox: "w-full max-w-md",
            card: "bg-gray-900/80 backdrop-blur-sm border border-gray-800 shadow-xl",
            headerTitle:
              "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500",
            headerSubtitle: "text-gray-400",
            socialButtonsBlockButton:
              "bg-gray-800 hover:bg-gray-700 border-gray-700 text-gray-200",
            dividerLine: "bg-gray-800",
            dividerText: "text-gray-500",
            formFieldLabel: "text-gray-300",
            formFieldInput:
              "bg-gray-800 border-gray-700 text-gray-200 focus:ring-2 focus:ring-cyan-500/50",
            formButtonPrimary: "bg-blue-600",
            //   "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border-cyan-500",
            footerActionText: "text-gray-500",
            footerActionLink: "text-cyan-400 hover:underline",
          },
        }}
      />
    </div>
  )
}

export default Page
