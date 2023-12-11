export default function BoxModel() {
    return (
        <div>
            <h1>Comprendiendo el Modelo de Caja (Box Model) de HTML</h1>

            <div style={{border: '1px solid red'}}>

                <div style={{
                    margin: '30px',
                    //'margin-left': '20px',
                    border: '10px solid black',
                    padding: '40px',

                    'box-sizing': 'border-box',
                    width: '200px',
                    height: '200px',

                    background: 'green',

                    display: 'inline-block',
                }}>
                    <span style={{color: 'white'}}>Box A</span>
                </div>

                <div style={{
                    margin: '0px',
                    border: '0px solid black',
                    padding: '0px',



                    background: 'blue',
                    width: '200px',
                    height: '200px',
                    display: 'inline-block'
                }}>
                    <span style={{color: 'white'}}>Box B</span>
                </div>

            </div>

        </div>
    )
}