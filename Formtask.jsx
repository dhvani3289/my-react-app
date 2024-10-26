import './Form_Task/Formtask.css'
function Formtask() {
    let submitData = (() => {

    })
    return (
        <>
            {/* <div className='formBox'>
            <form onSubmit={submitData}>
                <div className='firstRow'>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Middle Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
                <div>
                    <h4>Info!Please provide your exact name as per Aadhaar to avail <br />
                        Aadhaar based benetits on IRCTC eTiCketing website.</h4>
                </div>
                <div className='demo'>
                    <select name="">
                        <option value="">Select Occupation</option>
                    </select>
                    <input type="date" name="" placeholder="Date of birth" />
                </div>
                <div>
                    <input type="radio" name='status' value="married" />Married
                    <input type="radio" name='status' value="unmarried" />Unmarried
                    <select name="">
                        <option value="">Country</option>
                    </select>
                </div>
                <div>
                    <input type="radio" name='gender' value="male" />Male
                    <input type="radio" name='gender' value="female" />Female
                    <input type="radio" name='gender' value="transgender" />Transgender
                </div>
                <div>
                    <input type="number" />
                    <select name="">
                        <option value="">Select a Nationality</option>
                    </select>
                </div>
            </form>
            </div> */}
            <form>
                <div class="form-row">
                    <input type="text" placeholder="Input 1" />
                    <input type="text" placeholder="Input 2" />
                </div>
                <div class="form-row">
                    <input type="text" placeholder="Input 3" />
                    <input type="text" placeholder="Input 4" />
                </div>
            </form>
        </>
    )
}

export default Formtask