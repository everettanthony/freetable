export default function Skeleton() {
    return (
        <div className="w-72 m-3 rounded-lg overflow-hidden border">
            <div className="w-full h-36 bg-slate-200 animate-pulse"></div>
            <div className="py-6 px-6 pb-6">
                <div className="py-3 bg-slate-200 mb-3 animate-pulse"></div>
                <div className="py-1.5 bg-slate-200 mb-1 animate-pulse"></div>
                <div className="py-1 bg-slate-200 mb-3 animate-pulse"></div>
                <div className="py-1.5 bg-slate-200 animate-pulse"></div>
            </div>
        </div>
    )
}