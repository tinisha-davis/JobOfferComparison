import Field from './Field'

export default function FieldContainer( { dataFields } ) {

    return (
        <section class="fieldContainer">
            {dataFields.map(dataField => (
                <Field key={dataField.id} dataField={dataField} />
            ))}
            <button>Export</button>
            <button>Import</button>
        </section>
    )
}