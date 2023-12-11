export default function Position() {
    return (
        <div style={{height: '1289px'}}>
            <h1>Understanding position CSS rule</h1>

            <div style={{
                //position:'relative',
                width: '600px',
                height: '600px',
                border: '1px solid black',
                background: 'green',
                //padding: '180px'
            }}>
                <h6 style={{color: 'white'}}>
                    Grandpa
                </h6>
{/*
                <div style={{width:'3px', height:'3px', background:'red'}}></div>
*/}
                <div style={{
                    //position: 'absolute',
                    //left: '0px',
                    //top: '0px',
                    width: '400px',
                    height: '400px',
                    border: '1px solid black',
                    background: 'blue'
                }}>
                    <h6 style={{color: 'white'}}>
                        Father
                    </h6>
{/*
                    <div style={{width:'3px', height:'3px', background:'red'}}></div>
*/}
                    <div style={{
                        //position: 'relative',
                        left: '0px',
                        top: '0px',
                        width: '100px',
                        height: '100px',
                        border: '1px solid blue',
                        background: 'yellow'
                    }}>
                        <h6>Son</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}