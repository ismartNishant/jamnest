'use client'

export default function ErrorBoundry({ error }: { error: Error }) {
    return (
    <div className="h-screen flex items-center justify-center">
        {error.message}
    </div>
    );
}