import Note from "./Note/Note";
import { useState } from 'react';


const Form = () => {

    const [forms, setForm] = useState({ date: '', distance: 0})
    const [formsArr, setFormArr] = useState([])


    const handleSubmit = (event) => {
        event.preventDefault();
        let isOriginal = true;

        for (let i = 0; i < formsArr.length; i++) {
            if (formsArr[i].date === forms.date) {                
                isOriginal = false;
                formsArr[i].distance = Number(formsArr[i].distance) + Number(forms.distance);

                setFormArr(prev => ([...prev])); 
                setForm(prev => ({ ...prev,  distance: 0 }));      
            } 

        }

        if (isOriginal) {
            setFormArr(prev => ([ ...prev, forms ]));
            setForm(prev => ({ ...prev,  distance: 0 }));
        }
        
        

    }

    const handleChange = (event) => {
        const name = event.target.name;
        setForm(prev => ({ ...prev, [name]: event.target.value }));
    }

    function sorting(a, b) {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
        return 0;
   
    }

    function onDel (i) {
        const newArr = formsArr.filter(item => item.date !== i);
        setForm(prev => ({ ...prev,  distance: 0 }));

        setFormArr(newArr);
    }


    return (

        <div className="wrapper p-3">
            <h2 className='text-center col-8'>Учет тренировок</h2>
            <h4 className="mt-5">Добавление тренировки:</h4>
            <form onSubmit={handleSubmit}>
                <div className="conteiner col-8 border border-3 rounded-pill p-3">
                    <div className="row">
                        <div className="col-3 rounded-pill">Дата (ДД.ММ.ГГГ)</div>
                        <div className="col-3 rounded-pill">Пройдено КМ</div>
                        <div className="col-3 rounded-pill"><button className='btn btn-secondary'>OK</button></div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-3 rounded-pill">
                            <input type='date'
                                id='date'
                                name='date'
                                className="rounded-pill"
                                value={forms.date}
                                onChange={handleChange} />
                        </div>

                        <div className="col-3 rounded-pill">
                            <input id='distance'
                            type='number'
                                name='distance'
                                className="rounded-pill"
                                onChange={handleChange} 
                                value={forms.distance}/></div>
                                

                        <div className="col-3 rounded-pill"></div>
                    </div>
                </div>
            </form>


            <h4 className='mt-5'>Добавленные записи:</h4>

            <div className="conteiner col-8">
                <div className="row">
                    <div className="col-3 rounded-pill"><u>Дата (ДД.ММ.ГГГ)</u></div>
                    <div className="col-3 rounded-pill"><u>Пройдено КМ</u></div>
                    <div className="col-3 rounded-pill"><u>Действия</u></div>
                </div>
            </div>

            <div className='conteiner rounded-pill border border-3 col-8 mt-1 '>

                {formsArr.sort(sorting).map((item, i) => {
                    return (
                        <Note item={item} onDel={onDel} i={i} key={i}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Form;