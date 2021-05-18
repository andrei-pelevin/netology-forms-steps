
const Note = ({ item, onDel, i }) => {

    return (
        <div className="row p-3">
            <div className="col-3 rounded-pill">{item.date}</div>
            <div className="col-3 rounded-pill">{item.distance}</div>
            <div className="col-3 rounded-pill">
            <span className="material-icons" onClick={() => onDel(item.date)}>highlight_off</span>
            <span className="material-icons" >create</span>
            </div>
        </div>
    )
}


export default Note;