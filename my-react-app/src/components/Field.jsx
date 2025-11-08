export default function Field({ dataField }) {
    return (
        <div class="field">
            <label>{dataField.title}: </label>
            <input name={dataField.title} placeholder="Enter Here" />
        </div>
    )
}
