"use client";

import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Image,
    Input,
    Checkbox,
    Link,
} from "@heroui/react";
import { useState } from "react";
import { Eye, EyeSlash, Login, Sms, Lock } from "iconsax-react";
import toast from "react-hot-toast";

export default function LoginPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate login logic
        setTimeout(() => {
            console.log("Login Attempt:", { email, password, rememberMe });
            toast.success("Login attempt successful (Simulated)");
            setIsLoading(false);
        }, 1500);
    };

    return (
        <Card className="max-w-[450px] w-full min-h-[500px] h-auto md:h-[650px] shadow-2xl relative overflow-hidden bg-white/20 backdrop-blur-xl border border-white/30 mx-4 rounded-[2.5rem]">
            <CardBody className="z-20 relative flex flex-col justify-center px-6 md:px-10 py-8 md:py-10">
                <div className="mb-6 md:mb-8 text-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        Welcome Back
                    </h1>
                    <p className="text-gray-500 text-xs md:text-sm font-medium">
                        Please enter your details to sign in
                    </p>
                </div>

                <form onSubmit={handleLogin} className="flex flex-col gap-6">
                    <Input
                        label="Email Address"
                        // placeholder="Enter your email"
                        type="email"
                        variant="bordered"
                        value={email}
                        onValueChange={setEmail}
                        startContent={
                            <Sms size={18} color="#9ca3af" variant="Outline" />
                        }
                        classNames={{
                            label: "text-gray-600",
                            input: "text-gray-800",
                            inputWrapper:
                                "border-rose-200 focus-within:border-rose-400 bg-white/50 backdrop-blur-sm",
                        }}
                        required
                    />

                    <Input
                        label="Password"
                        // placeholder="Enter your password"
                        type={isVisible ? "text" : "password"}
                        variant="bordered"
                        value={password}
                        onValueChange={setPassword}
                        startContent={
                            <Lock size={18} color="#9ca3af" variant="Outline" />
                        }
                        endContent={
                            <button
                                className="focus:outline-none"
                                type="button"
                                onClick={toggleVisibility}
                            >
                                {isVisible ? (
                                    <EyeSlash
                                        size={20}
                                        color="#9ca3af"
                                        variant="Outline"
                                    />
                                ) : (
                                    <Eye
                                        size={20}
                                        color="#9ca3af"
                                        variant="Outline"
                                    />
                                )}
                            </button>
                        }
                        classNames={{
                            label: "text-gray-600",
                            input: "text-gray-800",
                            inputWrapper:
                                "border-rose-200 focus-within:border-rose-400 bg-white/50 backdrop-blur-sm",
                        }}
                        required
                    />

                    <div className="flex justify-between items-center px-1">
                        <Checkbox
                            isSelected={rememberMe}
                            onValueChange={setRememberMe}
                            classNames={{
                                label: "text-gray-600 text-xs",
                            }}
                        >
                            Remember me
                        </Checkbox>
                        <Link
                            href="#"
                            className="text-rose-600 text-xs font-medium hover:text-rose-700 transition-colors"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <Button
                        type="submit"
                        color="danger"
                        className="w-full font-semibold py-6 text-md mt-2 bg-rose-500 hover:bg-rose-600 shadow-lg shadow-rose-200"
                        startContent={
                            !isLoading && (
                                <Login size={20} color="#ffffff" variant="Outline" />
                            )
                        }
                        isLoading={isLoading}
                    >
                        {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/auth/signup"
                            className="text-rose-600 font-semibold hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </CardBody>

            <CardFooter className="z-20 absolute bottom-0 w-full justify-center bg-white/40 backdrop-blur-md border-t border-rose-100 py-3">
                <p className="text-xs text-gray-400 font-medium">
                    © 2026 ChamNay Inc. All rights reserved.
                </p>
            </CardFooter>
        </Card>
    );
}
