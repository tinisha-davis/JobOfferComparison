export default function Results( { dataFields } ) {
    return (
        <section id="results">
            <h3>Results:</h3>
            {dataFields.map((field) => (
                <div class="result">
                    <p>{field.title}: TBD </p>
                    <p> Difference:{field.placeholder}</p>
                </div>
            ))}  
        </section>
    )
}