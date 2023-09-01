export default function Spinner(props: { color?: string, visible: boolean }) {
    return (
        <div className="flex items-center justify-center">
            {props.visible && (
                <div className={`spinner spinner-${props.color}`}></div>
            )}
        </div>

    )
}