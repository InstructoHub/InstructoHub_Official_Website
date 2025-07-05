import React, { useState, useEffect } from "react";
import Header from "./Header";
import {
    Server,
    School,
    CheckCircle,
    AlertTriangle,
    Zap,
    Database,
    Shield,
    Globe,
} from "lucide-react";
const InputField = ({
    id,
    label,
    value,
    onChange,
    onKeyUp,
    type = "text",
    placeholder,
    required = false,
    children,
}) => (
    <div className="group">
        <label
            htmlFor={id}
            className="block text-sm font-semibold text-text-primary mb-2"
        >
            {label} {required && <span className="text-danger">*</span>}
        </label>
        <div className="flex items-center">
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                onKeyUp={onKeyUp}
                placeholder={placeholder}
                required={required}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg shadow-sm focus:ring-2 focus:ring-brand-400 focus:border-brand-500 transition-all duration-200 hover:border-neutral-400"
            />
            {children}
        </div>
    </div>
);
const SectionTitle = ({ icon, title, subtitle }) => (
    <div className="flex items-start border-b border-brand-100 pb-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg mr-3 shadow-md">
            {React.cloneElement(icon, { className: "h-5 w-5 text-text-light" })}
        </div>
        <div>
            <h2 className="text-xl font-semibold text-text-primary">{title}</h2>
            {subtitle && (
                <p className="text-text-secondary text-sm mt-1">{subtitle}</p>
            )}
        </div>
    </div>
);
const CreationLoader = () => {
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("Getting your information processed");
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        {
            icon: <Zap className="h-5 w-5" />,
            text: "Getting your information processed",
            delay: 0,
        },
        {
            icon: <Server className="h-5 w-5" />,
            text: "Our servers talking to each other to start the process",
            delay: 12.5,
        },
        {
            icon: <Database className="h-5 w-5" />,
            text: "Your dedicated database is getting ready, we understand, privacy is important",
            delay: 25,
        },
        {
            icon: <Shield className="h-5 w-5" />,
            text: "Creating secure environment and configuring user permissions",
            delay: 37.5,
        },
        {
            icon: <School className="h-5 w-5" />,
            text: "Installing essential plugins and learning tools for your LMS",
            delay: 50,
        },
        {
            icon: <Globe className="h-5 w-5" />,
            text: "Setting up your domain, for your better identity",
            delay: 62.5,
        },
        {
            icon: <CheckCircle className="h-5 w-5" />,
            text: "Setting up SSL because security matters the most",
            delay: 75,
        },
        {
            icon: <CheckCircle className="h-5 w-5" />,
            text: "This is the last step, hold your breath we are just getting it ready...",
            delay: 87.5,
        },
    ];
    useEffect(() => {
        const totalDuration = 70000; // Total duration in milliseconds (70 seconds)
        const progressInterval = setInterval(() => {
            setProgress((prev) => Math.min(prev + 100 / (totalDuration / 100), 99));
        }, 100);
        steps.forEach((step, index) => {
            setTimeout(() => {
                setMessage(step.text);
                setCurrentStep(index);
            }, (step.delay / 100) * totalDuration);
        });
        return () => {
            clearInterval(progressInterval);
        };
    }, []);
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-secondary-800 via-secondary-700 to-secondary-900 bg-opacity-95 flex flex-col items-center justify-center z-50 backdrop-blur-sm">
            <div className="bg-background-card rounded-xl shadow-2xl p-6 w-full max-w-md text-center relative overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600"
                    style={{ width: `${progress}%`, transition: "width 0.3s ease-out" }}
                ></div>
                <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-4 relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 animate-spin opacity-20"></div>
                        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 animate-pulse flex items-center justify-center">
                            <Server className="h-6 w-6 text-text-light" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent mb-2">
                        Creating Your InstructoHub LMS
                    </h3>
                    <div className="flex items-center justify-center mb-4 p-3 bg-neutral-50 rounded-lg">
                        <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full mr-2 animate-pulse">
                            {steps[currentStep]?.icon &&
                                React.cloneElement(steps[currentStep].icon, {
                                    className: "h-4 w-4 text-text-light",
                                })}
                        </div>
                        <p className="text-text-secondary text-sm">{message}</p>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2 mb-3 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 h-2 rounded-full transition-all duration-300 ease-out relative"
                            style={{ width: `${progress}%` }}
                        >
                            <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
                        </div>
                    </div>
                    <div className="flex justify-between text-xs text-text-muted mb-3">
                        <span>{Math.round(progress)}% Complete</span>
                        <span>
                            ~{Math.max(0, Math.round((100 - progress) * 0.7))}s remaining
                        </span>
                    </div>
                    <div className="grid grid-cols-8 gap-1 mb-4">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`h-1 rounded-full transition-all duration-500 ${index <= currentStep
                                    ? "bg-gradient-to-r from-brand-500 to-brand-600"
                                    : "bg-neutral-200"
                                    }`}
                            ></div>
                        ))}
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed">
                        Please keep this window open. We're setting up your complete
                        InstructoHub environment with database, plugins, and security
                        configurations. This process typically takes 60-80 seconds.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default function App() {
    const [formData, setFormData] = useState({
        subdomain: "sitename",
        institution_name: "My Learning Platform",
        admin_email: "admin@example.com",
        admin_user: "admin",
        admin_password: "Ankit@1234",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: "idle", message: "" });

    // ── NEW: subdomain‐availability state ────────────────────────────────
    const [subdomainStatus, setSubdomainStatus] = useState({
        type: "idle",    // "idle" | "checking" | "available" | "unavailable" | "error"
        message: ""
    });

    // ── NEW: function to call the tenant_find_api endpoint ───────────────
    const checkSubdomainAvailability = async () => {
        const name = formData.subdomain.trim();
        if (!name) return;
        setSubdomainStatus({ type: "checking", message: "" });
        try {
            const resp = await fetch(
                `https://admin.mdl.instructohub.com/local/multitenant/tenant_find_api.php?name=${encodeURIComponent(name)}`,
                { method: "GET", mode: "cors" }
            );
            const result = await resp.json();
            // adapt this to the actual JSON structure your PHP returns:
            if (!result) {
                setSubdomainStatus({ type: "unavailable", message: "That subdomain is already taken." });
            } else {
                setSubdomainStatus({ type: "available", message: "Good news! It's available." });
            }
        } catch (err) {
            console.error("Error checking tenant:", err);
            setSubdomainStatus({ type: "error", message: "Couldn't verify availability. Try again." });
        }
    };
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        if (status.type !== "idle") {
            setStatus({ type: "idle", message: "" });
        }
        // reset availability state whenever they type
        if (id === "subdomain" && subdomainStatus.type !== "idle") {
            setSubdomainStatus({ type: "idle", message: "" });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: "idle", message: "" });
        try {
            const form = new FormData();
            Object.entries(formData).forEach(([k, v]) => form.append(k, v));
            const response = await fetch(
                "https://admin.mdl.instructohub.com/local/multitenant/process_tenant.php",
                {
                    method: "POST",
                    body: form,
                    mode: "cors"
                }
            );
            if (response.ok) {
                setStatus({
                    type: "success",
                    message: `🎉 Success! Your InstructoHub LMS "${formData.institution_name}" is now live at ${formData.subdomain}.instructohub.com`,
                });
                window.location.href = `https://${formData.subdomain}.instructohub.com`;
            } else {
                setStatus({
                    type: "error",
                    message:
                        "Creation failed. Please verify your configuration and try again. If the issue persists, contact support.",
                });
            }
        } catch (error) {
            console.error("Error creating tenant:", error);
            setStatus({
                type: "error",
                message:
                    "Network error occurred. Please check your connection and try again.",
            });
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="bg-white min-h-screen">
            <Header />
            {isLoading && <CreationLoader />}
            <main className="container mx-auto max-w-4xl pt-4">
                <div className="bg-neutral-100 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-brand-100">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600"></div>
                    <div className="text-center mb-8">
                        <p className="text-text-secondary text-xl font-bold max-w-2xl mx-auto">
                            Create your personalized learning environment in minutes. Fill in
                            the details below to launch your professional-grade LMS instance.
                        </p>
                    </div>
                    {status.type !== "idle" && (
                        <div
                            className={`p-4 mb-6 rounded-xl flex items-start shadow-lg border-l-4 animate-fadeIn ${status.type === "success"
                                ? "bg-gradient-to-r from-success/10 to-success/5 text-success-dark border-success"
                                : "bg-gradient-to-r from-danger/10 to-danger/5 text-danger-dark border-danger"
                                }`}
                        >
                            <div className="flex-shrink-0 mr-3">
                                {status.type === "success" ? (
                                    <div className="flex items-center justify-center w-6 h-6 bg-success rounded-full">
                                        <CheckCircle className="h-4 w-4 text-text-light" />
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center w-6 h-6 bg-danger rounded-full">
                                        <AlertTriangle className="h-4 w-4 text-text-light" />
                                    </div>
                                )}
                            </div>
                            <div className="flex-grow">
                                <p className="text-sm font-medium">{status.message}</p>
                            </div>
                            <button
                                onClick={() => setStatus({ type: "idle", message: "" })}
                                className="ml-4 text-lg font-bold hover:opacity-70 transition-opacity"
                            >
                                ×
                            </button>
                        </div>
                    )}
                    <div className="space-y-8">
                        <section>
                            <SectionTitle
                                icon={<Globe />}
                                title="LMS Configuration"
                                subtitle="Configure your LMS's basic settings and domain"
                            />
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <InputField
                                        id="subdomain"
                                        label="LMS Subdomain"
                                        value={formData.subdomain}
                                        onChange={handleInputChange}
                                        onKeyUp={checkSubdomainAvailability}
                                        placeholder="e.g., my-learning-site"
                                        required
                                    >
                                        <span className="inline-flex items-center bg-gradient-to-r from-neutral-100 to-brand-50 px-3 py-2 rounded-r-lg border border-l-0 border-neutral-300 text-text-secondary text-sm font-medium">
                                            .instructohub.com
                                        </span>
                                    </InputField>
                                    <p className="mt-1 text-sm">
                                        {subdomainStatus.type === "checking" && "Checking…"}
                                        {subdomainStatus.type === "available" && (
                                            <span className="text-success">{subdomainStatus.message}</span>
                                        )}
                                        {subdomainStatus.type === "unavailable" && (
                                            <span className="text-danger">{subdomainStatus.message}</span>
                                        )}
                                        {subdomainStatus.type === "error" && (
                                            <span className="text-warning">{subdomainStatus.message}</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section>
                            <SectionTitle
                                icon={<School />}
                                title="Institution Details"
                                subtitle="Customize your learning management system settings"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <InputField
                                        id="institution_name"
                                        label="Your Institution Name"
                                        value={formData.institution_name}
                                        onChange={handleInputChange}
                                        placeholder="e.g., My Learning Academy"
                                        required
                                    />
                                </div>
                                <InputField
                                    id="admin_email"
                                    label="Admin Email"
                                    type="email"
                                    value={formData.admin_email}
                                    onChange={handleInputChange}
                                    placeholder="admin@yourorganization.com"
                                    required
                                />
                                <InputField
                                    id="admin_user"
                                    label="Admin Username"
                                    value={formData.admin_user}
                                    onChange={handleInputChange}
                                    placeholder="Choose a strong username"
                                    required
                                />
                                <div className="md:col-span-2">
                                    <InputField
                                        id="admin_password"
                                        label="Admin Password"
                                        type="password"
                                        value={formData.admin_password}
                                        onChange={handleInputChange}
                                        placeholder="Enter a secure password (8+ characters)"
                                        required
                                    />
                                </div>
                            </div>
                        </section>
                        <div className="pt-6 border-t border-brand-100 flex justify-center">
                            <button
                                onClick={handleSubmit}
                                disabled={isLoading}
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-text-light bg-gradient-to-r from-brand-500 via-brand-600 to-brand-500 hover:from-brand-600 hover:via-brand-700 hover:to-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-300 transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="animate-spin -ml-1 mr-3 h-5 w-5 border-2 border-text-light border-t-transparent rounded-full"></div>
                                        Creating Your LMS...
                                    </>
                                ) : (
                                    <>
                                        <Zap className="mr-2 h-5 w-5" />
                                        Create InstructoHub LMS
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}