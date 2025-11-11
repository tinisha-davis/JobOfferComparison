import Field from './Field'

export default function FieldContainer( { dataFields } ) {

    return (
        <section className="fieldContainer">

            <div className="offerPlacehold">
                <p>Offer Document Will Display Here</p>
                {/*upload logic here*/}
            </div>

            <div>     </div>

            {dataFields.map(dataField => (
                <Field key={dataField.id} dataField={dataField} />
            ))}
            <button>Export</button>
            <button>Import</button>
        </section>
    )
}