import { useState } from 'react'

function UserForm(callback, defaults) {
    const [inputs, setInputs] = useState(defaults);




    const handleInput = (event) => {
    //   console.log(event.target.value)
    //   console.log(event.target.id)
        setInputs({
            ...inputs,
            [event.target.id]: event.target.value
        });
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log('asd')
       // console.log(callback)
        callback(inputs);
        //  console.log(event)
    }


    return {
        inputs,
        handleInput,
        handleSubmit
    }

}

export default UserForm
