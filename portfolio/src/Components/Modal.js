export function Modal({ isOpen, onClose, work }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2 className="modal-title">{work.title}</h2>
                <img className="modal-image" src={work.image} alt={work.title}/>
            </div>
        </div>
    );
}