import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { OperationInterface } from "../../store/reducers/OperationsListReducer"

import './styles.sass'


interface in1 {
    plus: string[],
    minus: string[],
}

interface in2 {
    plus: number[],
    minus: number[]
}

export const CountCircle = () => {

    const operationsList = useSelector( (state: any) => (state.operationsList))

    const [colorsArray, setColorsArray] = useState<in1>({
        plus: [],
        minus: []
    })
    const [categoriesArray, setCategoriesArray] = useState<in1>({
        plus: [],
        minus: []      
    })
    const [countsArray, setCountssArray] = useState<in2>({
        plus: [],
        minus: []
    })

    const [counter, setCounter] = useState<any>({plus: 0, minus: 0})

    const [showedOperand, setShowedOperand] = useState<string>('+')

    useEffect( () => {
        let plus: number = 0
        let minus: number = 0
        operationsList.filter( (elem: OperationInterface) => {
            if (elem.type === '+') {
                if (categoriesArray.plus.includes(elem.category)) {
                    let index = categoriesArray.plus.indexOf(elem.category)
                    countsArray.plus[index] += 1
                    
                } else {
                    colorsArray.plus.push(elem.color)
                    var ind = colorsArray.plus.indexOf(elem.color) 
                    countsArray.plus[ind] = 1
                    categoriesArray.plus[ind] = elem.category
                    
                }
                plus+=1
            } else {
                if (categoriesArray.plus.includes(elem.category)) {
                    let index = categoriesArray.plus.indexOf(elem.category)
                    countsArray.minus[index] += 1
                } else {
                    colorsArray.minus.push(elem.color)
                    var ind = colorsArray.minus.indexOf(elem.color) 
                    countsArray.minus[ind] = 1
                    categoriesArray.minus[ind] = elem.category
                }     
                minus+=1  
            }

        })
        setCounter({plus: plus, minus: minus})
    }, [operationsList])

    return (
        <div
            className="circle-wrapper"
        >
            
            <div
                onClick={() => setShowedOperand('-')}
                className='circle-wrapper_button'
            >
                {
                    showedOperand
                }
            </div>

            <div
                className="circle"
            >
                {
                    countsArray.plus.map( (elem: number, index: number) => {
                        return (
                            <div className="sector" key={index} style={{transform: (`rotate(${ 3.6 * elem / counter.plus + 15}deg) skew(${ 3.6 * elem / counter.plus  }deg)`)}} />
                        )
                    })
                }
            </div>

        </div>
    )
}